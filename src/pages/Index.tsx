import { Sparkle, ArrowRight } from "@phosphor-icons/react";
import { useFeedbackForm } from "@/hooks/useFeedbackForm";
import Header from "@/components/feedback/Header";
import Footer from "@/components/feedback/Footer";
import IdentificationSection from "@/components/feedback/IdentificationSection";
import RatingSection from "@/components/feedback/RatingSection";
import FieldsSection from "@/components/feedback/FieldsSection";
import ReferralSection from "@/components/feedback/ReferralSection";
import SuccessState from "@/components/feedback/SuccessState";
import { FEEDBACK_FIELDS } from "@/constants/feedback";

const Index = () => {
  const {
    mounted,
    rating,
    setRating,
    clientInfo,
    setClientInfo,
    values,
    updateValue,
    referrals,
    updateReferral,
    addReferral,
    removeReferral,
    submitted,
    isSubmitting,
    handleSubmit,
  } = useFeedbackForm();

  if (submitted) {
    return <SuccessState />;
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
          <Header mounted={mounted} />

          <form onSubmit={handleSubmit}>
            <IdentificationSection
              clientInfo={clientInfo}
              setClientInfo={setClientInfo}
            />

            <RatingSection
              rating={rating}
              setRating={setRating}
            />

            <FieldsSection
              values={values}
              updateValue={updateValue}
            />

            <ReferralSection
              referrals={referrals}
              updateReferral={updateReferral}
              addReferral={addReferral}
              removeReferral={removeReferral}
              fieldsCount={FEEDBACK_FIELDS.length}
            />

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

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
