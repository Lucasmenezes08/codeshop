import { useState } from "react"
import ButtonTopic from "../ui/button-topics"

export default function Topics (){
    const [btnSelect , setBtnSelect] = useState('todos');


    function handleSelect (topicName){
        setBtnSelect(topicName);
    }


    return (
        <section className="flex flex-row gap-3 mt-[2rem] mb-[2rem] px-5">
            <ButtonTopic  nome={'Todos'} tamanho={'medio'} onClick={() => handleSelect('Todos')} setColor={btnSelect === 'Todos'}/>
            <ButtonTopic  nome={'FrontEnd'} tamanho={'grande'} onClick={() => handleSelect('FrontEnd')} setColor={btnSelect === 'FrontEnd'}/>
            <ButtonTopic  nome={'BackEnd'} tamanho={'grande'} onClick={() => handleSelect('BackEnd')} setColor={btnSelect === 'BackEnd'}/>
            <ButtonTopic  nome={'FullStack'} tamanho={'grande'} onClick={() => handleSelect('FullStack')} setColor={btnSelect ==='FullStack'}/>
            <ButtonTopic  nome={'DataScience'} tamanho={'grande'} onClick={() => handleSelect('DataScience')} setColor={btnSelect === 'DataScience'}/>
        </section>
    )
}