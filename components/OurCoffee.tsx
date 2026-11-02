import Image from "next/image";
import { ArrowRight } from "./Icons";

const POINTS = [
  { label: "Roast", text: "We roast every bean we brew." },
  { label: "Brew", text: "Every cup made with care, whatever you order." },
  { label: "Relax", text: "No coffee lecture required." },
];

export function OurCoffee() {
  return (
    <section id="coffee" className="section section-pad bg-paper" aria-labelledby="coffee-title">
      <div className="wrap two-col">
        <div className="collage">
          <div className="photo-frame collage-main">
            <Image
              src="/images/pourover.jpg"
              alt="A barista pours hot water from a gooseneck kettle into a glass pour-over brewer with a paper filter, coffee dripping into the carafe below."
              fill
              sizes="(max-width: 1000px) 86vw, 480px"
              style={{ objectFit: "cover", objectPosition: "60% 50%" }}
            />
          </div>
          <div className="photo-frame collage-inset">
            <Image
              src="/images/beans-hands.jpg"
              alt="Cupped hands holding a pile of freshly roasted coffee beans over a wooden table."
              fill
              sizes="(max-width: 1000px) 50vw, 280px"
              style={{ objectFit: "cover", objectPosition: "55% 55%" }}
            />
          </div>
        </div>

        <div className="stack coffee-copy">
          <h2 id="coffee-title" className="display h2">Roasted by us. Made for you.</h2>
          <p className="lede">
            We roast all our own beans and put care into every cup. Great coffee doesn’t have to be complicated.
          </p>
          <ul className="points">
            {POINTS.map((p) => (
              <li key={p.label}>
                <span className="label">{p.label}</span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
          <div className="btn-row">
            <a className="btn btn-secondary" href="#shop">
              Take some beans home <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
