

type darkMode = {
    isDarkMode: boolean,
    isSideBar: boolean,
    toggleDarkMode: () => void
}

const Sidebar = ({ isDarkMode,isSideBar, toggleDarkMode }: darkMode) => {
    return (

        <div className={`w-50  ${isSideBar ? "sideBarToggle backdrop-blur-sm" : ""} z-20 sideBar h=[100vh] p-5 bg-white/3 shadow-gray-700 shadow-2xl ${isDarkMode ? "bg-white" : "bg-gray-700 "}`}>
            <h2 className="text-xl font-bold mb-6 text-center ">Nebula Admin</h2>
            <ul className="space-y-6">
                <li className="m-2 px-3 py-1 rounded text-left cursor-pointer hover:text-blue-600 hover:bg-gray-200">Dashboard</li>
                <li className="m-2 px-3 py-1 rounded text-left cursor-pointer hover:text-blue-600 hover:bg-gray-200"><i className="fas fa-user font-bold mx-2 text-blue-400 text-xl"></i> Utilisateurs</li>
                <li className="m-2 px-3 py-1 rounded text-left cursor-pointer hover:text-blue-600 hover:bg-gray-200"><i className="fas fa-gear mx-2 text-xl text-blue-600"></i>Paramètres</li>
                <li className="m-2 px-3 py-1 rounded text-left cursor-pointer hover:text-blue-600 hover:bg-gray-200" onClick={toggleDarkMode}><i className={isDarkMode ? "fa-solid fa-toggle-on text-xl text-green-500 mx-2" : "fa-solid fa-toggle-off text-xl mx-2"}></i> Nuit </li>
            </ul>
            
        </div>
    )
}

export default Sidebar