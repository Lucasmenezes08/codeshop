import { CiShoppingCart } from "react-icons/ci";


export default function CartButton ({quantidadeItemsCart}){
    return (
        <section>
            <button className="cursor-pointer">
                <CiShoppingCart size={35}/>
            </button>
            <p>{quantidadeItemsCart ? quantidadeItemsCart : ''}</p>
        </section>  
    )
}