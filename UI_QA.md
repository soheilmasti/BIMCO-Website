# Multilingual UI and layout review

Updated on 2026-10-20. The existing BIMCO main/home design remains the reference.

Changes:
- Completed the coordinator portfolio copy for all 11 selectable languages, including Chinese, Russian, Portuguese, and Dutch.
- Connected dynamic service cards, FAQ questions/answers, resume fields, client report fields, project metadata, and technical model labels to the static translation catalog.
- Added reviewed local translations for previously untranslated interface descriptions and labels. No translation service is called by the website.
- Corrected RTL alignment, inline spacing, Persian typography, heading line height, narrow-screen paragraph readability, and focus visibility.
- Matched interior page backgrounds to the existing home palette without changing the home header, cinematic intro, main 3D scene, camera controls, geometry, or materials.
- Improved portfolio tablet header wrapping, active-volume visibility, short-landscape sizing, single-tap navigation, share-link language retention, and Persian page-count direction.
- Fixed contact-dialog preset refresh and Escape dismissal.

Validation:
- `npm run build`: TypeScript and Vite production build passed. Existing large-bundle warning remains.
- Production browser audit: 169 checks covering 11 languages, seven primary views, mobile/desktop, extra narrow/tablet cases, and all 11 book interfaces. No runtime errors or horizontal page overflow.
- All heading cases identified in the first pass were rechecked after the final typography correction.
- Touch navigation checked at 390x844, 768x1024, 844x390 and 1440x960; language switching and reload persistence checked.
- Original native project imagery, portfolio PDF and the PDF's English document content remain unchanged. Official software names, standards, identifiers and proper names retain their published spelling.

Production hosting has not been modified. Upload the contents of the prepared update archive using the existing Apache hosting workflow. Preserve existing host configuration and assets. The GitHub branch is `codex/bim-coordinator-portfolio`.

## Old-money color system

All interface color families now share an ivory, forest green, muted navy, warm charcoal and antique gold palette defined in `oldMoneyTheme.js`. Tailwind opacity, hover, border and gradient variants inherit the same palette. Neutral/clay and architectural theme tokens match the warm page backgrounds. Status red uses muted burgundy. Native portfolio images and technical model materials retain their original colors.

Validation: production build passed; seven main views checked at 390px and 1440px (14 checks), plus portfolio book screenshots at both sizes. No runtime errors or horizontal overflow. Primary button contrast is 7.28:1, body text 6.51:1, and gold text 5.31:1 against the ivory card color. Home/3D scene geometry and camera behavior are unchanged.
