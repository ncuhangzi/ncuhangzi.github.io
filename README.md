# ncuhangzi.github.io

Personal site for **Fan-Chi Yeh** — AI fullstack engineer / data scientist.
Live at <https://ncuhangzi.github.io/>.

## Stack

No build step. Plain HTML, CSS and vanilla JS, served straight from the
`master` branch root by GitHub Pages. Edit a file, commit, done.

```
index.html              markup + content (single page)
assets/css/style.css    the whole design system
assets/js/main.js       theme toggle, scroll reveal, count-up, section spy
assets/img/             portrait (jpg + webp, 2 widths), favicons
assets/Resume_*.pdf     downloadable résumé
```

## Design notes

Swiss/editorial: a hairline 12-column grid drawn behind the page, numbered
sections, a single signal colour, and three typefaces doing distinct jobs —
**Archivo** (display, using its variable width axis), **Newsreader** (prose),
**IBM Plex Mono** (metadata and labels).

Colour lives in CSS custom properties at the top of `style.css`. Light and
dark palettes are defined on `:root` and `:root[data-theme='dark']`; both are
checked to pass WCAG AA. `--accent` is for graphic use (fills, large
numerals) and `--accent-text` is the darker variant used for small text.

## Editing content

Everything is in `index.html`, in reading order, with section comments
(`00 / INDEX`, `01 / PROFILE`, …). To swap the résumé, drop the new PDF in
`assets/` and update the three links pointing at it.

## Local preview

```sh
python -m http.server 4173
# → http://127.0.0.1:4173/
```

## Accessibility

- Both themes pass WCAG AA contrast for every text element.
- `prefers-reduced-motion` disables the ticker, reveals and transitions.
- Reveal animations are scoped to `.js`, so the page reads fine without
  scripting.
- Skip link, focus-visible outlines, and a print stylesheet.
