import { lazy } from 'react'
import { groq } from 'next-sanity'
import type { SanityDocument } from '@sanity/client'
import { client } from '../lib/sanity.client'
import Posts from '../components/Posts'
import { PreviewSuspense } from 'next-sanity/preview'

const PreviewPosts = lazy(() => import('../components/PreviewPosts'))
const query = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc)`

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } }
  }

  const data = await client.fetch(query)

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
      <h1 className='text-3xl my-4 font-bold flex justify-center items-center '>
        Welcome to Innotopia's Blog!
      </h1>
      {preview ? (
        <PreviewSuspense fallback='Loading...'>
          <PreviewPosts query={query} />
        </PreviewSuspense>
      ) : (
        <>
          <Posts posts={data} />
        </>
      )}
    </>
  )
}
