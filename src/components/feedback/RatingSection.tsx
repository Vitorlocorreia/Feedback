import StarRating from "@/components/StarRating";

interface RatingSectionProps {
    rating: number;
    setRating: (rating: number) => void;
}

const RatingSection = ({ rating, setRating }: RatingSectionProps) => (
    <section
        className="mb-16 reveal p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ animationDelay: "200ms" }}
    >
        <div className="flex items-baseline gap-4 mb-6">
            <span className="font-display font-bold text-gold/20 text-7xl leading-none select-none">
                00
            </span>
            <div>
                <h2 className="font-display text-xl text-foreground">
                    Satisfação Geral
                </h2>
                <p className="text-dim text-sm font-body font-normal mt-1">
                    Como foi a experiência este mês?
                </p>
            </div>
        </div>
        <StarRating value={rating} onChange={setRating} />
    </section>
);

export default RatingSection;
