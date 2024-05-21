import { position } from 'stylis';
import image from './photo_2024-05-14_17-42-08.jpg'



const blogData = [
    // {
    //   date: "April 7, 2024",
    //   author: "Raj Bose",
    //   title: "The Ultimate Guide to Pet Care: Tips and Tricks for Every Pet Owner",
    //   imgSrc: "https://cdn.pixabay.com/photo/2023/12/22/20/57/ai-generated-8464364_1280.jpg"
    // },
    // {
    //   date: "May 10, 2024",
    //   author: "Alice Smith",
    //   title: "10 Healthy Recipes for a Balanced Diet",
    //   imgSrc: "https://static.independent.co.uk/2023/12/19/16/Hero_3_2%20image.png?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp"
    // },
      {
          Words: " As a member, I wholeheartedly support our society's mission, advocating for animal welfare and making a meaningful impact in our community.",
           position: "Web Lead",
          title: "Soumyadip Maity",
          imgSrc:"https://i.cdn.newsbytesapp.com/images/l20720220204120901.jpeg",
      },
    //   {
    //       date: "April 7, 2024",
    //       author: "Raj Bose",
    //       title: "The Ultimate Guide to Pet Care: Tips and Tricks for Every Pet Owner",
    //       imgSrc: "https://cdn.pixabay.com/photo/2023/12/22/20/57/ai-generated-8464364_1280.jpg"
    //     },
  ];
  
  const BlogPost = ({ Words, position, title, imgSrc }) => (
      <div className="w-80 m-5 h-auto p-2 bg-slate-white shadow-md   hover:text-white hover:bg-[#24c160] border-2 border-green-600 rounded-xl ">
        <div className='relative overflow-hidden'>
        <img
          className="w-full rounded-t-[8px] h-56 transition-transform duration-300 transform hover:scale-110"
          src={imgSrc}
          alt="blogImage"
        />
        </div>
        <div className="p-5  cursor-pointer">
          <h3 className="text-center font-bold text-[20px]">{title}</h3>
          <h4 className="text-center text-orange-600 font-semibold">{position}</h4>
          <h4 className="text-sm">{Words}</h4>
        </div>
      </div>
  );
  
  
  
  const BlogsForHome = () => (
    <div className="xl:w-4/12 md:w-6/12 w-full">
    <div className="team_main_bop_wrapper bg-[#2C3A47] m-2 pb-6 px-2 pt-2 rounded-lg h-[400px] duration-200 delay-75">
        <div className="image h-[300px] overflow-hidden  rounded-2xl bg-slate-600">
            <img className='w-full duration-200 delay-100' src={image} alt="image" />
        </div>
        <div className="txt p-2">
            <div className="name">
                soumyadip
            </div>
            <div className="position">
webdev            </div>
        </div>
    </div>
</div>
  );
  
  export default BlogsForHome;
  