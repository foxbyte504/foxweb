import Container from "../ui/Container";
import ModCard from "../mod/ModCard";

export interface Mod {
    id: number;
    slug: string;
    title: string;
    description: string;
    author: string;
    image: string;
    version: string;
    platform: string;
    type: string;
    loader: string | null;
    featured: boolean;
    downloads: number;
    download: string;
    createdAt: string;
}

interface ModsGridProps {
    title?: string;
    mods: Mod[];
}

export default function ModsGrid({
    title,
    mods,
}: ModsGridProps) {
    if (mods.length === 0) {
        return (
            <section className="py-16">
                <Container>
                    {title && (
                        <h2 className="mb-8 text-3xl font-bold">
                            {title}
                        </h2>
                    )}

                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center text-zinc-400">
                        No hay mods disponibles.
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <section className="py-16">
            <Container>
                {title && (
                    <h2 className="mb-8 text-3xl font-bold">
                        {title}
                    </h2>
                )}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {mods.map((mod) => (
                        <ModCard
                            key={mod.id}
                            mod={mod}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}