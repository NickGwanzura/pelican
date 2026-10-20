import Image from "next/image";
import Link from "next/link";
import { project } from "@/data/site";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = {
  title: "Nyeredzi Ridge House",
  description: "A four-bedroom home currently in development at Nyeredzi Ridge in Harare, Zimbabwe.",
};

export default function NyeredziRidgePage() {
  return (
    <>
      <SiteHeader projectPage />
      <main id="main">
        <section className="project-page-hero">
          <div className="project-breadcrumb"><Link href="/">HOME</Link><span>/</span><span>PROJECT 01</span></div>
          <div className="project-page-head">
            <div>
              <p className="project-place">{project.location.toUpperCase()} · {project.status.toUpperCase()}</p>
              <h1>Nyeredzi<br /><span>Ridge</span></h1>
            </div>
            <p>{project.summary} The development is aimed at buyers seeking a quality, move-in-ready home in a well-located Harare neighbourhood.</p>
          </div>
          <figure className="project-page-image">
            <Image src={project.image} alt={project.alt} fill priority quality={58} sizes="100vw" />
            <figcaption>ARTIST’S IMPRESSION · NOT A PHOTOGRAPH OF THE COMPLETED HOME</figcaption>
          </figure>
          <div className="project-page-facts">
            <div><span>INTERNAL AREA</span><strong>{project.area}</strong></div>
            <div><span>BEDROOMS</span><strong>{project.bedrooms}</strong></div>
            <div><span>BATHROOMS</span><strong>{project.bathrooms}</strong></div>
            <div><span>STAND SIZE</span><strong>{project.stand}</strong></div>
          </div>
        </section>
        <section className="area-comparison" aria-labelledby="area-comparison-title">
          <div className="area-comparison-copy">
            <p className="section-tag"><span>02</span><span>LAND & LIVING</span></p>
            <h2 id="area-comparison-title">The numbers,<br /><span>at ground level.</span></h2>
            <p>The stated 186 m² of planned living area sits on a 550 m² stand. The squares compare area only; they do not show the stand’s shape, orientation or final site layout.</p>
          </div>
          <figure className="area-diagram" aria-label="Proportional area comparison, not a site plan">
            <div className="area-diagram-head"><span>AREA COMPARISON</span><span>SCHEMATIC · NOT A SITE PLAN</span></div>
            <div className="area-plot" aria-hidden="true">
              <div className="area-home"><strong>186 m²</strong><span>PLANNED LIVING</span></div>
            </div>
            <figcaption><span><b>550 m²</b> STAND</span><span><b>186 m²</b> LIVING AREA</span></figcaption>
          </figure>
        </section>
        <section className="project-page-body">
          <div><p className="section-tag"><span>03</span><span>THE DEVELOPMENT</span></p><h2>A home shaped<br />around <span>daily life.</span></h2></div>
          <div>
            <p>The Nyeredzi Ridge House is planned as a four-bedroom, single-storey home with 186 square metres of internal area on a 550 square metre stand in Harare.</p>
            <p>The development is in progress. The image above is an artist’s impression; contact Pelican Creek Realty for current design and construction details.</p>
            <a href="mailto:hello@pelicancreekrealty.co.zw?subject=Nyeredzi%20Ridge%20House%20enquiry">Enquire about this home ↗</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
