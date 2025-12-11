import React, { useState } from 'react';
import { Product, AgeCategory, Order, OrderStatus, Customer } from '../types';
import { PRODUCTS } from '../constants';
import { 
  LayoutDashboard, 
  Package, 
  Settings, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  TrendingUp, 
  DollarSign, 
  Users, 
  ShoppingBag,
  Image as ImageIcon,
  Save,
  X,
  CreditCard,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronRight,
  BarChart3,
  Archive
} from 'lucide-react';

interface AdminPanelProps {
  onLogout: () => void;
}

type AdminView = 'dashboard' | 'products' | 'orders' | 'customers' | 'settings';

// Mock Data for Professional Feel
const MOCK_ORDERS: Order[] = [
  { id: 'PED-9021', customerName: 'Ana Souza', customerEmail: 'ana@email.com', date: '2024-02-28', total: 249.90, status: 'pending', itemsCount: 2, paymentMethod: 'PIX' },
  { id: 'PED-9022', customerName: 'Carlos Silva', customerEmail: 'carlos@email.com', date: '2024-02-27', total: 89.90, status: 'paid', itemsCount: 1, paymentMethod: 'Cartão de Crédito' },
  { id: 'PED-9023', customerName: 'Beatriz Lima', customerEmail: 'bia@email.com', date: '2024-02-27', total: 450.00, status: 'shipped', itemsCount: 4, paymentMethod: 'Cartão de Crédito' },
  { id: 'PED-9024', customerName: 'João Mendes', customerEmail: 'joao@email.com', date: '2024-02-26', total: 120.00, status: 'delivered', itemsCount: 1, paymentMethod: 'Boleto' },
  { id: 'PED-9025', customerName: 'Fernanda Torres', customerEmail: 'fer@email.com', date: '2024-02-25', total: 320.50, status: 'delivered', itemsCount: 3, paymentMethod: 'PIX' },
];

