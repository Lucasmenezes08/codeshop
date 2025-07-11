import { useContext } from "react";
import { CgDarkMode } from "react-icons/cg";
import { DarkContext } from "../../store/darkContext";

export default function DarkTheme(){
    const {atualTheme , setAtualTheme} = useContext(DarkContext)


    function handleTheme (theme){
        theme === 'dark'? setAtualTheme('light'): setAtualTheme('dark');
        console.log ("Tema alterado. tema atual: ", theme);
    }

    return (
        <button className="cursor-pointer" onClick={() => handleTheme(atualTheme)}>
            <CgDarkMode size={35}/>
        </button>
    )
}