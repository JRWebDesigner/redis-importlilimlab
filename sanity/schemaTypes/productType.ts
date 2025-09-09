import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Categoria del Producto',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'body',
      title: 'Descripcion del Producto',
      type: 'blockContent',
    }),
    defineField({
      name: 'images',
      title: 'Imágenes del Producto',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string',
            },
          ]
        }
      ],
      validation: Rule => Rule.required().min(1).max(10)
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
    },
  },
})
