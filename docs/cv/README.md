# CV

The current editable source is `joan-grau-cv.md`. The website-ready artifact is
`public/Joan-Grau-CV.pdf`, served as `/Joan-Grau-CV.pdf` after deployment.
`docs/cv/Joan-Grau-CV-Draft.pdf` and `docs/cv/Joan-Grau-CV-Full-Skills.pdf`
are review copies of the current CV. The Markdown file named `draft` is historical.

## Rebuild

Use Python 3 and an isolated environment with `reportlab==5.0.1` installed:

```sh
python3 docs/cv/build_pdf.py
python3 docs/cv/build_pdf.py --output docs/cv/Joan-Grau-CV-Draft.pdf
python3 docs/cv/build_pdf.py --output docs/cv/Joan-Grau-CV-Full-Skills.pdf
```

The generator uses Fira Sans regular and semibold from
`/usr/share/fonts/TTF/`. On other systems, pass `--font
/path/to/regular.ttf --bold-font /path/to/bold.ttf`.
The Markdown source supports headings, bold text, links, bullets, and explicit
`<!-- pagebreak -->` markers. By default the PDF is one continuous, content-sized
page with selectable text and clickable links. Use `--paged` to generate A4 pages
and honour the pagebreak markers instead.

Review the PDF visually and check text extraction after changes:

```sh
pdfinfo public/Joan-Grau-CV.pdf
pdftotext public/Joan-Grau-CV.pdf -
```

Consult `editorial-notes.md` for corrected metrics and content constraints.
