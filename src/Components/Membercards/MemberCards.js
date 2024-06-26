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
            <nav className="flex justify-center  sm:p-10 p-4 font-bold  ">
            <div className="mr-4 font-bold">
                    <button
                        className={`btn btn-danger p-1 sm:px-5 px-4  team-switch-border  sm:text-xl  font-bold border-2 border-black rounded-3xl ${activeTab === 1
                            ? "text-white   bg-green-500 font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(1)}
                    >General Volunteers
                    </button>
                </div>{" "}
                <div className="mr-4 font-bold">
                    <button
                        className={`btn btn-danger p-1 sm:px-5 px-4  team-switch-border  sm:text-xl  font-bold border-2 border-black rounded-3xl ${activeTab === 2
                            ? "text-white bg-green-500 font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(2)}
                    >Public Relation
                    </button>
                </div>{" "}
                <div className="mr-4 font-bold">
                    <button
                        className={`btn btn-danger p-1 sm:px-5 px-4  team-switch-border  sm:text-xl  font-bold border-2 border-black rounded-3xl ${activeTab === 3
                            ? "text-white bg-green-500 font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(3)}
                    >Research & Development
                    </button>
                </div>{" "}
                <div className="mx-4">
                    <button
                        className={`btn btn-danger p-1 sm:px-5 px-4  team-switch-border sm:text-xl  font-bold  border-2 border-black rounded-3xl ${activeTab === 4
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
