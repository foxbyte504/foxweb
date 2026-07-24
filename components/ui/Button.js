export default function Button({
    children,
    type = "button",
    onClick,
    className = "",
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600 ${className}`}
        >
            {children}
        </button>
    );
}