import { SHOP } from "@/lib/data";
import { ArrowRight, Clock, Phone, Pin } from "./Icons";

const accent = { color: "var(--ember-light)" };

export function InfoStrip() {
  return (
    <div className="dark bg-espresso">
      <div className="wrap info-strip-row">
        <p className="info-item">
          <Pin style={accent} />
          {SHOP.street}, {SHOP.cityLine}
        </p>
        <p className="info-item">
          <Clock style={accent} />
          Open {SHOP.hours}
        </p>
        <div className="info-links">
          <a className="textlink info-link" href={SHOP.phoneHref}>
            <Phone style={accent} />
            {SHOP.phoneDisplay}
          </a>
          <a className="textlink info-link" href={SHOP.directionsUrl} target="_blank" rel="noopener noreferrer">
            Get directions<span className="sr-only"> (opens in a new tab)</span>
            <ArrowRight style={accent} />
          </a>
        </div>
      </div>
    </div>
  );
}
