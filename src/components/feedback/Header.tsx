import logoJota from "@/assets/logo-jota.png";

interface HeaderProps {
    mounted: boolean;
}

const Header = ({ mounted }: HeaderProps) => (
    <header
        className={`mb-20 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
        <div className="flex items-start justify-between mb-16">
            <img src={logoJota} alt="JOTA" className="w-24 h-24" />
            <p className="text-dim text-[10px] uppercase tracking-[0.3em] font-body text-right leading-relaxed">
                Marketing Esportivo
            </p>
        </div>

        <div className="gold-line mb-12" />

        <div className="grid gap-8 items-end">
            <div>
                <p className="text-dim uppercase tracking-[0.3em] text-[11px] font-body mb-4">
                    Coleta de Percepções
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
                    Feed<span className="italic text-gold">back</span>
                </h1>
            </div>
        </div>
    </header>
);

export default Header;
