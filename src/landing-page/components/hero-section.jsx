import { ChevronRight, Code2 } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black text-white">
            {/* Efecto de luz de fondo (Glow) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">

                    {/* Badge de confianza */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-400 text-xs font-medium animate-fade-in">
                        <Code2 size={14} />
                        <span>Código de alto rendimiento para el mundo real</span>
                    </div>

                    {/* Título Principal */}
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter max-w-4xl leading-[0.9]">
                        SOFTWARE CON <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                            INSTINTO ALPHA
                        </span>
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
                        No solo escribimos líneas de código. Construimos arquitecturas digitales
                        leales, robustas y preparadas para dominar el mercado.
                    </p>

                    {/* Botones de Acción */}
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <a href="#projects" className="flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] group">
                            Ver nuestros proyectos.
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Tech Stack Icons (Opcional) */}
                    <div className="pt-12 text-gray-600 text-sm font-semibold uppercase tracking-widest">
                        Tecnologías que usamos: Next.js • React • Node • SQL • Python • PHP
                    </div>
                </div>
            </div>
        </section>
    );
};