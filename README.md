# Justine Reyes — Developer Portfolio

A React 18 + Vite portfolio focused on projects, engineering outcomes, and clear contact options. Features matte carbon surfaces, a restrained emerald accent, persisted light/dark themes, responsive navigation, interactive project previews, a keyboard-accessible case study with a stock simulator, skill-to-project highlighting, and email copy with a three-second toast.

**[View portfolio](https://kevv1011.github.io/port/)** · [Source code](https://github.com/kevv1011/port)

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

## Publish with GitHub Pages

The production URL is **https://kevv1011.github.io/port/**. Visitors can explore the portfolio directly without installing anything.

In the repository's **Settings → Pages**, select **GitHub Actions** as the source. `.github/workflows/deploy.yml` installs the locked dependencies, builds with Node.js 22, and publishes `dist/` on pushes to `main`. It can also be run manually from **Actions → Deploy portfolio to GitHub Pages → Run workflow**. The workflow's deployment job reports the live URL.

`vite.config.js` sets the `/port/` base path so assets work on this repository's Pages URL. To check the production build locally, run `npm run build` and `npm run preview`, then open the preview URL at `/port/`. Section links use URL fragments, so refreshing a section does not require server route rewrites.

For another host or a custom domain at the domain root, change Vite's base path to `/` before building. The optional `render.yaml` contains Render static-site settings; GitHub Pages is the primary deployment.
