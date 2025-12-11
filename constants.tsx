import { Product, AgeCategory, SkillCategory, Testimonial } from './types';
import { Blocks, Lightbulb, Users, Leaf } from 'lucide-react';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Blocos de Madeira Arco-Íris",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=500&q=80",
    ageCategory: AgeCategory.BABY,
    skills: [SkillCategory.MOTOR, SkillCategory.CREATIVITY],
    description: "Blocos coloridos e seguros para empilhar e criar.",
    stock: 45,
    sku: "BLK-RAIN-001"
  },
  {
    id: 2,
    name: "Kit Pequeno Cientista",
    price: 149.90,
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=500&q=80",
    ageCategory: AgeCategory.BIG_KID,
    skills: [SkillCategory.LOGIC, SkillCategory.CREATIVITY],
    description: "Experimentos divertidos para curiosos.",
    stock: 12,
    sku: "SCI-KIT-002"
  },
  {
    id: 3,
    name: "Quebra-Cabeça Mapa Mundi",
    price: 75.50,
    image: "https://images.unsplash.com/photo-1584697964405-8300224d788e?auto=format&fit=crop&w=500&q=80",
    ageCategory: AgeCategory.KID,
    skills: [SkillCategory.LOGIC, SkillCategory.SOCIAL],
    description: "Aprenda geografia montando o mundo.",
    stock: 28,
    sku: "PZL-MAP-003"
  },
  {
    id: 4,
    name: "Fantoches da Floresta",
    price: 64.00,
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=500&q=80",
    ageCategory: AgeCategory.TODDLER,
    skills: [SkillCategory.SOCIAL, SkillCategory.LANGUAGE],
    description: "Histórias mágicas criadas por você.",
    stock: 8,
    sku: "PUP-FOR-004"
  },
  {
    id: 5,
    name: "Bancada de Ferramentas",
    price: 199.90,
    image: "https://images.unsplash.com/photo-1587654780291-39c940483719?auto=format&fit=crop&w=500&q=80",
    ageCategory: AgeCategory.TODDLER,
    skills: [SkillCategory.MOTOR, SkillCategory.LOGIC],
    description: "Para pequenos construtores em ação.",
    stock: 5,
    sku: "TL-BENCH-005"
  },
  {
    id: 6,
    name: "Kit de Pintura Mágica",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=500&q=80",
    ageCategory: AgeCategory.KID,
    skills: [SkillCategory.CREATIVITY],
    description: "Sem sujeira, apenas arte e diversão.",
    stock: 100,
    sku: "ART-MGC-006"
  },
  {
    id: 7,
    name: "Jogo da Memória dos Bichos",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?auto=format&fit=crop&w=500&q=80",
    ageCategory: AgeCategory.BABY,
    skills: [SkillCategory.LOGIC, SkillCategory.MOTOR],
    description: "Exercite a memória com animais fofos.",
    stock: 50,
    sku: "MEM-ZOO-007"
  },
  {
    id: 8,
    name: "Robô Solar Montável",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1535378437327-1e0904c065cc?auto=format&fit=crop&w=500&q=80",
    ageCategory: AgeCategory.BIG_KID,
    skills: [SkillCategory.LOGIC, SkillCategory.MOTOR],
    description: "Tecnologia sustentável e diversão.",
    stock: 15,
    sku: "ROB-SOL-008"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Mãe da Sofia (4 anos)",
    text: "Os brinquedos são incríveis! Minha filha passa horas brincando com o kit de pintura.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    role: "Pai do Lucas (7 anos)",
    text: "A qualidade é excelente e a entrega foi super rápida. O mapa mundi é fantástico.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Fernanda Lima",
    role: "Tia do João (2 anos)",
    text: "Comprei os blocos de madeira e são super seguros e bem acabados. Nota 10!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Roberto Campos",
    role: "Avô do Miguel (5 anos)",
    text: "Finalmente brinquedos que não precisam de pilhas! Recomendo muito.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Ana Beatriz",
    role: "Mãe de Gêmeos (3 anos)",
    text: "O atendimento da equipe foi maravilhoso. Me ajudaram a escolher o presente ideal.",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    name: "Paulo Mendes",
    role: "Pai da Clara (6 anos)",
    text: "Minha filha esqueceu o tablet. Só quer saber de pintar e montar agora.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

export const METHODOLOGY = [
  {
    title: "Montessori & Autonomia",
    desc: "Brinquedos que respeitam o ritmo da criança e incentivam a independência.",
    icon: Blocks,
    color: "bg-pastel-blue"
  },
  {
    title: "Aprendizagem Sensorial",
    desc: "Texturas naturais e cores suaves que estimulam sem sobrecarregar.",
    icon: Leaf,
    color: "bg-pastel-green"
  },
  {
    title: "Resolução de Problemas",
    desc: "Desafios adequados para cada idade que constroem a confiança.",
    icon: Lightbulb,
    color: "bg-pastel-yellow"
  },
  {
    title: "Vínculo Afetivo",
    desc: "Design pensado para brincar junto e criar memórias em família.",
    icon: Users,
    color: "bg-pastel-pink"
  }
];

export const FAQS = [
  {
    question: "Os brinquedos são seguros?",
    answer: "Absolutamente! Todos os nossos produtos possuem selo do INMETRO, são feitos com tintas atóxicas à base de água e madeira de reflorestamento certificada. A segurança é nossa prioridade número um."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Enviamos para todo o Brasil. O prazo varia de 3 a 10 dias úteis dependendo da sua região. Você receberá um código de rastreio assim que o pedido for despachado."
  },
  {
    question: "Posso trocar se a criança não gostar?",
    answer: "Claro! Oferecemos a primeira troca grátis em até 30 dias após o recebimento, desde que o produto esteja na embalagem original e sem sinais de uso."
  },
  {
    question: "Para quais idades vocês vendem?",
    answer: "Temos uma curadoria especializada para crianças de 0 a 12 anos. Você pode usar nossos filtros na loja para encontrar o brinquedo ideal para cada fase do desenvolvimento."
  }
];

export const NAV_LINKS = [
  { name: "Início", href: "#hero" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Loja", href: "#produtos-page" },
  { name: "Metodologia", href: "#metodologia" },
  { name: "Sobre", href: "#sobre" },
];