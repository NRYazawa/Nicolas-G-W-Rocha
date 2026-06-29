export type Project = {
  id: string;
  title: string;
  category: "Jogos" | "Apps"; // Padronizado
  status: { pt: string; en: string };
  year: string;
  featured: boolean;
  shortDesc: { pt: string; en: string };
  fullDesc: { pt: string; en: string };
  highlights: { pt: string[]; en: string[] };
  stack: string[];
  links: { github?: string; live?: string };
  imageUrl?: string;   // Novo: Link da imagem
  youtubeId?: string; // Novo: ID do video no Youtube (ex: "dQw4w9WgXcQ")
  hue: string;
};

export const allProjects: Project[] = [
  {
    id: "sinners-valley",
    title: "Sinner's Valley",
    category: "Jogos",
    status: { pt: "Em desenvolvimento", en: "In development" },
    year: "2026",
    featured: true,
    imageUrl: "C:\\Users\\Nicolas\\Downloads\\Nicolas G W Rocha\\img\\SinnersHollow_Logo.png",
    youtubeId: "", // ID do trailer
    shortDesc: {
      pt: "Demo de terror psicológico ambientado em uma vila fictícia no Paraná.",
      en: "Psychological horror demo set in a fictional village in Paraná."
    },
    fullDesc: {
      pt: "Sinner's Valley é um jogo de terror psicológico desenvolvido na Unreal Engine 5. O foco principal está na construção da narrativa e em uma lore profunda, explorando ambientes tensos, o grotesco e o desconhecido em uma vila isolada.",
      en: "Sinner's Valley is a psychological horror game developed in Unreal Engine 5. The main focus is on narrative building and deep lore, exploring tense environments, the grotesque, and the unknown in an isolated village."
    },
    highlights: {
      pt: [
        "Desenvolvimento em Unreal Engine 5 (C++ e Blueprints)",
        "Foco em terror psicológico e design de som imersivo",
        "Construção de mundo original e lore densa"
      ],
      en: [
        "Developed in Unreal Engine 5 (C++ and Blueprints)",
        "Focus on psychological horror and immersive sound design",
        "Original world-building and dense lore"
      ]
    },
    stack: ["Unreal Engine 5", "C++", "Blueprints"],
    links: { github: "#" },
    hue: "20", // Carmesim
  },
  {
    id: "cytosis",
    title: "Cytosis (Project Blood Vessel)",
    category: "Jogos",
    status: { pt: "Em desenvolvimento", en: "In development" },
    year: "2026",
    featured: true,
    imageUrl: "C:\\Users\\Nicolas\\Downloads\\Nicolas G W Rocha\\img\\Blackheart_Logo.png",
    youtubeId: "",
    shortDesc: {
      pt: "Sucessor espiritual de InFamous com mecânicas de manipulação de energia biológica e sangue.",
      en: "Spiritual successor to InFamous featuring biological energy and blood manipulation mechanics."
    },
    fullDesc: {
      pt: "Um jogo de ação onde um detetive canadense utiliza habilidades de manipulação de energia biológica e sangue para resolver casos e combater inimigos. O projeto conta com um Game Design Document (GDD) completo e uma vertical slice detalhada.",
      en: "An action game where a Canadian detective uses biological energy and blood manipulation skills to solve cases and fight enemies. The project features a complete Game Design Document (GDD) and a detailed vertical slice."
    },
    highlights: {
      pt: [
        "Mecânicas complexas de manipulação de sangue e energia biológica",
        "Documentação de design completa (GDD)",
        "Desenvolvimento de Vertical Slice de alta fidelidade"
      ],
      en: [
        "Complex blood and biological energy manipulation mechanics",
        "Comprehensive design documentation (GDD)",
        "High-fidelity Vertical Slice development"
      ]
    },
    stack: ["Unreal Engine 5", "Game Design"],
    links: { github: "#" },
    hue: "350",
  },
  {
    id: "foxy-foxes",
    title: "Foxy Foxes",
    category: "Jogos",
    status: { pt: "Protótipo", en: "Prototype" },
    year: "2025",
    featured: true,
    imageUrl: "C:\\Users\\Nicolas\\Downloads\\Nicolas G W Rocha\\img\\PenetrasBonsDePapo_Logo.png",
    youtubeId: "",
    shortDesc: {
      pt: "Jogo social multiplayer cross-play inspirado na era nostálgica de Club Penguin.",
      en: "Cross-play multiplayer social game inspired by the nostalgic era of Club Penguin."
    },
    fullDesc: {
      pt: "Um projeto focado em interação social comunitária com suporte nativo a cross-play entre Android e Steam. O desenvolvimento foi estruturado em um ciclo de 6 meses, com ênfase máxima na arquitetura de servidores e replicação multiplayer.",
      en: "A community-driven social interaction project with native cross-play support between Android and Steam. Development was structured in a 6-month cycle, with maximum emphasis on server architecture and multiplayer replication."
    },
    highlights: {
      pt: [
        "Cross-play nativo funcional entre mobile (Android) e PC (Steam)",
        "Arquitetura de rede otimizada para sincronização multiplayer",
        "Ciclo de desenvolvimento ágil de 6 meses planejado"
      ],
      en: [
        "Functional native cross-play between mobile (Android) and PC (Steam)",
        "Optimized network architecture for multiplayer synchronization",
        "Planned 6-month agile development cycle"
      ]
    },
    stack: ["Unity", "C#", "Multiplayer Server"],
    links: { github: "#" },
    hue: "30",
  },
  {
    id: "termo-unity",
    title: "Termo",
    category: "Jogos",
    status: { pt: "Concluído", en: "Completed" },
    year: "2026",
    featured: false,
    imageUrl: "C:\\Users\\Nicolas\\Downloads\\Nicolas G W Rocha\\img\\ElevatorDownToHell_Logo.png",
    youtubeId: "",
    shortDesc: {
      pt: "Recriação digital de jogo de palavras utilizando Unity e um dicionário customizado.",
      en: "Digital recreation of a word game using Unity and a custom dictionary."
    },
    fullDesc: {
      pt: "Um jogo focado em adivinhar palavras com número limitado de tentativas. O desenvolvimento exigiu a preparação minuciosa e integração de um dataset de dicionário em português, além de sistemas de pontuação e placar de líderes (leaderboards).",
      en: "A game focused on guessing words with a limited number of attempts. Development required the meticulous preparation and integration of a Portuguese dictionary dataset, as well as scoring and leaderboard systems."
    },
    highlights: {
      pt: [
        "Processamento e integração de base de dados de palavras customizada",
        "Implementação de lógica de validação e sistema de Leaderboards",
        "UI responsiva e feedback de cores intuitivo"
      ],
      en: [
        "Custom word database processing and integration",
        "Validation logic and Leaderboard system implementation",
        "Responsive UI and intuitive color feedback"
      ]
    },
    stack: ["Unity", "C#"],
    links: { github: "#" },
    hue: "140",
  },
  {
    id: "alfabetizacao-digital",
    title: "App de Alfabetização Digital",
    category: "Apps",
    status: { pt: "Em desenvolvimento", en: "In development" },
    year: "2026",
    featured: true,
    imageUrl: "C:\\Users\\Nicolas\\Downloads\\Nicolas G W Rocha\\img\\DigiAid_Logo.png",
    youtubeId: "7P-vDVOljcQ",
    shortDesc: {
      pt: "Simulador de redes sociais criado para auxiliar no aprendizado tecnológico da terceira idade.",
      en: "Social media simulator created to help seniors learn technology."
    },
    fullDesc: {
      pt: "Um aplicativo educacional desenvolvido em colaboração com psicólogos. O foco principal é criar um ambiente seguro e simulado de redes sociais para ensinar letramento digital a idosos, ajudando a superar barreiras tecnológicas através de um design acessível.",
      en: "An educational application developed in collaboration with psychologists. The main focus is to create a safe, simulated social media environment to teach digital literacy to the elderly, helping to overcome technological barriers through accessible design."
    },
    highlights: {
      pt: [
        "Colaboração multidisciplinar com profissionais de psicologia",
        "UX/UI construído estritamente para acessibilidade focada na terceira idade",
        "Simulação interativa e segura de ambientes de redes sociais reais"
      ],
      en: [
        "Multidisciplinary collaboration with psychology professionals",
        "UX/UI built strictly for accessibility focused on seniors",
        "Safe and interactive simulation of real social network environments"
      ]
    },
    stack: ["Mobile", "UX/UI Design"],
    links: { github: "#" },
    hue: "250",
  }
];

export const featuredProjects = allProjects.filter((p) => p.featured);