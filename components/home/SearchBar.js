export default function SearchBar() {

    return (

        <div className="mt-10 flex justify-center">

            <input
                type="text"
                placeholder="Buscar mods..."
                className="w-full max-w-2xl rounded-xl border border-gray-700 bg-gray-900 px-6 py-4 text-lg outline-none transition focus:border-orange-500"
            />

        </div>

    );

}