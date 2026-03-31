export const FEEDBACK_FIELDS = [
    {
        num: "01",
        label: "Qualidade Técnica",
        sub: "Produção de Conteúdo, Organização, Atendimento, Clareza de Dados",
        type: "input" as const,
    },
    {
        num: "02",
        label: "Entrega Estratégica",
        sub: "Alinhamento com os seus objetivos",
        type: "input" as const,
    },
    {
        num: "03",
        label: "Sugestões de Melhorias",
        sub: "O que podemos fazer diferente?",
        type: "textarea" as const,
    },
    {
        num: "04",
        label: "O que você mais gosta na nossa empresa?",
        sub: "Nossos pontos fortes",
        type: "textarea" as const,
    },
];

// Acesse https://web3forms.com/ e coloque seu email para gerar uma chave (Acess Key) gratuita.
// Cole a chave (ex: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx") abaixo:
export const WEB3FORMS_ACCESS_KEY = "f59d4ebc-5df2-4072-8af2-374b350bf22a";
