# Essha Khan — Quarto Portfolio Starter

A Quarto-native portfolio based on the clean, modern design developed in ChatGPT.

## Requirements

Install Quarto:
https://quarto.org/docs/get-started/

## Preview locally

From this folder:

```bash
quarto preview
```

Quarto will open the website in your browser and automatically refresh when files change.

## Render the production site

```bash
quarto render
```

The generated static website will be written to `_site/`.

## Main files

- `index.qmd` — homepage + interactive SQL demo
- `projects/index.qmd` — project gallery
- `projects/job-market/index.qmd` — full project case-study template
- `about.qmd` — about page
- `contact.qmd` — contact page
- `styles.css` — complete visual system
- `scripts.js` — SQL demo, project filtering, copy-code behavior
- `_quarto.yml` — Quarto configuration

## Before publishing

1. Replace placeholder email / LinkedIn / GitHub links.
2. Add your `resume.pdf` to the project root.
3. Replace the portrait placeholder with your own image.
4. Replace illustrative SQL results with your real results.
5. Add your other projects by copying the job-market project folder.
6. For the contact form, create a Formspree form and replace `YOUR_FORM_ID`.

## Interactive SQL window

The homepage SQL window is a lightweight, dependency-free demonstration. It accepts:
- a `LIMIT n`
- an `industry = 'Technology'` style filter

It is intentionally not a full SQL engine. If you want fully executable SQLite in the browser, the component can later be upgraded to DuckDB-WASM or SQLite-WASM.

## GitHub Pages

Quarto supports GitHub Pages. See:
https://quarto.org/docs/publishing/github-pages.html

A common workflow is:

```bash
quarto publish gh-pages
```
