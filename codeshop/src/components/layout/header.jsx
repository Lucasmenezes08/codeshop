import { HiAcademicCap } from "react-icons/hi";
import SearchBar from "../../product/searchBar";
import Topics from "./topics";
import ProductList from "../../product/productList";

export default function Header(){
    return (
        <header>
            <nav>
                <section>
                    <icon>
                        <HiAcademicCap />
                    </icon>
                    <h2>CodeShop</h2>
                </section>
                
                <SearchBar />
            </nav>

            <section>
                <h2>Visualize as linguagens a sua disposição!</h2>
                <p>Fique a vontade para conferir as linguagens mais presentes em todo o mercado de programação</p>
            </section>

            <search>
                <Topics />
            </search>
        </header>


    )
}