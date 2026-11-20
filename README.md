# linusekberg.com

Linus Ekberg's portfolio. It is built with [Astro](https://astro.build) and hosted on GitHub Pages. The site is a close copy of the old Wix site and keeps the same page addresses.

## Working on it

1. Run `npm install` once.
2. Run `npm run dev` and open http://localhost:4321. The page reloads as you edit.
3. Run `npm run build` to build the site into `dist/`, and `npm run preview` to serve that build.

Astro needs Node 22.23 or newer.

## Where things are

| Path | What it holds |
|---|---|
| `src/pages/` | One file per page. The file name is the address, so `yarn.astro` becomes `/yarn`. |
| `src/layouts/Base.astro` | The header, title band and footer that every page shares. |
| `src/components/` | Building blocks (listed below). |
| `src/styles/global.css` | Colours, fonts and shared layout. |
| `src/assets/media/` | Images. Astro resizes them and converts them to WebP when it builds the site. |
| `public/media/` | Videos and looping clips, served exactly as stored. `src/data/media.json` records their sizes and preview frames. |
| `public/files/` | The PDFs. |

The components in `src/components/` are:
- `Img`: an optimised image.
- `Loop`: a short silent clip that replaces one of the old GIFs and plays only while on screen.
- `Video`: a video with controls and a preview frame.
- `YouTube` and `Steam`: embedded videos and store widgets.
- `Figure`: any of the above with a caption.
- `Card`: a grey section box.
- `ProjectCard`: a framed project thumbnail on the home page.
- `PdfLink`: a PDF icon link.

## Adding a project

1. Put images in `src/assets/media/`. Put videos in `public/media/video/` and add an entry for each one to `src/data/media.json`, with a preview frame in `src/assets/media/posters/`.
2. Copy a similar page in `src/pages/`, rename it, and edit the text.
3. Add a `ProjectCard` for it on the home page, in `src/pages/index.astro`.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. Before the first deploy, open the repository's Settings → Pages and set the source to **GitHub Actions**.

## Keeping the site out of search results

- Every page has `<meta name="robots" content="noindex, nofollow">`, set in `src/layouts/Base.astro`. It tells search engines not to list the page or follow its links.
- `public/robots.txt` blocks crawlers from images, videos, icons and PDFs, because those files can't carry that tag. It deliberately does **not** block the pages. A crawler has to read a page to see its noindex tag, and a blocked page can still show up in results as a bare link.
- There is no sitemap.

## Changes from the Wix site

- **Fonts:** Wix licenses Avenir for Wix sites only, so the body text now uses Nunito Sans, the closest free match. Raleway and Palatino are unchanged.
- **GIFs:** the large GIFs are now short looping MP4 videos (31 MB in total instead of 322 MB). They play only while visible.
- **Videos:** the three Potion Pop videos are re-encoded at the same 360×640 resolution, which brought them from 68 MB to 8 MB. The originals are still in the Wix media download.
- **Phones:** pages stack their content on narrow screens instead of using a separate Wix mobile layout.
- **Footer:** the footer stays at the bottom of short pages instead of leaving a grey area under it.
- **Menu:** "Projects" jumps to the project list on the home page. A clicked project title now opens the project, as the thumbnail already did.
- **Favicon:** the site has its own favicon. The Wix site used Wix's logo.
- **Search engines:** the whole site is hidden from search engines (see above). On Wix, only `/restitched` was hidden.
- **Unlinked pages:** the six pages that nothing links to (`rb-puzzle`, `village`, `ugc-mesatrove`, `locoroco-simple`, `fleshscape`, `ugc-troublingmotive`) are still published.
- **PDFs:** the PDFs moved from Wix's addresses (`/_files/ugd/...`) to `/files/` and have readable names.
- **Text fixes:**
  - Restitched: "Wardroobe" → "Wardrobe".
  - BattleshipDB: "database ." → "database."; "i worked test-first" → "I worked test-first".
  - Brew Besties: "costumers" → "customers"; "Players where" → "Players were"; "neededand" → "needed and"; "Test of tutorial ." → "Test of tutorial.". The "[ ▶] to watch related videos." line in Programming was a link to the Saw Station video and is now plain text.
  - Potion Pop: "we knew we the name" → "we knew the name"; "started of" → "started off"; "a interesting" → "an interesting".
  - LocoRoco: "Which lead me" → "Which led me"; "thought me" → "taught me".
  - Troubling Motive: "let's you shoot" → "lets you shoot".
  - Fleshscape: "narritive" → "narrative"; "player's would" → "players would"; "going from to room" → "going from room to room"; "This purpose" → "The purpose".
