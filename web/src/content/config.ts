import { z, defineCollection } from 'astro:content';

const faqCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    }),
});


export const collections = {
    faq: faqCollection
}