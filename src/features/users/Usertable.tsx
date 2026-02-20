import { useState } from "react"
import {type User } from "./Type";

type Props = {
    users: User[]
}

const Usertable = ({ users }: Props) => {

    const [search, setSearch] = useState("");
    const [statutValeur, setStatutValeur] = useState("All");

    const [currentPage, setCurrentPage] = useState(1);
    const userParPage = 3;
    const totalPage = Math.ceil(users.length / userParPage);
    const startIndex = ((currentPage - 1) * userParPage);
    const endtIndex = startIndex + userParPage;
    const currentUser = users.slice(startIndex, endtIndex);


    const filtreUser = currentUser.filter((user) => {
        const matchName = user.nom.toLowerCase().includes(search.toLowerCase());
        const macthStatus = statutValeur === "All" || user.statut === statutValeur
        return matchName && macthStatus;
    })



    return (
        <div className="bg-white my-5 py-2 rounded-2xl shadow overflow-hidden flex-1 justify-items-center items-center">
            <div className="text-center gap-5 grid md:grid-cols-3 justify-items-center items-center m-5 p-3  shadow-md">
                <div>
                    <label htmlFor="search" className=" m-2 font-semibold">Filter par :</label>
                    <input id="search" type="text" placeholder="Recherche par nom..." className="outline-0 text-center border-2 border-amber-200 rounded-xl focus:ring-2 ring-amber-500 p-2  focus-ring-2 ring-red" onChange={(e) => setSearch(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="status" className="m-2 font-semibold">Statut :</label>
                    <select id="status" value={statutValeur} onChange={(e) => setStatutValeur(e.target.value)} className="p-2 px-6 rounded-xl border-2 border-black/10 outline-0">
                        <option value="" disabled >Choisissez...</option>
                        <option value="All">Tous</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="text-center text-sm text-gray-600 font-semibold bg-gray-200 p-2  rounded w-full ">{filtreUser.length} utilisateur{filtreUser.length !== 1 && "s"} trouvé{filtreUser.length !== 1 && "s"} sur la page {filtreUser.length ===0 ? "0" :`${currentPage}` }/{totalPage} </div>
            </div>

            <div className="text-center">Aucun utilisateur enregistré</div>
            {filtreUser.length !=0 &&
            <table className="full text-center bg-gray-200 rounded">
                <thead className="ng-gray text-sm text-gray-600">
                    <tr>
                        <th className="p-4">Nom</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Rôle</th>
                        <th className="p-4">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtreUser.length === 0 ? <tr>
                            <td colSpan={4} className="bg-green-100 text-green-700 p-2 rounded-xl font-bold">Aucune résultat trouvée <i className="fas fa-search"></i></td>
                        </tr> : filtreUser.map((u) => (
                            <tr key={u.id}>
                                <td className="p-4 capitalize">{u.nom}</td>
                                <td className="p-4">{u.email}</td>
                                <td className="p-4 capitalize">{u.role}</td>
                                <td className="p-4 capitalize"><span className={` px-3 rounded-full
                            font-semibold py-1 ${u.statut.toLocaleLowerCase() === "active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"} `}>{u.statut}</span></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={currentPage === 1}
                    className="cursor-pointer hover:ring-2 hover:ring-amber-700 hover:scale-105 px-4 py-1 ring-1 ring-amber-500  rounded disabled:opacity-40 transition duration-300 ease-in-out"
                >
                    Précedente
                </button>

                <span className="text-gray-700 px-3">
                    Page {filtreUser.length === 0 ? "0": `${currentPage}`} / {totalPage}
                </span>

                <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage === totalPage}
                    className="cursor-pointer hover:ring-2 hover:ring-amber-700 hover:scale-105 px-4 py-1 ring-1 ring-amber-500  rounded disabled:opacity-40 transition duration-300 ease-in-out"
                >
                    Suivante
                </button>
            </div>
        </div>
    )
}

export default Usertable;