import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'nombre',
      type: 'string',
    }),
    defineField({
      name: 'categoria',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'body',
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
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              title: 'Descripción de la Imagen',
              type: 'string'
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1).max(10)
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      media: 'images.0',
    },
  },
})
