import { useState, useEffect } from "react";
import { toast } from "sonner";
import { FEEDBACK_FIELDS, WEB3FORMS_ACCESS_KEY } from "@/constants/feedback";

export interface Referral {
    name: string;
    instagram: string;
    phone: string;
}

export const useFeedbackForm = () => {
    const [mounted, setMounted] = useState(false);
    const [rating, setRating] = useState(0);
    const [clientInfo, setClientInfo] = useState({ name: "", company: "" });
    const [values, setValues] = useState<string[]>(new Array(FEEDBACK_FIELDS.length).fill(""));
    const [referrals, setReferrals] = useState<Referral[]>([{ name: "", instagram: "", phone: "" }]);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const updateValue = (index: number, value: string) => {
        setValues((prev) => {
            const next = [...prev];
            next[index] = value;
            return next;
        });
    };

    const updateReferral = (index: number, field: keyof Referral, value: string) => {
        setReferrals((prev) => {
            const next = [...prev];
            next[index][field] = value;
            return next;
        });
    };

    const addReferral = () => {
        setReferrals((prev) => [...prev, { name: "", instagram: "", phone: "" }]);
    };

    const removeReferral = (index: number) => {
        setReferrals((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!clientInfo.name && !clientInfo.company) {
            toast.error("Por favor, identifique-se (Nome ou Empresa).");
            return;
        }

        if (!WEB3FORMS_ACCESS_KEY) {
            toast.error("Chave do Web3Forms não configurada!");
            return;
        }

        setIsSubmitting(true);

        try {
            const referralsText = referrals
                .filter((r) => r.name || r.instagram || r.phone)
                .map((r, idx) => `Indicação ${idx + 1}:\nNome: ${r.name || "N/A"}\nInstagram: ${r.instagram || "N/A"}\nWhatsApp: ${r.phone || "N/A"}\n`)
                .join("\n");

            const payload = {
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: "✨ Novo Feedback High-Ticket | JOTA",
                from_name: "Portal de Feedback",
                "👤 Cliente": clientInfo.name || "N/A",
                "🏢 Empresa": clientInfo.company || "N/A",
                "⭐ Satisfação Geral": `${rating} Estrelas`,
                ...FEEDBACK_FIELDS.reduce((acc, field, i) => ({
                    ...acc,
                    [`${field.num} - ${field.label}`]: values[i] || "Não preenchido"
                }), {}),
                "05 - Indicações": referralsText || "Nenhuma indicação cadastrada.",
            };

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload),
            });

            const result = await res.json();

            if (!res.ok || !result.success) {
                console.error("Server Response:", result);
                throw new Error("O serviço de e-mail recusou a requisição.");
            }

            setSubmitted(true);
            toast.success("Feedback enviado com sucesso!");
        } catch (error) {
            console.error("Submission error details:", error);
            toast.error("Ocorreu um erro de conexão. Tente novamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
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
    };
};
