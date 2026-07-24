import Image from "next/image";
import styles from "./modhero.module.css";
import {
    FaCube,
    FaServer,
    FaDownload,
    FaGamepad,
} from "react-icons/fa";

export default function ModHero({ mod }) {

    return (

        <section className={styles.modHero}>

            <div className={styles.modLayout}>

                {/* Imagen */}

                <div className={styles.modImage}>

                    <Image
                        src={mod.image}
                        alt={mod.title}
                        fill
                        priority
                        className="object-cover rounded-md"
                    />

                </div>

                {/* Información */}

                <div className={styles.modContent}>

                    <div className={styles.modHeader}>

                        <h1 className={styles.modTitle}>
                            {mod.title}
                        </h1>

                        <a
                            href={mod.download}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.downloadBtn}
                        >
                            <FaDownload />
                            Descargar
                        </a>

                    </div>

                    {/* Grid */}

                    <div className="grid grid-cols-2 gap-3 mt-6">

                        <Info
                            icon={<FaGamepad />}
                            value={`MC ${mod.version}`}
                        />

                        <Info
                            icon={<FaCube />}
                            value={mod.type}
                        />

                        <Info
                            icon={<FaServer />}
                            value={mod.platform}
                        />

                        <Info
                            icon={<FaDownload />}
                            value={mod.size ?? "—"}
                        />

                    </div>

                    {/* Descripción */}

                    <div className="mt-8 leading-7 text-zinc-300 whitespace-pre-wrap">

                        {mod.description}

                    </div>

                </div>

            </div>

        </section>

    );

}

function Info({ icon, value }) {

    return (

        <div className="h-11 border border-zinc-800 rounded-md bg-zinc-900 flex items-center justify-center gap-2 text-sm">

            <span className="text-cyan-400">
                {icon}
            </span>

            <span>
                {value}
            </span>

        </div>

    );

}