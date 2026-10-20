import ComingSoon from "@/components/coming-soon";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/hero-slider";
import { approach, company, directors, heroSlides, project } from "@/data/site";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

function LiveHome() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSlider slides={heroSlides} />

        <section className="intro-section page-wrap" id="about" aria-labelledby="about-title">
          <div className="intro-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> ABOUT PELICAN CREEK</p>
            <h2 id="about-title">Grounded in Zimbabwe.<br /><em>Thoughtful by design.</em></h2>
          </div>
          <div className="intro-copy">
            <p>Founded by Zimbabweans, Pelican Creek Realty is a Harare-based property development and investment company. We bring landowners, investors and trusted professionals together to develop projects across Zimbabwe.</p>
            <p>We are at the start of our journey, building project by project. We work with care and transparency, keeping the end buyer and long-term value in view.</p>
            <Link className="text-link" href="#approach">Get to know our approach <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="principles" aria-label="Our principles">
            <div><span>01</span><p>Local understanding</p></div>
            <div><span>02</span><p>Transparent partnerships</p></div>
            <div><span>03</span><p>Long-term value</p></div>
          </div>
        </section>

        <section className="development-section" id="development" aria-labelledby="development-title">
          <div className="development-heading page-wrap">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> CURRENT DEVELOPMENT · HARARE</p>
              <h2 id="development-title">A considered home<br /><em>at Nyeredzi Ridge.</em></h2>
            </div>
            <p className="development-intro">One home, carefully planned for comfortable everyday living in Harare.</p>
          </div>
          <div className="development-card page-wrap">
            <figure className="development-image">
              <Image src={project.image} alt={project.alt} fill quality={70} sizes="(max-width: 760px) 100vw, 58vw" />
              <figcaption>ARTIST’S IMPRESSION · NOT A PHOTOGRAPH OF THE COMPLETED HOME</figcaption>
            </figure>
            <div className="development-details">
              <div className="development-status"><span /> {project.status}</div>
              <p className="project-place">{project.location}</p>
              <h3>{project.name}</h3>
              <p className="project-summary">A four-bedroom, single-storey home with thoughtfully planned living space on a generous Harare stand.</p>
              <dl className="project-facts">
                <div><dt>Internal area</dt><dd>{project.area}</dd></div>
                <div><dt>Bedrooms</dt><dd>{project.bedrooms}</dd></div>
                <div><dt>Bathrooms</dt><dd>{project.bathrooms}</dd></div>
                <div><dt>Stand size</dt><dd>{project.stand}</dd></div>
              </dl>
              <Link className="button-dark" href="/projects/nyeredzi-ridge">Explore the development <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="approach-intro page-wrap">
            <div>
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> OUR APPROACH</p>
              <h2 id="approach-title">Good places<br />take <em>good work.</em></h2>
            </div>
            <p>From the first conversation to handover, we build with care, clear decisions and the long view in mind.</p>
          </div>
          <div className="approach-grid page-wrap">
            {approach.map((step) => (
              <article className="approach-card" key={step.number}>
                <span className="approach-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <span className="approach-rule" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="team-section page-wrap" id="team" aria-labelledby="team-title">
          <div className="team-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> THE PEOPLE</p>
              <h2 id="team-title">Experience that<br /><em>moves us forward.</em></h2>
            </div>
            <p>Our directors combine experience in development, investment, operations and communications.</p>
          </div>
          <div className="team-grid">
            {directors.map((director, index) => (
              <article className="director-card" key={director.name}>
                <div className="director-photo">
                  <Image src={director.image} alt={director.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 25vw" />
                  <span className="director-index">0{index + 1}</span>
                </div>
                <div className="director-copy">
                  <p className="director-role">{director.role}</p>
                  <h3>{director.name}</h3>
                  <p className="director-bio">{director.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner page-wrap">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> START A CONVERSATION</p>
              <h2 id="contact-title">Let’s make<br /><em>good ground.</em></h2>
            </div>
            <div className="contact-side">
              <p>Have land, a project idea or an interest in the Nyeredzi Ridge home? We’d be glad to hear from you.</p>
              <a className="button-dark" href={`mailto:${company.email}`}>Talk with our team <span aria-hidden="true">↗</span></a>
              <a className="contact-email" href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}


export const dynamic = "force-dynamic";

const COMING_SOON_UNTIL = Date.parse("2026-10-21T06:44:42Z");

export default function Home() {
  if (Date.now() < COMING_SOON_UNTIL) return <ComingSoon />;
  return <LiveHome />;
}
