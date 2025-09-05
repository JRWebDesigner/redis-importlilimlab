import {client} from '@/sanity/lib/client'
import {PRODUCTS_QUERY} from '@/sanity/lib/queries'

export async function getProducts() {
  const products = await client.fetch(PRODUCTS_QUERY)
  return {products}
}
