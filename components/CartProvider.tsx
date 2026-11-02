"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { addItem as add, setQty as set, totalCount, type Cart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/data";
import { itemCount } from "@/lib/format";

type CartContextValue = {
  cart: Cart;
  count: number;
  isOpen: boolean;
  announcement: string;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  open: () => void;
  close: (opts?: { restoreFocus?: boolean }) => void;
  /** Element that opened the drawer, so focus can return to it. */
  triggerRef: React.MutableRefObject<HTMLElement | null>;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({});
  const [isOpen, setOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const triggerRef = useRef<HTMLElement | null>(null);

  const nameOf = (id: string) => PRODUCTS.find((p) => p.id === id)?.name ?? "Item";

  const addFn = useCallback((id: string) => {
    setCart((prev) => {
      const next = add(prev, id);
      setAnnouncement(`${nameOf(id)} added to cart. Cart has ${itemCount(totalCount(next))}.`);
      return next;
    });
  }, []);

  const setQtyFn = useCallback((id: string, qty: number) => {
    setCart((prev) => {
      const next = set(prev, id, qty);
      const msg = qty <= 0 ? `${nameOf(id)} removed from cart.` : `${nameOf(id)} quantity ${qty}.`;
      setAnnouncement(`${msg} Cart has ${itemCount(totalCount(next))}.`);
      return next;
    });
  }, []);

  const open = useCallback(() => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  }, []);

  const close = useCallback((opts?: { restoreFocus?: boolean }) => {
    setOpen(false);
    if (opts?.restoreFocus === false) return;
    const t = triggerRef.current;
    // Wait a tick so the drawer has unmounted before moving focus back.
    window.setTimeout(() => {
      if (t && document.body.contains(t)) t.focus();
    }, 0);
  }, []);

  const value = useMemo(
    () => ({ cart, count: totalCount(cart), isOpen, announcement, add: addFn, setQty: setQtyFn, open, close, triggerRef }),
    [cart, isOpen, announcement, addFn, setQtyFn, open, close],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
