import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const postsMarkdown = await getCollection('markdown');
	const postsVue = await getCollection('vue');
	const postsJenkins = await getCollection('jenkins');
	const postsDocker = await getCollection('docker');
	const postsReact = await getCollection('react');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [
			...postsMarkdown,
			...postsVue,
			...postsJenkins,
			...postsDocker,
			...postsReact
		].map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
