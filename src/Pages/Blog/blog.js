import BlogsForHome from "../../Components/BlogsForHomePage/BlogsHomePage";
import Blogimg from './blogstart4.svg'
export default function Blog() {
    return (
        <div>
            <div className=' mx-auto'>
                <img className='w-[100%] ' src={Blogimg} alt='' />
                <h1 className='text-6xl text-center   xl:-mt-[490px] 2lg:-mt-[435px] font-bold   pb-6'>Student Blogs</h1>
                </div>
                <div className="px-24 py-10 pb-40">
                <h1 className='text-4xl text-center   mx-auto font-semibold mt-[480px]  pb-6'>Latest Blogs Post</h1>
                <div className='w-60 mx-auto border-green-500 mb-14 border-[3.5px] rounded'></div>

                <BlogsForHome />
           


            </div>
        </div>
    );
}