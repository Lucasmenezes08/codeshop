import { ProductData } from "./dataProduct";
import ProductCard from "./productCard";

export default function ProductList ({adicionarCarrinho}){
    return (
        <section>
            <ul>
                {ProductData.map((item) => (
                    <li key={item.id}>
                        <ProductCard {...item} adicionarCarrinho={adicionarCarrinho}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}