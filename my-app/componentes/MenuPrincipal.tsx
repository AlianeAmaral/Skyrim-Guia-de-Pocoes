'use client'

export default function MenuPrincipal(){
    
    const linkJogueAgora = () => {
    window.open("https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/");
  };
    
    return (
        <div>
        <div>
            <div>
                <img src="/header-principal.png" className="fixed top-0 cursor-pointer"></img>
            </div>
        </div>

            <div className="fixed top-7 w-screen flex flex-row items-start text-neutral-300 text-sm space-x-20 justify-end pr-30 py-4">
                <p className="hover:text-orange-100 transition ease-in-out duration-800 cursor-pointer">Página Inicial</p>
                <p className="hover:text-orange-100 hover:scale-3d ease-in-out transition-all duration-700 cursor-pointer">Ingredientes</p>
                <p className="hover:text-orange-100 hover:scale-3d ease-in-out transition-all duration-700 cursor-pointer">Receitas</p>
                <p className="hover:text-orange-100 hover:scale-3d ease-in-out transition-all duration-700 cursor-pointer">Vendedores</p>
                <p className="hover:text-orange-100 hover:scale-3d ease-in-out transition-all duration-700 cursor-pointer">Quests</p>
                <button className="cursor-pointer font-sans font-bold text-sm text-stone-950 bg-gradient-to-r from-teal-600 to-green-600
                    hover:text-orange-100 hover:scale-3d ease-in-out transition-all duration-600
                    hover:from-green-700 hover:to-purple-800
                    rounded-sm px-6 py-1.5"  
                    onClick={linkJogueAgora}
                    >Jogue Agora</button>
            </div>
        </div>
    )
}