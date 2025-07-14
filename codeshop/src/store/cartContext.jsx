import { createContext, useReducer } from "react";


export const CartContext = createContext();


const initialCartState = {
    items: []
}

const reducer = (state , action) => {
    switch (action.type){
        case 'adicionarCarrinho':
            return {
                ...state,
                items: [...state.items , action.payload],
            }
        case 'removerCarrinho':
            state.items = state.items.filter((item) => item.id !== action.payload)
        default:
            return state;
    }
}


export function CartProvider ({children}) {

    const [State , cartDispatch] = useReducer(reducer , initialCartState);
    
    const cartValue = {
        state: State,
        cart: cartDispatch,
    }


    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    )
}