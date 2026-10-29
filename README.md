# TESL Portfolio (Next.js)

One-page portfolio for a TESL student, built with Next.js (App Router).

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start
```

## Edit content

All text lives in `data/profile.js` (name, summary, education, projects,
activities, skills, languages, reference). Colours and fonts are in
`app/globals.css` under `:root`.

## Notes

- "Save as PDF" in the hero uses the browser print dialog; print styles are included.
- Fonts (Fraunces, Inter) load from Google Fonts via `app/layout.js`.
- The contact details are the placeholders from the resume; replace them with real ones.
