import { Mail, MessageSquare, Phone, ExternalLink } from "lucide-react";

export const Contact = () => {
    const contactMethods = [
        { label: "David Roberto Gallegos Marabel", phone: "375 147 1134", link: "https://wa.me/523751471134" },
        { label: "Jose Manuel Hernández Hernández", phone: "33 1117 9301", link: "https://wa.me/523311179301" },
        { label: "Jose Fernando Arenas Camacho", phone: "375 122 8050", link: "https://wa.me/523751228050" },
    ];

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header Principal */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter italic">
                        ¿LISTO PARA <span className="text-orange-500">DOMINAR?</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Cuéntanos tu visión. Si el reto es lo suficientemente grande, nos encargaremos.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-6">
                    {/* Tarjeta de Email - Ocupa más espacio */}
                    <div className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-orange-500/5 border border-white/5 p-8 transition-all hover:border-orange-500/30">
                        <div className="relative z-10">
                            <Mail className="text-orange-500 mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Escríbenos</h3>
                            <a
                                href="mailto:josefernando10a.c@gmail.com"
                                className="text-2xl md:text-3xl font-black text-white mt-2 block break-all hover:text-orange-500 transition-colors"
                            >
                                josefernando10a.c@gmail.com
                            </a>
                        </div>
                        {/* Decoración de fondo sutil */}
                        <div className="absolute -right-8 -bottom-8 text-white/5 font-black text-8xl italic select-none">
                            MAIL
                        </div>
                    </div>

                    {/* Tarjetas de Teléfono/WhatsApp */}
                    <div className="md:col-span-2 space-y-4">
                        {contactMethods.map((method, idx) => (
                            <a
                                key={idx}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-orange-500/10 hover:border-orange-500/20 transition-all group"
                            >
                                <div>
                                    <p className="text-orange-500 text-[10px] font-bold uppercase tracking-tighter">{method.label}</p>
                                    <p className="text-white font-bold text-lg">{method.phone}</p>
                                </div>
                                <MessageSquare className="text-gray-500 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer del contacto */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm font-medium">© 2026 DOG PROGRAMING</p>
                    <div className="flex gap-6">
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Guadalajara, MX</span>
                    </div>
                </div>
            </div>
        </section>
    );
};