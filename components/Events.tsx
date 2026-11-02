import { EVENTS } from "@/lib/data";
import { ArrowRight } from "./Icons";

export function Events() {
  return (
    <section id="events" className="section dark bg-espresso section-pad" aria-labelledby="events-title">
      <div className="wrap stack events-stack">
        <div className="events-head">
          <h2 id="events-title" className="display h2">See what’s brewing.</h2>
          <div className="stack events-intro">
            <p>Keep an eye out for upcoming events at our Williamsburg shop. Dates go to the mailing list first.</p>
            <a className="btn btn-light" href="#signup">
              Get event updates <ArrowRight />
            </a>
          </div>
        </div>

        <ul className="event-list">
          {EVENTS.map((e) => (
            <li key={e.title} className="event-row">
              <p className="label event-tag">{e.tag}</p>
              <h3 className="display event-title">{e.title}</h3>
              <p className="event-desc">{e.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
