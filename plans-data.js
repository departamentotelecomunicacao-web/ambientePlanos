/* ═══════════════════════════════════════════════════════
   FATURA EXPERT — Dados dos Planos
   Edite este arquivo diretamente OU use o painel admin.html
   ═══════════════════════════════════════════════════════ */

const PLANS_DEFAULT = [
  {
    op: 'vivo',
    opLabel: 'Vivo',
    cat: 'imperdivel',
    name: 'Plano TESTE — Vivo 10GB',
    speed: '10GB',
    priceNum: 49.99,
    features: [
      'Ligações ilimitadas',
      '10 GB de internet',
      'WhatsApp ilimitado',
      'Plano de teste — edite ou adicione novos'
    ],
    highlight: 'Plano de teste — pronto para edição',
    featured: true,
    sub: 'Plano único deixado para testes de adição e edição'
  }
];

/* Carrega do localStorage (admin) ou usa os dados padrão */
function loadPlans() {
  try {
    const saved = localStorage.getItem('fe_plans');
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return PLANS_DEFAULT;
}
