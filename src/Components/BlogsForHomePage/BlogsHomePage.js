
const blogData = [
  {
    date: "April 7, 2024",
    author: "Raj Bose",
    title: "The Ultimate Guide to Pet Care: Tips and Tricks for Every Pet Owner",
    imgSrc: "https://cdn.pixabay.com/photo/2023/12/22/20/57/ai-generated-8464364_1280.jpg"
  },
  {
    date: "May 10, 2024",
    author: "Alice Smith",
    title: "10 Healthy Recipes for a Balanced Diet",
    imgSrc: "https://static.independent.co.uk/2023/12/19/16/Hero_3_2%20image.png?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp"
  },
    {
        date: "June 15, 2024",
         author: " Christian Brown",
        title: "The Best Workouts for a Healthy Lifestyle",
        imgSrc:"https://i.cdn.newsbytesapp.com/images/l20720220204120901.jpeg",
    },
    {
        date: "April 7, 2024",
        author: "Raj Bose",
        title: "The Ultimate Guide to Pet Care: Tips and Tricks for Every Pet Owner",
        imgSrc: "https://cdn.pixabay.com/photo/2023/12/22/20/57/ai-generated-8464364_1280.jpg"
      },
];

const BlogPost = ({ date, author, title, imgSrc }) => (
  <section className="w-80 h-96 rounded-xl mx-auto m-5 bg-slate-200 hover:shadow-lg">
    <div className="hover:text-green-600  h-96 border-2 border-green-500 shadow-md shadow-green-600 bg-white rounded-xl">
      <img className="w-80 rounded-t-[8px] h-56" src={imgSrc} alt="blogImage" />
      <div className="flex p-4 justify-between font-bold text-gray-400 text-[12px]">
        <h4 className="px-3">{date}</h4>
        <h4 className="px-3">{author}</h4>
      </div>
      <div className="px-5 pb-7 text-[18px] cursor-pointer font-semibold">
        <h3>{title}</h3>
      </div>
    </div>
  </section>
);

const BlogsForHome = () => (
  <div className="flex flex-wrap">
    {blogData.map((post, index) => (
      <BlogPost
        key={index}
        date={post.date}
        author={post.author}
        title={post.title}
        imgSrc={post.imgSrc}
      />
      
    ))}
  </div>
);

export default BlogsForHome;
