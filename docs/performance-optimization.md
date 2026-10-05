# Performance optimization — 2026-10-05

Measured against the production build of the working tree at the start of this pass. Existing design and package-lock edits were preserved. Changes are local; no deployment was performed.

| Measurement | Before | After |
| --- | ---: | ---: |
| Initial homepage JavaScript, uncompressed | 1,671,149 bytes | 412,306 bytes |
| Total generated JavaScript across routes | 1,671,149 bytes | 640,005 bytes |
| Shared presentation JavaScript | Included in homepage | 181,250 bytes, on demand |
| Milky Way startup point draws at 1080p | About 502,300 | About 32,904 |

Changes:
- Lazy-load Speaking, Book, and Upsell routes, including their CSS.
- Remove unused Amplify initialization from the public site's entry point; no mounted component uses Amplify. Backend configuration and other demo code remain available.
- Remove unused presentation Markdown and syntax-highlighting plugins; slides contain neither Markdown nor code blocks.
- Render navigation once.
- Use WebP versions of the hero portrait, author portrait, and video poster. Preserve original PNGs.
- Defer lower-page images and prevent presentation videos from preloading.
- Use font-display: swap for remote fonts.
- Fix the hero's duplicate animation loop, cap DPR at 1.5, limit rendering to 30 FPS, reduce startup particles, and pause rendering offscreen, in hidden tabs, and for reduced-motion preferences.
- Remove unused Video.js script from the native video section.

Validation:
- Production build and TypeScript passed.
- Modified homepage components passed targeted ESLint; git diff --check passed.
- Headless Chrome rendered all four routes without page errors. The homepage requested only its entry JavaScript and no MP4 data. At 390px viewport width the document width was 390px.
- Canvas instrumentation verified no additional clearRect calls while offscreen or with reduced motion enabled.
- Existing full-repository lint failures remain: unused imports in BookPage/UpsellPage and unused setRooms in RoomSelector. An existing malformed CSS nesting rule in About.css still emits a build warning.

These are bundle and runtime smoke measurements, not a Lighthouse score or a controlled before/after Core Web Vitals comparison. The star-field density is intentionally lower. Live hosting/cache behavior was not measured.
