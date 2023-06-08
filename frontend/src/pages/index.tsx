import Link from 'next/link'
import groq from 'groq'
import { client } from '../../client'
import Head from 'next/head'

const Index = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{posts.length} Posts</title>
      </Head>
      <h1 className='text-3xl my-4 font-bold flex justify-center items-center '>
        Welcome to Innotopia's Blog!
      </h1>
      <div className='container mx-auto grid grid-cols-1 divide-y divide-blue-100'>
        {posts.length > 0 &&
          posts.map(
            ({ _id, title = '', slug = '', publishedAt = '' }) =>
              slug && (
                <li key={_id} className='p-4 hover:bg-blue-50'>
                  <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                    {title} ({new Date(publishedAt).toDateString()})
                  </Link>{' '}
                </li>
              )
          )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(
    groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc)`
  )

  return {
    props: {
      posts,
    },
  }
}

export default Index
