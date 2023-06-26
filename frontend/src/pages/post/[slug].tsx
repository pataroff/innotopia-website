import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import { SanityDocument } from '@sanity/client'
import { groq } from 'next-sanity'

// Live Preview
import { sanityClient } from '../../lib/sanity.client'
import Post from '../../components/Post'

// Shopstory Plugin
import { ShopstoryClient } from '@shopstory/core'
import { shopstoryConfig } from '../../../src/shopstory/config'

const PreviewPost = lazy(() => import('../../components/PreviewPost'))

const draftQuery = groq`*[_type == "post" && slug.current == $slug && (_id in path('drafts.**'))][0]{
  _id,
  title, 
  "name": author->name, 
  "categories": categories[] -> title, 
  "authorImage": author->image,
  mainImage,
  body,
  "shopstoryRawContent": shopstoryBlock[] -> {
    "content": content
  }
  }`

const publishedQuery = groq`*[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
    _id,
    title,
    "name": author->name,
    "categories": categories[] -> title,
    "authorImage": author->image,
    mainImage,
    body,
    "shopstoryRawContent": shopstoryBlock[] -> {
      "content": content
    }
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
  const paths = await sanityClient.fetch(
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

  // If it is in preview, but it has already been published and there is no draft documents,
  // it would return null for post!
  const query = preview ? draftQuery : publishedQuery

  const post = await sanityClient.fetch(query, { slug })

  // console.log(post)

  const shopstoryClient = new ShopstoryClient(shopstoryConfig, {
    locale: 'en',
    sanity: { preview },
  })

  if (post.shopstoryRawContent != null && post.shopstoryRawContent.length > 0) {
    const renderableContent = post.shopstoryRawContent.map((obj) =>
      shopstoryClient.add(obj.content.en)
    )

    const meta = await shopstoryClient.build()

    // This works as long as you are not in preview mode! 🤔
    return {
      props: {
        preview,
        data: {
          post,
          params: { slug },
        },
        renderableContent,
        meta,
      },
      revalidate: 10,
    }
    // { params: { slug: 'ede-staal-mijn-groningen-mien-grunne' } }
  }

  // If post.shopstoryRawContent is empty!
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
  renderableContent,
  meta,
}: {
  preview: Boolean
  data: { post: SanityDocument; params: {} }
  // Add type declarations for renderableContent and meta!
}) {
  return preview ? (
    <PreviewSuspense fallback='Loading...'>
      <PreviewPost query={draftQuery ?? publishedQuery} params={data.params} />
    </PreviewSuspense>
  ) : (
    <>
      <Post
        post={data.post}
        renderableContent={renderableContent}
        meta={meta}
      />
    </>
  )
}
