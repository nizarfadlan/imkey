import RootLayout from '@/app/layout'
import Header from '@/components/Root/Header'
import BlogCard from '@/components/Root/BlogCard'
import Link from 'next/link';

export default function Blog() {
  return (
    <RootLayout>
      <section id="blog" className="relative mt-32 mb-16 mx-6 md:mx-24 lg:mx-36">
        <Header tipe="page" title="Blog" desc="Collection of articles from IMKEY" />
        <div className="search-container absolute flex justify-center -mt-7 z-10 w-full">
          <div className="flex items-center max-w-lg w-full bg-white rounded-3xl p-4 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-700 px-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input className="bg-transparent pl-2 pr-4 outline-none border-none w-full" type="search" name="search" placeholder="Search" />
          </div>
        </div>
        <div className="category-container flex flex-row mt-20 items-center justify-center space-x-5 text-sm">
          <Link href="#" className="bg-primary2 text-white px-8 py-2 rounded-full font-semibold active">All</Link>
          <Link href="#" className="px-4 rounded-full">Teknologi</Link>
        </div>
        {/* <BlogCard data="" /> */}
      </section>
    </RootLayout>
  )
}
