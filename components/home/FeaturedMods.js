import Container from "../ui/Container";
import ModsGrid from "./ModsGrid";

import mods from "../../data/mods";

export default function FeaturedMods() {

    const featured = mods.slice(0, 3);

    return (

        <Container>

            <ModsGrid
                title="⭐ Destacados"
                mods={featured}
            />

        </Container>

    );

}