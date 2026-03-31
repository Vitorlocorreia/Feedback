import logoJota from "@/assets/logo-jota.png";

const SuccessState = () => (
    <div className="image-bg min-h-screen flex items-center justify-center p-6">
        <div className="relative z-10 reveal max-w-lg text-center">
            <div className="mb-10 flex justify-center">
                <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent" />
            </div>
            <p className="text-dim uppercase tracking-[0.4em] text-xs font-body mb-6">
                Feedback registrado
            </p>
            <h1 className="font-display italic text-5xl md:text-7xl text-foreground mb-6">
                Obrigado<span className="text-gold">.</span>
            </h1>
            <p className="text-dim text-base font-body font-normal leading-relaxed max-w-sm mx-auto">
                Sua perspectiva é o que nos separa do comum.
                <br />A JOTA agradece a confiança.
            </p>
            <div className="mt-12 flex justify-center">
                <img src={logoJota} alt="JOTA" className="w-20 h-20 opacity-40" />
            </div>
        </div>
    </div>
);

export default SuccessState;
