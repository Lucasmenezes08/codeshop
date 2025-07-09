import { CiSearch } from "react-icons/ci";


export default function SearchBar (){
    return (
        <form>
            <input  
            type='search'
            placeholder="Pesquisar linguagens"
            required
            />
            <button type="submit">
                <CiSearch />
            </button>
        </form>
    )
}