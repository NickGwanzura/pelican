import ComingSoonCountdown from "@/components/coming-soon-countdown";
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
              <a className="button-light" href={`mailto:${company.email}`}>Talk with our team <span aria-hidden="true">↗</span></a>
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

function ComingSoon() {
  return (
    <main className="coming-page">
      <div className="coming-grain" aria-hidden="true" />
      <header className="coming-header">
        <a className="coming-brand" href="/" aria-label="Pelican Creek Realty home">
          <span className="coming-mark" aria-hidden="true">P</span>
          <span><strong>PELICAN CREEK</strong><small>REALTY · HARARE, ZIMBABWE</small></span>
        </a>
        <span className="coming-status"><i /> WEBSITE REFRESH</span>
      </header>

      <section className="coming-content" aria-labelledby="coming-title">
        <p className="coming-eyebrow"><span /> A NEW CHAPTER IS TAKING SHAPE</p>
        <h1 id="coming-title">Good things<br /><em>are taking ground.</em></h1>
        <p className="coming-message">We’re preparing a considered new look for Pelican Creek Realty. Our website will be back shortly.</p>
        <div className="coming-rule" />
        <p className="coming-label">BACK ONLINE IN</p>
        <ComingSoonCountdown />
        <a className="coming-contact" href="mailto:hello@pelicancreekrealty.co.zw">
          For enquiries, speak with our team <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="coming-footer">
        <span>PELICAN CREEK REALTY PVT LTD</span>
        <span>HARARE · ZIMBABWE</span>
      </footer>

      <style>{`
        .coming-page{--cs-ink:#182a36;--cs-paper:#f6f5ef;--cs-gold:#d8b66e;min-height:100svh;position:relative;overflow:hidden;display:flex;flex-direction:column;padding:0 clamp(24px,7vw,104px);background:var(--cs-ink);color:var(--cs-paper);font-family:var(--body,Arial,sans-serif)}
        .coming-page:before{content:"";position:absolute;inset:0 0 0 48%;background:linear-gradient(145deg,transparent 12%,rgba(216,182,110,.1) 12.1%,transparent 12.3%),linear-gradient(35deg,transparent 46%,rgba(246,245,239,.08) 46.1%,transparent 46.25%);pointer-events:none}
        .coming-grain{position:absolute;inset:0;opacity:.1;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.86' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.24'/%3E%3C/svg%3E")}
        .coming-header,.coming-footer{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between}
        .coming-header{min-height:100px;border-bottom:1px solid rgba(246,245,239,.18)}
        .coming-brand{display:flex;align-items:center;gap:13px;color:inherit;text-decoration:none}
        .coming-mark{width:40px;height:40px;border:1px solid var(--cs-gold);display:grid;place-items:center;color:var(--cs-gold);font:500 24px Georgia,serif}
        .coming-brand strong,.coming-brand small{display:block}
        .coming-brand strong{font-size:12px;letter-spacing:.12em}
        .coming-brand small{margin-top:5px;color:#b6c0c2;font:9px var(--mono,monospace);letter-spacing:.1em}
        .coming-status,.coming-eyebrow,.coming-label,.coming-footer{font:9px var(--mono,monospace);letter-spacing:.12em}
        .coming-status{display:flex;align-items:center;gap:10px;color:#d5dcda}
        .coming-status i,.coming-eyebrow span{width:6px;height:6px;border-radius:50%;background:var(--cs-gold);display:inline-block}
        .coming-content{position:relative;z-index:1;flex:1;width:min(720px,100%);margin:auto 0;padding:clamp(82px,14vh,150px) 0 clamp(75px,12vh,120px)}
        .coming-eyebrow{display:flex;align-items:center;gap:12px;color:#d4d8d1;margin:0 0 30px}
        .coming-content h1{font-size:clamp(52px,8vw,100px);line-height:.91;letter-spacing:-.075em;font-weight:600;margin:0}
        .coming-content h1 em{font-style:normal;color:var(--cs-gold)}
        .coming-message{max-width:420px;margin:30px 0 0;color:#c4cdcc;font-size:15px;line-height:1.8}
        .coming-rule{height:1px;max-width:460px;background:rgba(246,245,239,.2);margin:42px 0 22px}
        .coming-label{color:#aeb9b8;margin:0 0 15px}
        .coming-countdown{display:flex;align-items:flex-start;gap:17px}
        .coming-countdown div{display:flex;flex-direction:column;gap:8px}
        .coming-countdown strong{font:400 clamp(34px,5vw,50px)/1 var(--mono,monospace);letter-spacing:-.06em;font-variant-numeric:tabular-nums}
        .coming-countdown span{font:8px var(--mono,monospace);letter-spacing:.12em;color:#aeb9b8}
        .coming-countdown i{color:var(--cs-gold);font:28px var(--mono,monospace);font-style:normal}
        .coming-contact{display:inline-flex;gap:24px;align-items:center;margin-top:35px;padding-bottom:8px;border-bottom:1px solid rgba(216,182,110,.65);color:var(--cs-paper);font-size:11px;font-weight:600;text-decoration:none}
        .coming-contact span{color:var(--cs-gold);font-size:16px}
        .coming-footer{min-height:64px;border-top:1px solid rgba(246,245,239,.18);color:#aeb9b8;font-size:8px}
        @media(max-width:560px){.coming-header{min-height:83px}.coming-brand strong{font-size:10px}.coming-brand small{font-size:8px}.coming-status{font-size:8px}.coming-content{padding-top:96px;padding-bottom:90px}.coming-content h1{font-size:clamp(47px,12vw,66px)}.coming-message{font-size:14px}.coming-countdown{gap:11px}.coming-countdown strong{font-size:33px}.coming-footer{gap:12px;font-size:7px}.coming-page{padding-inline:22px}}
        @media(prefers-reduced-motion:reduce){.coming-page *{scroll-behavior:auto}}
      `}</style>
    </main>
  );
}

export default function Home() {
  if (Date.now() < COMING_SOON_UNTIL) return <ComingSoon />;
  return <LiveHome />;
}
