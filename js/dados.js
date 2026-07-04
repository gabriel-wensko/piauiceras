/* ============================================================
   DADOS DO SITE — Piauí Ceras e Produtos Derivados Ltda
   ============================================================
   Este é o arquivo MAIS IMPORTANTE para você editar.
   Tudo que estiver aqui (telefones, e-mail, endereço, grupos
   de produtos) é usado automaticamente em TODAS as páginas.
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

  /* ---------- GRUPOS DE PRODUTOS ----------
     Cada bloco { } é um cartão na página de produtos.
     - "icone": um emoji qualquer (🌿 🏭 🧴 🧱 📦 ⚗️ ...)
     - "link":  para onde o botão "Saiba mais" leva.
                Pode ser outra página, um PDF ou um site externo.
                Deixe "" para esconder o botão.
     Para adicionar um grupo novo, copie um bloco inteiro
     (da chave { até a },) e cole embaixo.                    */
  produtos: [
    {
      nome: "Cera de Carnaúba",
      icone: "🌴",
      descricao: "Cera de carnaúba in natura e refinada, nos tipos 1, 3 e 4. Matéria-prima nobre do Nordeste brasileiro, com aplicação em cosméticos, alimentos, polimentos e indústria.",
      link: "contato.html",
    },
    {
      nome: "Ceras e Emulsões Industriais",
      icone: "⚗️",
      descricao: "Ceras compostas, emulsões e blends desenvolvidos para atender diferentes processos industriais, com qualidade constante e fornecimento regular.",
      link: "contato.html",
    },
    {
      nome: "Produtos Químicos e de Limpeza",
      icone: "🧴",
      descricao: "Fabricação e distribuição de produtos químicos diversos e linha de produtos para limpeza e conservação de pisos e superfícies.",
      link: "contato.html",
    },
    {
      nome: "Matérias-Primas Agrícolas",
      icone: "🌿",
      descricao: "Comércio atacadista de matérias-primas agrícolas selecionadas, conectando produtores do Nordeste à indústria de todo o Brasil.",
      link: "contato.html",
    },
  ],

  /* ---------- MENU DO SITE ----------
     Ordem e nomes das abas no topo de todas as páginas. */
  menu: [
    { texto: "Início",   pagina: "index.html" },
    { texto: "História", pagina: "historia.html" },
    { texto: "Produtos", pagina: "produtos.html" },
    { texto: "Contato",  pagina: "contato.html" },
  ],
};
