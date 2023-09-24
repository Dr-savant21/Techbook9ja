import Image from 'next/image'
import Navbar from './components/Navbar'
<<<<<<< HEAD
import Footer from './components/footer'
=======
import BlogCard from './components/BlogCard'
import AuthorCard from './components/AuthorCard'
>>>>>>> 32d5446c7bbfadc7a8c04c3855d7c1d82ea963cf

export default function Home() {

  return (
    <main className="">
      <Navbar />
      {/*  */}
      <div className='px-14 py-20 md:flex flex-row '>
        {/* Left Half */}
        <div className='md:w-2/3 space-y-10'>
          {/* Blog Components */}
          <h1 className=' text-green-300 font-semibold text-2xl decoration-double underline decoration-green-300'>FEATURED THIS MONTH</h1>
          <BlogCard />

          <BlogCard />        

        </div>
        {/* Right half */}
        <div className='md:ml-20 space-y-10'>
          <h1 className=' text-blue-300 font-semibold text-2xl decoration-double underline decoration-blue-300'>Popular Authors THIS MONTH</h1>
          <AuthorCard />

        </div>
      </div>
      
      <Footer />
    </main>
  )
}
