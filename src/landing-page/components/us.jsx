export const About = () => (
    <section id="about" className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full" />
                <h2 className="text-5xl font-black text-white tracking-tighter leading-none relative">
                    NO SOMOS UNA <br />
                    AGENCIA MÁS. <br />
                    <span className="text-orange-500 font-light">SOMOS BIEN PERROS PROGRAMANDO.</span>
                </h2>
                <p className="text-gray-400 mt-8 text-lg leading-relaxed">
                    En <strong>Dog Programming</strong>, operamos bajo un código de honor: lealtad absoluta al proyecto y hambre de resultados. Nacimos en los terminales de Unix y crecimos resolviendo problemas que otros evitaban.
                </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <p className="text-orange-500 font-mono text-sm mb-4">{`// Nuestra Filosofía`}</p>
                <p className="text-white text-2xl font-bold italic leading-tight">
                    "Un buen desarrollador no duerme hasta que el bug ha sido cazado. Un gran desarrollador diseña sistemas donde los bugs no tienen donde esconderse."
                </p>
            </div>
        </div>
    </section>
);