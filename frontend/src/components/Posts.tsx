import Link from 'next/link'

const Posts = ({ posts }) => {
  return (
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
  )
}

export default Posts
