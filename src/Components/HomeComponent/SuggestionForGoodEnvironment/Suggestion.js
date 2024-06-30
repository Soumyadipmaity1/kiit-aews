
import AccordionStyle from "./AccordionStyle";

export default function FAQ() {
	return (
		<div className="my-14  sm:px-5 lg:px-16 2lg:px-20 xl:px-36 bg-white">
			<h2 className='text-center text-3xl sm:text-[34px] lg:text-[36px] text-[#127240] font-bold sm:mb-8 px-5 '>
				Frequently Asked Questions
			</h2>
			<div className="flex-col items-center sm:grid lg:grid-cols-2 sm:flex-1 sm:justify-center flex  justify-center px-5 lg:p-2 ">
				<div className="my-5 flex-1  mx-auto m-2 2lg:w-[500px]" >
					<div className='relative pt-2'>
						
                <img  src="https://images.unsplash.com/photo-1611003229186-80e40cd54966?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhYnklMjBhbmltYWxzfGVufDB8fDB8fHww" 
							alt='image'
							className='w-full h-auto rounded-lg shadow-lg'
						/>
					
					</div>
				</div>
				<div className=" px-2 mx-auto text-  sm:w-[550px] lg:w-[440px] xl:w-[580px] 2lg:w-auto py-2 sm:pt-8 lg:pt-5 2lg:pt-5 " >
					<AccordionStyle />
				</div>
			</div>
		</div>
	);

}