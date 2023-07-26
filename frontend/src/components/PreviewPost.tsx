import Link from 'next/link'
import { usePreview } from '../lib/sanity.preview'
import Post from './Post'

export default function PreviewPost({
  query,
  params,
  renderableContent,
  meta,
}) {
  const data = usePreview(null, query, params)

  return (
    <>
      <Post post={data} renderableContent={renderableContent} meta={meta} />
      <Link
        className='bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0'
        href='/api/exit-preview'
      >
        Exit Preview
      </Link>
    </>
  )
}
