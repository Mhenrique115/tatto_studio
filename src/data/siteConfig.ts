export const siteConfig = {
  name: "Noir Ink Studio",
  tagline: "Arte que dura para sempre na sua pele",
  description:
    "Somos um estúdio premium de tatuagem e piercing localizado em Belo Horizonte. Com mais de 10 anos de experiência, nossa missão é transformar sua ideia em uma obra de arte única, com segurança, higiene e excelência artística.",
  shortDescription:
    "Estúdio premium de tatuagem em Belo Horizonte. Arte exclusiva, traço preciso, resultado que você vai carregar com orgulho.",
  address: {
    street: "Rua Rio Grande do Norte, 1420",
    neighborhood: "Savassi",
    city: "Belo Horizonte",
    state: "MG",
    cep: "30130-131",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.2!2d-43.9345!3d-19.9391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU2JzIwLjgiUyA0M8KwNTYnMDQuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890",
    reference: "Próximo ao Shopping Pátio Savassi, ao lado da Praça da Savassi",
  },
  contact: {
    whatsapp: "5531999887766",
    whatsappDisplay: "(31) 99988-7766",
    instagram: "@noirinkstudiio",
    instagramUrl: "https://instagram.com/noirinkstudiio",
    email: "contato@noirinkstudio.com.br",
  },
  hours: [
    { day: "Segunda-feira", time: "10h às 20h" },
    { day: "Terça-feira", time: "10h às 20h" },
    { day: "Quarta-feira", time: "10h às 20h" },
    { day: "Quinta-feira", time: "10h às 20h" },
    { day: "Sexta-feira", time: "10h às 21h" },
    { day: "Sábado", time: "10h às 18h" },
    { day: "Domingo", time: "Fechado" },
  ],
  showPiercing: true,
  year: 2024,
};

export type SiteConfig = typeof siteConfig;
