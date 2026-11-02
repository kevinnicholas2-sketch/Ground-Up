"use client";

import { useRef, useState } from "react";
import { NAV_LINKS, SHOP } from "@/lib/data";
import { itemCount } from "@/lib/format";
import { useCart } from "./CartProvider";
import { Bag, Close, MenuLines } from "./Icons";

export function Header() {
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="logo-link" aria-label="Ground Up, back to top">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, keep exact proportions */}
          <img src="/images/logo-espresso.svg" alt="Ground Up" width={152} height={32} />
        </a>

        <nav className="nav-desktop" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a key={l.href} className="navlink" href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="cartbtn"
            onClick={open}
            aria-haspopup="dialog"
            aria-label={`Open cart, ${itemCount(count)}`}
          >
            <Bag />
            <span className="cart-label">Cart</span>
            <span className="count">{count}</span>
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="iconbtn menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <Close /> : <MenuLines />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Main"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              closeMenu();
              toggleRef.current?.focus();
            }
          }}
        >
          <div className="wrap mobile-nav-inner">
            {NAV_LINKS.map((l) => (
              <a key={l.href} className="navlink" href={l.href} onClick={closeMenu}>{l.label}</a>
            ))}
            <p className="label mobile-nav-note">
              {SHOP.street} · Williamsburg · {SHOP.hours}
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
