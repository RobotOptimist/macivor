// Site-wide strings. Everything here is human-facing text, so James writes it
// (see ai_policy.md). Empty values are simply left out of the output.
export const site = {
  // TODO(james): copy: short brand name. Used for og:site_name, and as the
  // manifest `name`/`short_name` when set.
  name: '',

  // TODO(james): copy: home page <title>, and the manifest name when `name` is empty.
  // Currently the text the site shipped with; issue #85 asks for it to change.
  homeTitle: 'James MacIvor Website',

  // TODO(james): copy: default meta description for pages that have none.
  description: '',

  // TODO(james): copy: legal name shown in the footer's copyright line.
  legalName: '',

  // Palette is still undecided (issue #85); this is the value the site shipped with.
  themeColor: '#ffffff',
}
