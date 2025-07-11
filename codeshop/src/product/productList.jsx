import { useContext } from "react";
import { ProductData } from "./dataProduct";
import ProductCard from "./productCard";
import { TopicContext } from "../store/topicContext";


export default function ProductList ({adicionarCarrinho}){

    const {topicoAtual} = useContext(TopicContext);
    const produtosTagAtual = ProductData.filter((value) => {
        if (topicoAtual === 'Todos'){
            return true;
        }

        return value.tags.includes(topicoAtual)
    })

    return (
        <section className="w-full p-4 sm:p-6 lg:p-1 ">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-15">
                {produtosTagAtual.map((item) => (
                    <li key={item.id}>
                        <ProductCard {...item} adicionarCarrinho={adicionarCarrinho}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}