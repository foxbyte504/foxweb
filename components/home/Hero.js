import Container from "../ui/Container";
import Button from "../ui/Button";
import SearchBar from "./SearchBar";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 py-24">

            <Container>

                <div className="max-w-3xl">

                    <h1 className="mb-5 text-6xl font-black text-white">
                        FoxCrafting
                    </h1>

                    <p className="mb-8 text-lg text-gray-300">
                        Descarga mods, addons y recursos para Minecraft de forma rápida y sencilla.
                    </p>

                    <div className="flex gap-4">

                        <Button>
                            Explorar Mods
                        </Button>

                        <Button className="bg-gray-800 hover:bg-gray-700">
                            Ver Destacados
                        </Button>
                        
                        <SearchBar />

                    </div>

                </div>

            </Container>

        </section>
    );
}