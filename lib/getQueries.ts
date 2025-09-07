import {client} from '@/sanity/lib/client'
import { type SanityDocument } from "next-sanity";
import {PRODUCTS_QUERY} from '@/sanity/lib/queries'

export async function getProducts() {
  const res = await client.fetch<SanityDocument[]>(PRODUCTS_QUERY)
  return {res}
}
