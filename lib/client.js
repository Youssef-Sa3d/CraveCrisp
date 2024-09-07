import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: '2022-03-07',
    useCdn: false,
});
const builder = imageUrlBuilder(client)
export function urlFor(source) {
    return builder.image(source)
}