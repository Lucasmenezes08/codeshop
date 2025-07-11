import { useContext, useState } from "react"
import ButtonTopic from "../ui/button-topics"
import { TopicContext } from "../../store/topicContext";

export default function Topics (){
    const {topicoAtual , mudarTopico} = useContext(TopicContext);


    function handleSelect (topicName){
        mudarTopico(topicName)
    }


    return (
        <section className="flex flex-row gap-3 mt-[2rem] mb-[2rem] px-5">
            <ButtonTopic  nome={'Todos'} tamanho={'medio'} onClick={() => handleSelect('Todos')} setColor={topicoAtual === 'Todos'}/>
            <ButtonTopic  nome={'FrontEnd'} tamanho={'grande'} onClick={() => handleSelect('FrontEnd')} setColor={topicoAtual === 'FrontEnd'}/>
            <ButtonTopic  nome={'BackEnd'} tamanho={'grande'} onClick={() => handleSelect('BackEnd')} setColor={topicoAtual === 'BackEnd'}/>
            <ButtonTopic  nome={'FullStack'} tamanho={'grande'} onClick={() => handleSelect('FullStack')} setColor={topicoAtual ==='FullStack'}/>
            <ButtonTopic  nome={'DataScience'} tamanho={'grande'} onClick={() => handleSelect('DataScience')} setColor={topicoAtual === 'DataScience'}/>
        </section>
    )
}