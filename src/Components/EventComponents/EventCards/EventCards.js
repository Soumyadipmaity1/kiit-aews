const EventCard = ({ title, date, details }) => {
    return (
      <div className="  p-4  ">
        <ul className="flex   p-5 items-end justify-between">
        <h1 className="text-4xl px-5 text font-bold text-center  text-white p-2 ">{title}</h1>

          <li className="font-bold text-center  p-2 text-gray-400">{date}</li>
 </ul>
        <p className="p-5 text-yellow-200">{details}</p>
      </div>
    );
  };
  
  export default EventCard;
  