export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Como faço para agendar minha tatuagem?",
    answer:
      "O agendamento é feito diretamente pelo WhatsApp. Envie uma mensagem com sua ideia, referências e a área do corpo desejada. Respondemos em até 24h com disponibilidade de agenda e orçamento.",
  },
  {
    id: 2,
    question: "É necessário pagar sinal para reservar a sessão?",
    answer:
      "Sim, cobramos um sinal de 30% do valor total da tatuagem para confirmar o agendamento. O valor é descontado no dia da sessão e garante sua vaga na agenda.",
  },
  {
    id: 3,
    question: "Quanto tempo leva uma sessão de tatuagem?",
    answer:
      "Depende do tamanho, complexidade e localização da tattoo. Sessões simples levam de 1 a 3 horas. Peças maiores podem ser divididas em múltiplas sessões de 4 a 6 horas para garantir qualidade e conforto.",
  },
  {
    id: 4,
    question: "O estúdio é seguro e segue protocolos de higiene?",
    answer:
      "Absolutamente. Seguimos todos os protocolos da ANVISA. Usamos materiais descartáveis e esterilizados, luvas, máscaras e temos autoclave certificada no local. Sua segurança é nossa prioridade.",
  },
  {
    id: 5,
    question: "Quais são os cuidados após fazer a tatuagem?",
    answer:
      "Passamos todas as instruções de cuidado pós-tattoo ao final de cada sessão. Em geral: manter limpa com sabão neutro, hidratada e protegida do sol. Fornecemos um manual de cuidados por escrito.",
  },
  {
    id: 6,
    question: "Posso tatuar em qualquer parte do corpo?",
    answer:
      "Tatua-se praticamente em qualquer região. Algumas áreas exigem mais atenção ao processo de cicatrização, como mãos, pés e pescoço. Conversamos sobre isso durante a consulta para encontrar a melhor opção para você.",
  },
  {
    id: 7,
    question: "Vocês fazem cover up (cobertura de tatuagem antiga)?",
    answer:
      "Sim! O Lucas tem grande experiência em cover up. Agende uma consulta para avaliar a tattoo atual e discutir as melhores opções de cobertura ou reformulação.",
  },
];
