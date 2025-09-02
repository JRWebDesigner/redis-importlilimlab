import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('product').title('Productos'),
      S.documentTypeListItem('category').title('Categorias'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['product', 'category'].includes(item.getId()!),
      ),
    ])
