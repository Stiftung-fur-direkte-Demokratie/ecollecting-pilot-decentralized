# Swiss Confederation Design System

A design-agent-ready recreation of the **Design System for the Swiss Confederation** (Bundeskanzlei / Federal Chancellery), the official system used to build front-ends for Swiss federal administration websites.

Upstream it ships as CSS + HTML structures (PostCSS/Tailwind) with a Vue/Nuxt reference app and a Storybook. This project re-expresses the same foundations and components as CSS custom properties plus framework-free React primitives, so an agent can produce on-brand federal interfaces without the Nuxt toolchain.

## Sources

Everything here was read from the sources below. Nothing was designed from imagination; where a value could not be read it is flagged in *Known gaps*.

| Source | What was taken |
| --- | --- |
| https://github.com/swiss/designsystem (branch `main`) | All tokens, component CSS, component APIs, page compositions, 218 icons, the federal lockup, the four Noto Sans binaries |
| `css/skins/default.postcss`, `intranet.postcss`, `freebrand.postcss` | The three colour skins |
| `css/foundations/*`, `css/layouts/*`, `css/components/*`, `css/navigations/*`, `css/sections/*` | Every value in `tokens/` and `css/` |
| `app/tailwind.config.js` | Type scale, radii, shadows, breakpoints, semantic palettes |
| `app/components/ch/**` (60 components, 22 sections, 7 navigations) | Component inventory and prop contracts |
| `app/pages/**` (25 page templates) | UI-kit screen compositions |
| https://www.figma.com/design/3UYgqxmcJbG0hpWuti3y8U/🇨🇭Design-System-Core-Library?node-id=1-2 | **Not accessible from this environment** — the Figma library was not read. All design context comes from the repository, which the upstream README states the Figma library mirrors. |

The repository is public and MIT-licensed. **Read it directly** (`swiss/designsystem`) whenever you need a value this project abbreviates — especially `css/components/` for the full class inventory and `app/pages/` for complete page templates. Doing so will always produce a more faithful design than working from this summary alone.

## Product context

One organisation, one system, three visual skins:

- **Bundeswebsite (default skin)** — public federal websites: departments, offices, `admin.ch` sites, campaign and topic portals. Swiss red primary, slate-blue chrome. Page types: homepage, hub page, index page, detail page (simple / complex / anchor-nav), news list, events list, press release, publication catalogue and shop, shopping cart, search results, glossary, forms, easy-language and sign-language variants.
- **Intranet skin** (`data-skin="intranet"`) — the internal workplace: primary turns blue, the lockup carries an "Intranet" badge, everything else is identical.
- **Freebrand skin** (`data-skin="freebrand"`) — a muted green identity for sites that must sit outside the federal red, while keeping federal structure and accessibility.

Two audiences run through all of it: the **public** (finding a service, a document or a deadline) and **employees** (doing a task). The design system exists so a citizen recognises a federal site instantly, regardless of which office built it.

---

## CONTENT FUNDAMENTALS

**Language.** German first, then French, Italian and Romansh — the lockup itself carries all four. Copy in the reference implementation is German (`Unsere Dienstleistungen`, `Meist gesehen`, `Bleiben sie informiert`). Never mix languages inside one page.

**Register: formal, third-person, institutional.** The administration is the actor: "Der Bundesrat hat die Botschaft verabschiedet." When the reader is addressed it is with the formal **Sie**, never *du*: "Bleiben Sie informiert", "Was suchen Sie?". Never write in the first person; there is no "we" voice and no personality.

**Casing: sentence case everywhere.** Headings, buttons, nav items, labels — `Alle Dienstleistungen ansehen`, not `Alle Dienstleistungen Ansehen`. The single exception is table column headers, which CSS uppercases (`text-transform: uppercase`). No title case, ever.

**Nouns over verbs in navigation, verbs in actions.** Nav items are nouns: `News`, `Themen`, `Dienstleistungen`, `Publikationen`. Buttons are imperatives: `Gesuch einreichen`, `News abonnieren`, `Weiterlesen`, `Mehr lesen über Datenmodellablage`. Notice that upstream button labels are often long and fully explicit — accessibility beats brevity, and icon-only buttons keep the whole sentence as their accessible name.

**Precision is the tone.** Dates are `12.03.2025`. Numbers use a non-breaking thin space as the thousands separator (`1 043`). File metadata is always stated: `PDF, 1,2 MB`. Legal basis is cited by article. Nothing is rounded to sound better.

**No marketing voice.** No exclamation marks, no rhetorical questions, no superlatives, no "discover", no "amazing", no urgency. The nearest thing to a promise in the whole system is a section title: `Unsere top Dienstleistungen`.

