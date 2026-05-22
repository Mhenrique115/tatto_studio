export type PiercingCategory =
  | "Orelha"
  | "Nariz"
  | "Lábio"
  | "Sobrancelha"
  | "Umbigo"
  | "Industrial"
  | "Daith"
  | "Tragus";

export interface Piercing {
  id: number;
  title: string;
  category: PiercingCategory;
  image: string;
  description: string;
  healingTime: string;
  clientNote: string;
}

export const piercingCategories: PiercingCategory[] = [
  "Orelha",
  "Nariz",
  "Lábio",
  "Sobrancelha",
  "Umbigo",
  "Industrial",
  "Daith",
  "Tragus",
];

export const piercings: Piercing[] = [
  {
    id: 1,
    title: "Helix Triplo",
    category: "Orelha",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80",
    description:
      "Três piercings helix dispostos em cascata com argolas de aço cirúrgico. Look delicado e elegante.",
    healingTime: "6 a 12 meses",
    clientNote: "\"Ficou exatamente como vi no Pinterest! O piercer foi super cuidadoso.\" — Bianca M.",
  },
  {
    id: 2,
    title: "Septum Gold",
    category: "Nariz",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&q=80",
    description:
      "Septum com argola dourada em titânio anodizado. Pode ser escondido facilmente, ideal para ambientes formais.",
    healingTime: "6 a 8 semanas",
    clientNote: "\"Estava com medo, mas foi rapidíssimo! E ficou lindo demais.\" — Ingrid L.",
  },
  {
    id: 3,
    title: "Industrial Bar",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&q=80",
    description:
      "Barra industrial atravessando dois pontos do cartilagem superior. Peça reta em aço cirúrgico 316L.",
    healingTime: "9 a 12 meses",
    clientNote: "\"O mais estiloso que já fiz! Vira atenção em todo lugar.\" — Felipe G.",
  },
  {
    id: 4,
    title: "Daith Crescente",
    category: "Daith",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80",
    description:
      "Daith com argola crescente em ouro 14k. Além do visual, muitos relatam alívio de enxaqueca.",
    healingTime: "9 a 12 meses",
    clientNote: "\"Minha enxaqueca melhorou e ainda ficou lindíssimo. Dupla missão cumprida!\" — Vanessa R.",
  },
  {
    id: 5,
    title: "Labret Micro",
    category: "Lábio",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&q=80",
    description:
      "Labret com flat back em titânio cor rosê. Discreto, moderno e altamente confortável no dia a dia.",
    healingTime: "6 a 12 semanas",
    clientNote: "\"Discreto e delicado. Perfeito para quem quer algo sutil mas estiloso.\" — Camila S.",
  },
  {
    id: 6,
    title: "Tragus Gem",
    category: "Tragus",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&q=80",
    description:
      "Tragus com labret de gema de cristal. Brilha com a luz natural e dá um toque sofisticado ao look.",
    healingTime: "3 a 6 meses",
    clientNote: "\"O cristalzinho brilha quando pega luz. Amo resultado!\" — Tais O.",
  },
  {
    id: 7,
    title: "Umbigo Vintage",
    category: "Umbigo",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80",
    description:
      "Piercing umbigo com barra banana em aço dourado e pendant de gema topázio. Clássico e chamativo.",
    healingTime: "6 a 12 meses",
    clientNote: "\"Amei! Combina perfeitamente com cropped. Me sinto uma deusa.\" — Natalia F.",
  },
  {
    id: 8,
    title: "Sobrancelha Curvo",
    category: "Sobrancelha",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&q=80",
    description:
      "Sobrancelha com barra curva em titânio preto. Expressivo, ousado e de fácil manutenção.",
    healingTime: "6 a 9 meses",
    clientNote: "\"Dá um ar mais expressivo e rebelde ao look. Adorei!\" — Ricardo J.",
  },
];
