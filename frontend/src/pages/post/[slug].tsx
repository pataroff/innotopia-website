import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { client } from '../../../client'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading='lazy'
          src={urlFor(value)
            .width(600)
            .height(240)
            .fit('max')
            .auto('format')
            .url()}
        />
      )
    },
  },
}

const Post = (props) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    mainImage,
    body = [],
  } = props.post

  return (
    <article>
      <h1 className='text-3xl font-semibold my-2'>{title}</h1>

      {mainImage && (
        <div className='my-4'>
          <img src={urlFor(mainImage).width(300).url()} alt={title} />
        </div>
      )}

      <p className='text-2xl'>Posted in</p>

      {categories && (
        <ul className='ml-2'>
          {categories.map((category) => (
            <li key={category} className=''>
              {category}
            </li>
          ))}
        </ul>
      )}

      <span className='text-xl font-light'>By {name}</span>

      {authorImage && (
        <div>
          <img src={urlFor(authorImage).width(50).url()} alt={name} />
        </div>
      )}

      <PortableText value={body} components={ptComponents} />
    </article>
  )
}

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

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })

  return {
    props: {
      post,
    },
  }
}

export default Post
