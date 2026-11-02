"use client";

import { useState } from "react";
import { MENU } from "@/lib/data";
import { money } from "@/lib/format";
import { Check } from "./Icons";

export function MenuSection() {
  const [catId, setCatId] = useState(MENU[0].id);
  const cat = MENU.find((c) => c.id === catId) ?? MENU[0];

  return (
    <section id="menu" className="section grain section-pad" aria-labelledby="menu-title">
      <div className="wrap stack menu-stack">
        <h2 id="menu-title" className="display h2 menu-title">Find your usual. Or a new one.</h2>

        <div className="tabs" role="group" aria-label="Menu categories">
          {MENU.map((c) => {
            const active = c.id === cat.id;
            return (
              <button
                key={c.id}
                type="button"
                className="tab"
                aria-pressed={active}
                aria-controls="menu-panel"
                onClick={() => setCatId(c.id)}
              >
                {active && <Check />}
                {c.label}
              </button>
            );
          })}
        </div>

        <div id="menu-panel" className="dark menu-board">
          <h3 className="display">{cat.label}</h3>
          <ul className="menu-list">
            {cat.items.map((item) => (
              <li key={item.name} className="menu-item">
                <div className="menu-item-row">
                  <span className="display menu-item-name">{item.name}</span>
                  <span className="leader" aria-hidden="true" />
                  <span className="menu-price">{money(item.price)}</span>
                </div>
                <p className="menu-item-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
