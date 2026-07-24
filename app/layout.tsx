import type { ReactNode } from "react";
import "./globals.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
    title: "FoxCrafting",
    description: "Descarga Mods para Minecraft",
};

export default function RootLayout({children,}: {children: ReactNode;}) {
    return (
        <html lang="es">
            <body className="min-h-screen flex flex-col">

                <Navbar />

                <main className="flex-1">
                    {children}
                </main>

                <Footer />

            </body>
        </html>
    );
}