**Required fields say nothing.** A narrow-space asterisk is appended by CSS (`content: '\202F*'`); the word "required" appears only for screen readers. Error messages are plain and instructive: "Bitte vierstellig eingeben." — a request, never a rebuke, never "Oops".

**Emoji: never.** Not in copy, not in labels, not as icons. The 218-glyph icon set covers every need. Unicode characters are used only where they are typography, not decoration: guillemets `« »` on quotes (drawn in CSS), `↕ ▲ ▼` as table sort indicators, `·` as a meta separator.

**Vibe.** Quiet, exact, unhurried, and above all *legible*. The design does not try to be liked; it tries to be understood by everyone, including someone using a screen reader on a slow connection. Easy Language (Leichte Sprache) and Sign Language are first-class page variants with their own header treatments — an unusually strong signal about who this system is for.

---

## VISUAL FOUNDATIONS

**Colour.** Two families do all the work. **Primary** is Swiss red (`#d8232a` at 600) and is used sparingly: links, outline buttons, active-state bars, the download glyph, hover titles. **Secondary** is a desaturated slate blue (`#2f4356` at 600) and carries all chrome: top bar, footer, filled buttons, dark sections. A ten-step neutral ramp handles text (`#1f2937` body, `#6b7280` muted) and hairlines (`#acb4bd`). Status palettes (red / green / blue / orange) appear only inside notifications and badges, always as a 50-level fill with an 800-level foreground. There is **no third brand colour** and no gradient anywhere in the system. Focus rings are purple (`#8655f6`) — deliberately outside the brand so they can never be confused with content.

**Backgrounds.** Exactly three page fills are sanctioned: white, `--color-secondary-50` (`#f0f4f7`, for tinted bands and table headers) and `--color-secondary-100` (`#dfe4e9`, for card sections). Dark bands use `--color-secondary-500…900` and switch all text to white. No background images, no patterns, no textures, no noise, no full-bleed hero photography behind text. Imagery sits *beside* copy, never *under* it.

**Type.** Noto Sans only, in four files aliased as `Font-Regular`, `Font-Bold`, `Font-Italic`, `Font-Bold-Italic`. There is no numeric weight axis — Tailwind maps both `normal` and `bold` to 400 and swaps the family instead, so "bold" always means the bold binary. The scale is unusually fine at the small end (0.75 / 0.875 / 1 / 1.125 / 1.25 / 1.375 / 1.625 rem) and every step grows again at `lg`, `xl` and `3xl`; the `--step-*` tokens here reproduce that as clamps. Body copy carries `word-spacing: 0.0625em` and `line-height: 1.5` — a legibility decision, not an accident. Headings are bold, sentence case, `line-height: 1.25`, `margin-bottom: 1rem`. Captions and legends are `--step-xs` in `--text-light`.

**Layout.** A 12-column grid inside a centred container that maxes at 1544px (1676px at 3xl). Side padding steps 16 → 28 → 36 → 40 → 48 → 64px; the grid gap steps 20 → 64px. Content columns are named, not ad-hoc: `container__center--xs` (6 of 12 at xl) for reading text, `--sm` (8), `--md` (10), plus `container__main` + `container__aside` for the 7/5 → 6/4 article layout. Sections are separated by one rhythm step of 56 → 128px, and consecutive sections with the same background collapse their shared padding. Breakpoints: 480 / 640 / 768 / 1024 / 1280 / 1544 / 1920px.

**Corner radii.** Almost square, and this is the system's strongest visual signature. Inputs 1px, buttons 2px, notifications 3px. Cards, tables, images and modals are **0px** — perfectly square. Only badges, tags and avatars are `9999px`. Never round a card; never soften an image corner.

**Cards.** White fill, square corners, no border, `--shadow-lg` at rest. On hover the shadow deepens to `--shadow-2xl`, a 2px `--color-text-50` ring fades in at 90% opacity, and the title turns `--color-primary-700` — the card itself does **not** move. The image frame is 16:9 with a 2px white inset border and a 70%-opacity slate wash beneath. Variants: `flat` (no shadow, hairline bottom divider — result lists), `highlight` (an offset `--color-secondary-300` block behind the content that scales to 1.02 on hover), `universal` (letterboxed cover images).

**Shadows.** Six neutral, two-layer, very soft steps (max 13% black). No inner shadows, no coloured shadows, no glows. Inputs get `--shadow-default`, tables `--shadow-md`, cards `--shadow-lg`, toasts `--shadow-xl`, card-hover and modals `--shadow-2xl`.

**Borders.** 1px is the only rule weight — `--color-secondary-200` on light, `--color-secondary-400` on dark, `--color-text-200` for tables. The federal lockup separator is a 1px `#D1D5DB` line. The one thick element in the system is the **3px accent bar** (`--accent-bar-height`) under active nav items and tabs.

