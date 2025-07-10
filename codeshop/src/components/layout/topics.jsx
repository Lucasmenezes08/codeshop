import ButtonTopic from "../ui/button-topics"

export default function Topics (){
    return (
        <section className="flex flex-row gap-3 mt-[2rem] mb-[2rem] px-5">
            <ButtonTopic  nome={'Todos'} tamanho={'medio'}/>
            <ButtonTopic  nome={'FrontEnd'} tamanho={'grande'}/>
            <ButtonTopic  nome={'BackEnd'} tamanho={'grande'}/>
            <ButtonTopic  nome={'FullStack'} tamanho={'grande'}/>
            <ButtonTopic  nome={'DataScience'} tamanho={'grande'}/>
        </section>
    )
}