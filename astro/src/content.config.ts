import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// News & blog posts: one Markdown file per post in src/content/news/.
// The file name becomes the URL, e.g. my-post.md -> /news/my-post
const news = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
    schema: z.object({
        title: z.string(), // shown in Google results and the browser tab
        heading: z.string(), // shown at the top of the page
        description: z.string(), // Google snippet, ~150 characters
        date: z.coerce.date(),
        updated: z.coerce.date().optional(),
    }),
});

export const collections = { news };
