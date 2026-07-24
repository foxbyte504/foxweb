import { notFound } from "next/navigation";

import mods from "@/data/mods";

import ModHero from "@/components/mod/ModHero";
import RelatedMods from "@/components/mod/RelatedMods";

export default async function ModPage({ params }) {

    const { slug } = await params;

    const mod = mods.find(m => m.slug === slug);

    if (!mod) {
        notFound();
    }

    const related = mods
        .filter(m =>
            m.slug !== mod.slug &&
            m.platform === mod.platform
        )
        .slice(0, 6);

    return (

        <main className="bg-zinc-950 min-h-screen">

            <ModHero mod={mod} />

            <RelatedMods mods={related} />

        </main>

    );

}