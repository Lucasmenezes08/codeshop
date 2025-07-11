
export default function ButtonTopic ({nome , tamanho , onClick , setColor}){

    const estilosTamanho = {
        medio: `flex justify-center items-center w-[4rem] h-[2rem] rounded-3xl ${setColor ? 'bg-sky-500 text-white' : ''}  border border-gray-300 font-normal ${!setColor ? 'hover:bg-gray-200' : ''}`,
        grande: `flex justify-center items-center w-[6rem] h-[2rem] rounded-3xl  ${setColor ? 'bg-sky-500 text-white' : ''} border border-gray-300 font-normal ${!setColor ? 'hover:bg-gray-200' : ''}`,
    }



    return (
        <section className={`${tamanho === 'medio' ? estilosTamanho[tamanho] : estilosTamanho[tamanho]}`}>
            <button onClick={onClick} className="cursor-pointer">{nome}</button>
        </section>
    )
}