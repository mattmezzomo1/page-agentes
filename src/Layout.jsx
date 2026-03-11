import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <span className="text-xl font-bold text-white">TECHNIFY</span>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {currentPageName !== 'Home' && (
                <Link to={createPageUrl('Home')}>
                  <Button variant="ghost" className="text-gray-400 hover:text-white">
                    Home
                  </Button>
                </Link>
              )}

              {currentPageName !== 'Empresa' && (
                <Link to={createPageUrl('Empresa')}>
                  <Button variant="ghost" className="text-gray-400 hover:text-white">
                    Sobre
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 font-thin text-sm">
              © 2026 AI Agents Platform. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white font-thin text-sm transition-colors duration-300">
                Termos
              </a>
              <a href="#" className="text-gray-500 hover:text-white font-thin text-sm transition-colors duration-300">
                Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-white font-thin text-sm transition-colors duration-300">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}