import BlogsContent from "../../Components/BlogComponent/BlogsContent";
export default function Blog() {
    return (
        <div>
            <div className=' mx-auto BlogStartBg'>
                
                <h1 className='sm:text-6xl text-5xl  text-center font-bold font-serif flex items-center justify-center text-white textBlog pt-[18vh]'>Student Blogs</h1>
                {/* <h2 className='text-white text-center text-md textBlog mt-10 font-sans'>
                <a href="/">Home</a> &gt; <a href="/blogs">Blog</a>

                </h2> */}
                </div>
                <div className="py-10">
                <h1 className='lg:text-4xl text-3xl text-center   mx-auto font-semibold  pb-4 lg:pb-6'>Latest Blogs Post</h1>
                <div className='lg:w-60 w-52 border-[2px] mx-auto border-green-500 mb-14 lg:border-[3.5px] rounded'></div>

               <BlogsContent />
           


            </div>
        </div>
    );
}