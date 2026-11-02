import Image from "next/image";
import { ArrowRight } from "./Icons";
import { Stamp } from "./Stamp";

export function Hero() {
  return (
    <section id="top" className="section grain hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <h1 id="hero-title" className="display hero-title">
          <span>Good coffee.</span>
          <span>No attitude.</span>
        </h1>

        <div className="stack hero-copy">
          <p className="lede">
            Freshly roasted beans. Carefully made cups. No coffee lecture required. Find your everyday favorite at
            our one and only shop in Williamsburg, Brooklyn.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#menu">
              Explore the Menu <ArrowRight />
            </a>
            <a className="btn btn-secondary" href="#visit">Visit Us</a>
          </div>
        </div>

        <div className="hero-media">
          <div className="photo-frame hero-photo">
            <Image
              src="/images/bar-industrial.jpg"
              alt="Silhouetted customers and baristas around a long coffee bar in an industrial space with brick walls, pendant lamps and open garage doors."
              fill
              priority
              sizes="(max-width: 1000px) 100vw, 560px"
              style={{ objectFit: "cover", objectPosition: "50% 55%" }}
            />
          </div>
          <Stamp />
        </div>
      </div>
    </section>
  );
}