const MOCK_CUSTOMERS: Customer[] = [
  { id: 1, name: 'Ana Souza', email: 'ana@email.com', totalSpent: 1250.00, ordersCount: 5, lastOrderDate: '2024-02-28', status: 'active' },
  { id: 2, name: 'Carlos Silva', email: 'carlos@email.com', totalSpent: 450.00, ordersCount: 2, lastOrderDate: '2024-02-27', status: 'active' },
  { id: 3, name: 'Roberto Firmino', email: 'roberto@email.com', totalSpent: 0.00, ordersCount: 0, lastOrderDate: '-', status: 'inactive' },
  { id: 4, name: 'Beatriz Lima', email: 'bia@email.com', totalSpent: 890.90, ordersCount: 3, lastOrderDate: '2024-02-27', status: 'active' },
];

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState<AdminView>('dashboard');
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  
  // Product Edit State
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product> | null>(null);

  // --- HELPERS ---

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'paid': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'shipped': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'delivered': return 'bg-green-100 text-green-700 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: OrderStatus) => {
    switch (status) {
      case 'pending': return 'Pendente';
      case 'paid': return 'Pago';
      case 'shipped': return 'Enviado';
      case 'delivered': return 'Entregue';
      case 'cancelled': return 'Cancelado';
    }
  };

  // --- CRUD OPERATIONS ---

  const handleDeleteProduct = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este produto do inventário?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const handleAddNewProduct = () => {
    setCurrentProduct({
      id: Math.max(...products.map(p => p.id)) + 1,
      name: '',
      price: 0,
      image: '',
      description: '',
      skills: [],
      ageCategory: AgeCategory.ALL,
      stock: 0,
      sku: ''
    });
    setIsEditing(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProduct) return;
    if (products.some(p => p.id === currentProduct.id)) {
      setProducts(products.map(p => p.id === currentProduct.id ? currentProduct as Product : p));
    } else {
      setProducts([...products, currentProduct as Product]);
    }
    setIsEditing(false);
    setCurrentProduct(null);
  };

  // --- RENDERERS ---

  const renderDashboard = () => (
    <div className="space-y-8 animate-fade-in">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Faturamento Mensal', value: 'R$ 42.450,00', icon: DollarSign, color: 'bg-emerald-500', change: '+12.5%' },
          { title: 'Pedidos Pendentes', value: '23', icon: Clock, color: 'bg-amber-500', change: '-2' },
          { title: 'Total Clientes', value: '1.240', icon: Users, color: 'bg-blue-500', change: '+18' },
          { title: 'Produtos Baixo Estoque', value: '4', icon: AlertCircle, color: 'bg-rose-500', change: 'Atenção' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${stat.color} text-white shadow-sm`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.includes('-') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                  {stat.change}
                </span>
             </div>
             <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{stat.title}</p>
             <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Chart Area */}
         <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-gray-400" /> Desempenho de Vendas
              </h3>
              <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1 outline-none">
                <option>Últimos 7 dias</option>
                <option>Últimos 30 dias</option>
              </select>
            </div>
            
            {/* CSS Bar Chart Simulation */}
            <div className="h-64 flex items-end justify-between gap-2 pt-4 border-b border-gray-100">
              {[65, 40, 75, 55, 80, 95, 60].map((h, i) => (
                <div key={i} className="w-full bg-blue-50 hover:bg-blue-100 rounded-t-lg relative group transition-all cursor-pointer">
                  <div 
                    className="absolute bottom-0 w-full bg-logo-teal rounded-t-lg transition-all duration-500 group-hover:bg-logo-green"
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    R$ {h * 100}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
              <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span><span>Dom</span>
            </div>
         </div>

         {/* Recent Activity */}
         <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Atividade Recente</h3>
            <div className="space-y-4">
              {MOCK_ORDERS.slice(0, 4).map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-50">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-xs">
                        {order.customerName.substring(0,2).toUpperCase()}
                      </div>
                      <div>
                         <p className="font-bold text-sm text-gray-800">Novo Pedido</p>
                         <p className="text-xs text-gray-500">{order.customerName} • {order.itemsCount} itens</p>
                      </div>
                   </div>
                   <span className="font-bold text-gray-900 text-sm">+ R$ {order.total.toFixed(0)}</span>
                </div>
              ))}
              <button className="w-full py-2 text-sm text-gray-500 hover:text-logo-teal font-medium mt-2">Ver todo histórico</button>
            </div>
         </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
         <div>
            <h2 className="font-bold text-xl text-gray-800">Gerenciar Produtos</h2>
            <p className="text-sm text-gray-500">Controle total do catálogo e estoque</p>
         </div>
         <button 
           onClick={handleAddNewProduct}
           className="bg-logo-teal hover:bg-teal-700 text-white px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm"
         >
           <Plus className="w-4 h-4" /> Adicionar Produto
         </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold tracking-wider border-b border-gray-200">
               <tr>
                  <th className="p-4 pl-6">Produto</th>
                  <th className="p-4">SKU</th>
                  <th className="p-4">Estoque</th>
                  <th className="p-4">Preço</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right pr-6">Ações</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
               {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                     <td className="p-4 pl-6">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded border border-gray-200 overflow-hidden bg-white">
                              <img src={product.image} className="w-full h-full object-cover" alt="" />
                           </div>
                           <div>
                              <p className="font-bold text-gray-900 text-sm">{product.name}</p>
                              <p className="text-xs text-gray-500">{product.ageCategory}</p>
                           </div>
                        </div>
                     </td>
                     <td className="p-4 text-sm font-mono text-gray-600">{product.sku || `PRD-${product.id.toString().padStart(4, '0')}`}</td>
                     <td className="p-4">
                        <div className="flex items-center gap-2">
                           <div className={`w-2 h-2 rounded-full ${(product.stock || 0) < 10 ? 'bg-red-500' : 'bg-green-500'}`}></div>
                           <span className={`text-sm font-medium ${(product.stock || 0) < 10 ? 'text-red-600' : 'text-gray-600'}`}>
                             {product.stock || 0} unid.
                           </span>
                        </div>
                     </td>
                     <td className="p-4 font-bold text-gray-700 text-sm">
                        R$ {product.price.toFixed(2)}
                     </td>
                     <td className="p-4">
                        <span className="px-2 py-1 rounded text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                          Ativo
                        </span>
                     </td>
                     <td className="p-4 pr-6 text-right space-x-2">
                        <button onClick={() => handleEditProduct(product)} className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => handleDeleteProduct(product.id)} className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
         <h2 className="font-bold text-2xl text-gray-800">Pedidos</h2>
         <div className="flex gap-2">
            <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50">Exportar</button>
            <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50">Filtros</button>
         </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold tracking-wider border-b border-gray-200">
             <tr>
                <th className="p-4 pl-6">Pedido</th>
                <th className="p-4">Cliente</th>
                <th className="p-4">Data</th>
                <th className="p-4">Pagamento</th>
                <th className="p-4">Status</th>
                <th className="p-4">Total</th>
                <th className="p-4 text-right pr-6">Ações</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
             {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                   <td className="p-4 pl-6 font-mono font-bold text-logo-teal">{order.id}</td>
                   <td className="p-4">
                      <p className="text-sm font-bold text-gray-900">{order.customerName}</p>
                      <p className="text-xs text-gray-500">{order.customerEmail}</p>
                   </td>
                   <td className="p-4 text-sm text-gray-600">{order.date}</td>
                   <td className="p-4 text-sm text-gray-600">{order.paymentMethod}</td>
                   <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                        {getStatusLabel(order.status)}
                      </span>
                   </td>
                   <td className="p-4 font-bold text-gray-900">R$ {order.total.toFixed(2)}</td>
                   <td className="p-4 pr-6 text-right">
                      <button className="text-sm text-logo-teal font-bold hover:underline">Ver Detalhes</button>
                   </td>
                </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderCustomers = () => (
    <div className="space-y-6 animate-fade-in">
       <h2 className="font-bold text-2xl text-gray-800">Clientes (CRM)</h2>
       <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <table className="w-full text-left">
           <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold tracking-wider border-b border-gray-200">
             <tr>
               <th className="p-4 pl-6">Cliente</th>
               <th className="p-4">Status</th>
               <th className="p-4">Pedidos</th>
               <th className="p-4">Total Gasto</th>
               <th className="p-4">Última Compra</th>
               <th className="p-4 text-right pr-6">Ações</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-100">
             {MOCK_CUSTOMERS.map(customer => (
               <tr key={customer.id} className="hover:bg-gray-50">
                 <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">
                          {customer.name.substring(0,2).toUpperCase()}
                       </div>
                       <div>
                          <p className="font-bold text-sm text-gray-900">{customer.name}</p>
                          <p className="text-xs text-gray-500">{customer.email}</p>
                       </div>
                    </div>
                 </td>
                 <td className="p-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${customer.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                       {customer.status === 'active' ? 'Ativo' : 'Inativo'}
                    </span>
                 </td>
                 <td className="p-4 text-sm text-gray-700">{customer.ordersCount} pedidos</td>
                 <td className="p-4 font-bold text-gray-900">R$ {customer.totalSpent.toFixed(2)}</td>
                 <td className="p-4 text-sm text-gray-500">{customer.lastOrderDate}</td>
                 <td className="p-4 pr-6 text-right">
                    <button className="p-2 hover:bg-gray-100 rounded-lg"><ChevronRight className="w-4 h-4 text-gray-400" /></button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
    </div>
  );

  const renderSettings = () => (
     <div className="max-w-4xl space-y-8 animate-fade-in">
        <h2 className="font-bold text-2xl text-gray-800">Configurações da Loja</h2>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
           <h3 className="font-bold text-lg text-gray-800 mb-6 border-b border-gray-100 pb-2">Informações Gerais</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-600">Nome da Loja</label>
                 <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logo-teal outline-none" defaultValue="Divertindo a Mente" />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-600">E-mail de Suporte</label>
                 <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logo-teal outline-none" defaultValue="contato@divertindo.com" />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-600">Telefone / WhatsApp</label>
                 <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logo-teal outline-none" defaultValue="(11) 99999-9999" />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-600">Moeda</label>
                 <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logo-teal outline-none bg-white">
                    <option>BRL (R$)</option>
                    <option>USD ($)</option>
                 </select>
              </div>
           </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
           <h3 className="font-bold text-lg text-gray-800 mb-6 border-b border-gray-100 pb-2">Pagamento e Envio</h3>
           <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg bg-gray-50">
                 <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-gray-500" />
                    <div>
                       <p className="font-bold text-sm text-gray-900">Aceitar Cartão de Crédito</p>
                       <p className="text-xs text-gray-500">Stripe / Pagar.me</p>
                    </div>
                 </div>
                 <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer"><div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div></div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg bg-gray-50">
                 <div className="flex items-center gap-3">
                    <Truck className="w-6 h-6 text-gray-500" />
                    <div>
                       <p className="font-bold text-sm text-gray-900">Cálculo de Frete Automático</p>
                       <p className="text-xs text-gray-500">Correios / Melhor Envio</p>
                    </div>
                 </div>
                 <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer"><div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div></div>
              </div>
           </div>
           <div className="flex justify-end mt-8">
              <button className="bg-logo-teal text-white font-bold px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors shadow-sm">Salvar Alterações</button>
           </div>
        </div>
     </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      
      {/* Professional Sidebar */}
      <aside className="w-72 bg-[#1e1e24] text-gray-300 flex flex-col fixed h-full z-30 shadow-xl">
        <div className="p-6 border-b border-gray-800">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-logo-red to-orange-500 flex items-center justify-center text-white font-hand text-xl rounded-lg shadow-lg">DM</div>
              <div>
                <span className="font-bold text-white text-lg tracking-wide block">Divertindo</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Admin Pro</span>
              </div>
           </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <p className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest mt-4">Principal</p>
          <button onClick={() => setCurrentView('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${currentView === 'dashboard' ? 'bg-logo-teal text-white shadow-lg shadow-teal-900/50 font-medium' : 'hover:bg-gray-800 hover:text-white'}`}>
            <LayoutDashboard className="w-5 h-5" /> Visão Geral
          </button>
          
          <p className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest mt-6">Loja</p>
          <button onClick={() => setCurrentView('orders')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${currentView === 'orders' ? 'bg-logo-teal text-white shadow-lg shadow-teal-900/50 font-medium' : 'hover:bg-gray-800 hover:text-white'}`}>
            <ShoppingBag className="w-5 h-5" /> Pedidos
            <span className="ml-auto bg-logo-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
          </button>
          <button onClick={() => setCurrentView('products')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${currentView === 'products' ? 'bg-logo-teal text-white shadow-lg shadow-teal-900/50 font-medium' : 'hover:bg-gray-800 hover:text-white'}`}>
            <Package className="w-5 h-5" /> Produtos & Estoque
          </button>
          <button onClick={() => setCurrentView('customers')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${currentView === 'customers' ? 'bg-logo-teal text-white shadow-lg shadow-teal-900/50 font-medium' : 'hover:bg-gray-800 hover:text-white'}`}>
            <Users className="w-5 h-5" /> Clientes
          </button>

          <p className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest mt-6">Sistema</p>
          <button onClick={() => setCurrentView('settings')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${currentView === 'settings' ? 'bg-logo-teal text-white shadow-lg shadow-teal-900/50 font-medium' : 'hover:bg-gray-800 hover:text-white'}`}>
            <Settings className="w-5 h-5" /> Configurações
          </button>
        </nav>

        <div className="p-4 border-t border-gray-800 bg-[#17171c]">
           <div className="flex items-center gap-3 mb-4 px-2">
              <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden border border-gray-500">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="Admin" />
              </div>
              <div className="flex-1 overflow-hidden">
                 <p className="text-sm font-bold text-white truncate">Administrador</p>
                 <p className="text-xs text-gray-500 truncate">admin@divertindo.com</p>
              </div>
           </div>
           <button onClick={onLogout} className="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors border border-red-500/20">
             <LogOut className="w-4 h-4" /> Sair
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-72">
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 sticky top-0 z-20">
           <h1 className="text-xl font-bold text-gray-800 capitalize flex items-center gap-2">
             {currentView === 'dashboard' && <LayoutDashboard className="w-5 h-5 text-gray-400" />}
             {currentView === 'products' && <Package className="w-5 h-5 text-gray-400" />}
             {currentView === 'orders' && <ShoppingBag className="w-5 h-5 text-gray-400" />}
             {currentView === 'customers' && <Users className="w-5 h-5 text-gray-400" />}
             {currentView === 'settings' && <Settings className="w-5 h-5 text-gray-400" />}
             {currentView === 'dashboard' ? 'Visão Geral' : currentView}
           </h1>
           <div className="flex items-center gap-4">
              <div className="relative">
                 <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                 <input type="text" placeholder="Busca global..." className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-logo-teal focus:border-transparent outline-none w-64 transition-all" />
              </div>
              <div className="w-px h-6 bg-gray-200"></div>
              <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-full">
                 <AlertCircle className="w-5 h-5" />
                 <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
           </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {currentView === 'dashboard' && renderDashboard()}
          {currentView === 'products' && !isEditing && renderProducts()}
          {currentView === 'orders' && renderOrders()}
          {currentView === 'customers' && renderCustomers()}
          {currentView === 'settings' && renderSettings()}
        </div>
      </main>

      {/* Product Modal Overlay (Meticulous Form) */}
      {isEditing && currentProduct && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fade-in flex flex-col">
               
               <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                  <h2 className="font-bold text-2xl text-gray-800">
                    {currentProduct.id && products.some(p => p.id === currentProduct.id) ? 'Editar Produto' : 'Novo Produto'}
                  </h2>
                  <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><X className="w-6 h-6" /></button>
               </div>

               <form onSubmit={handleSaveProduct} className="p-8 space-y-8">
                  
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Nome do Produto</label>
                           <input 
                              type="text" required value={currentProduct.name}
                              onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logo-teal outline-none"
                              placeholder="Ex: Blocos de Montar"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Descrição Detalhada</label>
                           <textarea 
                              rows={5} required value={currentProduct.description}
                              onChange={(e) => setCurrentProduct({...currentProduct, description: e.target.value})}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logo-teal outline-none resize-none"
                           ></textarea>
                        </div>
                     </div>

                     {/* Image Upload Simulation */}
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Imagem Principal</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:bg-gray-50 transition-colors h-full flex flex-col items-center justify-center gap-2">
                           {currentProduct.image ? (
                              <img src={currentProduct.image} className="w-32 h-32 object-contain rounded-lg shadow-sm" alt="Preview" />
                           ) : (
                              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"><ImageIcon className="w-10 h-10" /></div>
                           )}
                           <input 
                              type="url" placeholder="URL da imagem (https://...)" 
                              className="w-full text-xs p-2 border border-gray-200 rounded mt-2"
                              value={currentProduct.image}
                              onChange={(e) => setCurrentProduct({...currentProduct, image: e.target.value})}
                           />
                        </div>
                     </div>
                  </div>

                  {/* Inventory & Pricing (The "Meticulous" part) */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">SKU (Código)</label>
                        <input 
                           type="text" value={currentProduct.sku || ''}
                           onChange={(e) => setCurrentProduct({...currentProduct, sku: e.target.value})}
                           className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logo-teal outline-none font-mono text-sm"
                           placeholder="PROD-001"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Estoque (Qtd)</label>
                        <input 
                           type="number" value={currentProduct.stock || 0}
                           onChange={(e) => setCurrentProduct({...currentProduct, stock: parseInt(e.target.value)})}
                           className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logo-teal outline-none"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Preço de Venda (R$)</label>
                        <input 
                           type="number" step="0.01" required value={currentProduct.price}
                           onChange={(e) => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})}
                           className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logo-teal outline-none font-bold text-gray-800"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Categoria</label>
                        <select 
                           value={currentProduct.ageCategory}
                           onChange={(e) => setCurrentProduct({...currentProduct, ageCategory: e.target.value as AgeCategory})}
                           className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logo-teal outline-none bg-white"
                        >
                           {Object.values(AgeCategory).map(age => <option key={age} value={age}>{age}</option>)}
                        </select>
                     </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
                     <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-lg transition-colors">Cancelar</button>
                     <button type="submit" className="px-8 py-3 bg-logo-green text-white font-bold rounded-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-900/20 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" /> Salvar Produto
                     </button>
                  </div>

               </form>
            </div>
         </div>
      )}
    </div>
  );
};

export default AdminPanel;