interface IdentificationSectionProps {
    clientInfo: { name: string; company: string };
    setClientInfo: React.Dispatch<React.SetStateAction<{ name: string; company: string }>>;
}

const IdentificationSection = ({ clientInfo, setClientInfo }: IdentificationSectionProps) => (
    <section className="mb-14 relative reveal p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="flex items-baseline gap-4 mb-5">
            <span className="font-display font-bold text-gold/20 text-7xl leading-none select-none">
                ID
            </span>
            <div>
                <h2 className="font-display text-xl text-foreground">
                    Identificação
                </h2>
                <p className="text-dim text-sm font-body font-normal mt-1">
                    Como podemos identificar sua empresa?
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
                type="text"
                value={clientInfo.name}
                onChange={(e) => setClientInfo((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Seu Nome"
                className="brutal-input"
            />
            <input
                type="text"
                value={clientInfo.company}
                onChange={(e) => setClientInfo((prev) => ({ ...prev, company: e.target.value }))}
                placeholder="Nome da Empresa"
                className="brutal-input"
            />
        </div>
    </section>
);

export default IdentificationSection;
