import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, Database, Calendar, Bell, FileSpreadsheet,
  UserCheck, Clock, Shield, Zap, CheckCircle, ArrowRight,
  MapPin, Timer, Package, Smile, Star,
  Stethoscope, UtensilsCrossed, Briefcase, Scissors
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Empresa() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-white/5 rounded-full blur-3xl"
        />
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-36 text-center">
          <motion.div {...fadeUp}>
            <p className="text-gray-400 font-thin text-sm tracking-[0.3em] uppercase mb-6">
              Desenvolvimento de Software & Agentes de IA
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                O Jeito Mais Inteligente de Implementar IA na Sua Empresa
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-thin max-w-2xl mx-auto mb-10">
              A maioria das empresas vende promessas. Nós entregamos antes de cobrar.
            </p>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-base rounded-full shadow-lg">
                Quero Testar Sem Risco
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 4 PASSOS ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-gray-400 font-thin">Simples. Sem risco. Sem compromisso.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '1', title: 'Desenvolvemos', desc: 'Criamos a primeira versão da sua IA' },
              { n: '2', title: 'Você Testa', desc: 'Coloca em prática, sem compromisso' },
              { n: '3', title: 'Se Gostar', desc: 'Continua e paga apenas então' },
              { n: '4', title: 'Se Não Gostar', desc: 'Simplesmente não paga. Fim.' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative border border-white/10 rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
              >
                <span className="text-5xl font-bold text-white/10 absolute top-4 right-5">{s.n}</span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{s.n}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 font-thin text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O QUE OS AGENTES FAZEM ── */}
      <section className="py-20 md:py-28 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Agentes Não São <span className="text-gray-400">"Robôs de WhatsApp"</span>
            </h2>
            <p className="text-gray-400 font-thin text-lg max-w-2xl mx-auto">
              Eles não apenas respondem mensagens — eles operam o seu negócio.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {[
              { icon: MessageCircle, title: 'Atendimento Automático', desc: 'Respondem clientes com naturalidade, 24h por dia' },
              { icon: Database, title: 'Consulta de Dados', desc: 'Buscam estoque, preços e informações em tempo real' },
              { icon: Calendar, title: 'Agendamentos', desc: 'Integram com Google Agenda e confirmam horários' },
              { icon: Bell, title: 'Lembretes Automáticos', desc: 'Enviam confirmações e avisos sem intervenção humana' },
              { icon: FileSpreadsheet, title: 'Atualizam Planilhas', desc: 'Consultam e gravam dados automaticamente' },
              { icon: UserCheck, title: 'Transferem para Humano', desc: 'Quando necessário, encaminha com contexto completo' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex gap-4 border border-white/10 rounded-2xl p-5 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-gray-400 font-thin text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="text-center text-gray-400 font-thin mt-10 text-sm md:text-base max-w-2xl mx-auto">
            É como ter um funcionário digital que trabalha 24h por dia, 7 dias por semana — sem pausas, sem férias e sem atrasos.
          </motion.p>
        </div>
      </section>

      {/* ── COMO FUNCIONA NA PRÁTICA ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona na Prática</h2>
            <p className="text-gray-400 font-thin">Tudo no tom da sua empresa, sem intervenção humana.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Fluxo */}
            <motion.div {...fadeUp} className="space-y-4">
              {[
                { icon: MessageCircle, label: 'O cliente envia mensagens comuns', examples: ['"Qual o valor do serviço?"', '"Tem esse produto disponível?"', '"Pode me encaixar amanhã às 15h?"'] },
                { icon: Database, label: 'O agente consulta sua base de dados em tempo real', examples: [] },
                { icon: CheckCircle, label: 'Responde com precisão e naturalidade', examples: [] },
                { icon: Calendar, label: 'Confirma agendamentos automaticamente', examples: [] },
                { icon: Bell, label: 'Envia lembrete para o cliente', examples: [] },
              ].map(({ icon: Icon, label, examples }, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    {examples.map((e, j) => (
                      <span key={j} className="inline-block mt-1 mr-2 text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">{e}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Visual card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-white/10 rounded-2xl p-8 bg-white/[0.03] space-y-4"
            >
              <p className="text-xs text-gray-500 font-thin tracking-widest uppercase">Conversa real</p>
              {[
                { from: 'cliente', msg: 'Oi! Qual o valor do botox?' },
                { from: 'ia', msg: 'Olá! O botox começa a partir de R$ 850 por região. Quer que eu verifique disponibilidade na agenda?' },
                { from: 'cliente', msg: 'Sim! Amanhã à tarde tem?' },
                { from: 'ia', msg: 'Temos disponibilidade às 14h e 16h. Qual prefere? Posso confirmar agora mesmo!' },
                { from: 'cliente', msg: '14h perfeito!' },
                { from: 'ia', msg: '✅ Agendado! Você receberá uma confirmação em breve. Até amanhã às 14h!' },
              ].map((m, i) => (
                <div key={i} className={`flex ${m.from === 'ia' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${m.from === 'ia' ? 'bg-white/10 text-white' : 'bg-white text-black'}`}>
                    {m.msg}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 md:py-28 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { value: '24/7', label: 'Disponibilidade Total', desc: 'Seu negócio atendendo sem interrupções' },
              { value: '0', label: 'Falhas Humanas', desc: 'Padrão consistente em cada interação' },
              { value: '70%', label: 'Mais Conversão', desc: 'Respostas rápidas que convertem mais' },
            ].map(({ value, label, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-2">{value}</p>
                <p className="font-semibold mb-1">{label}</p>
                <p className="text-gray-500 font-thin text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="text-center text-gray-400 font-thin mt-14 max-w-2xl mx-auto">
            A IA da Technify reduz retrabalho, organiza processos internos e gera previsibilidade real para o seu negócio. É automação com inteligência real.
          </motion.p>
        </div>
      </section>

      {/* ── DIFERENCIAL RISCO ZERO ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Diferencial: Risco Zero Para Você</h2>
            <p className="text-gray-400 font-thin text-lg">Confiamos tanto no que fazemos que invertemos o modelo tradicional.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tradicional */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]"
            >
              <p className="text-gray-500 font-thin text-xs tracking-widest uppercase mb-6">O Modelo Tradicional</p>
              {['Você paga primeiro', 'Depois torce para funcionar', 'Sem garantias reais'].map((item, i) => (
                <div key={i} className="flex gap-3 items-center mb-4">
                  <div className="w-5 h-5 rounded-full border border-red-500/40 flex items-center justify-center shrink-0">
                    <span className="text-red-400 text-xs">✕</span>
                  </div>
                  <span className="text-gray-400 font-thin">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Technify */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-white/20 rounded-2xl p-8 bg-white/[0.05] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <p className="text-white font-thin text-xs tracking-widest uppercase mb-6">O Modelo Technify</p>
              {['Recebe a solução pronta', 'Testa na prática', 'Aprova com segurança', 'Só então paga'].map((item, i) => (
                <div key={i} className="flex gap-3 items-center mb-4">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
              <p className="text-gray-400 font-thin text-xs mt-6">
                Se não fizer sentido, você simplesmente não aprova. Sem custos, sem letras miúdas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── O QUE PRECISAMOS ── */}
      <section className="py-20 md:py-28 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Precisamos Para Criar Sua IA</h2>
              <p className="text-gray-400 font-thin mb-8">
                Para desenvolver sua primeira versão, precisamos apenas de informações básicas da sua empresa. Sem contrato longo. Sem taxa inicial. Sem risco.
              </p>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6">
                  Enviar Informações <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { icon: MapPin, title: 'Localização', desc: 'Endereço ou região de atuação' },
                { icon: Timer, title: 'Horário de Funcionamento', desc: 'Dias e horários disponíveis' },
                { icon: Package, title: 'Serviços e Produtos', desc: 'Lista com preços para consulta automática' },
                { icon: Smile, title: 'Tom de Atendimento', desc: 'Formal, informal, premium ou descontraído' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="flex gap-4 border border-white/10 rounded-xl p-4 bg-white/[0.03]">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{title}</p>
                    <p className="text-gray-500 font-thin text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É IDEAL ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Para Quem É Ideal?</h2>
            <p className="text-gray-400 font-thin text-lg">Se você recebe mensagens todos os dias, você já pode se beneficiar agora.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Stethoscope, title: 'Clínicas e Consultórios', desc: 'Agendamentos e confirmações automáticas' },
              { icon: UtensilsCrossed, title: 'Restaurantes e Lojas', desc: 'Cardápios, estoques e pedidos em tempo real' },
              { icon: Briefcase, title: 'Escritórios e Prestadores', desc: 'Atendimento padrão e organização de demandas' },
              { icon: Scissors, title: 'Salões de Beleza', desc: 'Cresça sem aumentar proporcionalmente a equipe' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border border-white/10 rounded-2xl p-5 text-center bg-white/[0.03] hover:bg-white/[0.06] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{title}</h3>
                <p className="text-gray-500 font-thin text-xs">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 md:py-28 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                O Futuro Não É Ter Mais Funcionários. É Ter Funcionários Digitais.
              </span>
            </h2>
            <p className="text-gray-400 font-thin text-base md:text-lg max-w-2xl mx-auto mt-6 mb-12">
              Enquanto sua concorrência ainda responde manualmente, você automatiza, organiza e escala. A Technify não vende apenas IA — nós implementamos eficiência operacional de verdade.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { n: '1', title: 'Envie dados', desc: 'Forneça informações básicas' },
                { n: '2', title: 'Receba e Teste', desc: 'Sua IA pronta para avaliar' },
                { n: '3', title: 'Aprove e Escale', desc: 'Comece a expandir o uso' },
              ].map(({ n, title, desc }, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">{n}</div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-gray-500 font-thin text-sm">{desc}</p>
                </div>
              ))}
            </div>

            {/* Garantias */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                { icon: Shield, text: 'Sem Custo Inicial' },
                { icon: CheckCircle, text: 'Sem Compromisso' },
                { icon: Star, text: 'Sem Risco' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">
                  <Icon className="w-4 h-4 text-gray-400" />
                  {text}
                </div>
              ))}
            </div>

            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-base rounded-full shadow-xl">
                Quero Minha IA Agora — Sem Custo
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── PÓS-CONTRATAÇÃO ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sua IA em Constante Evolução</h2>
            <p className="text-gray-400 font-thin">Após a aprovação, nosso compromisso com seu sucesso continua.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Ajustes Contínuos', desc: 'Refinamos a IA para se adaptar às suas necessidades e ao crescimento do seu negócio.' },
              { icon: UserCheck, title: 'Treinamento e Capacitação', desc: 'Sua equipe recebe todo o suporte para maximizar o uso e os benefícios da IA.' },
              { icon: Clock, title: 'Suporte 24/7', desc: 'Disponibilidade total para garantir que sua operação nunca pare.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border border-white/10 rounded-2xl p-7 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-gray-400 font-thin text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}