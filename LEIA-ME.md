# Site — Piauí Ceras e Produtos Derivados Ltda

Site estático e moderno, sem dependências externas. Basta abrir o
`index.html` no navegador (dê dois cliques) — não precisa instalar nada.

## Estrutura das pastas

```
site/
├── index.html      → Página inicial (hero, resumo, destaques)
├── historia.html   → História da empresa (texto provisório — edite!)
├── produtos.html   → Grupos de produtos
├── contato.html    → Telefones, e-mail, formulário e mapa
├── css/
│   └── style.css   → Todo o visual do site
├── js/
│   ├── dados.js    → ⭐ DADOS EDITÁVEIS (contatos, produtos, menu)
│   └── main.js     → Monta cabeçalho/rodapé (não precisa mexer)
└── img/            → Coloque suas fotos aqui
```

## Como editar as coisas mais comuns

### 1. Telefone, e-mail, endereço, horário
Abra `js/dados.js` → bloco `contato`. Alterou lá, muda no site inteiro
(rodapé de todas as páginas + página de contato).

### 2. Grupos de produtos
Abra `js/dados.js` → lista `produtos`. Cada bloco `{ ... }` é um cartão.
- Para **adicionar**: copie um bloco inteiro e cole embaixo.
- Para **remover**: apague o bloco.
- O campo `link` diz para onde o botão "Saiba mais" leva (outra página,
  um PDF, um site externo...). Deixe `""` para esconder o botão.

### 3. História da empresa
Abra `historia.html`. Os parágrafos têm comentários `<!-- EDITE -->`
mostrando onde escrever. A linha do tempo também é editável — copie um
bloco `<div class="timeline-item">...</div>` para adicionar um marco.

### 4. Cores e visual
Abra `css/style.css`. As primeiras linhas (bloco `:root`) têm todas as
cores do site com nomes em português. Troque os códigos de cor e o site
inteiro acompanha.

### 5. Foto no topo da página inicial
1. Coloque a foto na pasta `img/` (ex.: `img/fachada.jpg`)
2. No `css/style.css`, siga a instrução no comentário da variável
   `--hero-fundo` (basta trocar uma linha).

### 6. Textos das páginas
Cada página `.html` tem comentários `<!-- ... -->` explicando cada seção.
Edite os textos entre as tags normalmente (ex.: entre `<p>` e `</p>`).

## Formulário de contato
O formulário abre o programa de e-mail do visitante com a mensagem pronta
(funciona sem servidor). Se quiser receber direto no site, dá para integrar
um serviço gratuito como o [Formspree](https://formspree.io) depois.

## Publicar na internet
Quando quiser colocar o site no ar, opções gratuitas e simples:
- [Netlify Drop](https://app.netlify.com/drop) — arraste a pasta `site` e pronto
- [GitHub Pages](https://pages.github.com)
- [Vercel](https://vercel.com)
