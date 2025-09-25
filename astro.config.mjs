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
			logo: {
				src: './src/assets/devportals-logo.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],
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
