export default function MenuLateral(){
    return (
        <div>
            <div className="fixed top-35 w-screen bg-stone-950 text-neutral-300 text-sm font-serif space-x-15 flex justify-start py-3 pl-7 ml-5 border-5 border-stone-950 rounded-2xl">
                <p className="hover:text-orange-100 hover:scale-3d transition ease-in-out duration-700 transition-all duration-700 cursor-pointer">Inicial</p>
                <p className="hover:text-orange-100 hover:scale-3d transition ease-in-out duration-700 transition-all duration-700 cursor-pointer">Receitas</p>
                <p className="hover:text-orange-100 hover:scale-3d transition ease-in-out duration-700 transition-all duration-700 cursor-pointer">Ingredientes</p>
            </div>
        </div>
    )
}