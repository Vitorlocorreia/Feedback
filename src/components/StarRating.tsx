import { useState } from "react";
import { Star } from "@phosphor-icons/react";

interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
}

const StarRating = ({ value, onChange }: StarRatingProps) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hovered || value);
        return (
          <button
            key={star}
            type="button"
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => onChange(star)}
            className="relative p-1.5 transition-all duration-300 hover:scale-110 active:scale-90 focus:outline-none"
            aria-label={`${star} estrela${star > 1 ? "s" : ""}`}
          >
            <Star
              size={32}
              weight={isFilled ? "fill" : "thin"}
              className="transition-all duration-500"
              style={{
                color: isFilled ? "hsl(43 56% 52%)" : "hsl(0 0% 20%)",
                filter: isFilled ? "drop-shadow(0 0 8px hsl(43 56% 52% / 0.4))" : "none",
              }}
            />
          </button>
        );
      })}
      {value > 0 && (
        <span className="ml-4 font-display italic text-2xl text-gold opacity-60">
          {value}/5
        </span>
      )}
    </div>
  );
};

export default StarRating;
