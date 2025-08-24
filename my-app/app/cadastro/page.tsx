"use client"

import Formulario from "@/componentes/Formulario";

// para armazenar o clique, usamos o useState, logo usaremos o use client
// para carregar só um pedaço da tela, fazemos a tela virar client dentro do servidor, client é quando tem interatividade

export default function Cadastro(){
    return (
        <div>
            <Formulario/>
        </div>
    )
}