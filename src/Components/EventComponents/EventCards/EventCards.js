const EventCard = ({ title, date, details, motive }) => {
    return (
      <div className="lg:w-3/5  p-0 sm:p-4  ">
        <ul className="lg:flex   items-end justify-between">
        <h1 className="text-4xl text font-bold text-center  text-white py-2 ">{title}</h1>

          <li className="font-bold text-center  p-2 text-gray-400">{date}</li>
 </ul>
 <p className=" py-3 text-xl text-center lg:text-start font-semibold text-yellow-400">{motive}</p>

        <p className=" text-justify text-slate-200">{details}</p>
      </div>
    );
  };
  
  export default EventCard;
  