const whatsappUrl = 'https://wa.me/5511999999999';

export const agents = [
  {
    id: 'clinica-inteligente',
    name: 'Atendimento para Clínicas',
    slug: 'atendimento-para-clinicas',
    description: 'Capta leads, responde dúvidas frequentes e organiza pedidos de agendamento com linguagem natural.',
    category: 'Saúde',
    is_active: true,
    image_url: '',
    cta_url: whatsappUrl,
    cta_text: 'Quero um agente para clínica',
    preview_messages: [
      { role: 'client', text: 'Oi! Vocês atendem convênio?' },
      { role: 'agent', text: 'Atendemos sim. Posso te mostrar os convênios aceitos e já verificar horários disponíveis.' },
      { role: 'client', text: 'Tem consulta amanhã à tarde?' },
      { role: 'agent', text: 'Temos opções às 14h e 16h. Se quiser, já deixo seu pré-cadastro pronto para a equipe.' },
    ],
  },
  {
    id: 'assistente-comercial',
    name: 'Assistente Comercial',
    slug: 'assistente-comercial',
    description: 'Atende potenciais clientes, apresenta soluções e conduz a conversa até a intenção de compra.',
    category: 'Vendas',
    is_active: true,
    image_url: '',
    cta_url: whatsappUrl,
    cta_text: 'Quero um agente comercial',
    preview_messages: [
      { role: 'client', text: 'Como funciona a implantação?' },
      { role: 'agent', text: 'Nós configuramos o fluxo com base no seu negócio e entregamos uma primeira versão para você testar sem risco.' },
      { role: 'client', text: 'Quanto tempo leva?' },
      { role: 'agent', text: 'Normalmente alguns dias úteis, dependendo da quantidade de informações e integrações desejadas.' },
    ],
  },
  {
    id: 'agendamento-salao',
    name: 'Agendamento para Salões',
    slug: 'agendamento-para-saloes',
    description: 'Confirma horários, responde preços e reduz faltas com lembretes automáticos.',
    category: 'Beleza',
    is_active: true,
    image_url: '',
    cta_url: whatsappUrl,
    cta_text: 'Quero automatizar meu salão',
    preview_messages: [
      { role: 'client', text: 'Tem horário para corte hoje?' },
      { role: 'agent', text: 'Hoje ainda temos horários às 15h30 e 17h. Quer que eu deixe seu atendimento encaminhado?' },
      { role: 'client', text: 'Qual o valor da escova?' },
      { role: 'agent', text: 'Posso te passar os valores e também sugerir o melhor horário com base no serviço que você quer fazer.' },
    ],
  },
];

export const activeAgents = agents.filter((agent) => agent.is_active !== false);

export function getAgentBySlug(slug) {
  return agents.find((agent) => agent.slug === slug) ?? null;
}