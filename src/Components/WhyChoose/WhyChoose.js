const ChooseUsimage = 'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg'

export default function WhyChoose() {
    return (
        <section className="flex mt-20">
            
            <div className="w-my-auto text-justify ">

                <div className="flex mb-5 ">
                    <div className="flex w-1/2  m-4 mx-4">
                        <div className="bg-green-500 rounded-full text-center  item-center flex m-5 h-[68px] p-3 text-white ">
                            <i class='bx bxs-first-aid text-[45px]   '></i>
                        </div>
                        <div>
                            <h3 className="py-1 text-[22px] text-[#00ff6a]  font-bold">Platform for a noble cause</h3>
                            <p className="text-gray-100">
                            Join KIIT AEWS and become a powerful voice for environment and the animals. Contribute fresh ideas, actively participate in impactful projects, seminars, workshops, campaigns, etc and be part of shaping a more sustainable tomorrow.

                            </p>
                        </div>
                    </div>
                    <div className="flex w-1/2 m-4 mx-4">
                        <div className="bg-green-500 rounded-full text-center  item-center flex m-5 h-[68px] p-3 text-white ">
                            <i class='bx bxs-first-aid text-[45px]   '></i>
                        </div>
                        <div>
                            <h3 className="py-1 text-[22px] text-[#00ff6a]  font-bold">Fast Delivery</h3>
                            <p className="text-gray-100">
                            Enjoy a vibrant community atmosphere with fun activities, games, social gatherings, and bonding experiences with fellow members. KIIT AEWS isn't just about hard work! We offer engaging activities, informative events, and a supportive community that makes a difference while having fun.


                            </p>
                        </div>
                    </div>

                </div>
                <div className="flex mt-5 my-8 ">
                    <div className="flex w-1/2 m-4 mx-4">
                        <div className="bg-green-500 rounded-full text-center  item-center flex m-5 h-[68px] p-3 text-white ">
                            <i class='bx bxs-first-aid text-[45px]   '></i>
                        </div>
                        <div>
                            <h3 className="py-1 text-[22px] text-[#00ff6a]  font-bold">Fast Delivery</h3>
                            <p className="text-gray-100">
                            Develop leadership skills and hone valuable skills like communication, teamwork, problem-solving, etc through collaborative projects in a supportive environment. Everyone's ideas are welcome here!. We offer opportunities in both technical and non-technical departments (webdev, graphic design, R&D, video editing, etc). Our highly active community fosters inclusivity, where you can contribute fresh ideas, actively participate in meaningful projects and be part of shaping a more sustainable tomorrow.

                            </p>
                        </div>
                    </div>
                    <div className="flex w-1/2 m-4 mx-4">
                        <div className="bg-green-500 rounded-full text-center  item-center flex m-5 h-[68px] p-3 text-white ">
                            <i class='bx bxs-first-aid text-[45px]   '></i>
                        </div>
                        <div>
                            <h3 className="py-1 text-[22px]  text-[#00ff6a] font-bold">Fast Delivery</h3>
                            <p className="text-gray-100">
                            Connect with like-minded individuals, professionals and NGOs in the field of animal welfare and environmental conservation. Enhance your resume with practical experience in project management, event planning, fundraising, or other relevant areas. Active participation strengthens your resume and demonstrates your commitment to causes beyond academics.
                                </p>
                        </div>
                    </div>

                </div>
            </div >
            {/* <div className=" w-4/12 mt-20">
                <img className='' src={ChooseUsimage} ></img>
            </div> */}
        </section >
    );
}