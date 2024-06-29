import { z, defineCollection } from 'astro:content';

export const Faq = z.object({
    title: z.string()
})

const faqCollection = defineCollection({
    type: 'content',
    schema: Faq
});

export const Sponsor = z.object({
    name: z.string(),
    logo: z.string()
});

const sponsorCollection = defineCollection({
    type: "content",
    schema: Sponsor
})


export const collections = {
    faq: faqCollection,
    sponsors: sponsorCollection
}