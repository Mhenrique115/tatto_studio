export type TattooCategory =
  | "Anime"
  | "Realismo"
  | "Aquarela"
  | "Blackwork"
  | "Old School"
  | "Fine Line"
  | "Tribal"
  | "Minimalista"
  | "Geométrica";

export interface Tattoo {
  id: number;
  title: string;
  category: TattooCategory;
  image: string;
  description: string;
  clientNote: string;
}

export const tattooCategories: TattooCategory[] = [
  "Anime",
  "Realismo",
  "Aquarela",
  "Blackwork",
  "Old School",
  "Fine Line",
  "Tribal",
  "Minimalista",
  "Geométrica",
];

export const tattoos: Tattoo[] = [
  {
    id: 1,
    title: "Retrato Sombrio",
    category: "Realismo",
    image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=600&q=80",
    description:
      "Retrato feminino em preto e cinza com sombreamento fotográfico. Feito no antebraço com sessão única de 6 horas.",
    clientNote: "\"Superou todas as minhas expectativas. O detalhe nos olhos é impressionante!\" — Ana L.",
  },
  {
    id: 2,
    title: "Dragão Oriental",
    category: "Blackwork",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
    description:
      "Dragão japonês em blackwork com preenchimento sólido e detalhes de escamas. Manga completa, 3 sessões.",
    clientNote: "\"Cada detalhe foi pensado junto com o Lucas. O resultado ficou épico.\" — Rafael M.",
  },
  {
    id: 3,
    title: "Borboletas Aquarela",
    category: "Aquarela",
    image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80",
    description:
      "Composição de borboletas em aquarela com explosão de cores vibrantes. Costas superiores, 2 sessões.",
    clientNote: "\"As cores ficaram vivas demais! Todo mundo para para perguntar onde fiz.\" — Carla S.",
  },
  {
    id: 4,
    title: "Naruto Sage Mode",
    category: "Anime",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    description:
      "Naruto no modo sábio com técnica colorida e traço fiel ao mangá. Braço inteiro, 4 sessões.",
    clientNote: "\"Fã de Naruto desde criança. Finalmente tenho a tatuagem que sempre sonhei!\" — Diego P.",
  },
  {
    id: 5,
    title: "Mandala Sagrada",
    category: "Geométrica",
    image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=600&q=80",
    description:
      "Mandala de 20cm com sacred geometry e padrões simétricos em preto. Esterno, sessão única intensa.",
    clientNote: "\"A simetria é perfeita. Parece que foi feita a compasso. Simplesmente incrível.\" — Juliana F.",
  },
  {
    id: 6,
    title: "Âncora Old School",
    category: "Old School",
    image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=600&q=80",
    description:
      "Âncora americana clássica com rosas, faixas e cores tradicionais vibrantes. Panturrilha, sessão única.",
    clientNote: "\"Queria algo clássico e ficou exatamente assim. Cores perfeitas!\" — Bruno T.",
  },
  {
    id: 7,
    title: "Rosa Fine Line",
    category: "Fine Line",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    description:
      "Rosa delicada com caule e folhas em traço fino. Costela, sessão de 3 horas. Técnica single needle.",
    clientNote: "\"Delicada e feminina como eu queria. A cicatrização ficou ótima também.\" — Manu R.",
  },
  {
    id: 8,
    title: "Padrão Tribal",
    category: "Tribal",
    image: "https://images.unsplash.com/photo-1590246814883-57c511e2ef93?w=600&q=80",
    description:
      "Tribal polinesiano com motivos oceânicos e padrões tradicionais maori. Ombro e braço, 2 sessões.",
    clientNote: "\"Respeita a cultura e ficou poderoso. O Lucas pesquisou muito sobre os símbolos.\" — Thiago N.",
  },
  {
    id: 9,
    title: "Pássaro Minimalista",
    category: "Minimalista",
    image: "https://images.unsplash.com/photo-1612151853395-8ffd5e7c3897?w=600&q=80",
    description:
      "Pássaro em voo com linhas minimalistas. Pulso, sessão de 1 hora. Eterno e discreto.",
    clientNote: "\"Simples e com significado profundo. Exatamente o que eu precisava.\" — Fernanda C.",
  },
  {
    id: 10,
    title: "Olho de Hórus",
    category: "Blackwork",
    image: "https://images.unsplash.com/photo-1609139003551-9a78f3040218?w=600&q=80",
    description:
      "Olho de Hórus egípcio com ornamentos geométricos e preenchimento em blackwork total. Peito, sessão única.",
    clientNote: "\"Pessei um ano planejando essa tattoo. A execução foi além do esperado.\" — Gustavo L.",
  },
  {
    id: 11,
    title: "Serpente Aquarela",
    category: "Aquarela",
    image: "https://images.unsplash.com/photo-1582845512747-e42001c95638?w=600&q=80",
    description:
      "Serpente enrolada com splash de aquarela em tons de verde e azul. Coxa, 2 sessões de 4 horas.",
    clientNote: "\"As cores parecem que estão vivas. Recebo elogios toda vez que uso bermuda!\" — Patrick S.",
  },
  {
    id: 12,
    title: "Leão Realista",
    category: "Realismo",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
    description:
      "Leão em preto e cinza ultra-realista com texturas de pelo detalhadas. Omoplata, 3 sessões.",
    clientNote: "\"Todo mundo acha que é uma foto. O realismo do pelo é impressionante.\" — Rodrigo A.",
  },
  {
    id: 13,
    title: "Símbolos Rúnicos",
    category: "Minimalista",
    image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=600&q=80",
    description:
      "Sequência de runas nórdicas com significados personalizados. Coluna, sessão de 2 horas.",
    clientNote: "\"Cada runa tem um significado especial na minha vida. Ficou muito elegante.\" — Lara V.",
  },
  {
    id: 14,
    title: "Triângulo Sagrado",
    category: "Geométrica",
    image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80",
    description:
      "Sacred geometry com triângulos sobrepostos e padrões matemáticos em fineline. Antebraço, sessão única.",
    clientNote: "\"Filosofia e arte juntos. O resultado ficou exatamente como imaginei.\" — Marcos T.",
  },
];