**Hover.** Colour-only, 200ms. Red elements darken (600 → 700 → 800); white-on-dark elements *lighten* toward `--color-secondary-100`. Cards deepen their shadow. Footer links take a `--color-secondary-700` background. Nothing scales, lifts, tilts or brightens except the highlight card's 1.02.

**Press / active.** No dedicated press state — no shrink, no darkening beyond hover. Active *selection* is expressed structurally: the 3px red bar under a nav item or tab, a red 2px left bar on the current language, a dark fill on the selected tag.

**Focus.** A 2px purple ring with no offset, plus `z-index: 10` so it never gets clipped. On dark sections it lightens to purple-300. Every page opens with a `.skip-to-content` link that translates in from above on focus.

**Transparency and blur.** Almost none. Two uses only: the card image wash at 70% opacity, and the modal scrim at `rgba(19,27,34,0.6)`. There is **no** backdrop blur, no frosted glass, no translucent chrome anywhere. The only gradient in the entire system is a 40–80px white-to-transparent fade at the right edge of a scrollable tab strip — a protection gradient, purely functional.

**Motion.** 200ms for colour, 300ms for shadow and accordion max-height, 700ms for the body transform when the mobile menu opens, `cubic-bezier(0.4,0,0.2,1)` throughout. Loading is a 0.5s linear spinner. There are no entrance animations, no scroll reveals, no parallax, no springs, no bounce.

**Imagery.** Documentary photography, natural colour, no filters, duotones or grain. Always rectangular, always 16:9 (2:1 in two-column grids; 80% padding-bottom in list cards to tame vertical images). Missing pictures use the `ImageNotAvailable` placeholder — a tinted 16:9 box with a centred icon — never an empty grey rectangle.

**Fixed elements.** Sticky top bar and sticky search container use `z-index: 1000`; the modal scrim sits at 100, the fixed cookie banner at 50. The header stack is `#main-header` z-30 / `#main-content` z-10 / `#main-footer` z-0.

---

## ICONOGRAPHY

**One set, 218 glyphs, copied in full** to `assets/icons/`. They are single-weight outline SVGs with no built-in padding, drawn on a 24×24 grid, and named in PascalCase without an extension in code (`ArrowRight`, `FilePDF`, `SignLanguage`).

Upstream, `SvgIcon.vue` inlines the SVG and CSS sets `fill: currentColor` on every `path` and `circle`, so an icon always takes its parent's text colour. This project reproduces that with a CSS `mask` on a `<span>`, which gives the same `currentColor` behaviour without inlining markup. Size classes match upstream: `sm` 12px, `base` 16px, `md` 20–24px, `lg` 24–28px, `xl` 28–36px, `2xl` 36–48px, `3xl` 48–80px.

Families in the set:

- **Arrows and chevrons** — the most-used family by far. `ArrowRight` is the universal "continue / read more" mark; `ChevronDown` opens accordions and drawers; `ArrowUpRight` marks external links.
- **File types** — `FilePDF`, `FileWord`, `FileExcel`, `FilePPT`, `FileZip`, `FileJSON`, `FileEPUB`, `FileImage`, `FileVideo`, `FileAudio`, `FileCode`, `FileDatabase` and more. `DownloadItem` picks one automatically from the file extension.
- **Accessibility** — `Wheelchair`, `Blind`, `LowVision`, `Deaf`, `Braille`, `SignLanguage`, `EasyLanguage`, `AudioDescription`, `UniversalAccess`. An unusually complete family, and a direct expression of the system's priorities.
- **Creative Commons licence marks** — `CC-0`, `CC-BY`, `CC-BY-SA`, `CC-BY-NC`, `CC-BY-ND`, `CC-BY-NC-SA`, `CC-BY-NC-ND`. Open-data licensing is a first-class concern.
- **Social** — `Facebook`, `LinkedIn`, `Youtube`, `Xing`, `Instagram`, `Twitter`, `RSS`.
- **Media, UI controls, places, documents, people, charts** — the usual working set.

There is **no icon font** and there are **no PNG icons**. Emoji are never used. Unicode characters appear only as typography: `« »` guillemets, `↕ ▲ ▼` sort arrows, `·` meta separators.

**Never draw a replacement glyph.** If a concept is missing from the set, pick the nearest real glyph or use text.

**Logo.** `assets/logos/BundLogo.svg` (259×64) is the official federal lockup — the shield plus "Schweizerische Eidgenossenschaft / Confédération suisse / Confederazione Svizzera / Confederaziun svizra". Use it as-is: never recolour, rotate, crop, re-typeset or reconstruct it. In the header it is followed by a 1px separator and the organisational unit's own bold name.

