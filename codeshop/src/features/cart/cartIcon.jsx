import { useContext, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import CartModal from "./cartModal";
import { CartContext } from "../../store/cartContext";


export default function CartIcon ({onclick}){
    const {state} = useContext(CartContext);
    const quantidadeTotal = state.items.reduce((somatorio , item) =>{ return somatorio + item.quantidade}, 0);

    return (
        <section>
            <button className="flex flex-row justify-center items-center cursor-pointer" onClick={onclick}>
                <CiShoppingCart size={35}/>
                <p>{quantidadeTotal}</p>
            </button>
        </section>  
    )
}