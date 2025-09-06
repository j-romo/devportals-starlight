// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://devportals.tech',
	integrations: [
		starlight({
			title: 'DevPortals.Tech',
			description: 'Evaluating and building better developer portals',
			social: {
				github: 'https://github.com/j-romo',
			},
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
					label: 'Tools',
					autogenerate: { directory: 'tools' },
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
				{
					label: 'Blog',
					autogenerate: { directory: 'blog' },
				},
			],
		}),
	],
});
