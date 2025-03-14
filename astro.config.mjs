// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DevPortals.Tech',
			social: {
				github: 'https://github.com/j-romo',
			},
			sidebar: [
				{
					label: 'Overview',
					autogenerate: { directory: 'overview' },
				},
				{
					label: 'Tutorials',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Tools',
					autogenerate: { directory: 'tools' },
				},
				{
					label: 'Migration Guides',
					autogenerate: { directory: 'migration' },
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
