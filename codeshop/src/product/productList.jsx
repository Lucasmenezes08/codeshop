import { ProductData } from "./dataProduct";
import ProductCard from "./productCard";

export default function ProductList ({adicionarCarrinho}){
    return (
        <section className="w-full p-4 sm:p-6 lg:p-8 ">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-20">
                {ProductData.map((item) => (
                    <li key={item.id}>
                        <ProductCard {...item} adicionarCarrinho={adicionarCarrinho}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}