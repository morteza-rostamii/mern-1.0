import Sockets from '@/components/Sockets';
import Image from 'next/image'

async function getBlogs() {
  
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log('-------', url)
  const response = await fetch(`${url}/api/blogs`);
  const data = await response.json();

  return data.blogs;
  console.log(data)
}

export default async function Home() {

  const blogs = await getBlogs();

  return (
    <main>
      my website!!
      <Sockets/>
      {
        blogs && blogs.length &&
        blogs.map(b => {
          return <p>{b.title}</p>
        })
      }
    </main>
  )
}
