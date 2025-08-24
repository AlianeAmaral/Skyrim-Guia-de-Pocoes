import db from '@/app/api/database';

// export async function GET(){ {/* estamos usando get aqui só para devolver o texto e mostrar, exportando uma função assíncrona do tipo get, estamos usando o async para esperar a consulta primeiro do banco para poder continuar*/}

//ESSE AQUI: foi escrito pelo código:

//     const usuarios = [
//         {id:1, name:"ally"},
//         {id:2, name:"yoshi"}
//     ]

//     return new Response(JSON.stringify(usuarios))
// }


// ESSE AQUI: os dados foram exportados da base de dados local:



export async function GET(){
    try {
        const [rows] = await db.query<any>("SELECT * FROM usuarios");

        if(rows.length > 0){
            return new Response(JSON.stringify(rows), {
                status: 200,
                headers: {'Content-Type':'application/json'}
        })}

        else{
            return new Response(JSON.stringify({erro: "Usuário não encontrado."}))
        }

    }
    
    catch (error) {
        return new Response(JSON.stringify({erro: error}), {
        status: 500
        });

    }
}


//ESSE AQUI: permite criar cadastro no banco, a ordem importa

export async function POST(request: Request){
    const {nome, email} = await request.json();

    try {
        const [resultado] = await db.query<any>("INSERT INTO usuarios (nome, email) VALUES (?,?)", [nome, email])
        return Response.json({id: resultado.insertId, nome, email})

    } 
    
    catch (error) {
        return new Response(JSON.stringify({erro: error}), {
            status: 500
            });
    }
}

export async function PUT(request: Request){
    const {id, nome, email} = await request.json();

    try {
        await db.query("UPDATE usuarios SET nome = ?, email = ? WHERE id = ?", [nome, email, id])
        return Response.json({sucesso: true})

    } catch (error) {
        return new Response(JSON.stringify({erro: error}), {
            status: 700
        });
    }

}

export async function DELETE(request:Request){

    try {
        const {id} = await request.json();

        await db.query("DELETE FROM usuarios WHERE id = ?", [id])
        return Response.json({sucesso: true})

    } catch (error) {
        return new Response(JSON.stringify({erro: error}), {
            status: 900
        });
    }
}

