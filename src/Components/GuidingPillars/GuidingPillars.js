import bgImage from "./demoPic.png"


export default function GuildingPillars() {
    return (
        <div class="bg-[#ff5b13]  m-4 w-80 py-4 px-2  border-2 border-blue-900 hover:border-2  hover:border-indigo-500  rounded-2xl my-20 transform hover:scale-110 transition-transform duration-500">
        <div class="flex justify-center -mt-20">
            <img
                class="w-28 h-28 object-cover rounded-full border-4 border-indigo-500"
                src={bgImage}
            />
        </div>
        <div class="text-center  pt-2">
            <p class="py-4 text-sm font-extralight text-gray-200">
                lorem ipsum dolor sit amet, consectetur adipiscing
                lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
        
        </div>
        <div class="flex justify-center -mb-20">
            <img
                class="w-28 h-28 object-cover rounded-full border-4 border-indigo-500"
                src={bgImage}
            />
        </div>
        
    </div>
    )
}        