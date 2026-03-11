import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { agents } from '@/data/agents';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleViewAgent = (slug) => {
    navigate(createPageUrl(`AgentPage?slug=${slug}`));
  };

  return (
    <div className="min-h-screen bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-2">Conteúdo Estático</h1>
            <p className="text-gray-400 font-thin">Esta vitrine agora roda 100% no front-end, sem backend e sem persistência.</p>
          </div>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-white to-gray-300 text-black font-bold hover:from-gray-200 hover:to-gray-400">
              Solicitar nova demo
            </Button>
          </a>
        </div>

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-gray-300">
          Para alterar os cards e demos exibidos no site, edite o arquivo <span className="font-mono text-white">src/data/agents.js</span>.
        </div>

        {agents.length > 0 ? (
          <div className="space-y-4">
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Image */}
                  {agent.image_url && (
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex-shrink-0">
                      <img
                        src={agent.image_url}
                        alt={agent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
                        {agent.category && (
                          <span className="text-xs text-gray-400 font-thin uppercase tracking-wider">
                            {agent.category}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewAgent(agent.slug)}
                          className="text-gray-400 hover:text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-400 font-thin text-sm line-clamp-2 mb-2">
                      {agent.description || 'Sem descrição'}
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      /agente/{agent.slug}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                {agent.is_active === false ? (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs font-thin">
                      Inativo
                    </span>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gradient-to-br from-gray-900/30 to-black/20 rounded-xl border border-white/5">
            <p className="text-gray-500 font-thin text-lg mb-4">Nenhum agente configurado no mock local.</p>
          </div>
        )}
      </div>
    </div>
  );
}