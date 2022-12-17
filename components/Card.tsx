import Image from 'next/image'
import Link from 'next/link'

const Card = ({ post }: any) => {
  return (
    <div className='card card-compact w-full bg-base-100 shadow-xl mt-4 rounded-sm'>
      <figure className='relative w-full h-96 mb-2'>
        <Link href={`/posts/${post.id}`}>
          <Image
            src={post.src}
            alt='profileImage'
            fill
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </figure>
      <div className='card-body'>
        <Link href={`/posts/${post.id}`}>
          <h2 className='card-title'>{post.title}</h2>
          <p className='mt-2'>{post.desc}</p>
        </Link>
        <p className='mt-4 mb-2 text-gray-500'>{post.date}</p>
        <hr className='border-gray-700' />
        <div className='flex items-center mt-1'>
          <Image
            src={post.profileImg}
            alt='profileImage'
            width='24'
            height='24'
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
          <p className='ml-2 font-xs font-bold'>
            <span className='font-xs font-normal'>by</span> {post.author}
          </p>
          <div className='grow'></div>
          <span className='font-xs'>❤️ {post.likes}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
