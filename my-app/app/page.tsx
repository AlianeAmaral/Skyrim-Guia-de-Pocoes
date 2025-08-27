import HeaderInicial from "@/componentes/HeaderInicial";
import MenuLateral from "@/componentes/MenuLateral";
import MenuPrincipal from "@/componentes/MenuPrincipal";
import TheElderScrollsTitulo from "@/componentes/TheElderScrollsTitulo";


export default function Index(){
  return (
    <div>
        <div>
          <MenuPrincipal/>
        </div>

        <div>
          <TheElderScrollsTitulo/>
        </div>
    </div>
  );
}