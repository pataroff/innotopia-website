import Link from 'next/link'
import Image from 'next/image'

const Posts = ({ posts }) => {
  const wordLimit = 5

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
              (post, index) =>
                post.slug && (
                  <div key={post._id} className='flex flex-col p-4 w-full'>
                    {/* Image Container */}
                    <div className='w-full h-80 mb-4'>
                      <Link href={`/post/${encodeURIComponent(post.slug)}`}>
                        <Image
                          className='w-full h-full object-cover rounded-2xl'
                          src={post.mainImage}
                          width={1000}
                          height={1000}
                          alt={post.title}
                          style={{ objectPosition: '50% 50%' }}
                        />
                      </Link>
                    </div>
                    {/* Text Container */}
                    <div className='flex flex-col gap-y-2 font-poppins h-full w-full'>
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
                      <p className='font-light text-md'>
                        {getWords(post.body[0].children[0].text)}
                        {post.body[0].children[0].text.split(' ').length >
                          wordLimit && '...'}
                      </p>
                      {/* CTA */}
                      <Link href={`/post/${encodeURIComponent(post.slug)}`}>
                        <div className='flex justify-center items-center rounded-2xl bg-lime-green w-40 h-10'>
                          <span className='font-bold uppercase text-sm'>
                            Read more
                          </span>
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
