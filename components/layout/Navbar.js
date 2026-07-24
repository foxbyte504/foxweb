export default function Navbar() {
    return (
        <header className="w-full border-b border-gray-800 bg-gray-900">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                <h1 className="text-2xl font-bold text-orange-500">
                    FoxCrafting
                </h1>

                <nav className="flex gap-8 text-sm font-medium">

                    <a href="/">
                        Inicio
                    </a>

                    <a href="/mods">
                        Mods
                    </a>

                    <a href="/login">
                        Login
                    </a>

                </nav>

            </div>
        </header>
    );
}