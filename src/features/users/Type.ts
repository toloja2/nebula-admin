
export type UserStatut = "active" | "inactive";
export interface User{
    id: number,
    nom: string,
    email: string,
    role: string,
    statut: UserStatut,
}