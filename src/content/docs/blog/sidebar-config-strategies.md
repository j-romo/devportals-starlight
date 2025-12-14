---
title: "Starlight Sidebar Configuration Strategies: Manual vs Autogenerate"
description: "Real-world strategies for organizing documentation navigation when you need both flexibility and automation"
date: 2025-09-17
authors:
  - name: Joaquin Romo
tags:
  - astro-starlight
  - documentation
  - configuration
  - navigation
---

While building DevPortals.tech, I ran into a common documentation site challenge: how do you organize sidebar navigation when you want some content to appear in a specific order (like overview pages) while still automatically including new files as you create them?

This is the kind of practical problem that comes up constantly when building documentation sites, and the solution isn't always obvious from the docs.

## The Problem

I had a "Markup Languages" section with several files:
- `overview.mdx` (should appear first)
- `asciidoc.mdx`
- `markdown.mdx` 
- `mdx.mdx`
- `restructuredtext.mdx`

Using Starlight's `autogenerate` feature, the sidebar was ordering files alphabetically, putting "overview" in the 4th position instead of first. Not ideal for user experience.

## Strategy 1: Manual Items Array

The most straightforward approach is to manually specify all sidebar items:

```javascript
// astro.config.mjs
{
  label: 'Markup Languages',
  items: [
    { label: 'Overview', link: '/markup/overview/' },
    { label: 'AsciiDoc', link: '/markup/asciidoc/' },
    { label: 'Markdown', link: '/markup/markdown/' },
    { label: 'MDX', link: '/markup/mdx/' },
    { label: 'reStructuredText', link: '/markup/restructuredtext/' },
  ],
}
```

**Pros:**
- Complete control over order and labels
- Can customize link text independently of file names
- Clear and explicit configuration

**Cons:**
- Manual maintenance required for new files
- Easy to forget updating sidebar when adding content
- More verbose configuration

**Best for:** Sections with stable content that rarely changes, or when you need custom labels.

## Strategy 2: Filename Prefix for Ordering

Force alphabetical ordering by prefixing your overview file:

```bash
# Rename the file
mv src/content/docs/markup/overview.mdx src/content/docs/markup/00-overview.mdx
```

Then use autogenerate normally:

```javascript
{
  label: 'Markup Languages',
  autogenerate: { directory: 'markup' },
}
```

Set the display title in frontmatter:

```mdx
---
title: Overview  # This shows in sidebar, not the filename
description: ...
---
```

**Pros:**
- Maintains autogenerate benefits
- Guaranteed ordering for important files
- Simple implementation

**Cons:**
- Ugly filenames with prefixes
- Not semantically clean
- Prefix strategy needs to be documented for team

**Best for:** Sections where you want mostly automatic management but need to pin a few key files.

## Strategy 3: Index File Convention

Rename your overview to follow index file conventions:

```bash
mv src/content/docs/markup/overview.mdx src/content/docs/markup/index.mdx
```

**Pros:**
- Semantic file naming
- Works with autogenerate in Starlight
- Follows web conventions (index files appear first)
- Clean, professional approach

**Cons:**
- Only works for one "special" file per directory
- Less obvious what the file contains from filename alone

**Best for:** Sections where you have a clear introduction/overview page and the rest can be auto-managed.

## Strategy 4: Mixed Manual + Autogenerate (Theoretical)

This would be ideal but isn't currently supported by Starlight:

```javascript
// This doesn't work in Starlight (yet)
{
  label: 'Markup Languages',
  items: [
    { label: 'Overview', link: '/markup/overview/' },
    {
      label: 'Languages',
      autogenerate: { 
        directory: 'markup',
        exclude: ['overview.mdx']
      },
    },
  ],
}
```

**Why it would be great:**
- Best of both worlds
- Explicit control for key pages
- Automatic inclusion of new content

**Reality:** Starlight doesn't support `exclude` in autogenerate, so this approach isn't available.

## My Recommendation

After testing all approaches, here's my decision framework:

### For Overview/Landing Pages
**Use the index.mdx convention** (Strategy 3). It's semantic, clean, and works perfectly with autogenerate. This is what I implemented for the markup section.

### For Stable Sections  
**Use manual items arrays** (Strategy 1) when you have a well-defined set of content that rarely changes and you want custom labels.

### For Growing Sections
**Use filename prefixes** (Strategy 2) when you're actively adding content but need some ordering control. Accept the ugly filenames as a temporary trade-off.

### For Pure Auto-Management
**Use straight autogenerate** when alphabetical ordering is acceptable and you prioritize ease of maintenance.

## Real-World Impact

This might seem like a small detail, but navigation organization directly impacts:

- **User experience**: Can readers find what they need?
- **Content discoverability**: Do overview pages get seen?
- **Maintenance overhead**: How much work is adding new content?
- **Team adoption**: Will other writers follow your patterns?

In my case, the index.mdx approach solved the immediate problem while keeping the configuration clean and maintainable.

## Looking Forward

Documentation tooling continues to evolve. I'd love to see Starlight add:
- `exclude` patterns for autogenerate
- Custom sorting functions
- Mixed manual/auto approaches
- Priority/weight-based ordering

Until then, these strategies provide good workarounds for common navigation challenges.

---

*This post documents a real configuration challenge from building DevPortals.tech. What sidebar organization strategies have worked for your documentation sites?*
