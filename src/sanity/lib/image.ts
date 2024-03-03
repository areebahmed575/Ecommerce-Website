import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { client } from '@/lib/sanityClient';


const ImageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source: Image) => {
  return ImageBuilder?.image(source)
}