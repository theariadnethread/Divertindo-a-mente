export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  ageCategory: AgeCategory;
  skills: SkillCategory[];
  description: string;
  stock: number; // Added for Inventory Management
  sku: string;   // Added for Professional Management
}

export interface CartItem extends Product {
  quantity: number;
}

export enum AgeCategory {
  BABY = '0-2 anos',
  TODDLER = '3-5 anos',
  KID = '6-8 anos',
  BIG_KID = '9+ anos',
  ALL = 'Todas as idades'
}

export enum SkillCategory {
  MOTOR = 'Coordenação Motora',
  LOGIC = 'Lógica e Matemática',
  CREATIVITY = 'Criatividade',
  SOCIAL = 'Social e Emocional',
  LANGUAGE = 'Linguagem'
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

// New Types for Admin Panel
export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string;
  total: number;
  status: OrderStatus;
  itemsCount: number;
  paymentMethod: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  totalSpent: number;
  ordersCount: number;
  lastOrderDate: string;
  status: 'active' | 'inactive';
}