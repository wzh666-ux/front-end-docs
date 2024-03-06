import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const home = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
	})
})

const about = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
	})
})

export const collections = { blog, home, about };
