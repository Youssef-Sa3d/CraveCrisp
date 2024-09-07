import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    // projectId: '6kw5tsn0',
    dataset: import.meta.env.VITE_SANITY_DATASET,
    // dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: false,
});
const builder = imageUrlBuilder(client)
export function urlFor(source) {
    return builder.image(source)
}