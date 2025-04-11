import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tabName: z.string(),
      image: z.union([image(), z.array(image())]).optional(),
      imageAlt: z.string().optional(),
    }),
})

export const collections = {
  articles,
}
