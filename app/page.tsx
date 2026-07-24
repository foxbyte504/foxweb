import Hero from "../components/home/Hero";
import FeaturedMods from "../components/home/FeaturedMods";
import ModsGrid from "../components/home/ModsGrid";

import mods from "../data/mods";

export default function Home() {

    return (

        <>

            <Hero />

            <FeaturedMods />

            <ModsGrid
                title="Mods recientes"
                mods={mods}
            />

        </>

    );

}