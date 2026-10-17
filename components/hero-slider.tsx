"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Slide = {
  src: string;
  alt: string;
  location: string;
  note: string;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];
  const showSlide = (index: number) => setActiveIndex((index + slides.length) % slides.length);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image
          key={slide.src}
          className="hero-image"
          src={slide.src}
          alt=""
          fill
          priority={activeIndex === 0}
          quality={70}
          sizes="100vw"
        />
        <svg className="parcel-mark" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path pathLength="1" d="M19 18 L77 12 L89 37 L83 81 L28 88 L13 52 Z" />
          <circle cx="19" cy="18" r="1.2" />
          <circle cx="77" cy="12" r="1.2" />
          <circle cx="89" cy="37" r="1.2" />
          <circle cx="83" cy="81" r="1.2" />
          <circle cx="28" cy="88" r="1.2" />
          <circle cx="13" cy="52" r="1.2" />
        </svg>
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content page-wrap">
        <p className="hero-eyebrow"><span /> PROPERTY DEVELOPMENT & INVESTMENT <i /> HARARE, ZIMBABWE</p>
        <h1 id="hero-title"><span>A stronger sense</span><span>of <em>home.</em></span></h1>
        <p className="hero-summary">Thoughtful homes and investment property, shaped around the land and the people who call Zimbabwe home.</p>
        <div className="hero-actions">
          <Link className="button-light" href="#development">Explore our development <span aria-hidden="true">↗</span></Link>
          <Link className="hero-text-link" href="#about">Discover Pelican Creek <span aria-hidden="true">↓</span></Link>
        </div>
      </div>
      <div className="hero-bottom page-wrap">
        <div className="slide-caption" aria-live="polite">
          <span className="slide-location">{slide.location}</span>
          <span className="slide-note">{slide.note}</span>
        </div>
        <div className="slider-controls" aria-label="Hero image slideshow controls">
          <span className="slider-count"><b>0{activeIndex + 1}</b> <i /> 0{slides.length}</span>
          <div className="slider-dots" aria-label="Choose an image">
            {slides.map((item, index) => (
              <button
                className={`slider-dot${index === activeIndex ? " is-active" : ""}`}
                key={item.src}
                type="button"
                aria-label={`Show slide ${index + 1}: ${item.location}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
          <button className="slider-arrow" type="button" aria-label="Previous image" onClick={() => showSlide(activeIndex - 1)}>←</button>
          <button className="slider-arrow" type="button" aria-label="Next image" onClick={() => showSlide(activeIndex + 1)}>→</button>
        </div>
      </div>
      <p className="hero-screen-reader" aria-live="polite">Slide {activeIndex + 1} of {slides.length}: {slide.location}. {slide.note}</p>
    </section>
  );
}
