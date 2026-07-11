/* ============================================================
   DADOS DO SITE — Piauí Ceras e Produtos Derivados Ltda
   ============================================================
   Este é o arquivo MAIS IMPORTANTE para você editar.
   Tudo que estiver aqui (telefones, e-mail, endereço, produtos,
   mercados) é usado automaticamente em TODAS as páginas.
   Alterou aqui → mudou no site inteiro.

   Dica: mantenha as aspas e as vírgulas como estão.
   ============================================================ */

const DADOS = {

  /* ---------- IDENTIDADE DA EMPRESA ---------- */
  empresa: {
    nome: "Piauí Ceras",
    nomeCompleto: "Piauí Ceras e Produtos Derivados Ltda",
    slogan: "Tradição em ceras de carnaúba e derivados desde 1998",
    cnpj: "02.315.311/0001-75",
    anoFundacao: 1998,
  },

  /* ---------- CONTATO ---------- */
  contato: {
    telefones: ["(11) 2233-0022", "(11) 2235-1850"],
    whatsapp: "",                       // ex.: "(11) 99999-9999" — deixe "" para ocultar
    email: "piauiceras@uol.com.br",
    endereco: "Travessa Gilberto Menezes de Góes, 64 — Vila Amália",
    cidade: "São Paulo — SP",
    cep: "CEP 02617-120",
    horario: "Segunda a sexta, das 8h às 18h",
  },

  /* ---------- PRODUTOS ----------
     Cada bloco { } é um cartão na página de produtos.
     - "imagem": foto do cartão (arquivo da pasta img/).
                 Deixe "" para mostrar só o emoji do "icone".
     - "link":   para onde o botão "Saiba mais" leva.
                 Deixe "" para esconder o botão.
     Para adicionar um produto novo, copie um bloco inteiro
     (da chave { até a },) e cole embaixo.                    */
  produtos: [
    {
      nome: "Ceras de Carnaúba e Emulsões",
      icone: "🌴",
      imagem: "img/produto-carnauba.jpg",
      descricao: "Cera de carnaúba nos tipos 1, 3 e 4 e emulsões prontas para uso. O \"ouro do sertão\": a cera vegetal mais dura e brilhante que existe, 100% natural e brasileira.",
      link: "contato.html",
    },
    {
      nome: "Ceras de Abelha e Emulsões",
      icone: "🐝",
      imagem: "img/produto-abelha.jpg",
      descricao: "Cera de abelha purificada e emulsões, com aroma e plasticidade únicos. Aplicação em cosméticos, velas, alimentos e indústria farmacêutica.",
      link: "contato.html",
    },
    {
      nome: "Parafinas, Cera Microcristalina e Ceresina",
      icone: "🕯️",
      imagem: "img/produto-parafina.jpg",
      descricao: "Parafinas macro e microcristalinas e ceresina para velas, impermeabilização, embalagens, cosméticos e os mais diversos processos industriais.",
      link: "contato.html",
    },
    {
      nome: "Ceras Vegetais Hidrogenadas",
      icone: "🌿",
      imagem: "img/produto-vegetal.jpg",
      descricao: "Ceras de origem vegetal hidrogenadas: alternativa vegana e renovável para cosméticos, velas e formulações que pedem origem natural.",
      link: "contato.html",
    },
    {
      nome: "Breu e Derivados",
      icone: "🌲",
      imagem: "img/produto-breu.jpg",
      descricao: "Breu (colofônia) e seus derivados, matéria-prima para adesivos, tintas, vernizes, borrachas, sabões e indústria de papel.",
      link: "contato.html",
    },
    {
      nome: "Soluções Personalizadas",
      icone: "⚗️",
      imagem: "img/produto-solucoes.jpg",
      descricao: "Desenvolvemos blends, emulsões e composições sob medida para o seu processo. Conte-nos a necessidade — nós formulamos a cera.",
      link: "contato.html",
    },
  ],

  /* ---------- MERCADOS QUE ATENDEMOS ----------
     Mesma lógica dos produtos: cada bloco { } é um cartão
     na página de mercados.                                   */
  mercados: [
    {
      nome: "Cosméticos",
      icone: "💄",
      imagem: "img/mercado-cosmeticos.jpg",
      descricao: "Batons, cremes, máscaras, depilatórios e protetores: as ceras dão estrutura, brilho, emoliência e toque seco às formulações cosméticas.",
    },
    {
      nome: "Metalurgia, Microfusão e Metais Sanitários",
      icone: "🔩",
      imagem: "img/mercado-metalurgia.jpg",
      descricao: "Ceras para modelos de fundição de precisão (cera perdida/microfusão), usadas na produção de peças técnicas, torneiras e metais sanitários.",
    },
    {
      nome: "Produtos de Limpeza",
      icone: "🧴",
      imagem: "img/mercado-limpeza.jpg",
      descricao: "Base para ceras de assoalho, polidores de móveis, conservantes de pisos e produtos de brilho e proteção de superfícies.",
    },
    {
      nome: "Ceras Automotivas",
      icone: "🚗",
      imagem: "img/mercado-automotivo.jpg",
      descricao: "A carnaúba é o coração das melhores ceras automotivas: brilho profundo, repelência à água e proteção duradoura da pintura.",
    },
    {
      nome: "Ceras para Madeiras",
      icone: "🪵",
      imagem: "img/mercado-madeira.jpg",
      descricao: "Acabamento e conservação natural de móveis, esquadrias e pisos de madeira, com realce dos veios e proteção contra umidade.",
    },
    {
      nome: "Ceras Odontológicas",
      icone: "🦷",
      imagem: "img/mercado-odontologico.jpg",
      descricao: "Matéria-prima para ceras de modelagem, registro e prótese dentária, que exigem pureza e comportamento térmico preciso.",
    },
    {
      nome: "Ceras para Frutas",
      icone: "🍎",
      imagem: "img/mercado-frutas.jpg",
      descricao: "Revestimentos de grau alimentício que prolongam a vida pós-colheita, reduzem a perda de água e dão brilho natural às frutas.",
    },
    {
      nome: "Ceras para Papéis",
      icone: "📦",
      imagem: "img/mercado-papel.jpg",
      descricao: "Impermeabilização e revestimento de papéis e embalagens, conferindo resistência à umidade e melhor apresentação.",
    },
    {
      nome: "Ceras para Fundição de Joias",
      icone: "💍",
      imagem: "img/mercado-joias.jpg",
      descricao: "Ceras de injeção e modelagem para a fundição por cera perdida na joalheria, com detalhe fino e queima limpa.",
    },
  ],

  /* ---------- MENU DO SITE ----------
     Ordem e nomes das abas no topo de todas as páginas. */
  menu: [
    { texto: "Início",   pagina: "index.html" },
    { texto: "História", pagina: "historia.html" },
    { texto: "Produtos", pagina: "produtos.html" },
    { texto: "Mercados", pagina: "mercados.html" },
    { texto: "Contato",  pagina: "contato.html" },
  ],
};
