---
title: "From reST to MDX: Why Documentation Frameworks Are Evolving"
description: "Tracing the shift from reStructuredText to Markdown and MDX, and what it means for modern developer portals."
date: 2025-08-10
authors:
  - name: Joaquin Romo
tags:
  - documentation
  - mdx
  - reStructuredText
  - developer-portals
  - migration
---

Documentation frameworks are not just technical choices — they reflect **cultural shifts** in how we think about developer experience.  

For years, **reStructuredText (reST)** powered serious technical documentation, especially in the Python and scientific communities.  
Today, **Markdown and MDX** dominate modern developer portals. Why? Let’s explore this shift.

---

## The Legacy of reStructuredText (reST)

**Origins:**  
- Created for the Python ecosystem.  
- Strict, extensible, and great for generating reference documentation.  
- Closely tied to tools like **Sphinx** and **ReadTheDocs**.  

**Strengths:**  
- Rigid grammar and semantic markup → consistency across docs.  
- Mature auto-documentation pipelines (e.g., autodoc with Sphinx).  
- Widely used in academic and scientific projects.  

**Challenges:**  
- Verbose and harder to learn.  
- Contributions from non-experts can be intimidating.  
- Limited support for modern interactive or component-driven docs.  

---

## Markdown and the Rise of Docs-as-Code

**Why Markdown won:**  
- Lightweight, readable, and easy to learn.  
- GitHub popularized it as the default for READMEs.  
- Perfect fit for docs-as-code workflows (PRs, reviews, version control).  

**Tradeoffs:**  
- Less expressive than reST.  
- Needed extensions (like frontmatter, tables, or fenced code blocks) to catch up.  

---

## MDX: Markdown Meets React

**What it is:**  
MDX lets you write Markdown, but embed JSX (React components) directly into your docs.  

**Why it matters for dev portals:**  
- Live code samples and sandboxes.  
- Reusable UI components inside content.  
- Docs can behave more like apps than static manuals.  

**In the wild:**  
- **Docusaurus** (Meta’s framework).  
- **Next.js** with MDX plugins.  
- **Astro Starlight** (content-first with React/Vue/Svelte integrations).  

---

## Cultural Shifts in Documentation

- **Role Evolution:** Technical writers → Documentation engineers.  
- **Docs Evolution:** Static reference → Dynamic experience.  
- **Collaboration Evolution:** Gatekeeping → Community contribution.  

MD/MDX directly supports these cultural shifts by making docs easier to contribute to *and* more engaging for developers.  

---

## Why reST Still Matters

Despite the momentum of MD/MDX, reST continues to thrive in:  
- **Python projects** like Django, NumPy, and SciPy.  
- **Scientific communities** that value its rigor.  
- **Legacy pipelines** built around Sphinx extensions.  

For many orgs, rewriting entire docsets is costly, so reST will persist in specialized contexts.  

---

## Looking Forward

- **Momentum:** MD/MDX frameworks are the present and future of dev portals.  
- **Niche longevity:** reST will survive in Python and academia.  
- **Your takeaway:** Framework choice isn’t only about syntax. It’s about workflows, interactivity, and alignment with developer expectations.  

---

## Conclusion

- reST gave us **rigor**.  
- Markdown gave us **accessibility**.  
- MDX gives us **interactivity**.  

This evolution mirrors the shift in developer portals themselves:  
From **manuals** → to **platforms** → to **experiences**.  

If you’re building a modern developer portal, understanding this history helps you make **smarter choices today**.

---