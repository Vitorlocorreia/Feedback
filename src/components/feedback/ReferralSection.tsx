import { X, Gift } from "@phosphor-icons/react";
import { Referral } from "@/hooks/useFeedbackForm";

interface ReferralSectionProps {
    referrals: Referral[];
    updateReferral: (index: number, field: keyof Referral, value: string) => void;
    addReferral: () => void;
    removeReferral: (index: number) => void;
    fieldsCount: number;
}

const ReferralSection = ({ referrals, updateReferral, addReferral, removeReferral, fieldsCount }: ReferralSectionProps) => (
    <section
        className="mb-14 relative reveal p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ animationDelay: `${300 + fieldsCount * 150}ms` }}
    >
        <div className="flex items-baseline gap-4 mb-8">
            <span className="font-display font-bold text-gold/20 text-7xl leading-none select-none">
                05
            </span>
            <h2 className="font-display text-xl text-foreground">
                Indique e Ganhe
            </h2>
        </div>

        <div className="mb-12 p-6 bg-gradient-to-br from-gold/20 via-gold/5 to-transparent border border-gold/30 rounded-xl relative overflow-hidden group/promo">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover/promo:bg-gold/20" />
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center border border-gold/40 text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <Gift size={24} weight="fill" />
                </div>
                <div>
                    <p className="text-gold text-lg md:text-xl font-display font-bold tracking-tight">
                        Ganhe R$ 400,00 de desconto
                    </p>
                    <p className="text-dim text-sm font-body font-normal mt-0.5">
                        na sua próxima mensalidade por cada indicação fechada.
                    </p>
                </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
            </div>
        </div>

        <div className="space-y-6">
            {referrals.map((ref, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 border border-border p-6 relative group bg-surface-1/40">
                    {referrals.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeReferral(i)}
                            className="absolute -top-3 -right-3 bg-background border border-border text-dim hover:text-destructive hover:border-destructive transition-colors w-6 h-6 rounded-full flex items-center justify-center text-xs md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
                            title="Remover indicação"
                        >
                            <X size={10} weight="bold" />
                        </button>
                    )}
                    <input
                        type="text"
                        value={ref.name}
                        onChange={(e) => updateReferral(i, "name", e.target.value)}
                        placeholder="Nome da empresa / pessoa"
                        className="brutal-input text-sm"
                    />
                    <input
                        type="text"
                        value={ref.instagram}
                        onChange={(e) => updateReferral(i, "instagram", e.target.value)}
                        placeholder="@ do Instagram"
                        className="brutal-input text-sm"
                    />
                    <input
                        type="text"
                        value={ref.phone}
                        onChange={(e) => updateReferral(i, "phone", e.target.value)}
                        placeholder="WhatsApp"
                        className="brutal-input text-sm"
                    />
                </div>
            ))}
        </div>

        <button
            type="button"
            onClick={addReferral}
            className="mt-6 text-xs text-gold uppercase tracking-[0.2em] hover:text-gold-light transition-colors font-body select-none"
        >
            + Adicionar outra indicação
        </button>
    </section>
);

export default ReferralSection;
