import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { CartContext } from '../../store/cartContext'
import ProductCard from '../../product/productCard'
import CartModalContent from './cartModalContent'

export default function CartModal (){

    const {state} = useContext(CartContext)

    return createPortal (
        
            <dialog open className='absolute flex flex-col w-[40%] max-h-[35vh] top-40 left-[80%] -translate-x-1/2 -translate-y-1/2 p-4 bg-gray-100 rounded-lg shadow-lg z-5'>
                <p className='text-center text-xl font-bold py-3'>Carrinho de compras</p>

                {state.items.length === 0 ?
                    <p className='text-center py-2'>Seu carrinho está vazio</p>
                    :
                     <ul className='flex flex-col gap-2 flex-1 overflow-y-auto'>
                        {state.items.map((item) => 
                            <li key={item.id}>
                                <CartModalContent {...item}/>
                            </li>
                        )}
                    </ul>

                }

            </dialog> 
            , document.getElementById('cart-modal')
    )
}
    