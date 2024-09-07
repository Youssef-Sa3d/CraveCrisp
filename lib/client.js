import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '6kw5tsn0',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: false,
});
const builder = imageUrlBuilder(client)
export function urlFor(source) {
    return builder.image(source)
}