# Stafford4AZ

## Edit website text in one file

To update homepage wording without changing site structure, edit:

- `astro/src/data/site-text.json`

Only change the text values on the right side of each `:`.
Do not change key names (left side), brackets, or commas.

### What each section controls

- `global.links` → all internal/external links used across pages
- `global.social` → footer/thank-you/social links
- `global.header` → top banner + nav labels
- `global.footer` → footer headings/labels/legal text
- `home`, `about`, `contact`, `endorsements`, `events`, `getInvolved`, `platform`, `voterResources`, `transparency`, `es`, `thankYou`, `notFound`, `privacy`, `terms` → page-level labels/headings/buttons

### GitHub editing flow

1. Open the file in GitHub: `astro/src/data/site-text.json`
2. Click the pencil icon (**Edit this file**)
3. Update text values
4. Commit changes (or open a pull request)

Astro pages keep the structure, and this file controls editable labels, CTAs, and links site-wide.