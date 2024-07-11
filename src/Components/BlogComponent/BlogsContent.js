import React, { useState } from "react";

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
    {
        date: "July 3, 2024",
        author: " Soumyadip Maity",
        title: "Remal Cyclone: An In-Depth Look at Its Aftermath",
        imgSrc: "https://static.india.com/wp-content/uploads/2024/05/cyclone-remal-2.jpg?impolicy=Medium_Widthonly&w=400",
        url: "https://blog92804.wordpress.com/2024/07/03/remal-cyclone-an-in-depth-look-at-its-aftermath/"
      },
    {
        date: "July 1, 2024",
        author: " Arin Kishore ",
        title: "The Silent Crisis: Ocean Acidification and Its Impacts",
        imgSrc: "https://cff2.earth.com/uploads/2023/03/29081610/Ocean-acidification-scaled.jpg",
        url: "https://blog92804.wordpress.com/2024/07/01/the-silent-crisis-ocean-acidification-and-its-impacts/"
      },
    {
        date: "June 28, 2024",
        author: " Aadhya & Divya ",
        title: "Beyond Mitigation: Embracing  Adaption in Warmer Climate",
        imgSrc: "https://media.licdn.com/dms/image/D4E12AQF4924nATgRSA/article-cover_image-shrink_720_1280/0/1719049259742?e=2147483647&v=beta&t=babJ2HqG5UJ29itN4bxX6nsyXh1q-0TGd_eAluTLUoc",
        url: "https://blog92804.wordpress.com/2024/06/28/beyond-mitigation-embracing-adaption-in-warmer-climate/"
      },
    {
        date: "June 26, 2024",
        author: " Shruti Sinha",
        title: "The Drastic Impact of Global Warming on India ",
        imgSrc: "https://static.scientificamerican.com/sciam/cache/file/C615427C-06DF-4750-B736BD308BEF6819_source.jpg?w=600",
        url: "https://blog92804.wordpress.com/2024/06/26/the-drastic-impact-of-global-warming-on-india/"
      },
    {
        date: "June 20, 2024",
        author: " Sukriti",
        title: "Global Warming: The Silent Killer of Our Planet ",
        imgSrc: "https://newsindiaguru.com/wp-content/uploads/2022/03/gw1.jpeg",
        url: "https://blog92804.wordpress.com/2024/06/20/global-warming/"
      },
    {
        date: "June 1, 2024",
        author: " Divya",
        title: "Tiny Plants, Big Impact: The Sustainable Benefits of Indoor Plants",
        imgSrc: "https://www.thestatesman.com/wp-content/uploads/2023/09/markus-spiske-4PG6wLlVag4-unsplash.jpg",
        url: "https://blog92804.wordpress.com/2024/06/01/tiny-plants-big-impact-the-sustainable-benefits-of-indoor-plants/"
      },
    {
        date: "May 23, 2024",
        author: "Pritha Das",
        title: "Versatile bamboo of Tripura: A pillar of sustainability and cultural Heritage",
        imgSrc: "https://www.villagesquare.in/wp-content/uploads/2024/03/02-Pic-1-1.jpg",
        url: "https://blog92804.wordpress.com/2024/05/23/versatile-bamboo-of-tripura-a-pillar-of-sustainability-and-cultural-heritage/"
      },
    {
        date: "May 19, 2024",
        author: "Aadhya Shrivastava",
        title: "Beyond the Picturesque: The dark side of hillside Tourism",
        imgSrc: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/visit-Mussoorie-hill-station-in-India.jpg?tr=w-400",
        url: "https://blog92804.wordpress.com/2024/05/19/beyond-the-picturesque-the-dark-side-of-hillside-tourism/"
      },
      {
        date: "May 13, 2024",
        author: "Arin Kishore",
        title: "Say Yes to Ethical Beauty: Why Cruelty-Free Makeup Matters",
        imgSrc: "https://media.licdn.com/dms/image/D4D12AQFbs9aobIeSOw/article-cover_image-shrink_720_1280/0/1705928250702?e=2147483647&v=beta&t=xB5i9Wn9EGED_IPT2EmdfKqI7GRjkvEEvEZVuYr28BU",
        url: "https://blog92804.wordpress.com/2024/05/13/say-yes-to-ethical-beauty-why-cruelty-free-makeup-matters/"
      },
    {
      date: "May 9, 2024",
      author: "Om Anand",
      title: "Guardians of the Coast: Preserving India’s Olive Ridley Sea Turtles in Odisha",
      imgSrc: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/05/Feature-image-Olive-Ridley.jpg",
      url: "https://blog92804.wordpress.com/2024/05/09/guardians-of-the-coast-preserving-indias-olive-ridley-sea-turtles-in-odisha/"
    },
    {
        date: "May 2, 2024",
        author: "Aadhya Shrivastava",
        title: "Embracing Uniqueness: The Joy of Adopting Indie Pets",
        imgSrc: "https://media.zenfs.com/en/dog_time_927/d730fdcdba19eb71b11ed95973f263ca",
        url: "https://blog92804.wordpress.com/2024/05/02/embracing-uniqueness-the-joy-of-adopting-indie-pets/"
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
  
  const BlogsContent = () => {
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
  
  export default BlogsContent;
