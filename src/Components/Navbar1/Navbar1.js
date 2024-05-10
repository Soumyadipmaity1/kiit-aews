




export default function Navbar1(){

return(

<section className="px-10  py-2 w-[100%] bg-green-500 text-white">
    <div className="flex  ">
   <div className=" mx-2 text-white  font-semibold  flex justify-center items-center text-center"><box-icon name='phone' color='white'  type='solid' animation='tada' ></box-icon><a className="text-sm  mx-1.5" href="tel:+9641208005"> 
9641208005</a></div> 
<div className=" mx-2 text-white  font-semibold flex justify-center items-center text-center"><box-icon name='mail-send' color='white' animation='flashing' flip='horizontal' ></box-icon><a className="text-sm  mx-1.5" href="mailto:recipient@example.com">kaews@gmail.com</a></div>

    </div>
    <div>

    </div>
</section>

);

}