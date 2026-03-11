import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Tag } from 'lucide-react';

export default function AgentCard({ agent }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(createPageUrl(`AgentPage?slug=${agent.slug}`));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="group relative cursor-pointer"
    >
      {/* Glassmorphism Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-xl border border-white/10 p-6 shadow-2xl hover:shadow-white/5 transition-all duration-500">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image */}
        {agent.image_url && (
          <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
            <img
              src={agent.image_url}
              alt={agent.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        {/* Category Tag */}
        {agent.category && (
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-3 h-3 text-gray-400" />
            <span className="text-xs font-thin text-gray-400 uppercase tracking-wider">
              {agent.category}
            </span>
          </div>
        )}

        {/* Name */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
          {agent.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 font-thin text-sm mb-4 line-clamp-3">
          {agent.description || 'Interaja com este agente de IA'}
        </p>

        {/* Action */}
        <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors duration-300">
          <span className="text-sm font-medium">Acessar agente</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </motion.div>
  );
}