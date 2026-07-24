import Link from "next/link";

export default function RelatedMods({ mods }) {
    if (!mods.length) return null;

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6">
                Mods relacionados
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {mods.map((mod) => (
                    <Link
                        key={mod.id}
                        href={`/mods/${mod.slug}`}
                        className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition"
                    >
                        <img
                            src={mod.image}
                            alt={mod.title}
                            className="w-full aspect-video object-cover"
                        />

                        <div className="p-3">
                            <h3 className="text-sm font-semibold line-clamp-2">
                                {mod.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}