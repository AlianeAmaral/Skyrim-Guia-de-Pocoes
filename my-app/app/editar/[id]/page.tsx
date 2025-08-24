import { usuariosProps } from "@/app/tipos";
import Formulario from "@/componentes/Formulario";

export default async function Editar({params} : {params: Promise<{id: string}>}) {
    
    const {id} = await params;
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuarios/${id}`)
    const usuario: usuariosProps = await resposta.json();

    return (
        <div>
            <Formulario id={usuario.id} nome={usuario.nome} email={usuario.email}/>
        </div>
    )
}