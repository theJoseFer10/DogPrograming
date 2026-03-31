import { ExternalLink } from "lucide-react";
import ProjectCard from "../../components/project-card";

export const Projects = () => (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-4xl font-black text-white tracking-tighter">
                    NUESTRO <span className="text-orange-500">PORTAFOLIO</span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Proyecto 1: Aracnotanques */}
                <ProjectCard
                    category="Python / Curses"
                    title="Zafiro editor"
                    description="Un editor de código para la terminal, con características avanzadas como resaltado de sintaxis y más."
                    image=""
                    link="https://zafiroed.netlify.app/"
                    bg_color="bg-orange-500/10"
                />

                {/* Proyecto 2: Gestión de Datos */}
                <ProjectCard
                    category="HTML / Tailwind"
                    title="Chainsaw Man El Arco de Reze"
                    description="Una página web para el arco de Reze de Chainsaw Man, con información sobre los personajes, la trama y más."
                    image=""
                    link="https://thejosefer10.github.io/Chainsaw-Man-Arco-de-Reze/"
                    bg_color="bg-white/5"
                />
                <ProjectCard
                    category="HTML / CSS"
                    title="SouSou No Frieren"
                    description="Una página web para el arco de Frieren de Sousou No Frieren, con información sobre los personajes, la trama y más."
                    image=""
                    link="https://thejosefer10.github.io/sousou-no-frieren/"
                    bg_color="bg-orange-500/10"
                />
            </div>
        </div>
    </section>
);