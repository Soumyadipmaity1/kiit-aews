import React, { useState } from "react";
import GV from "./GV";
import PR from "./PR";
import RD from "./R&D";
import SocialMedia from "./SocialMedia";
function MemberCards() {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className=" ">
            <nav className="flex justify-center  sm:pb-10 pb-4 font-bold  ">
            <div className="lg:mr-4 sm:mr-1 mr-0.5 font-semibold lg:font-bold">
                    <button
                        className={` p-1 sm:px-5 px-2 text-[12px]    sm:text-xl  font-bold sm:border-2 border-[1px]  border-black rounded-md ${activeTab === 1
                            ? "text-white   bg-green-500 font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(1)}
                    >General Volunteers
                    </button>
                </div>{" "}
                <div className="lg:mr-4 sm:mr-1 mx-0.5 font-semibold lg:font-bold">
                    <button
                        className={` p-1 sm:px-5 px-2 text-[12px]    sm:text-xl  font-bold sm:border-2 border-[1px]  border-black rounded-md ${activeTab === 2
                            ? "text-white bg-green-500 font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(2)}
                    >Public Relation
                    </button>
                </div>{" "}
                <div className="lg:mr-4 sm:mr-1 mx-0.5 font-semibold lg:font-bold">
                    <button
                        className={` p-1 sm:px-5 px-2 text-[12px]    sm:text-xl  font-bold sm:border-2 border-[1px]  border-black rounded-md ${activeTab === 3
                            ? "text-white bg-green-500 font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(3)}
                    >R & D
                    </button>
                </div>{" "}
                <div className="lg:mx-4  ml-0.5">
                    <button
                        className={` p-1 lg:p-1 sm:px-5 px-2 text-[12px]   sm:text-xl  font-bold  sm:border-2 border-[1px]  border-black rounded-md ${activeTab === 4
                            ? "text-white bg-green-500 font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(4)}
                    >Social Media
                    </button>
                 </div>{" "}
            </nav>
            <div
                className="tabcontent bg-light"
                style={{ display: activeTab === 1 ? "block" : "none" }}
            >
                <GV />
            </div>
            <div
                className="tabcontent bg-light"
                style={{ display: activeTab === 2 ? "block" : "none" }}
            >
                <PR />
            </div>
            <div
                className="tabcontent bg-light"
                style={{ display: activeTab === 3 ? "block" : "none" }}
            >
                <RD />
            </div>
            <div
                className="tabcontent bg-light"
                style={{ display: activeTab === 4 ? "block" : "none" }}
            >
                <SocialMedia />
            </div>
        </div>
    );
}

export default MemberCards;
