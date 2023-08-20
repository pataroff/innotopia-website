import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const Posts = ({ posts }) => {
  const wordLimit = 50

  const getWords = (text) => {
    const words = text.trim().split(' ')
    return words.slice(0, wordLimit).join(' ')
  }

  return (
    <>
      {/* Main Container */}
      <div className='flex flex-col justify-center items-center p-8'>
        {/* Posts Container */}
        <div className='w-full lg:w-[1024px]'>
          {posts.length > 0 &&
            posts.map(
              (post) =>
                post.slug && (
                  <div key={post._id} className='flex flex-col p-4 w-full'>
                    {/* Image Container */}
                    <div className='rounded-2xl drop-shadow-md bg-slate-100 overflow-hidden w-full h-80 my-4'>
                      <Link href={`/post/${encodeURIComponent(post.slug)}`}>
                        <Image
                          className='relative object-cover w-full h-full hover:scale-110 hover:opacity-80 transition-all duration-300'
                          src={post.mainImage}
                          width={1000}
                          height={1000}
                          alt={post.title}
                          style={{ objectPosition: '50% 50%' }}
                        />
                      </Link>
                    </div>
                    {/* Text Container */}
                    <div className='flex flex-col gap-y-4 font-poppins h-full w-full'>
                      <Link href={`/post/${encodeURIComponent(post.slug)}`}>
                        <h1 className='font-poppins font-bold text-2xl uppercase'>
                          {post.title}
                        </h1>
                      </Link>
                      <h3 className='font-base text-xl'>
                        {new Date(post.publishedAt).toLocaleDateString(
                          'en-GB',
                          {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </h3>
                      <p className='font-normal text-md'>
                        {getWords(post.body[0].children[0].text)}
                        {post.body[0].children[0].text.split(' ').length >
                          wordLimit && '...'}
                      </p>
                      {/* CTA */}
                      <Link href={`/post/${encodeURIComponent(post.slug)}`}>
                        <div className='flex justify-center items-center gap-x-2 rounded-2xl drop-shadow-md bg-lime-green w-40 h-10 hover:scale-95 transition-transform duration-300'>
                          <span className='font-bold uppercase'>Read more</span>
                          {/* <FaArrowRight className='hidden group-hover:inline-block' /> */}
                        </div>
                      </Link>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </>
  )
}

export default Posts
