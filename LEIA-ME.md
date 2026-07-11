# Site — Piauí Ceras e Produtos Derivados Ltda

Site estático e moderno, sem dependências externas. Basta abrir o
`index.html` no navegador (dê dois cliques) — não precisa instalar nada.

## Estrutura das pastas

```
site/
├── index.html      → Página inicial (hero, resumo, destaques)
├── historia.html   → História da empresa (texto provisório — edite!)
├── produtos.html   → Produtos (cartões vêm do js/dados.js)
├── mercados.html   → Mercados atendidos (cartões vêm do js/dados.js)
├── contato.html    → Telefones, e-mail, formulário e mapa
├── css/
│   └── style.css   → Todo o visual do site
├── js/
│   ├── dados.js    → ⭐ DADOS EDITÁVEIS (contatos, produtos, mercados, menu)
│   └── main.js     → Monta cabeçalho/rodapé/cartões (não precisa mexer)
└── img/            → Fotos do site + logo (SVG)
```

## Como editar as coisas mais comuns

### 1. Telefone, e-mail, endereço, horário
Abra `js/dados.js` → bloco `contato`. Alterou lá, muda no site inteiro
(rodapé de todas as páginas + página de contato).

### 2. Produtos e Mercados
Abra `js/dados.js` → listas `produtos` e `mercados`. Cada bloco `{ ... }`
é um cartão.
- Para **adicionar**: copie um bloco inteiro e cole embaixo.
- Para **remover**: apague o bloco.
- O campo `imagem` aponta para a foto do cartão (pasta `img/`).
  Deixe `""` para mostrar só o emoji do campo `icone`.
- O campo `link` diz para onde o botão "Saiba mais" leva.
  Deixe `""` para esconder o botão.

### 3. Trocar uma foto
Salve a foto nova na pasta `img/` e atualize o campo `imagem` do cartão
no `js/dados.js`. Para a foto de abertura (topo da página inicial),
basta substituir o arquivo `img/hero-carnauba.jpg` por outro com o
mesmo nome.

### 4. Logo
O logo fica em dois arquivos SVG na pasta `img/`:
- `logo-simbolo.svg` → só o símbolo (usado no cabeçalho, rodapé e
  como ícone da aba do navegador)
- `logo.svg` → símbolo + nome (para usar em documentos, assinaturas etc.)

### 5. História da empresa
Abra `historia.html`. Os parágrafos têm comentários `<!-- EDITE -->`
mostrando onde escrever.

### 6. Cores e visual
Abra `css/style.css`. As primeiras linhas (bloco `:root`) têm todas as
cores do site com nomes em português.

## Formulário de contato
O formulário abre o programa de e-mail do visitante com a mensagem pronta
(funciona sem servidor). Se quiser receber direto no site sem depender
do programa de e-mail do visitante, dá para integrar um serviço gratuito
como o [Formspree](https://formspree.io) depois.

## Publicar na internet
O site está publicado via GitHub Pages. Depois de alterar algo, é preciso
enviar as mudanças (commit + push) para elas irem ao ar.

## Créditos das imagens
As fotos da pasta `img/` foram baixadas do Wikimedia Commons e são de
licença livre (CC0, CC BY ou CC BY-SA). Os créditos completos estão em
`img/CREDITOS-IMAGENS.md` — mantenha esse arquivo no site para cumprir
as licenças.
