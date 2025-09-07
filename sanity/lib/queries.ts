import {defineQuery} from 'next-sanity'

export const PRODUCTS_QUERY =  defineQuery(`*[_type == "product"]{
  _id,
  name,
  'images': images[].asset->url,
  "category": category->name,
  body,
}`);

