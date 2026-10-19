# BIM Coordinator portfolio integration

Based on `origin/main` commit `3c69489fe6ace15179f16b5b3325ddfafbf5ac8c`, whose HTML and asset references matched https://bimco.es on 2026-10-20. The older master-based layout draft is not part of this update.

- Current header, home, 3D canvas, intro, global styles, and existing projects are preserved.
- Adds a Romania coordination case study and programming skills within the existing BIM outsourcing services page.
- Adds Volume IV (BIM) to the existing portfolio book, plus a portfolio archive entry and PDF download.
- Adds programming competencies to the current resume view.
- Images come from the supplied Revit project and portfolio PDF; no generated project images.
- 13 book pages rendered at 2000 pixels; the downloadable PDF is the original portfolio file.
- Coordination case study remains a design-review package, with engineering decisions requiring approval.

Local preview:
- `/?view=bim-outsourcing&lang=en#bim-coordinator-portfolio`
- `/?portfolio=true&vol=bim-coordinator&lang=en`
- `/?view=grid&project=bim-coordinator-portfolio&lang=en`

Production: `npm ci && npm run build`. Upload the contents of `dist/` using the existing Apache hosting workflow. Keep the host's existing rewrite configuration and other hosting files. No host credentials or deployment integration were found in this checkout. No production upload has been performed.
