import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Statcard from "../components/Statcard";
import Usertable from "../features/users/Usertable";
import { UserData } from "../features/users/UserData";
import AddUserModal from "../features/users/AddUserModal";
import { type User } from "../features/users/Type";


const Dashboard = () => {

    const [isDarkmode, setIsDarkmode] = useState(false);
    const [isSideBar, setSideBar] = useState(false);
    const [addUser, setAddUser] = useState(false);
    const [users, setUsers] = useState<User[]>(UserData)
    // const [users, setUsers] = useState<User>(()=>{
    //     const saved = localStorage.getItem("users");
    //     return saved ? JSON.parse(users) : UserData;
    // });

    // useEffect(()=>{
    //     localStorage.setItem("users", JSON.stringify(users))
    // },[users]);

    const totalusers = users.length;
    const active = users.filter((u)=>u.statut.toLowerCase() === "active").length;
    const inactive = users.filter((u)=>u.statut.toLowerCase() === "inactive").length;

    const handleAddUser = (newUser: Omit<User, "id">) => {

    const userWithId: User = {
      ...newUser,
      id: Date.now()
    }

    setUsers((prevUsers) => [...prevUsers, userWithId])
  }


    return (
        <div className="min-h-screen md:gap-8 md:flex md:flex-cols-4 ml-2">
            <button className="boutton hover:ring-2 hover:bg-black/50 hover:text-white hover:font-bold hover:scale-105 hover:ring-blue-700 ring-1 fixed top-2 z-10 backdrop-blur-xl font-bold rounded-full ring-black p-2"
                onClick={() => {
                    setSideBar(!isSideBar);
                    
                }}
            >
                <i className={`${isSideBar ? "fas fa-times" : "fas fa-bars"}`}></i>
            </button>
            <Sidebar isDarkMode={isDarkmode} isSideBar={isSideBar} toggleDarkMode={() => setIsDarkmode(!isDarkmode)} />

            <div className={`${isDarkmode ? "bg-gray-700" : "bg-white "}`} >
                <Navbar setOpen={() => setAddUser(true)}/>
                {addUser && <AddUserModal onClose={()=>setAddUser(false)} onAdd={handleAddUser}/>}
                <div className="mt-6 grid px-6 gap-6 md:grid-cols-3 md:px-1 ">
                    <Statcard icon="fas fa-users  text-blue-700" titre="Total Utilisateurs" valeur={totalusers} />
                    <Statcard icon="fas fa-user text-green-500" titre="Actif" valeur={active} />
                    <Statcard icon="fas fa-user text-gray-700" titre="Inactif" valeur={inactive} />

                </div>
                <Usertable users={users} />
            </div>

        </div>
    )
}

export default Dashboard;