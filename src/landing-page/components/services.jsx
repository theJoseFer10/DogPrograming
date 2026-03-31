import { ShieldCheck, Cpu, Zap, Search } from "lucide-react";

const services = [
    {
        title: "Desarrollo de Élite",
        desc: "Sistemas robustos en Next.js y React. Código limpio, escalable y listo para morder el mercado.",
        icon: <Cpu className="text-orange-500" size={28} />,
    },
    {
        title: "Arquitectura Blindada",
        desc: "Seguridad y lealtad en tus datos. Implementamos protocolos que protegen tu backend como un perro guardián.",
        icon: <ShieldCheck className="text-orange-500" size={28} />,
    },
    {
        title: "Velocidad Extrema",
        desc: "Optimización de performance. Si tu sitio no carga en milisegundos, no es Dog Programming.",
        icon: <Zap className="text-orange-500" size={28} />,
    },
    {
        title: "Data Analysis",
        desc: "Rastreamos patrones ocultos en tus datos para convertirlos en decisiones de negocio ganadoras.",
        icon: <Search className="text-orange-500" size={28} />,
    }
];

export const Services = () => (
    <section id="services" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-white mb-12 tracking-tighter">
                NUESTROS <span className="text-orange-500">PROCESOS</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((s, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all group">
                        <div className="mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);