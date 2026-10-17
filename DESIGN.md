# Pelican Creek Realty design direction

## Brief

Pelican Creek Realty is a Harare property development and investment company. The site should help prospective buyers, investors and landowners understand the company, its current Nyeredzi Ridge home and the directors behind it.

## Concept choices

| Territory | Idea | Anchor | Scores: originality / fit / feasibility / portability |
| --- | --- | --- | --- |
| The work | A site survey moves from boundary to building to the people who make a place useful. Parcel lines, measured facts and clear stages hold the page together. | The company acquires and develops land and is currently building a home in Nyeredzi Ridge. | 4 / 5 / 5 / 2 |
| Place | A Harare field notebook records the practical choices behind a home, with local materials and climate setting the tone. | The company is Harare based and builds for Zimbabwean buyers. | 4 / 4 / 4 / 3 |
| Identity | The “Creek” in the name becomes a line that runs through the site, connecting land, partners and homes. | Pelican Creek Realty. | 3 / 3 / 4 / 4 |

The site survey is the lead concept because it is tied directly to the company’s work and can carry through the project, process, leadership and contact sections.

## Concept card

- **Idea:** A site survey moves from boundary to building to the people who make a place useful.
- **Metaphor:** Survey plan and field notes.
- **Signature:** A brass parcel line draws over the Nyeredzi artist’s impression, then leads into the project's measured facts.
- **Emotion:** Grounded, capable, forward looking.
- **Motion verb:** Draw and settle.
- **Screenshot:** A navy split hero, oversized home-focused typography, and the survey outline over the property image.

## System

- **Palette:** Warm ground `#EFEDE6`; paper `#F9F8F3`; ink `#17364A`; navy field `#102B3D`; muted blue-gray `#586A73`; line `#D7D2C7`; brass `#B89C65`; pale brass `#D9C596`.
- **Type:** Archivo carries display and body copy; IBM Plex Mono marks measurements, locations and small technical labels. Both are loaded from Google Fonts.
- **Grid:** A 1,500px page frame with a fluid 22–82px gutter. The hero splits text and image; the introduction pairs headline and copy; the development puts the rendering beside its facts; the approach uses three equal steps; the four directors sit in a two-by-two editorial grid; contact closes as a navy field. The 88px mobile masthead scrolls away with the page so it leaves section headings unobstructed.
- **Shape:** Square edges for content and image frames, with thin parcel lines and small survey-point circles as the graphic signature.
- **Motion:** The hero image reveals with a short clip and the parcel line draws in about 1.2 seconds. Buttons and image crops move gently on hover. Reduced-motion users see the completed frame without the reveal.

## Assumptions

- The portrait named `IMG 4995` is Onesimo Maguwu. The other portrait assignments follow the supplied attachment order and should be confirmed by the company.
- Regis Magawuzi’s source biography was marked `xxxxxx`; the site uses only a brief role description based on “Director Operations.” Confirm the portrait-to-name assignments before launch.
- The Nyeredzi visual is an AI-generated artist’s impression, not a photograph or an approved rendering of the property. The Harare and Bulawayo slider images are illustrative design concepts.
- No production URL or social profiles were supplied. Set `NEXT_PUBLIC_SITE_URL` to the verified origin before deployment so canonical URLs, the sitemap and social preview URLs are correct.

## Quality pass

Current production QA screenshots and reports are in `.shots/`. The latest full pass found no browser errors, failed asset requests, horizontal overflow, small tap targets, hidden reduced-motion text or serious axe violations. Mobile LCP was 1.25–1.60 seconds, CLS 0.001–0.01 and scroll performance 60 FPS across the three routes. The metadata audit has zero failures and four warnings: canonical links and social preview images need the verified production origin configured through `NEXT_PUBLIC_SITE_URL`.
