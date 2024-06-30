
// import MemberCards from "../../Components/Membercards/MemberCards";
import MemberStart from "../../Components/MembersComponent/MembersStart";
import TabSwitchingComponent from "../../Components/MembersComponent/TabSwitching/TabSwitching";

 export default function Member() {
    return (


        <div>
            <MemberStart/>
               <div className="p-10 mx-auto flex justify-center">
            <TabSwitchingComponent />

        </div>
        </div>
     
    );
}