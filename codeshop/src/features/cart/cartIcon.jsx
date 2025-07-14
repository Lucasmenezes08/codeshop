import { useContext, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import CartModal from "./cartModal";


export default function CartIcon ({onclick}){
    

    return (
        <section>
            <button className="cursor-pointer" onClick={onclick}>
                <CiShoppingCart size={35}/>
            </button>
        </section>  
    )
}