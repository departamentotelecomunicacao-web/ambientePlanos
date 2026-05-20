/* ═══════════════════════════════════════════════════════
   FATURA EXPERT — Dados dos Planos
   Edite este arquivo diretamente OU use o painel admin.html
   ═══════════════════════════════════════════════════════ */

const PLANS_DEFAULT = [
  {
    op: 'vivo',
    opLabel: 'Vivo',
    cat: 'imperdivel',
    name: 'Vivo Pós – Até 19GB (Port In)',
    speed: '19GB',
    priceNum: 39.99,
    features: [
      '6 GB de internet no plano',
      '+ 10 GB bônus Port In',
      '+ 3 GB D. Automático/Cartão de Crédito',
      'Apps Standard inclusos',
      'Skeelo incluso'
    ],
    highlight: 'Até 19 GB com bônus Port In',
    featured: true,
    sub: 'Portabilidade + débito automático = mais dados'
  },
  {
    op: 'vivo',
    opLabel: 'Vivo',
    cat: 'imperdivel',
    name: 'Vivo Pós – Até 28GB (Port In)',
    speed: '28GB',
    priceNum: 54.99,
    features: [
      '15 GB de internet no plano',
      '+ 10 GB bônus Port In',
      '+ 3 GB D. Automático/Cartão de Crédito',
      'Apps Standard inclusos',
      'Skeelo incluso'
    ],
    highlight: 'Até 28 GB com bônus Port In',
    featured: false,
    sub: 'Mais dados com portabilidade e débito automático'
  },
  {
    op: 'vivo',
    opLabel: 'Vivo',
    cat: 'movel',
    name: 'Vivo Smart 1GB – Empresas',
    speed: '1GB',
    priceNum: 19.99,
    features: [
      'Ligações ilimitadas',
      '1 GB de internet',
      'Ideal para uso na empresa',
      'Contratação acima de 20 linhas'
    ],
    highlight: 'Contratação acima de 20 linhas',
    featured: false,
    sub: 'Melhor custo por linha para frotas grandes'
  },
  {
    op: 'vivo',
    opLabel: 'Vivo',
    cat: 'combo',
    name: 'Vivo Total Empresas 2P – Smart 16GB',
    speed: '16GB+BL',
    priceNum: 129.98,
    features: [
      'Ligações ilimitadas',
      '16 GB de internet móvel',
      'Banda Larga 600 MB inclusa',
      'WhatsApp ilimitado'
    ],
    highlight: 'Banda Larga 600 MB inclusa',
    featured: true,
    sub: 'Plano móvel + banda larga em um único pacote'
  },
  {
    op: 'vivo',
    opLabel: 'Vivo',
    cat: 'combo',
    name: 'Vivo Total Empresas 2P – Smart 25GB',
    speed: '25GB+BL',
    priceNum: 144.98,
    features: [
      'Ligações ilimitadas',
      '25 GB de internet móvel',
      'Banda Larga 600 MB inclusa',
      'WhatsApp ilimitado'
    ],
    highlight: '25 GB + Banda Larga 600 MB',
    featured: false,
    sub: 'Maior capacidade móvel com banda larga inclusa'
  },
  {
    op: 'claro',
    opLabel: 'Claro',
    cat: 'imperdivel',
    name: 'Claro Pós 6GB – Oferta Portabilidade',
    speed: '6GB',
    priceNum: 29.99,
    features: [
      '1 GB uso livre',
      '+ 5 GB bônus extra',
      'WhatsApp e Messenger ilimitados',
      'Gestor Online + McAfee + Claro Recados',
      'Exclusivo CNPJ – portabilidade'
    ],
    highlight: 'Exclusivo CNPJ – Portabilidade',
    featured: false,
    sub: 'Oferta exclusiva para CNPJ com portabilidade'
  },
  {
    op: 'claro',
    opLabel: 'Claro',
    cat: 'imperdivel',
    name: 'Claro Pós 21GB – Oferta Portabilidade',
    speed: '21GB',
    priceNum: 39.99,
    features: [
      '10 GB uso livre',
      '+ 11 GB bônus extra',
      'WhatsApp e Messenger ilimitados',
      'Gestor Online + Skeelo + McAfee',
      'Claro-banca, Claro-monitor, Claro-recados'
    ],
    highlight: '21 GB total + apps ilimitados',
    featured: true,
    sub: 'Maior custo-benefício Claro pós-pago para empresas'
  },
  {
    op: 'claro',
    opLabel: 'Claro',
    cat: 'imperdivel',
    name: 'Claro Pós 25GB – Portabilidade',
    speed: '25GB',
    priceNum: 44.99,
    features: [
      '15 GB plano + 10 GB bônus',
      'WhatsApp e Messenger ilimitados',
      'Gestor Online + Skeelo + McAfee',
      'Claro-banca, Claro-monitor, Claro-recados',
      'Exclusivo CNPJ – Portabilidade'
    ],
    highlight: '25 GB total + apps ilimitados',
    featured: false,
    sub: 'Regionais RSC, RSI, RRS, RRE, RCO e RNO'
  },
  {
    op: 'claro',
    opLabel: 'Claro',
    cat: 'imperdivel',
    name: 'Claro Pós 60GB – Portabilidade',
    speed: '60GB',
    priceNum: 54.99,
    features: [
      '25 GB plano + 35 GB bônus',
      'WhatsApp e Messenger ilimitados',
      'Gestor Online + Skeelo + McAfee',
      'Claro-banca, Claro-monitor, Claro-recados',
      'Exclusivo CNPJ – Portabilidade'
    ],
    highlight: '60 GB total + apps ilimitados',
    featured: false,
    sub: 'Regionais RMG, RPS, RBS e RNE + DDDs específicos'
  },
  {
    op: 'claro',
    opLabel: 'Claro',
    cat: 'imperdivel',
    name: 'Claro Pós 70GB',
    speed: '70GB',
    priceNum: 109.90,
    features: [
      '25 GB livres de uso',
      '+ 20 GB bônus livres',
      '+ 25 GB bônus redes sociais e apps',
      'App Claro tv+ e Globoplay por 30 dias',
      'Passaporte Américas + Ligações ilimitadas'
    ],
    highlight: '70 GB total + Globoplay incluso',
    featured: true,
    sub: 'Até 2 linhas – apps e streaming inclusos no plano'
  },
  {
    op: 'claro',
    opLabel: 'Claro',
    cat: 'combo',
    name: 'Claro Fibra 800MB + Claro Pós 41GB',
    speed: '800MB+41GB',
    priceNum: 149.89,
    features: [
      'Claro Fibra 800 MEGA (Wi-Fi 6)',
      'Claro Pós 41 GB total',
      '6 GB uso livre + 5 GB redes sociais',
      '30 GB MegaBônus compartilháveis',
      'Cobrança via boleto'
    ],
    highlight: '30 GB MegaBônus compartilháveis',
    featured: true,
    sub: 'Combo fibra + móvel com MegaBônus – R$149,89/mês boleto'
  },
  {
    op: 'claro',
    opLabel: 'Claro',
    cat: 'combo',
    name: 'Claro Fibra 800MB + Claro Pós 55GB',
    speed: '800MB+55GB',
    priceNum: 159.89,
    features: [
      'Claro Fibra 800 MEGA (Wi-Fi 6)',
      'Claro Pós 55 GB total',
      '15 GB uso livre + 10 GB redes sociais',
      '30 GB MegaBônus compartilháveis',
      'Cobrança via boleto'
    ],
    highlight: '55 GB total + 30 GB MegaBônus',
    featured: false,
    sub: 'Combo premium fibra + móvel – R$149,89/mês boleto'
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
