import { NAV_LINKS, SHOP } from "@/lib/data";

export function Footer() {
  return (
    <footer className="dark bg-espresso footer">
      <div className="wrap stack footer-stack">
        <div className="footer-grid">
          <div className="stack footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, keep exact proportions */}
            <img src="/images/logo-cream.svg" alt="Ground Up" width={143} height={30} />
            <p className="display footer-tagline">
              Good coffee.
              <br />
              No attitude.
            </p>
          </div>

          <div className="stack footer-col">
            <h2 className="label">Visit</h2>
            <p>
              {SHOP.street}
              <br />
              {SHOP.cityLine}
            </p>
            <p>{SHOP.hours}</p>
            <a className="footlink footlink-strong" href={SHOP.directionsUrl} target="_blank" rel="noopener noreferrer">
              Get directions<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <div className="stack footer-col" style={{ gap: 4 }}>
            <h2 className="label">Contact</h2>
            <a className="footlink" href={SHOP.phoneHref}>{SHOP.phoneDisplay}</a>
            <a className="footlink" href={`mailto:${SHOP.email}`}>{SHOP.email}</a>
          </div>

          <nav className="stack footer-col" style={{ gap: 0 }} aria-label="Footer">
            <h2 className="label">Explore</h2>
            {NAV_LINKS.map((l) => (
              <a key={l.href} className="footlink" style={{ minHeight: 40 }} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>

        <div className="footer-fine">
          <p>Ground Up is a fictional business. This site is a prototype made for a Product &amp; UX class project.</p>
          <p>Williamsburg, Brooklyn</p>
        </div>
      </div>
    </footer>
  );
}
