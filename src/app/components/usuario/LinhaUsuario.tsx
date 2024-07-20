import { Usuario } from "@prisma/client"

export interface LinhaUsuarioProps {
    usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className="flex flex-row gap-4 p-4 bg-neutral-600 border border-emerald-300 mb-1">
            <span>{props.usuario.id}</span>
            <span>{props.usuario.nome}</span>
            <span>{props.usuario.email}</span>
        </div>
    )
}