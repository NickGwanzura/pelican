import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/site";

function CompanyLogo() {
  return (
    <span className="brand-logo-frame">
      <Image className="brand-logo-image" src="/images/brand/pelican-creek-logo-transparent.png" alt="" width={1536} height={1024} />
    </span>
  );
}

export function SiteHeader({ projectPage = false }: { projectPage?: boolean }) {
  const home = projectPage ? "/" : "";

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner page-wrap">
          <Link className="brand" href="/" aria-label="Pelican Creek Realty home">
            <CompanyLogo />
          </Link>
          <nav aria-label="Main navigation">
            <Link href={`${home}#about`}>Our story</Link>
            <Link href={`${home}#development`}>Development</Link>
            <Link href={`${home}#team`}>Our people</Link>
          </nav>
          <a className="nav-contact" href={`mailto:${company.email}`}>LET’S TALK <span aria-hidden="true">↗</span></a>
        </div>
      </header>
    </>
  );
}

export function DeveloperTag() {
  return (
    <a className="developer-tag" href="https://spiritusglobal.tech/" target="_blank" rel="noopener">
      <span>Developed by</span> <b>SPIRITUS</b> <i aria-hidden="true">↗</i>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-wrap">
        <Link className="footer-brand" href="/" aria-label="Pelican Creek Realty home"><CompanyLogo /></Link>
        <p className="footer-summary">Thoughtful property development<br />and investment in Zimbabwe.</p>
        <div className="footer-contact">
          <span>GENERAL ENQUIRIES</span>
          <a href={`mailto:${company.email}`}>{company.email} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-endline"><span>{company.location}</span><DeveloperTag /><span>© {new Date().getFullYear()} Pelican Creek Realty Pvt Ltd</span></div>
      </div>
    </footer>
  );
}
