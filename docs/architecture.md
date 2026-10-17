# Portfolio upgrade architecture

## Wireframe

1. Sticky navigation: identity, section links, contact, and persisted light/dark toggle.
2. Hero: full name, role, value proposition, location, availability, project button, email-copy button, and social links; architecture illustration alongside.
3. Projects: two-column desktop / one-column mobile grid. Each card has an illustrative preview, problem, result, prominent outcome, stack, and confirmed repository links.
4. Case study: keyboard-accessible Problem / Approach / Results tabs, linked architecture diagram, and a stock simulator with separate offline/localStorage and simulated cloud inventories. Offline stock persists across reloads; cloud responses use a 450 ms simulated delay with immediate optimistic updates.
5. About: short personal introduction and engineering focus.
6. Toolkit: filterable groups, toggleable skill selection highlighting related project cards, and separate official documentation links. Explicit skill mappings show an honest empty result for technologies not used in the featured projects.
7. Proof: three core strengths and nine owner-supplied credentials.
8. Contact: email, shared clipboard-copy action with a three-second slide-up toast and error feedback, phone, LinkedIn, and GitHub.

## Design tokens

| Token | Dark | Light / treatment |
| --- | --- | --- |
| Background | `#0B0C0E` | `#F8FAFC` |
| Card surface | `#121418` | `#FFFFFF` |
| Primary text | `#F0F2F4` | `#0F172A` |
| Body secondary | `#A9AFB9` | `#4C596D` |
| Functional accent | Emerald `#10B981` | `#047857` |
| Structural borders | White at 10% | Ink at 14% |
| Hover surface | `#1A1D24` | `#EEF1F5` |
| Headings | Space Grotesk | Sans-serif fallback |
| Body | Inter | Sans-serif fallback |
| Code / metadata | JetBrains Mono | Monospace fallback |
| Spacing | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px | Responsive sections and gutters |
| Content width | 1200px maximum | 18px mobile side gutters |
| Card corners | 18px | 8px buttons, 12px smaller panels |

## Component tree

```text
App
├── Header (theme and mobile navigation)
├── Hero (builder window illustration)
├── Projects
│   └── ProjectPreview
│       ├── InventoryPreview (sample stock and connection mode)
│       ├── NetworkPreview (AWS architecture)
│       ├── ServerPreview (illustrative instance toggle)
│       └── DatabasePreview (SQL terminal)
├── CaseStudy (accessible tabs and linked diagram)
│   └── StockSimulator (mode switch, stock controls, persistent offline state, status log)
├── About
├── Skills (category filters, project highlighting, official links)
├── Credentials
├── Contact (email and copy buttons)
└── Toast (shared useEmailCopy hook)
```

Shared content and explicit skill-to-project mappings live in `src/data/portfolioData.js`; icons use small inline SVGs. Global layout styles and preview styles are separate. `src/styles/craft.css` applies the current carbon/emerald visual system and interaction styles after the base styles. Mechanical controls lift 1px on hover and press to 97%; arrows move 3px. Reduced-motion preferences disable transitions. No production UI dependencies beyond React.

## Content boundaries

Project claims, metrics, credential names, and dates come from the owner's supplied brief. The unavailable citation markers in the brief are not rendered as sources. Credential verification URLs and TindahanTrack's live app URL were not supplied, so the UI does not invent verification links or a live destination. Project cards render a Live app action when a verified `live` URL is set in the project data. Interactive previews are labeled simulations; they do not connect to project APIs, AWS, or actual store data. The case-study simulator persists sample offline stock to `jr-inventory-simulator-stock`. It does not synchronize that stock to a real cloud database. Storage and clipboard failures have honest user-facing feedback.

The original single-file page is preserved at `docs/legacy-portfolio.html` as a reference; it is not part of the production build.
