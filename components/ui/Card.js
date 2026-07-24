export default function Card({ children }) {
    return (
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-5 shadow-lg">
            {children}
        </div>
    );
}