import Image from 'next/image'

import { sanityClient } from '../lib/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

// Shopstory Plugin
import { DemoShopstoryProvider } from '../shopstory/provider'
import { Shopstory, ShopstoryMetadataProvider } from '@shopstory/react'

function urlFor(source) {
  return imageUrlBuilder(sanityClient).image(source)
}

const Post = ({ post, renderableContent, meta }) => {
  const {
    _id,
    title,
    publishedAt,
    mainImage,
    categories,
    name,
    authorImage,
    body,
    shopstoryRawContent,
  } = post

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
      // This works but only if there is a reference inside shopstoryRawContent! 👇🏻
      reference: ({ value }) => {
        if (value) {
          console.log(value)
        }
        return (
          //@ts-ignore
          <DemoShopstoryProvider>
            <ShopstoryMetadataProvider meta={meta}>
              {renderableContent.map((renderableContent, index) => (
                <Shopstory content={renderableContent} key={index} />
              ))}
            </ShopstoryMetadataProvider>
          </DemoShopstoryProvider>
        )
      },
    },
  }

  return (
    <>
      <article>
        <div className='flex justify-center items-center p-8 md:px-12 lg:px-64 overflow-x-hidden'>
          <div className='flex flex-col gap-y-4 rounded-2xl drop-shadow-md bg-slate-100 w-full h-full container p-4'>
            {title ? (
              <h1 className='flex justify-center items-center text-2xl lg:text-3xl font-poppins font-semibold py-4'>
                {title}
              </h1>
            ) : (
              <h1>Untitled</h1>
            )}
            {mainImage && (
              <div className='flex justify-center items-center p-4'>
                <div className='rounded-2xl drop-shadow-md bg-slate-100 h-[400px] w-full overflow-hidden'>
                  <Image
                    className='relative object-cover w-full h-full'
                    src={urlFor(mainImage).url()}
                    width={1600}
                    height={585}
                    alt={title}
                  />
                </div>
              </div>
            )}

            {/* <p className='text-2xl'>Posted in</p>

            {categories && (
              <ul className='ml-2'>
                {categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            )} */}

            <div className='flex flex-row items-center gap-x-2 text-xl font-poppins font-light whitespace-nowrap'>
              <span>By {name}</span>
              {authorImage && (
                <div className='rounded-full drop-shadow-md w-8 h-8 overflow-hidden'>
                  <img
                    className='relative object-cover w-full h-full'
                    src={urlFor(authorImage).url()}
                    width={800}
                    height={800}
                    alt={name}
                  />
                </div>
              )}
              <span>
                | Published on{' '}
                {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            <PortableText value={body} components={ptComponents} />

            {/* {shopstoryRawContent != null && (
              //@ts-ignore
              <DemoShopstoryProvider>
                <ShopstoryMetadataProvider meta={meta}>
                  {renderableContent.map((renderableContent, index) => (
                    <Shopstory content={renderableContent} key={index} />
                  ))}
                </ShopstoryMetadataProvider>
              </DemoShopstoryProvider>
            )} */}
          </div>
        </div>
      </article>
    </>
  )
}

export default Post
