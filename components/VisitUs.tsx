import Image from "next/image";
import { SHOP } from "@/lib/data";
import { Phone, Pin } from "./Icons";

export function VisitUs() {
  return (
    <section id="visit" className="section section-pad bg-paper" aria-labelledby="visit-title">
      <div className="wrap stack visit-stack">
        <h2 id="visit-title" className="display h2">One shop. In Williamsburg.</h2>

        <div className="photo-frame visit-photo">
          <Image
            src="/images/cafe-counter.jpg"
            alt="A warm coffee bar with a barista behind the counter, a hand-lettered chalkboard, wooden shelves and glowing pendant bulbs against white brick."
            fill
            sizes="(max-width: 1300px) 100vw, 1144px"
            style={{ objectFit: "cover", objectPosition: "30% 50%" }}
          />
        </div>

        <div className="visit-grid">
          <div className="stack visit-left">
            <address className="address">
              <span className="display">{SHOP.street}</span>
              <span className="display address-city">{SHOP.cityLine}</span>
            </address>
            <div className="btn-row">
              <a className="btn btn-primary" href={SHOP.directionsUrl} target="_blank" rel="noopener noreferrer">
                <Pin strokeWidth={2.2} />
                Get directions<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a className="btn btn-secondary" href={SHOP.phoneHref}>
                <Phone />
                Call the shop
              </a>
            </div>
          </div>

          <dl className="facts">
            <div className="fact">
              <dt className="label">Hours</dt>
              <dd>{SHOP.hours}</dd>
              <dd className="fact-note">{SHOP.hoursNote}</dd>
            </div>
            <div className="fact">
              <dt className="label">Phone</dt>
              <dd><a className="textlink" href={SHOP.phoneHref}>{SHOP.phoneDisplay}</a></dd>
            </div>
            <div className="fact fact-wide">
              <dt className="label">Email</dt>
              <dd><a className="textlink" href={`mailto:${SHOP.email}`}>{SHOP.email}</a></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
