"use client";

import Image from "next/image";
import { PRODUCTS } from "@/lib/data";
import { money } from "@/lib/format";
import { useCart } from "./CartProvider";
import { Bag, Check, Plus } from "./Icons";

export function ShopBeans() {
  const { cart, count, add, open, announcement } = useCart();

  return (
    <section id="shop" className="section grain section-pad" aria-labelledby="shop-title">
      <div className="wrap two-col two-col-440">
        <div className="stack shop-copy">
          <h2 id="shop-title" className="display h2" tabIndex={-1}>Take Ground Up home.</h2>
          <p className="lede">Pick up our freshly roasted beans and make your morning a little more yours.</p>

          <ul className="product-list">
            {PRODUCTS.map((p) => {
              const qty = cart[p.id] ?? 0;
              return (
                <li key={p.id} className="product">
                  <div className="product-info">
                    <h3 className="display product-name">{p.name}</h3>
                    {qty > 0 && (
                      <p className="in-cart">
                        <Check style={{ color: "var(--ember)" }} />
                        {qty} in your cart
                      </p>
                    )}
                  </div>
                  <div className="product-buy">
                    <span className="product-price">{money(p.price)}</span>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => add(p.id)}
                      aria-label={`Add ${p.name} to cart`}
                    >
                      <Plus />
                      Add to cart
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="btn-row">
            <button type="button" className="btn btn-secondary" onClick={open} aria-haspopup="dialog">
              <Bag />
              View cart ({count})
            </button>
          </div>
          <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
        </div>

        <div className="shop-photo-wrap">
          <div className="photo-frame shop-photo">
            <Image
              src="/images/beans-cup.jpg"
              alt="Top-down view of a white cup on a saucer, filled to the brim with dark roasted coffee beans."
              fill
              sizes="(max-width: 1000px) 90vw, 520px"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
