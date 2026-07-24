import ReactMarkdown from "react-markdown";

export default function Description({ description }) {

    return (

        <section className="mx-auto max-w-5xl px-6 py-10">

            <article
                className="
                    prose
                    prose-invert
                    prose-orange
                    max-w-none
                "
            >

                <ReactMarkdown>

                    {description}

                </ReactMarkdown>

            </article>

        </section>

    );

}