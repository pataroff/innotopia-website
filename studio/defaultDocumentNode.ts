//@ts-ignore
import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'

// The error is related to type declarations! 👈🏻
// The custom webpack configuration fixes the error, but causes another error in /pages/_document.tsx!
// Check next.config.json for more information on the custom webpack configuration!

// The solution for now is to remove the type declarations!

// The type declarations that were removed:
// doc : SanityDoucment
// defaultDocumentNode : DefaultDocumentNodeResolver

//@ts-ignore
function getPreviewUrl(doc) {
  return doc?.slug?.current
    ? `http://localhost:3000/api/preview?slug=${doc.slug.current}`
    : `http://localhost:3000/api/preview`
}

//@ts-ignore
export const defaultDocumentNode = (S, {schemaType}) => {
  switch (schemaType) {
    case 'post':
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            //@ts-ignore
            url: (doc) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
