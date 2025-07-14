import CartIcon from "./cartIcon";
import { useState } from "react";
import CartModal from "./cartModal";



export default function Cart (){
    const [isClicked , setIsClicked] = useState(false);
    
    function handleClick() {
        setIsClicked(prevState => !prevState); 
    }
    return (
        <section className="">
            <CartIcon onclick={handleClick} />
            {isClicked ? <CartModal/> : ''}
        </section>
    )
}