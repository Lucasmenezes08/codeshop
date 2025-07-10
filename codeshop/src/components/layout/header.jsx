import { HiAcademicCap } from "react-icons/hi";
import SearchBar from "../../product/searchBar";
import Topics from "./topics";
import ProductList from "../../product/productList";

export default function Header(){
    return (
        <header className="w-full">
            <nav className="w-full h-[15vh] bg-white flex flex-row justify-between items-center px-8 border-b border-gray-200">
                <section className="flex flex-row items-center gap-3">
                    <icon className=''>
                        <HiAcademicCap size={32}/>
                    </icon>
                    <h2 className="text-xl font-bold">CodeShop</h2>
                </section>
                
                <SearchBar />
            </nav>

            <section className="flex flex-col mt-[3rem] gap-2 px-5">
                <h2 className="text-3xl font-extrabold">Visualize as linguagens a sua disposição!</h2>
                <p className="font-light">Fique a vontade para conferir as linguagens mais presentes em todo o mercado de programação</p>
            </section>

            <search>
                <Topics />
            </search>
        </header>


    )
}