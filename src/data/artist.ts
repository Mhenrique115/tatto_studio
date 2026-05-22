export const artist = {
  name: "Lucas Ferreira",
  nickname: "Black Lucas",
  role: "Tattoo Artist & Fundador",
  photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&q=80",
  photoCover: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1200&q=80",
  bio: `Nascido em Belo Horizonte e criado entre pincéis e esboços, Lucas Ferreira descobriu a tatuagem aos 18 anos como uma extensão natural da sua paixão pelo desenho. O que começou como hobbie rapidamente se tornou vocação.

Com mais de 12 anos de trajetória, Lucas passou por estúdios renomados em São Paulo e no Rio de Janeiro antes de abrir o Noir Ink Studio em 2014, trazendo de volta pra BH toda a experiência e a visão artística que acumulou ao longo dessa jornada.

Referência no cenário tattoo de Minas Gerais, Lucas é conhecido pela versatilidade técnica, atenção obsessiva aos detalhes e pela capacidade de transformar referências dos clientes em algo absolutamente único. Cada tatuagem é tratada como uma obra de arte — e não poderia ser diferente.

Participou de convenções de tatuagem nacionais e internacionais, incluindo Brazil Tattoo Convention, São Paulo Tattoo Expo e Caracas Tattoo Con. Seu trabalho já foi publicado em revistas especializadas do setor.`,
  quote: "Tatuagem não é só estética. É memória, é identidade, é arte que respira com você.",
  specialties: [
    {
      name: "Realismo",
      description:
        "Retratos e composições ultra-realistas com sombreamento fotográfico. Especialidade em preto e cinza.",
      icon: "🎭",
      examples: [
        "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=400&q=80",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&q=80",
      ],
    },
    {
      name: "Blackwork",
      description:
        "Linhas sólidas, grandes áreas preenchidas e composições geométricas em preto absoluto.",
      icon: "⬛",
      examples: [
        "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&q=80",
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&q=80",
      ],
    },
    {
      name: "Fine Line",
      description:
        "Traços delicados e precisos, flores, letras e composições que impressionam pela suavidade.",
      icon: "✒️",
      examples: [
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
        "https://images.unsplash.com/photo-1590246814883-57c511e2ef93?w=400&q=80",
      ],
    },
    {
      name: "Old School",
      description:
        "Estilo clássico americano com contornos marcados, cores vibrantes e motivos tradicionais.",
      icon: "⚓",
      examples: [
        "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=400&q=80",
        "https://images.unsplash.com/photo-1582845512747-e42001c95638?w=400&q=80",
      ],
    },
    {
      name: "Geométrico",
      description:
        "Mandala, sacred geometry, padrões simétricos e composições matemáticas com execução impecável.",
      icon: "🔷",
      examples: [
        "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=400&q=80",
        "https://images.unsplash.com/photo-1609139003551-9a78f3040218?w=400&q=80",
      ],
    },
    {
      name: "Anime / Nerd",
      description:
        "Personagens de mangá, anime, games e cultura pop com traço fiel e cores marcantes.",
      icon: "🌸",
      examples: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
        "https://images.unsplash.com/photo-1612151853395-8ffd5e7c3897?w=400&q=80",
      ],
    },
  ],
  achievements: [
    "12+ anos de experiência",
    "1.500+ tatuagens realizadas",
    "Participação em 8 convenções nacionais",
    "Featured em Tattoo Magazine BR",
    "Destaque no Brazil Tattoo Convention 2022",
  ],
};

export type Artist = typeof artist;
