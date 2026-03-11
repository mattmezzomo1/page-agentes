import React, { useState } from 'react';
import AgentCard from '../components/agent/AgentCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { activeAgents } from '@/data/agents';
import { createPageUrl } from '@/utils';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAgents = activeAgents.filter(agent => {
    const search = searchTerm.toLowerCase();
    return (
      agent.name?.toLowerCase().includes(search) ||
      agent.description?.toLowerCase().includes(search) ||
      agent.category?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        
        {/* Animated Glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/10 to-transparent blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
              Seu agente exclusivo
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight px-4">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Desenvolvemos esse agente especialmente para sua empresa!
              </span>
            </h1>

            <div className="flex gap-4 justify-center mb-8 px-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-sm sm:text-base md:text-lg px-6 py-4 md:px-8 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to={createPageUrl('MeuAgente')}>
                  Ver meu agente
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur-sm md:px-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 tracking-tight text-white">
                Desenvolvemos Atendimento Profissional com IA para Empresas
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-400 font-thin max-w-2xl mx-auto mb-6">
                Explore alguns dos agentes que criamos e veja eles funcionando na prática.
              </p>

              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white hover:text-black"
                >
                  Fale Conosco Agora
                </Button>
              </a>
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar agentes..."
                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {filteredAgents.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AgentCard agent={agent} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 font-thin text-lg">
              {searchTerm ? 'Nenhum agente encontrado' : 'Nenhum agente disponível'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}