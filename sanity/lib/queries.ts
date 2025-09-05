import {defineQuery} from 'next-sanity'

export const PRODUCTS_QUERY = `*[_type == "mueblesType"] {
  _id,
  name,
  images,
  category->{
    _id,
    name,
    slug
  },
  description,
}`;
