export default function MenuInicial(){
    return (
        <div>
            <div>
            <img src="/menu-top.png" className="fixed top-7 w-full"></img>
            </div>
<div className="h-full">
            <div className="bg-gradient-to-r from-stone-900 to-stone-900">
            <menu className="space-y-8 w-50 space-y-12 pl-8 p-5 text-neutral-200 text-sm font-serif">
                <p className="hover:text-orange-100 hover:scale-3d transition ease-in-out duration-700 hover:text-[15px] transition-all duration-700 cursor-pointer">Página Inicial</p>
                <p className="hover:text-orange-100 hover:scale-3d transition ease-in-out duration-700 hover:text-[15px] transition-all duration-700 cursor-pointer">Receitas</p>
                <p className="hover:text-orange-100 hover:scale-3d transition ease-in-out duration-700 hover:text-[15px] transition-all duration-700 cursor-pointer">Ingredientes</p>
            </menu>
            </div>
            </div>
        </div>
    )
}
