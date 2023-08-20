import { lazy } from 'react'
import { groq } from 'next-sanity'
import type { SanityDocument } from '@sanity/client'
import { sanityClient } from '../lib/sanity.client'
import Posts from '../components/Posts'
import { PreviewSuspense } from 'next-sanity/preview'

const PreviewPosts = lazy(() => import('../components/PreviewPosts'))
const postsQuery = groq`*[_type == "post" && !(_id in path('drafts.**')) && publishedAt < now()] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  "name": author->name,
  "mainImage": mainImage.asset->url,
  body,
  publishedAt
}`

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } }
  }

  const data = await sanityClient.fetch(postsQuery)

  return {
    props: {
      preview,
      data,
    },
  }
}

export default function Home({
  preview,
  data,
}: {
  preview: Boolean
  data: SanityDocument[]
}) {
  return (
    <>
      <div>
        {preview ? (
          <PreviewSuspense fallback='Loading...'>
            {/* This was set as query={query}! 🤔 */}
            <PreviewPosts query={postsQuery} />
          </PreviewSuspense>
        ) : (
          <>
            <Posts posts={data} />
          </>
        )}
      </div>
    </>
  )
}
