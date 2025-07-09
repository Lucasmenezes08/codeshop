import { CiSearch } from "react-icons/ci";


export default function SearchBar (){
    return (
        <form className="flex flex-row items-center justify-center border-gray-300 border py-2 px-5 rounded-lg">
            <input  className="outline-none"
            type='search'
            placeholder="Pesquisar linguagens"
            required
            />
            <button type="submit" className="pr-1 pt-1 cursor-pointer">
                <CiSearch />
            </button>
        </form>
    )
}