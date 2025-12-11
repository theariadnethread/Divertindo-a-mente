import React, { useState } from 'react';
import { Lock, ArrowLeft, User, Key } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onCancel: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication
    if (password === 'admin') {
      onLogin();
    } else {
      setError('Senha incorreta (Dica: use "admin")');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] bg-grid-paper flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-2xl border-2 border-marker-black border-messy-2 shadow-comic p-8 relative overflow-hidden">
        
        {/* Decorative circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-logo-teal rounded-full opacity-20 pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-logo-orange rounded-full opacity-20 pointer-events-none"></div>

        <button 
          onClick={onCancel}
          className="absolute top-4 left-4 text-gray-500 hover:text-logo-red transition-colors flex items-center gap-1 font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <div className="text-center mb-8 mt-4">
          <div className="w-16 h-16 bg-logo-red text-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-marker-black shadow-sm">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="font-hand font-bold text-3xl text-gray-900">Área Restrita</h2>
          <p className="text-gray-500 text-sm mt-1">Apenas para equipe autorizada</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700 ml-1">E-mail</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-marker-black focus:outline-none transition-colors"
                placeholder="admin@divertindo.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700 ml-1">Senha</label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-marker-black focus:outline-none transition-colors"
                placeholder="••••••"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm font-bold text-center bg-red-50 py-2 rounded-lg border border-red-100 animate-fade-in">
              {error}
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-logo-green text-white font-bold py-3 rounded-xl border-2 border-marker-black shadow-[4px_4px_0px_#2D2D2D] hover:shadow-[2px_2px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg font-hand tracking-wide mt-4"
          >
            Entrar no Painel
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Divertindo a Mente System v1.0</p>
        </div>
      </div>
    </div>
  );
};

export default Login;