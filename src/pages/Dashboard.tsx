import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Statcard from "../components/Statcard";
import Usertable from "../features/users/Usertable";
import { UserData } from "../features/users/UserData";


const Dashboard = () => {

    const [isDarkmode, steIsDarkmode] = useState(false);
    const [isSideBar, steSideBar] = useState(false);

    return (
        <div className="min-h-screen md:gap-8 md:flex md:flex-cols-4 ml-2">
            <button className="boutton hover:ring-2 hover:bg-black/50 hover:text-white hover:font-bold hover:scale-105 hover:ring-blue-700 ring-1 fixed top-2 z-10 backdrop-blur-xl font-bold rounded-full ring-black p-2"
                onClick={() => {
                    steSideBar(!isSideBar);
                    
                }}
            >
                <i className={`${isSideBar ? "fas fa-times" : "fas fa-bars"}`}></i>
            </button>
            <Sidebar isDarkMode={isDarkmode} isSideBar={isSideBar} toggleDarkMode={() => steIsDarkmode(!isDarkmode)} />

            <div className={`${isDarkmode ? "bg-gray-700" : "bg-white "}`} >
                <Navbar />
                <div className="mt-6 grid px-6 gap-6 md:grid-cols-3 md:px-1 ">
                    <Statcard icon="fas fa-users text-blue-700" titre="Utilisateurs" valeur="1.20" />
                    <Statcard icon="fas fa-money-bill-wave text-green-500" titre="Revenu" valeur="$8.50" />
                    <Statcard icon="fas fa-shopping-cart text-orange-700" titre="Commande" valeur="320" />

                </div>
                <Usertable users={UserData} />
            </div>

        </div>
    )
}

export default Dashboard;