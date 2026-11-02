import type { Product } from "./data";

/** Quantities keyed by product id. Demo only: no payment, no orders. */
export type Cart = Record<string, number>;

export function addItem(cart: Cart, id: string): Cart {
  return { ...cart, [id]: (cart[id] ?? 0) + 1 };
}

export function setQty(cart: Cart, id: string, qty: number): Cart {
  const next = { ...cart };
  if (qty <= 0) delete next[id];
  else next[id] = qty;
  return next;
}

export function totalCount(cart: Cart): number {
  return Object.values(cart).reduce((sum, q) => sum + q, 0);
}

export function subtotal(cart: Cart, products: Product[]): number {
  return products.reduce((sum, p) => sum + (cart[p.id] ?? 0) * p.price, 0);
}

export function cartLines(cart: Cart, products: Product[]) {
  return products
    .filter((p) => (cart[p.id] ?? 0) > 0)
    .map((p) => ({ product: p, qty: cart[p.id], line: cart[p.id] * p.price }));
}
