import { describe, expect, it } from "vitest";
import { addItem, cartLines, setQty, subtotal, totalCount } from "./cart";
import { PRODUCTS } from "./data";

describe("cart", () => {
  it("adds items and counts them", () => {
    let cart = addItem({}, "house");
    cart = addItem(cart, "house");
    cart = addItem(cart, "pick");
    expect(cart).toEqual({ house: 2, pick: 1 });
    expect(totalCount(cart)).toBe(3);
  });

  it("removes an item when quantity drops to zero", () => {
    const cart = setQty({ house: 1, pick: 2 }, "house", 0);
    expect(cart).toEqual({ pick: 2 });
  });

  it("does not mutate the original cart", () => {
    const original = { house: 1 };
    addItem(original, "house");
    setQty(original, "house", 5);
    expect(original).toEqual({ house: 1 });
  });

  it("computes subtotal and lines in product order", () => {
    const cart = { pick: 1, house: 2 };
    expect(subtotal(cart, PRODUCTS)).toBe(18 * 2 + 21);
    expect(cartLines(cart, PRODUCTS).map((l) => l.product.id)).toEqual(["house", "pick"]);
  });

  it("an empty cart has no lines and zero subtotal", () => {
    expect(cartLines({}, PRODUCTS)).toEqual([]);
    expect(subtotal({}, PRODUCTS)).toBe(0);
  });
});
