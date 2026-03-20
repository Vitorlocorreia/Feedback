import { useState, useEffect } from "react";
import {
  PaperPlaneTilt,
  Sparkle,
  ArrowRight,
  X,
} from "@phosphor-icons/react";
import { toast } from "sonner";
import StarRating from "@/components/StarRating";
import logoJota from "@/assets/logo-jota.png";

const fields = [
  {
    num: "01",
    label: "Qualidade Técnica",
    sub: "Precisão dos dados, design dos relatórios, clareza visual",
    type: "input" as const,
  },
  {
    num: "02",
    label: "Entrega Estratégica",
    sub: "Alinhamento com seus objetivos e timing",
    type: "input" as const,
  },
  {
    num: "03",
    label: "Sugestões de Melhoria",
    sub: "O que podemos fazer diferente?",
    type: "textarea" as const,
  },
  {
    num: "04",
    label: "Visão de Futuro",
    sub: "Novas frentes, ideias ousadas, oportunidades",
    type: "textarea" as const,
  },
];

const Index = () => {
  const [rating, setRating] = useState(0);
  const [values, setValues] = useState(["", "", "", ""]);
  const [referrals, setReferrals] = useState([{ name: "", instagram: "", phone: "" }]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const updateReferral = (index: number, field: keyof typeof referrals[0], value: string) => {
    const next = [...referrals];
    next[index][field] = value;
    setReferrals(next);
  };

  const addReferral = () => {
    setReferrals([...referrals, { name: "", instagram: "", phone: "" }]);
  };

  const removeReferral = (index: number) => {
    setReferrals(referrals.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateValue = (i: number, v: string) => {
    setValues((prev) => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format referrals mapping
      const referralsText = referrals
        .filter((r) => r.name || r.instagram || r.phone)
        .map((r, idx) => `Indicação ${idx + 1}:\nNome: ${r.name || "N/A"}\nInstagram: ${r.instagram || "N/A"}\nWhatsApp: ${r.phone || "N/A"}\n`)
        .join("\n");

      const payload = {
        _subject: "✨ Novo Feedback High-Ticket | JOTA",
        _template: "box",
        "⭐ Satisfação Geral": `${rating} Estrelas`,
        "01 - Qualidade Técnica": values[0] || "Não preenchido",
        "02 - Entrega Estratégica": values[1] || "Não preenchido",
        "03 - Sugestões de Melhoria": values[2] || "Não preenchido",
        "04 - Visão de Futuro": values[3] || "Não preenchido",
        "05 - Indicações": referralsText || "Nenhuma indicação cadastrada.",
      };

      const res = await fetch("https://formsubmit.co/ajax/vitorlocorreia282@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Falha no envio");

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao enviar seu feedback. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="image-bg min-h-screen flex items-center justify-center p-6">
        <div
          className="relative z-10 reveal max-w-lg text-center"
        >
          <div className="mb-10 flex justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent" />
          </div>
          <p className="text-dim uppercase tracking-[0.4em] text-xs font-body mb-6">
            Feedback registrado
          </p>
          <h1 className="font-display italic text-5xl md:text-7xl text-foreground mb-6">
            Obrigado<span className="text-gold">.</span>
          </h1>
          <p className="text-dim text-base font-body font-light leading-relaxed max-w-sm mx-auto">
            Sua perspectiva é o que nos separa do comum.
            <br />A JOTA agradece a confiança.
          </p>
          <div className="mt-12 flex justify-center">
            <img src={logoJota} alt="JOTA" className="w-12 h-12 opacity-40" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="image-bg min-h-screen">
      <div className="relative z-10">
        {/* Desktop: side label */}
        <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2">
          <p className="vertical-text text-dim text-[10px] uppercase tracking-[0.5em] font-body">
            Feedback Confidencial
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* Header */}
          <header
            className={`mb-20 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-start justify-between mb-16">
              <img src={logoJota} alt="JOTA" className="w-14 h-14" />
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

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Rating */}
            <section
              className="mb-16 reveal p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display italic text-gold/20 text-5xl leading-none">
                  00
                </span>
                <div>
                  <h2 className="font-display text-xl text-foreground">
                    Satisfação Geral
                  </h2>
                  <p className="text-dim text-sm font-body font-light mt-1">
                    Como foi a experiência este mês?
                  </p>
                </div>
              </div>
              <StarRating value={rating} onChange={setRating} />
            </section>

            <div className="gold-line mb-16" />

            {/* Fields */}
            {fields.map((field, i) => (
              <section
                key={field.num}
                className="mb-14 relative reveal p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm"
                style={{ animationDelay: `${300 + i * 150}ms` }}
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display italic text-gold/20 text-5xl leading-none select-none">
                    {field.num}
                  </span>
                  <div>
                    <h2 className="font-display text-xl text-foreground">
                      {field.label}
                    </h2>
                    <p className="text-dim text-sm font-body font-light mt-1">
                      {field.sub}
                    </p>
                  </div>
                </div>

                {field.type === "input" ? (
                  <input
                    type="text"
                    value={values[i]}
                    onChange={(e) => updateValue(i, e.target.value)}
                    placeholder="Escreva aqui..."
                    className="brutal-input"
                  />
                ) : (
                  <textarea
                    value={values[i]}
                    onChange={(e) => updateValue(i, e.target.value)}
                    placeholder="Escreva aqui..."
                    className="brutal-textarea"
                    rows={4}
                  />
                )}
              </section>
            ))}

            {/* Referrals Section */}
            <section
              className="mb-14 relative reveal p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm"
              style={{ animationDelay: `${300 + fields.length * 150}ms` }}
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-display italic text-gold/20 text-5xl leading-none select-none">
                  05
                </span>
                <div>
                  <h2 className="font-display text-xl text-foreground">
                    Indique e Ganhe
                  </h2>
                  <p className="text-dim text-sm font-body font-light mt-1">
                    Conhece alguém que precisa do nosso nível de entrega? Deixe contatos e ganhe desconto na mensalidade.
                  </p>
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

            <div className="gold-line mb-12" />

            {/* Submit */}
            <div
              className="reveal"
              style={{ animationDelay: "1050ms" }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="group cta-shimmer w-full py-5 px-8 text-primary-foreground font-display text-xl tracking-wider transition-all duration-500 hover:tracking-[0.15em] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
              >
                {isSubmitting ? (
                  <>
                    <Sparkle
                      size={20}
                      weight="fill"
                      className="animate-spin"
                    />
                    Enviando
                  </>
                ) : (
                  <>
                    Enviar Feedback
                    <ArrowRight
                      size={20}
                      weight="bold"
                      className="transition-transform duration-500 group-hover:translate-x-2"
                    />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer */}
          <footer
            className="mt-24 reveal"
            style={{ animationDelay: "1000ms" }}
          >
            <div className="gold-line mb-8" />
            <div className="flex items-center justify-between">
              <p className="text-dim text-[10px] uppercase tracking-[0.4em] font-body">
                JOTA © {new Date().getFullYear()}
              </p>
              <p className="text-dim text-[10px] uppercase tracking-[0.3em] font-body">
                Confidencial
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
