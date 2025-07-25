import { useContext } from "react"
import { CartContext } from "../../store/cartContext"

export default function CartModalContent ({
    id ,
    imagem,
    preco,
    quantidade
}){

    const {cart} = useContext(CartContext)
    return (
        <section className="flex items-center gap-4 border-b p-2 hover:bg-gray-300 transition ease-in-out cursor-pointer">
            <img
                src={imagem}
                alt={id} 
                className="h-16 w-16 rounded-md object-cover"
            />

            
            <section className="flex-grow">
                <h2 className="font-bold">{id}</h2>
                <p className="text-gray-600">R$ {preco}</p>
            </section>
            
            <span className="font-semibold">
                x {quantidade}
            </span>

            <button className="text-sm text-red-500 hover:underline cursor-pointer" onClick={() => cart({type:'removerCarrinho', payload: id})}>
                Remover item
            </button>
        </section>
    )
}