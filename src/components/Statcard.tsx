

type StatCardProps = {
    titre : string,
    valeur : string,
    icon: string
}

const Statcard = ({titre,valeur,icon}:StatCardProps) =>{
    return(
        <div className="bg-white p-5 rounded-xl shadow-gray-200 hover:shadow-lg hover:scale-98 ring-1 ring-gray-300 hover:shadow-gray-400 hover:ring-gray-500 hover:ring-1 transition duration-300 ease-out">
            <h3 className="text-gray-500 text-sm"><i className={`mx-3 font-semibold hover:scale-110 ${icon}`}></i>{titre}</h3>
            <p className="text-2xl mt-5 font-bold">{valeur}</p>
        </div>
    )
}

export default Statcard;