import { FEEDBACK_FIELDS } from "@/constants/feedback";

interface FieldsSectionProps {
    values: string[];
    updateValue: (index: number, value: string) => void;
}

const FieldsSection = ({ values, updateValue }: FieldsSectionProps) => (
    <>
        <div className="gold-line mb-16" />
        {FEEDBACK_FIELDS.map((field, i) => (
            <section
                key={field.num}
                className="mb-14 relative reveal p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm"
                style={{ animationDelay: `${300 + i * 150}ms` }}
            >
                <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-display font-bold text-gold/20 text-7xl leading-none select-none">
                        {field.num}
                    </span>
                    <div>
                        <h2 className="font-display text-xl text-foreground">
                            {field.label}
                        </h2>
                        <p className="text-dim text-sm font-body font-normal mt-1">
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
    </>
);

export default FieldsSection;
