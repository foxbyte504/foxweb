import {
    FaGamepad,
    FaCube,
    FaDownload,
    FaUser,
    FaWeightHanging,
    FaCodeBranch
} from "react-icons/fa";

const items = [
    {
        icon: FaGamepad,
        label: "Plataforma",
        key: "platform"
    },
    {
        icon: FaCube,
        label: "Tipo",
        key: "type"
    },
    {
        icon: FaCodeBranch,
        label: "Versión",
        key: "version",
        prefix: "MC "
    },
    {
        icon: FaWeightHanging,
        label: "Tamaño",
        key: "size"
    },
    {
        icon: FaUser,
        label: "Autor",
        key: "author"
    },
    {
        icon: FaDownload,
        label: "Descargas",
        key: "downloadsCount"
    }
];

export default function ModInfo({ mod }) {

    return (

        <section className="mx-auto max-w-7xl px-6 py-10">

            <h2 className="mb-6 text-2xl font-bold">
                Información
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {items.map(item => {

                    const Icon = item.icon;
                    const value = mod[item.key];

                    if (!value) return null;

                    return (

                        <div
                            key={item.key}
                            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-orange-500"
                        >

                            <div className="mb-4 flex items-center gap-3">

                                <Icon
                                    size={20}
                                    className="text-orange-500"
                                />

                                <span className="text-sm uppercase tracking-wide text-zinc-400">
                                    {item.label}
                                </span>

                            </div>

                            <p className="text-xl font-semibold">

                                {item.prefix ?? ""}
                                {value}

                            </p>

                        </div>

                    );

                })}

            </div>

        </section>

    );

}