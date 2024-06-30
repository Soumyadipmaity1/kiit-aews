import React, { useState } from "react";
import Leads from "../Leads/LeadsCard";
import MemberCards from "../Membercards/MemberCards";
import Coordinator from "../Coordinator/Coordinator";
import Asstcoordinator from "../AsstCoordinator/AsstCo";
function TabSwitchingComponent() {

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
                            ? "text-white bg-black font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(1)}
                    >Coordinators
                    </button>
                </div>{" "}
                <div className="mr-4 font-bold">
                    <button
                        className={`btn btn-danger p-1 sm:px-5 px-4  team-switch-border  sm:text-xl  font-bold border-2 border-black rounded-3xl ${activeTab === 2
                            ? "text-white bg-black font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(2)}
                    >Asst. Coordinators
                    </button>
                </div>{" "}
                <div className="mr-4 font-bold">
                    <button
                        className={`btn btn-danger p-1 sm:px-5 px-4  team-switch-border  sm:text-xl  font-bold border-2 border-black rounded-3xl ${activeTab === 3
                            ? "text-white bg-black font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(3)}
                    >Leads
                    </button>
                </div>{" "}
                <div className="mx-4">
                    <button
                        className={`btn btn-danger p-1 sm:px-5 px-4  team-switch-border sm:text-xl  font-bold  border-2 border-black rounded-3xl ${activeTab === 4
                            ? "text-white bg-black font-bold"
                            : "text-black bg-white font-bold"
                            } `}
                        onClick={() => handleTabClick(4)}
                    >Members
                    </button>
                </div>{" "}
            </nav>
            <div
                className="tabcontent bg-light"
                style={{ display: activeTab === 1 ? "block" : "none" }}
            >
                <Coordinator />
            </div>
            <div
                className="tabcontent bg-light"
                style={{ display: activeTab === 2 ? "block" : "none" }}
            >
                <Asstcoordinator />
            </div>
            <div
                className="tabcontent bg-light"
                style={{ display: activeTab === 3 ? "block" : "none" }}
            >
                <Leads />
            </div>
            <div
                className="tabcontent bg-light"
                style={{ display: activeTab === 4 ? "block" : "none" }}
            >
                <MemberCards />
            </div>
        </div>
    );
}

export default TabSwitchingComponent;
