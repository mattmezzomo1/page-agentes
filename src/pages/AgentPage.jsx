import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { getAgentBySlug } from '@/data/agents';

export default function AgentPage() {
  const navigate = useNavigate();
  
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  const agent = slug ? getAgentBySlug(slug) : null;

  if (!agent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agente não encontrado</h1>
          <p className="text-gray-600 font-thin mb-8">O agente que você procura não existe.</p>
          <Button
            onClick={() => navigate(createPageUrl('Home'))}
            variant="outline"
            className="border-gray-300 text-gray-900 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Main Content - Two Column Layout (70/30) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16 flex flex-col lg:flex-row gap-8 md:gap-16">
        {/* Left Column - Benefits & Features (70%) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full lg:w-[70%] space-y-8 md:space-y-12"
        >
          <div className="flex items-center gap-2 text-gray-500 text-sm uppercase tracking-[0.2em]">
            <Tag className="w-4 h-4" />
            <span>{agent.category}</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
              {agent.name}{' '}
            </span>
            <span className="text-gray-400">pronto para responder seus clientes com rapidez e contexto.</span>
          </h2>

          {/* Benefit Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📈</span>
              </div>
              <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed pt-2">
                {agent.description}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚡</span>
              </div>
              <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed pt-2">
                Demonstração local em front-end puro, sem dependências externas de backend.
              </p>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3 pt-4">
            <p className="text-gray-900 italic text-sm sm:text-base">
              • Integra e funciona dentro do seu WhatsApp, Instagram ou Site
            </p>
            <p className="text-gray-900 italic text-sm sm:text-base">
              • Entende, raciocina, toma decisões e responde como humano
            </p>
            <p className="text-gray-900 italic text-sm sm:text-base">
              • Funciona 24/7 personalizada para o seu negócio.
            </p>
          </div>

          <div>
            <a href={agent.cta_url} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full bg-gray-900 text-white hover:bg-black">
                {agent.cta_text}
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Right Column - Mock Widget (30%) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full lg:w-[30%]"
        >
          <div className="sticky top-24 rounded-[2rem] border border-black/10 bg-white shadow-xl overflow-hidden">
            <div className="bg-gray-950 text-white p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">{agent.name}</p>
                  <p className="text-xs text-gray-400">Prévia demonstrativa</p>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3 bg-[#f5f5f5] min-h-[32rem]">
              {agent.preview_messages?.map((message, index) => (
                <div
                  key={`${agent.id}-${index}`}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    message.role === 'agent'
                      ? 'bg-white text-gray-900'
                      : 'bg-gray-900 text-white ml-auto'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="border-t border-black/5 p-4 bg-white">
              <a href={agent.cta_url} target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-full bg-gray-900 text-white hover:bg-black">
                  Solicitar demonstração real
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}