import { HiAcademicCap } from "react-icons/hi";
import SearchBar from "../../product/searchBar";

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
        </header>
    )
}