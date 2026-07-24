import Link from "next/link";

export default function ModCard({ mod }) {
  
  console.log(mod);
  
    return (
        <Link href={`/mods/${mod.slug}`}>
            <article className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition duration-300 hover:-translate-y-1 hover:border-orange-500">

                <img
                    src={mod.image}
                    alt={mod.title}
                    className="h-48 w-full object-cover"
                />

                <div className="p-4">

                    <h2 className="mt-3 text-xl font-bold">
                        {mod.title}
                    </h2>

                    <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                        {mod.description}
                    </p>

                    <div className="mt-5 flex justify-between text-sm text-gray-500">

                        <span>
                            {mod.type}
                        </span>

                        <span>
                            {mod.version}
                        </span>

                    </div>

                </div>

            </article>
        </Link>
    );
}