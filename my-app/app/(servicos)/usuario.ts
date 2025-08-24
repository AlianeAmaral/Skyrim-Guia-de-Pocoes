import { usuariosProps } from "../tipos";

export async function Salvar(formulario: usuariosProps, metodo: string){
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuarios`, {
        method: metodo,
        headers: {"Content-Type":"application/json"},

        body: JSON.stringify(formulario)
    })
}
