export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
  tattooStyle: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Luíza Costa",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    text: "Fui ao Noir Ink com uma referência vaga e o Lucas transformou em algo muito além do que eu imaginava. O ambiente é impecável, super limpo e aconchegante. Já indiquei para todo mundo que conheço.",
    rating: 5,
    tattooStyle: "Fine Line",
    date: "Outubro 2024",
  },
  {
    id: 2,
    name: "Rafael Mendonça",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    text: "Depois de visitar vários estúdios em BH, o Noir Ink foi o único que realmente entendeu minha visão. O resultado do meu dragão ficou absurdo de bom. Voltarei com certeza para fechar a manga.",
    rating: 5,
    tattooStyle: "Blackwork",
    date: "Setembro 2024",
  },
  {
    id: 3,
    name: "Carla Silveira",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    text: "A aquarela nas minhas costas ficou incrível! O Lucas tem uma habilidade única para trabalhar com cores. O atendimento foi ótimo do início ao fim. Estúdio top demais!",
    rating: 5,
    tattooStyle: "Aquarela",
    date: "Agosto 2024",
  },
  {
    id: 4,
    name: "Diego Paiva",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    text: "Minha tattoo de anime ficou idêntica ao personagem, com um nível de detalhe que eu não acreditei ser possível. Profissionalismo total, higiene impecável e resultado cinco estrelas.",
    rating: 5,
    tattooStyle: "Anime",
    date: "Julho 2024",
  },
  {
    id: 5,
    name: "Juliana Farias",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
    text: "Minha mandala ficou perfeita! A simetria é impressionante. O Lucas é um artista completo e ainda explica todo o processo de cuidado e cicatrização. Recomendo de olhos fechados!",
    rating: 5,
    tattooStyle: "Geométrica",
    date: "Junho 2024",
  },
];
