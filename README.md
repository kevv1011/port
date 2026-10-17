# Justine Reyes — Developer Portfolio

A React 18 + Vite portfolio focused on projects, engineering outcomes, and clear contact options. Features matte carbon surfaces, a restrained emerald accent, persisted light/dark themes, responsive navigation, interactive project previews, a keyboard-accessible case study with a stock simulator, skill-to-project highlighting, and email copy with a three-second toast.

## Preview locally

1. Install Node.js 20.19+ (or a current LTS release) if you do not already have it.
2. Open this folder in your editor and open its terminal.
3. Run `npm install` to install dependencies.
4. Run `npm run dev`.
5. Open the Local URL printed in the terminal, normally `http://127.0.0.1:5173`.
6. Keep the terminal open while previewing. Press Ctrl+C to stop.

To check the production version, run `npm run build`, then `npm run preview`. Vite prints the preview URL. The generated site is in `dist/`; do not edit generated files.

## Edit content

- `src/data/portfolioData.js`: identity, project descriptions, repositories, skills, and credentials.
- `src/components/`: sections and interactive previews.
- `src/styles/index.css`: design tokens, layouts, themes, and responsive styles.
- `src/styles/previews.css`: custom UI and architecture illustrations.
- `src/styles/craft.css`: current carbon/emerald visual direction, mechanical interactions, simulator, and toast.
- `src/hooks/useEmailCopy.js`: shared email copying and feedback timer.
- `docs/architecture.md`: wireframe, token table, component tree, and content notes.

Project metrics and credentials use the owner's supplied information. Previews are illustrative. The case-study offline stock counter persists in localStorage; cloud mode uses simulated API responses and a separate in-memory inventory. Individual certificate verification URLs and the TindahanTrack live app URL are pending; no destinations are fabricated. Add a verified `live` URL to the project data to display its Live app button. Google Fonts load the requested typography, with local system fallbacks if unavailable.

## Deploy to Render after local review

No push or deployment is performed automatically.

1. Review the site locally and approve the changes before pushing them to the `kevv1011/port` repository.
2. In Render, choose **New → Static Site** and connect that GitHub repository.
3. Set the build command to `npm ci && npm run build`.
4. Set the publish directory to `dist`.
5. Choose **Create Static Site**. Render builds the app and supplies its public URL.
6. For a fallback route, add a rewrite from `/*` to `/index.html` if needed.

Alternatively, create a Render Blueprint from the repository; `render.yaml` contains these static-site settings. Build output can be hosted by any static host supporting Vite.