---

## What is in this project

| Path | Contents |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` list only. |
| `tokens/` | `colors.css` (incl. the three skins, scoped with `data-skin`), `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `motion.css`, `fonts.css` (`@font-face`), `base.css` (resets, type scale, `.container` / `.section` / `.grid` / `.bg--*` layout vocabulary) |
| `css/` | Component CSS translated from upstream PostCSS: `buttons.css`, `forms.css`, `content.css`, `feedback.css`, `navigation.css`, `sections.css` |
| `components/` | React primitives — see the index below |
| `ui_kits/admin-website/` | Six-screen clickable recreation of a public federal website |
| `ui_kits/intranet/` | Intranet-skin homepage |
| `guidelines/` | Foundation specimen cards (colours, type, spacing, brand) |
| `assets/icons/` | All 218 icons |
| `assets/logos/BundLogo.svg` | The federal lockup |
| `assets/fonts/` | Noto Sans Regular / Bold / Italic / BoldItalic (TTF, from upstream) |
| `assets/images/` | Three grid/photo examples and the mail logo from upstream |
| `SKILL.md` | Agent-skill entry point |
| `github.md` | Upstream source association and sync record |

### Components

**`components/core/`** — `Icon`, `Btn`, `Badge`, `TagItem`, `Logo`, `Separator`, `StepIndicator`, `Burger`, `BackToTopBtn`

**`components/forms/`** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Fieldset`, `SearchField`

**`components/content/`** — `Card`, `Accordion`, `Table`, `Tabs`, `DownloadItem`, `InfoBlock`, `MetaInfo`, `Authors`, `Contact`, `ImageNotAvailable`, `QuoteSection`

**`components/feedback/`** — `Notification`, `AlertBanner`, `NotificationBanner`, `Modal`, `ToastMessage`, `Progress`

**`components/navigation/`** — `MainNavigation`, `MetaNavigation`, `Breadcrumb`, `Pagination`, `LanguageSwitcher`

**`components/sections/`** — `TopBar`, `TopHeader`, `DesktopMenu`, `Hero`, `Footer`

Each directory carries a `@dsCard` HTML showing its states, and each component has a `.d.ts` prop contract plus a `.prompt.md` usage note.

### Intentional additions

- **`Icon`** — upstream has `SvgIcon.vue` (a Vue-specific inline-SVG loader). A framework-free wrapper is required for the glyph set to be usable at all.
- **`Progress`** — upstream has `css/components/progress.postcss` but no Vue component; exposed here so the CSS is reachable.
- **`SearchField`** — a single component standing in for upstream's `SearchMain.vue` plus the `.search__group` / `.search--main` / `.search--large` CSS variants.

### Known gaps

Component families present upstream but **not** rebuilt here, because they are product-specific rather than design primitives. Read them in the repo if you need them:

- **Publication shop / shopping cart** — `ShoppingCart.vue` (42 KB), `ShoppingCard`, `ShoppingCartTotal`, `ShoppingCartTotalSummary`, `ShoppingCartAmountIndicator`, `ShoppingCartButton`, `OrderBox`, `Publication`
- **Glossary and index-page result lists** — `GlossarResultList*`, `IndexPageResultList*`
- **Carousel / slideshow** — `Carousel*`, `CarouselBadgeFilter`, `SlideshowExample` (built on Swiper)
- **Media** — `AudioPlayer` (CSS included in `css/content.css`, no React component), `Transcription`, `MediasSection`, `SocialsSection`
- **Mobile menu drawers** — `MobileMenu`, `MobileMenuV2`, `Navy.js` (a 300-line multi-level drawer engine). `MainNavigation context="mobile"` renders the list but not the drawer behaviour.
- **`MultiSelect`** — depends on `@vueform/multiselect`; `Select` covers the single-value case.
- **Mail templates** — `app/public/templates/*.html`
- **Easy Language / Sign Language page variants** — the header treatments exist upstream (`.top-bar__bar--easy-language`, `.icon-easy-language`) but the full page types were not rebuilt.

Other gaps:

- **Figma library not read.** The linked Figma file was not accessible from this environment, so nothing here is derived from it. If Figma values ever disagree with the repository, treat this project as reflecting the *repository*.
- **Fonts are the real binaries** from `css/foundations/fonts/` — no substitution was needed. They are TTF (not WOFF2), as upstream ships them.
- **Responsive type is approximated.** Upstream re-declares each type step at `lg` / `xl` / `3xl`; the `--step-*` clamps here cover the same range in one declaration, so an individual breakpoint may be a pixel or two off.
