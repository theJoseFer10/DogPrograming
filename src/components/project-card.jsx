import { ChevronRight } from "lucide-react";

export default function ProjectCard({ category, title, description, image, link, bg_color }) {
    return (
        <div className="group relative overflow-hidden rounded-3xl bg-orange-500/10 border border-white/10">
            <div className="p-8">
                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">{category}</span>
                <h3 className="text-3xl font-black text-white mt-2">{title}</h3>
                <p className="text-gray-400 mt-4 max-w-sm">{description}</p>
                <a href={link} target="_blank" className="mt-6 flex items-center gap-2 text-white font-bold hover:text-orange-500 transition-colors">
                    Ver Proyecto
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
            <div className="h-64 bg-gradient-to-t from-orange-500/20 to-transparent" />
        </div>
    );
}