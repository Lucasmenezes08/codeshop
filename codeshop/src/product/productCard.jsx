export default function ProductCard ({
    id,
    imagem,
    titulo,
    preco,
    descricao,
    adicionarCarrinho
}){
    return (
        <section>
            <img src={imagem} alt={titulo}/>
            <section>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </section>
            <section>
                <p>R$ {preco}</p>
                <button onClick={() => adicionarCarrinho(id)}>Comprar</button>
            </section>
        </section>
    )
}