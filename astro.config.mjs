// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://devportals.tech',
	integrations: [
		starlight({
			title: 'DevPortals.Tech',
			description: 'Evaluating and building better developer portals',
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
				starlightBlog()
			],
			sidebar: [
				{ label: 'About', link: '/about/' },
				{
					label: 'Migration',
					items: [
						{ label: 'Migration Strategy', link: '/migration/migration-strategy/' },
				],
				},
				{
					label: 'AI for Developer Experience',
					items: [
						{ label: 'Overview', link: '/ai/overview/' },
						{ label: 'AI Tools', link: '/ai/tools/' },
				],
				},
				// Add more sections as you create them
				// {
				// label: 'Demos',
				// items: [
				// 	{ label: 'Live Projects', link: '/demos/' },
				// ],
				// },
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
