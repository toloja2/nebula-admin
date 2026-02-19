import { useState } from "react"
import { type UserStatut } from "./Type"

interface Props {
    onClose: () => void
    onAdd: (user: {
        nom: string
        email: string
        role: string
        statut: UserStatut
    }) => void
}

function AddUserModal({ onClose, onAdd }: Props) {

    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [erreur, setErreur] = useState("")
    const [statut, setStatut] = useState<UserStatut>("active")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!nom || !email || !role) {
            setErreur("Remplir tous les champs")
            return
        }

        onAdd({
            nom,
            email,
            role,
            statut
        })

        onClose()
        setErreur("")
    }

    return (
        <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/40 flex items-center justify-center">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96 shadow-lg">

                <h2 className="text-xl font-semibold mb-4 dark:text-white">
                    Ajouter nouveau Utilisatuer
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white"
                    />

                    <input
                        type="text"
                        placeholder="Role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white"
                    />

                    <select
                        value={statut}
                        onChange={(e) => setStatut(e.target.value as UserStatut)}
                        className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white"
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    {erreur &&
                        <div className="w-full p-2 bg-red-200 text-center text-red-600 font-semibold rounded ">{erreur}</div>
                    }
                    <div className="flex justify-end gap-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-600 text-white rounded"
                        >
                            Retour
                        </button>

                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Sauvegarder
                        </button>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default AddUserModal
