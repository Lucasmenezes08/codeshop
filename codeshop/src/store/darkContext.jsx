import { createContext, useState } from "react";


export const DarkContext = createContext()

export function DarkProvider ({children}){
    const [atualTheme , setAtualTheme] = useState('light');


    const valueTheme = {
        atualTheme: atualTheme,
        setAtualTheme: setAtualTheme,
    }


    return (
        <DarkContext.Provider value={valueTheme}>
            {children}
        </DarkContext.Provider>
    )
}