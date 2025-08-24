import Link from "next/link";

type productsProps = { // os atributos sempre precisam ser iguais aos que estão na API?
    
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,

    rating: {
            rate: number,
            count: number;
    }
}

export default async function Detalhes({params}: {params: Promise <{id:string}>}) {

    const {id} = await params;

    await new Promise((resolve) => setTimeout(resolve, 4000));
    const resposta = await fetch(`https://fakestoreapi.com/products/${id}`) 
    const item : productsProps = await resposta.json(); // tirei a lista []; o key é porque usávamos maps;

    return (
        <div className="bg-white w-140 p-3 rounded-2xl"> {/*card do bloco com texto, corta o que ultrapassa*/}

        <div className="bg-white flex justify-center flex-col"> {/*inicio do card da imagem*/}
            <div className="bg-white w-full flex justify-center items-center">  
                <div>
                    <img className="max-w-90 max-h-90 m-3" src={item.image}></img>
                </div>
            </div> {/*fim do card da imagem*/}

            <div className="bg-white flex justify-start m-2 ">
                <div> {/*inicio do card do texto*/}
                    <p className="font-bold text-2xl text-black">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="font-bold text-green-500">$ {item.price}</p>
                    <p className="text-xs text-gray-500 pt-2 pb-5">{item.description}</p>
                </div> {/*fim do card do texto*/}
            </div>
        </div>

        <div className=" bg-gray-300 rounded-2xl text-center flex justify-center items-center text-gray-500 h-8 cursor-pointer m-1">
            <button className="cursor-pointer text-sm">
                <Link href={`/produto/${item.id}`}>Voltar ao catálogo</Link>   
            </button>
        </div>
    </div> 
    );
}

// cod. professor:
// export default async function DetalhesProduto({params}: {params: Promise<{id: string}>}){
//     const {id} = await params
//     return (
//         <div>
//             <h1>ID: {id}</h1>
//         </div>
//     )
// }

// por que sempre usarmos a palavra userProps? não poderia ser outro nome?
// por que params? por que promise? por que o id string?