
import Image from 'next/image'
import Link from 'next/link'
import PostItem from './components/PostItem'
export default function Home() {
  return (
    <main>
      <div className="center">
        <h3>Home Page</h3>
        <Link href="/posts">Posts</Link>
      </div>
     
    </main>
  )
}
