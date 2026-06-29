export type Project = {
  id: string;
  title: string;
  category: string;
  status: "Concluído" | "Em desenvolvimento" | "Arquivado";
  year: string;
  featured: boolean;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  stack: string[];
  links: { github?: string; live?: string };
  hue: string;
};

export const allProjects: Project[] = [
  {
    id: "vortex",
    title: "Vortex",
    category: "Jogo",
    status: "Concluído",
    year: "2024",
    featured: true,
    shortDesc:
      "Jogo de ação indie em pixel art com sistema de combate baseado em habilidades. Desenvolvido solo do concept ao lançamento na Steam.",
    fullDesc:
      "Vortex é um action roguelite em pixel art onde cada run é única. O jogador escolhe habilidades ao subir de nível, combinando efeitos para criar builds poderosas. Desenvolvido inteiramente solo — do design de personagens à implementação de física e IA dos inimigos.",
    highlights: [
      "Sistema de habilidades com mais de 40 combinações únicas",
      "IA de inimigos com comportamento por estados (FSM)",
      "Geração procedural de salas e corredores",
      "Suporte a controle e teclado com rebind de teclas",
      "500+ downloads na primeira semana de lançamento",
    ],
    stack: ["Unity", "C#", "Aseprite", "FMOD"],
    links: { github: "#", live: "#" },
    hue: "289",
  },
  {
    id: "fintrack",
    title: "Fintrack",
    category: "App",
    status: "Concluído",
    year: "2024",
    featured: true,
    shortDesc:
      "Aplicativo de controle financeiro pessoal com gráficos de gastos, metas mensais e exportação de relatórios.",
    fullDesc:
      "Fintrack ajuda o usuário a ter clareza total sobre suas finanças. Com categorização automática de transações, dashboards visuais e alertas de gastos, o app transforma dados brutos em decisões conscientes. Backend em Firebase com sync em tempo real.",
    highlights: [
      "Categorização automática de transações por ML",
      "Dashboards com gráficos interativos de gastos",
      "Exportação de relatórios mensais em PDF",
      "Alertas de orçamento personalizáveis",
      "Sync em tempo real entre dispositivos via Firebase",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Riverpod"],
    links: { github: "#", live: "#" },
    hue: "155",
  },
  {
    id: "nexus",
    title: "Nexus",
    category: "Plataforma",
    status: "Em desenvolvimento",
    year: "2023",
    featured: true,
    shortDesc:
      "Plataforma de matchmaking para desenvolvedores independentes. Conecta game devs com artistas e músicos.",
    fullDesc:
      "Nexus resolve um problema real: encontrar colaboradores qualificados para projetos indie é difícil. A plataforma permite que devs criem perfis, publiquem projetos abertos e encontrem parceiros por habilidade, disponibilidade e estilo.",
    highlights: [
      "Sistema de matching baseado em habilidades e disponibilidade",
      "Portfólio integrado com projetos e contribuições",
      "Chat em tempo real entre colaboradores",
      "Feed de projetos com filtros avançados",
      "API REST documentada com Swagger",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Socket.io", "TypeScript"],
    links: { github: "#" },
    hue: "25",
  },
  {
    id: "capsule",
    title: "Capsule",
    category: "App",
    status: "Concluído",
    year: "2023",
    featured: true,
    shortDesc:
      "App de rastreamento de hábitos com streak visual, lembretes inteligentes e widgets nativos para iOS e Android.",
    fullDesc:
      "Capsule parte da premissa de que hábitos precisam de visibilidade para durar. O app exibe o progresso de forma visual e motivadora, com widgets na tela inicial do celular que lembram o usuário sem precisar abrir o app.",
    highlights: [
      "Widgets nativos para iOS (WidgetKit) e Android (Glance)",
      "Lembretes inteligentes que aprendem os horários do usuário",
      "Gráfico de calor estilo GitHub para visualizar consistência",
      "Backup automático e exportação de dados em CSV",
      "Tema claro/escuro com suporte ao Dynamic Island",
    ],
    stack: ["React Native", "TypeScript", "SQLite", "Expo"],
    links: { github: "#", live: "#" },
    hue: "200",
  },
  {
    id: "pixelforge",
    title: "PixelForge",
    category: "Ferramenta",
    status: "Concluído",
    year: "2023",
    featured: false,
    shortDesc:
      "Pipeline de automação para otimizar e exportar assets de pixel art em múltiplos formatos e resoluções.",
    fullDesc:
      "PixelForge nasceu da necessidade de automatizar um processo repetitivo: exportar sprites em várias resoluções para diferentes plataformas. A ferramenta lê diretórios de assets, aplica transformações configuráveis e gera spritesheet com metadados JSON.",
    highlights: [
      "Exportação em batch para até 6 resoluções simultaneamente",
      "Geração automática de spritesheets com atlas JSON",
      "Suporte a animações (frames sequenciais)",
      "CLI com modo watch para hot-reload durante desenvolvimento",
      "Integração com pipelines de CI/CD via GitHub Actions",
    ],
    stack: ["Python", "Pillow", "Click", "PyYAML"],
    links: { github: "#" },
    hue: "45",
  },
  {
    id: "dungeon-tales",
    title: "Dungeon Tales",
    category: "Jogo",
    status: "Arquivado",
    year: "2022",
    featured: false,
    shortDesc:
      "Aventura textual com escolhas ramificadas e sistema de inventário. Narrativa gerada dinamicamente por templates.",
    fullDesc:
      "Dungeon Tales é uma homenagem aos jogos de texto dos anos 80, com camadas modernas. Cada sessão tem uma narrativa ligeiramente diferente graças ao sistema de templates com variáveis contextuais. Projeto de aprendizado de Godot 4.",
    highlights: [
      "Mais de 200 cenas de narrativa únicas",
      "Sistema de inventário com itens que afetam o desenrolar",
      "Save/load com múltiplos slots",
      "Soundtrack procedural que reage às escolhas do jogador",
    ],
    stack: ["Godot 4", "GDScript"],
    links: { github: "#" },
    hue: "320",
  },
  {
    id: "quickdeploy",
    title: "QuickDeploy",
    category: "Ferramenta",
    status: "Concluído",
    year: "2022",
    featured: false,
    shortDesc:
      "CLI para deploy simplificado em VPS com rollback automático, healthcheck e notificações via webhook.",
    fullDesc:
      "QuickDeploy abstrai o processo de deploy em servidores Linux. Com um único comando, faz pull do repositório, roda testes, reinicia serviços via systemd e verifica se o healthcheck passou. Em caso de falha, reverte para a versão anterior automaticamente.",
    highlights: [
      "Deploy com um único comando: `qdeploy push`",
      "Rollback automático se o healthcheck falhar",
      "Notificações de deploy via webhook (Slack, Discord)",
      "Histórico de deploys com diff de versões",
      "Suporte a múltiplos ambientes (staging, prod)",
    ],
    stack: ["Node.js", "TypeScript", "SSH2", "Zod"],
    links: { github: "#" },
    hue: "180",
  },
  {
    id: "studyflow",
    title: "StudyFlow",
    category: "App",
    status: "Em desenvolvimento",
    year: "2022",
    featured: false,
    shortDesc:
      "Timer Pomodoro avançado com bloqueio de distrações, estatísticas de foco e integração com Notion.",
    fullDesc:
      "StudyFlow vai além do timer simples. Integra com o calendário e o Notion para criar sessões de estudo estruturadas, mede o tempo real de foco (detecta inatividade), e gera relatórios semanais de produtividade.",
    highlights: [
      "Detecção de inatividade para pausar o timer automaticamente",
      "Integração com Notion para registrar sessões em databases",
      "Bloqueio de sites distradores configurável por sessão",
      "Relatórios semanais de foco com análise de padrões",
      "Modo de foco ambience com sons binaurais integrados",
    ],
    stack: ["Flutter", "Dart", "Hive", "Notion API"],
    links: { github: "#" },
    hue: "260",
  },
];

export const featuredProjects = allProjects.filter((p) => p.featured);
