import { useState } from "react";
import { Terminal, Menu, X, ChevronRight } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Servicios", href: "#services" },
        { name: "Proyectos", href: "#projects" },
        { name: "Nosotros", href: "#about" },
    ];

    return (
        <>
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="p-2 bg-orange-500 rounded-lg group-hover:rotate-12 transition-transform">
                            <Terminal className="text-black w-5 h-5" />
                        </div>
                        <span className="font-bold text-xl tracking-tighter text-white uppercase italic">
                            DOG<span className="text-orange-500 font-light">PROGRAMMING</span>
                        </span>
                    </div>

                    {/* Links - Desktop */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" className="px-5 py-2 bg-white text-black rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all">
                            Contacto
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Overlay / Sidebar para Mobile */}
            <div
                className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${isOpen ? "visible" : "invisible"
                    }`}
            >
                {/* Backdrop oscuro con blur */}
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={toggleMenu}
                />

                {/* Contenedor del Sidebar */}
                <div
                    className={`absolute right-0 top-0 h-full w-[80%] max-w-xs border-l border-white/10 bg-black/80 backdrop-blur-2xl p-8 transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-12">
                            <span className="text-white font-black italic tracking-tighter">MENÚ</span>
                            <button onClick={toggleMenu} className="p-2 text-gray-400 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="flex items-center justify-between text-2xl font-black text-white hover:text-orange-500 transition-colors tracking-tighter italic uppercase"
                                >
                                    {link.name}
                                    <ChevronRight className="text-orange-500" size={24} />
                                </a>
                            ))}

                            <hr className="border-white/10 my-4" />

                            <a
                                href="#contact"
                                onClick={toggleMenu}
                                className="w-full py-4 bg-orange-500 text-black text-center font-black rounded-2xl hover:bg-orange-600 transition-all uppercase italic"
                            >
                                Contacto
                            </a>
                        </div>

                        <div className="mt-auto pb-8">
                            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                                © 2026 DOG PROGRAMMING
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};