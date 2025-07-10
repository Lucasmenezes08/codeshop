
export default function ButtonTopic ({nome , tamanho}){

    const estilosTamanho = {
        medio: 'flex justify-center items-center w-[4rem] h-[2rem] rounded-3xl  border border-gray-300 font-normal hover:bg-gray-200',
        grande: 'flex justify-center items-center w-[6rem] h-[2rem] rounded-3xl border border-gray-300 font-normal hover:bg-gray-200',
    }


    return (
        <section className={`${tamanho === 'medio' ? estilosTamanho[tamanho] : estilosTamanho[tamanho]}`}>
            <button className="cursor-pointer">{nome}</button>
        </section>
    )
}