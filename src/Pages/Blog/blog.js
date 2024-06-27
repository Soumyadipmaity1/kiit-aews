import BlogsForHome from "../../Components/BlogsForHomePage/BlogsHomePage";
import Blogimg from './blogstart4.svg'
export default function Blog() {
    return (
        <div>
            <div className=' mx-auto BlogStartBg'>
                
                <h1 className='text-6xl text-center font-bold font-serif text-white textBlog pt-[18vh]'>Student Blogs</h1>
                <h2 className='text-white text-center text-md textBlog mt-10 font-sans'>
                <a href="/">Home</a> &gt; <a href="/blogs">Blog</a>

                </h2>
                </div>
                <div className="py-10">
                <h1 className='text-4xl text-center   mx-auto font-semibold   pb-6'>Latest Blogs Post</h1>
                <div className='w-60 mx-auto border-green-500 mb-14 border-[3.5px] rounded'></div>

                <BlogsForHome />
           


            </div>
        </div>
    );
}