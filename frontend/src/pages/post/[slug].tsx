import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import { SanityDocument } from '@sanity/client'
import { groq } from 'next-sanity'

import { client } from '../../lib/sanity.client'
import Post from '../../components/Post'

const PreviewPost = lazy(() => import('../../components/PreviewPost'))
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title, 
  "name": author->name, 
  "categories": categories[] -> title, 
  "authorImage": author->image,
  mainImage,
  body
  }`

/* IMPORTANT

getStaticProps and getStaticPaths work only in files in the pages folder
that are used for routing, i.e it will not be called for React components
that are included in these pages.

*/

/* GROQ syntax

• "*" 👈🏻 select all documents
• [_type == 'post' && slug.current == $slug] 👈🏻 filter the selection down
to documents with the type "post" and those of them who have the same slug
to that we have in the parameters
• [0] 👈🏻 select the first and only one in that list

*/

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params, preview = false }) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = params

  if (preview) {
    return { props: { preview, data: { params } } }
  }

  const post = await client.fetch(query, { slug })

  return {
    props: {
      preview,
      data: {
        post,
        params: {},
      },
    },
  }
}

export default function Page({
  preview,
  data,
}: {
  preview: Boolean
  data: { post: SanityDocument; params: {} }
}) {
  // This is not needed! 👈🏻
  // const {
  //   title = 'Missing title',
  //   name = 'Missing name',
  //   categories,
  //   authorImage,
  //   mainImage,
  //   body = [],
  // } = data.post

  return preview ? (
    <PreviewSuspense fallback='Loading...'>
      {/* This is where the error happens! 👈🏻 */}
      {/* I assume the error is destructuring related. */}
      {/* TypeError: Cannot read properties of undefined (reading 'title') */}
      {/* How is the data passed to the PreviewPost component? */}
      <PreviewPost query={query} params={data.params} />
    </PreviewSuspense>
  ) : (
    <>
      <Post post={data.post} />
    </>
  )
}
