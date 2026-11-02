"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import { cartLines, subtotal } from "@/lib/cart";
import { PRODUCTS } from "@/lib/data";
import { money } from "@/lib/format";
import { useCart } from "./CartProvider";
import { Bag, Close, Info, Minus, Plus, Trash } from "./Icons";

const FOCUSABLE = 'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

/** Demo cart: no payment is collected and no order is placed. */
export function CartDrawer() {
  const { cart, isOpen, close, setQty } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) closeBtnRef.current?.focus();
  }, [isOpen]);

  // Escape closes the drawer even if focus has wandered outside it.
  useEffect(() => {
    if (!isOpen) return;
    const onDocKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onDocKey);
    return () => document.removeEventListener("keydown", onDocKey);
  }, [isOpen, close]);

  // When a removed line takes the focused button with it, keep focus in the drawer.
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;
    if (!drawerRef.current.contains(document.activeElement)) closeBtnRef.current?.focus();
  }, [cart, isOpen]);

  if (!isOpen) return null;

  const lines = cartLines(cart, PRODUCTS);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "Tab" || !drawerRef.current) return;
    // Keep keyboard focus inside the open drawer.
    const items = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
      (el) => el.offsetParent !== null,
    );
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === drawerRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function browseBeans() {
    close({ restoreFocus: false });
    window.setTimeout(() => document.getElementById("shop-title")?.focus({ preventScroll: true }), 60);
  }

  return (
    <>
      <button type="button" className="scrim" tabIndex={-1} aria-hidden="true" onClick={() => close()} />
      <div
        ref={drawerRef}
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        tabIndex={-1}
        onKeyDown={onKeyDown}
      >
        <div className="drawer-head">
          <div>
            <h2 id="cart-title" className="display">Your cart</h2>
            <p className="label">Demo cart · not a real order</p>
          </div>
          <button ref={closeBtnRef} type="button" className="iconbtn" onClick={() => close()} aria-label="Close cart">
            <Close />
          </button>
        </div>

        <div className="drawer-body">
          {lines.length === 0 ? (
            <div className="drawer-empty">
              <Bag size={48} strokeWidth={1.6} style={{ color: "var(--ember)" }} />
              <p className="display">Your cart is empty.</p>
              <p>Add a demo bag of beans to try out the cart.</p>
              <a className="btn btn-primary btn-sm" href="#shop" onClick={browseBeans}>Browse beans</a>
            </div>
          ) : (
            <ul className="cart-lines">
              {lines.map(({ product, qty, line }) => (
                <li key={product.id} className="cart-line">
                  <div className="cart-line-top">
                    <h3 className="display">{product.name}</h3>
                    <span className="num">{money(line)}</span>
                  </div>
                  <p className="cart-line-each">{money(product.price)} each</p>
                  <div className="cart-line-controls">
                    <div className="qty-group" role="group" aria-label={`Quantity for ${product.name}`}>
                      <button
                        type="button"
                        className="qty"
                        onClick={() => setQty(product.id, qty - 1)}
                        aria-label={`Decrease quantity of ${product.name}`}
                      >
                        <Minus />
                      </button>
                      <span className="num qty-value" aria-live="polite">
                        <span className="sr-only">Quantity </span>
                        {qty}
                      </span>
                      <button
                        type="button"
                        className="qty"
                        onClick={() => setQty(product.id, qty + 1)}
                        aria-label={`Increase quantity of ${product.name}`}
                      >
                        <Plus strokeWidth={2.6} />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="textbtn"
                      onClick={() => setQty(product.id, 0)}
                      aria-label={`Remove ${product.name} from cart`}
                    >
                      <Trash />
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="drawer-foot">
          {lines.length > 0 && (
            <div className="drawer-total">
              <span>Subtotal</span>
              <span className="num">{money(subtotal(cart, PRODUCTS))}</span>
            </div>
          )}
          <p className="drawer-note">
            <Info />
            <span>This is a demo cart for a class prototype. No payment is collected and no order is placed.</span>
          </p>
          <button type="button" className="btn btn-secondary btn-block" onClick={() => close()}>Keep browsing</button>
        </div>
      </div>
    </>
  );
}
