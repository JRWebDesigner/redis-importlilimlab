import {defineQuery} from 'next-sanity'

export const PRODUCTS_QUERY = `*[_type == "product"]{
  _id,
  name,
  images,
  "category": category->name,
  body,
}`;

