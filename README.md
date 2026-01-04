# DevPortals.Tech

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/j-romo/devportals-starlight)

A modern documentation platform showcasing best practices in developer portal architecture, technical writing, and documentation engineering. Built with Astro and Starlight, this site demonstrates practical approaches to building better developer experiences.

🌐 **Live Site**: [devportals.tech](https://devportals.tech)

## About This Project

This is a living showcase of documentation engineering in practice. It includes:

- **Technical writing portfolio**: Articles on documentation migration, developer experience, and content strategy
- **Hands-on guides**: Practical tutorials on Astro, Starlight, and modern docs frameworks
- **Custom implementations**: Component overrides, navigation enhancements, and integration patterns
- **Real-world examples**: From enterprise documentation to open-source platform evaluation

## Key Features

- 🎨 **Custom navigation**: Extended Starlight's Header component to add custom navigation links
- 📝 **Integrated blog**: Using `starlight-blog` plugin with reading time metrics
- 🔗 **Multi-site integration**: Demonstrates subdomain architecture connecting to Next.js portfolio
- 🎯 **Component overrides**: Custom Starlight components showing advanced customization patterns
- 🌙 **Catppuccin theme**: Beautiful color schemes using the Catppuccin Starlight plugin
- 📊 **Content-first design**: MDX support for rich, interactive documentation

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5.4.2
- **Theme**: [Starlight](https://starlight.astro.build)
- **Plugins**: 
  - [starlight-blog](https://github.com/HiDeoo/starlight-blog) - Blog functionality
  - [@catppuccin/starlight](https://github.com/catppuccin/starlight) - Color theming
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: MDX for enhanced Markdown with components

## Project Structure

```
├── public/              # Static assets (images, favicons)
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Custom Astro components (Header override)
│   ├── content/
│   │   └── docs/       # Documentation content
│   │       ├── about.mdx
│   │       ├── blog/   # Blog posts
│   │       ├── ai/     # AI for DX guides
│   │       ├── markup/ # Markup language docs
│   │       └── ...     # Other content categories
│   ├── styles/         # Custom styles
│   └── content.config.ts
├── astro.config.mjs    # Astro configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/j-romo/devportals-starlight.git
cd devportals-starlight

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Available Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## Custom Components

This project includes custom component overrides to extend Starlight's functionality:

- **`src/components/Header.astro`**: Custom header with additional navigation links (Docs, Portfolio) and styling to match the blog plugin's navigation items

See the [blog post on component overrides](https://devportals.tech/blog/integrating-nextjs-portfolio-subdomain/) for implementation details.

## Content Organization

Content is organized by topic in `src/content/docs/`:

- **`about.mdx`**: Project overview and personal introduction
- **`blog/`**: Technical articles and tutorials
- **`ai/`**: AI and developer experience content
- **`markup/`**: Markdown, MDX, and markup language guides
- **`migration/`**: Documentation migration strategies
- **`frameworks-and-tools/`**: Framework comparisons and tooling guides

## Deployment

This site is deployed to Vercel with automatic deployments on push to `main`. The configuration is in `vercel.json`.

To deploy your own instance:

1. Fork this repository
2. Import to Vercel
3. Deploy (no additional configuration needed)

## Related Projects

- **[Portfolio](https://portfolio.devportals.tech)**: Next.js portfolio site integrated as a subdomain
- **[PeanutButterAndJelly.ai](https://peanutbutterandjelly.ai)**: Astro + Sanity Studio demo

## Contributing

This is a personal portfolio/documentation project, but suggestions and feedback are welcome! Feel free to open an issue if you spot any problems or have ideas for improvement.

## License

MIT License - feel free to use this project as inspiration for your own documentation sites.

## Learn More

- Read the [blog posts](https://devportals.tech/blog/) for detailed implementation guides
- Check out [Starlight's documentation](https://starlight.astro.build/)
- Explore [Astro documentation](https://docs.astro.build)

---

**Built by [Joaquin Romo](https://github.com/j-romo)** | Senior Technical Writer & Documentation Engineer
