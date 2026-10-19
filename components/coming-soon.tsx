import Image from "next/image";
import { company } from "@/data/site";
import ComingSoonCountdown from "./coming-soon-countdown";
import styles from "./coming-soon.module.css";

export default function ComingSoon() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <span className={styles.headerName}>PELICAN CREEK <span>REALTY</span></span>
        <a className={styles.headerLink} href={`mailto:${company.email}`}>
          GET IN TOUCH <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className={styles.hero} aria-labelledby="coming-soon-title">
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> HARARE · ZIMBABWE</p>
          <h1 id="coming-soon-title">A new chapter<br />is <em>taking shape.</em></h1>
          <p className={styles.intro}>
            We are preparing a new online home for Pelican Creek Realty.
            Our work in thoughtful property development continues, and we look
            forward to sharing more with you soon.
          </p>

          <div className={styles.launch}>
            <div className={styles.launchHeading}>
              <span>OUR WEBSITE OPENS IN</span>
              <span>21 OCTOBER 2026 · 08:44 CAT</span>
            </div>
            <ComingSoonCountdown />
          </div>

          <a className={styles.contact} href={`mailto:${company.email}`}>
            <span>Have an enquiry? Talk to our team</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.brandPanel} aria-label="Pelican Creek Realty logo">
          <div className={styles.brandTopline}><span>01 / 01</span><span>THOUGHTFUL BY DESIGN</span></div>
          <div className={styles.brandImage}>
            <Image
              src="/images/brand/pelican-creek-logo-transparent.png"
              alt="Pelican Creek Realty"
              width={1536}
              height={1024}
              sizes="(max-width: 820px) 90vw, 45vw"
              className={styles.logo}
              loading="eager"
            />
          </div>
          <p className={styles.brandCaption}>Considered homes. Lasting value.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>PELICAN CREEK REALTY PVT LTD</span>
        <span>HARARE, ZIMBABWE</span>
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </footer>
    </main>
  );
}
