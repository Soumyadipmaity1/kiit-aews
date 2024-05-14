




export default function Navbar1(){

return(

<section className="px-20  w-[100%] bg-green-500 text-white flex justify-between">
    <div className="flex  ">
   <div className=" mx-2 text-white  font-semibold  flex justify-center items-center text-center"><box-icon name='phone' color='white'  type='solid' animation='tada' ></box-icon><a className="text-base  mx-1.5" href="tel:+9641208005"> 
9641208005</a></div> 
<div className=" mx-2 text-white  font-semibold flex justify-center items-center text-center"><box-icon name='mail-send' color='white' animation='flashing' flip='horizontal' ></box-icon><a className="text-base  mx-1.5" href="mailto:recipient@example.com">kaews@gmail.com</a></div>

    </div>
    <div className="flex">
    <i class='bx bxl-instagram text-[26px] px-3 text-white  hover:text-black bg-green-500 rounded-full p-2 ' ></i>            
    <i class='bx bxl-twitter text-[26px] px-3 text-white  hover:text-black bg-green-500 rounded-full p-2 ' ></i>            
            <i class='bx bxl-wordpress text-[26px] px-3 text-white  hover:text-black bg-green-500 rounded-full p-2 ' ></i>            
            <i class='bx bxl-linkedin text-[26px] px-3 text-white  hover:text-black bg-green-500 rounded-full p-2 ' ></i>            

    </div>
</section>

);

}