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

### On/off switches (also in `site-text.json`)

- `global.donations.open` → `true` shows working donate buttons everywhere; `false` greys out every donate button (same labels, not clickable) and shows `closedNote` under the homepage donate amounts
- `global.cleanElections.popupEnabled` → `true` turns the Clean Elections donate popup back on
- `global.analytics.gtmId` → your Google Tag Manager ID (e.g. `GTM-ABC1234`). Leave blank to turn GTM off
- `global.analytics.ga4Id` → your Google Analytics 4 measurement ID (e.g. `G-SG2GGDGV3M`) to load GA4 directly, without GTM. Use this **or** a GA4 tag inside GTM, not both, or every visit is counted twice. Leave blank to turn it off
- `home.heroTitleLines` → each entry is one line of the big homepage headline (the first line is orange)

### LD29 guide & community pages (SEO)

- `astro/src/data/ld29.json` → the LD29 guide (`/ld29`), one page per community (`/ld29/surprise`, `/ld29/el-mirage`, …), the FAQ, and district facts like the current senator and population. Add a community by copying one of the entries in `communities` and giving it a new `slug`.
- `/who-is-my-state-senator` → answers "who is my state senator" searches for nearby West Valley cities, including ones outside LD29.

### News / blog posts

Each post is a Markdown file in `astro/src/content/news/`. To add one on GitHub:

1. Open `astro/src/content/news/` and click **Add file → Create new file**
2. Name it with dashes, like `eric-at-surprise-town-hall.md` (this becomes `/news/eric-at-surprise-town-hall`)
3. Copy the block between the `---` lines from an existing post and change the `title`, `heading`, `description` and `date`
4. Write the post below it. `## ` makes a heading, `- ` makes a bullet, and `[text](/ld29/surprise)` makes a link

Link each new post to at least one community page or the LD29 guide. Internal links are a big part of what helps these pages rank.

### Analytics events (for GTM / GA4)

The site pushes these to the GTM `dataLayer`:

- `virtual_page_view` (`page_location`, `page_path`, `page_title`, `page_referrer`) on in-site navigations, which a plain GA4 tag misses because of page transitions
- `generate_lead` (`form_name`) when any signup/contact/volunteer/yard-sign form is submitted

When GA4 is loaded directly (`ga4Id`), form submissions are also sent to GA4 as `generate_lead` events. In-site navigations are counted by GA4 itself, as long as **Page changes based on browser history events** stays on (it's on by default under **Admin → Data streams → (the website stream) → Enhanced measurement → Page views**). To count form signups as conversions, mark `generate_lead` as a key event under **Admin → Events**.

UTM parameters from a visitor's landing URL are remembered for 30 days and saved with every Netlify form submission (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `landing_page`).

### GitHub editing flow

1. Open the file in GitHub: `astro/src/data/site-text.json`
2. Click the pencil icon (**Edit this file**)
3. Update text values
4. Commit changes (or open a pull request)

Astro pages keep the structure, and this file controls editable labels, CTAs, and links site-wide.