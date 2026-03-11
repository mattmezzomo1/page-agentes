import React from 'react';
import { motion } from 'framer-motion';

const AGENT_EMBED_URL =
  'https://olivia-frontend-v2.vercel.app/widget/d15bc239b0c142b0ecf2ff607a3e6fb0fb33f0139b24988a61146a7287334bc2';

export default function MeuAgente() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative overflow-hidden px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />

        <motion.div
          animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 bg-gradient-radial from-white/10 to-transparent blur-3xl"
        />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-2xl"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
              Visualização do agente
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Seu agente em funcionamento
            </h1>
            <p className="text-base font-thin text-gray-400 md:text-lg">
              Abaixo está a visualização dedicada do embed para apresentar a experiência do agente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full max-w-[440px] rounded-[28px] border border-white/10 bg-white/[0.03] p-4 shadow-2xl"
          >
            <iframe
              src={AGENT_EMBED_URL}
              title="Meu agente"
              width="400"
              height="600"
              frameBorder="0"
              allow="microphone"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '600px',
                borderRadius: '16px',
                border: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
              className="mx-auto block"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}