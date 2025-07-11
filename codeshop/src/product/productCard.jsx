export default function ProductCard ({
    id,
    imagem,
    titulo,
    preco,
    descricao,
    tags,
    adicionarCarrinho
}){
    return (
        <section className="flex flex-col flex-grow items-center h-full rounded-2xl border border-gray-200">
            <img className="rounded-t-2xl w-full h-54" src={imagem} alt={titulo}/>

            <section>
                <h2 className="text-lg font-semibold px-6 py-2">{titulo}</h2>
                <p className="text-xs font-light px-6">{descricao}</p>
            </section>
            <section className=" w-full flex flex-row justify-between items-center px-6 py-8 ">
                <p className="text-sky-500 font-semibold text-2xl">R$ {preco}</p>
                <button className="w-[6rem] h-[3rem] font-semibold rounded-2xl bg-sky-500 text-white items-center cursor-pointer hover:bg-sky-600" onClick={() => adicionarCarrinho(id)}>Comprar</button>
            </section>
        </section>
    )
}