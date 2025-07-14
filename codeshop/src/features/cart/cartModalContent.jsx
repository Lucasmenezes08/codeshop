
export default function CartModalContent ({
    id ,
    imagem,
    preco,
}){
    return (
        <section className="flex items-center gap-4 border-b p-2 hover:bg-gray-300 transition ease-in-out cursor-pointer">
            <img
                src={imagem}
                alt={id} 
                className="h-16 w-16 rounded-md object-cover"
            />

            
            <section className="flex-grow">
                <h2 className="font-bold">{id}</h2>
                <p className="text-gray-600">R$ {preco}</p>
            </section>

            <button className="text-sm text-red-500 hover:underline cursor-pointer">
                Remover item
            </button>
        </section>
    )
}