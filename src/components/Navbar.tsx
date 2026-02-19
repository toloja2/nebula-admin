interface Props{
    setOpen : ()=>void
}

const Navbar = ({setOpen}:Props) => {

    return (
        <div className={` gap-5 py-8 shadow-xl rounded-xl flex justify-center items-center hover:shadow-blue-200`}>
            <h2 className="text-lg font-semibold bg-clip-text text-transparent bg-linear-to-r from-red-500 to-black/90 ">Dashboard</h2>
            <div className="w-8 h-8 rounded-full bg-blue-500 hover:rotate-180 hover:bg-linear-to-r from-red-300 to-zinc-500 "></div>
            <button onClick={setOpen} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Ajouter un Utilisateur</button>

        </div>
    )
}

export default Navbar;