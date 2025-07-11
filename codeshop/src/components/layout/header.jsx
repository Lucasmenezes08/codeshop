import { HiAcademicCap } from "react-icons/hi"; 
import SearchBar from "../../product/searchBar";
import Topics from "./topics";
import ProductList from "../../product/productList";
import Filter from "../../features/filter/filter";
import DarkTheme from "./darkTheme";
import { useContext } from "react";
import { DarkContext } from "../../store/darkContext";


export default function Header(){

    const {atualTheme} = useContext(DarkContext);

    return (      
        <header className="w-full">
            <nav className="w-full h-[15vh] bg-white flex flex-row justify-between items-center px-8 border-b border-gray-200">
                <section className="flex flex-row items-center gap-3">
                    <icon className=''>
                        <HiAcademicCap size={32}/>
                    </icon>
                    <h2 className="text-xl font-bold">CodeShop</h2>
                </section>
                
                <section className="flex flex-row items-center justify-center gap-5 ">
                    <SearchBar />
                    <DarkTheme />
                </section>
                
            </nav>

            <section className="flex flex-row-reverse w-full justify-between">
                <section className="w-[75%] flex flex-col justify-center px-5">
                    <section>
                        <section className="flex flex-col mt-[3rem] gap-2 px-5">
                            <h2 className="text-3xl font-extrabold">Visualize as linguagens a sua disposição!</h2>
                            <p className="font-light">Fique a vontade para conferir as linguagens mais presentes em todo o mercado de programação</p>
                        </section>

                        <search>
                            <Topics />
                        </search>
                    </section>

                    <section>
                        <ProductList />
                    </section>

                </section>
                
                <section className="px-5 mt-[3.5rem]">
                    <Filter />
                </section>

            </section>

           

        </header>
       

    )
}