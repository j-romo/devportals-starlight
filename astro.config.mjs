// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://devportals.tech',
	integrations: [
		starlight({
			title: 'DevPortals.Tech',
			description: 'Evaluating and building better developer portals',
			logo: {
				src: './src/assets/devportals-logo.png',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/j-romo',
				},
				{
					icon: 'linkedin',
					label: 'LinkedIn',
					href: 'https://www.linkedin.com/company/devportals-tech',
				},
				{
					icon: 'instagram',
					label: 'Instagram',
					href: 'https://www.instagram.com/devportals.tech',
				},
			],
			plugins: [
				starlightBlog(),
				catppuccin({
					dark: { flavor: "frappe", accent: "sky" },
					light: { flavor: "latte", accent: "mauve" },
				}),
			],
			sidebar: [
				{ label: 'About', link: '/about/' },
				{
					label: 'Migration',
					autogenerate: { directory: 'migration' },
				},
				{
					label: 'AI for Developer Experience',
					autogenerate: { directory: 'ai' },
				},
				{
					label: 'Markup Languages',
					autogenerate: { directory: 'markup' },
				},
				{
					label: 'Frameworks',
					autogenerate: { directory: 'frameworks' },
				},
				{
					label: 'Online Resources',
					autogenerate: { directory: 'resources' },
				},
				{
					label: 'Template Library',
					autogenerate: { directory: 'templates' },
				},
				{
					label: 'Style Guides',
					autogenerate: { directory: 'style' },
				},
			],
		}),
	],
});
