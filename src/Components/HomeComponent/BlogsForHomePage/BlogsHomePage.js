import { useState } from "react";
const blogData = [
  {
    date: "July 9, 2024",
    author: "Shiven Sisodia",
    title: "From Barks to Tail Wags: The Secrets of Dog Behavior",
    imgSrc: "https://thevillagevets.com/wp-content/uploads/2022/02/dog-tail-wagging.jpg",
    url: "https://blog92804.wordpress.com/2024/07/09/from-barks-to-tail-wags-the-secrets-of-dog-behavior/"
  },
  {
    date: "July 8, 2024",
    author: "Aditi & Soumyadip",
    title: "Rising Seas, Changing Habitats: How Sea Level Rise Affects Coastal Animals & Environments",
    imgSrc: "https://marine.copernicus.eu/sites/default/files/media/image/2023-10/Ocean_Warming_1.png",
    url: "https://blog92804.wordpress.com/2024/07/08/rising-seas-changing-habitats-how-sea-level-rise-affects-coastal-animals-and-environments/"
  },
    {
        date: "July 5, 2024",
        author: "Shruti Sinha",
        title: "Government Subsidy on Solar Panels: Reducing Carbon Footprints in Every Household",
        imgSrc: "https://cdn.gobankingrates.com/wp-content/uploads/2019/01/solar-panels-on-home-room-iStock-985363900.jpg",
        url: "https://blog92804.wordpress.com/2024/07/05/government-subsidy-installation-of-solar-panels-moving-towards-minimal-carbon-footprints-in-every-household/"
      },
];


const BlogPost = ({ date, author, title, imgSrc, url }) => (
  <section className="w-[320px] rounded-xl m-4 bg-slate-200 hover:shadow-lg">
    <a href={url} className="hover:text-green-600">
      <div className="h-96 border-2 border-green-500 shadow-md shadow-green-600 bg-white rounded-xl">
        <img className="w-80 rounded-t-[8px] h-56" src={imgSrc} alt="blogImage" />
        <div className="flex p-4 justify-between font-bold text-gray-400 text-[12px]">
          <h4 className="px-3">{date}</h4>
          <h4 className="px-3">{author}</h4>
        </div>
        <div className="px-5 pb-7 text-[18px] cursor-pointer font-semibold">
          <h3>{title}</h3>
        </div>
      </div>
    </a>
  </section>
);

const BlogHome = () => {
  const [visiblePosts, setVisiblePosts] = useState(10);

  const showMorePosts = () => {
    setVisiblePosts(prev => prev + 10);
  };

  return (
    <div className="">
    <div className="flex flex-wrap justify-center">
      {blogData.slice(0, visiblePosts).map((post, index) => (
        <BlogPost
          key={index}
          date={post.date}
          author={post.author}
          title={post.title}
          imgSrc={post.imgSrc}
          url={post.url}
        />
      ))}
      </div>
<div className="flex justify-center">
{visiblePosts < blogData.length && (
        <button
          onClick={showMorePosts}
          className="mt-8 px-4 py-2 text-center font-bold  bg-green-500 text-white rounded-lg hover:bg-green-700"
        >
          Read More
        </button>
      )}
</div>
    </div>
  );
};

export default BlogHome;
