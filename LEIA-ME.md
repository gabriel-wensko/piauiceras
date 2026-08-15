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
O formulário envia a mensagem direto por e-mail usando o serviço gratuito
[Web3Forms](https://web3forms.com) — o visitante não precisa ter programa
de e-mail instalado.

Para ativar (só precisa fazer uma vez):
1. Acesse [web3forms.com](https://web3forms.com) e digite o e-mail que vai
   **receber** as mensagens do site.
2. Copie a "Access Key" que chega por e-mail.
3. Cole essa chave em `js/dados.js` → bloco `contato` → campo
   `web3formsKey`, no lugar de `"COLE_AQUI_SUA_ACCESS_KEY"`.

Até a chave ser preenchida, o formulário mostra um aviso em vez de enviar.

## Publicar na internet
O site é publicado por FTP, usando o FileZilla. Depois de alterar algo,
é preciso conectar no FileZilla e enviar os arquivos alterados para o
servidor — só editar localmente não coloca as mudanças no ar.

Passo a passo:
1. Abra o FileZilla e conecte no site salvo (Arquivo → Gerenciador de Sites).
2. Do lado esquerdo (seu computador), navegue até esta pasta do site.
3. Do lado direito (servidor), navegue até a pasta onde o site fica publicado.
4. Selecione os arquivos/pastas que você alterou e arraste do lado
   esquerdo para o direito (ou clique com o botão direito → Fazer upload).
   Na dúvida, pode arrastar a pasta inteira do site — o FileZilla substitui
   só o que for diferente.
5. Aguarde a fila de transferências terminar (parte de baixo da tela) e
   confira o site no navegador.

### O navegador não mostra a mudança depois de subir o arquivo
Isso é cache do navegador (ele guarda uma cópia do `style.css` e dos
arquivos `.js` para não baixar de novo toda hora) — não é falha do
FileZilla nem do upload. Se você **editou `css/style.css` ou algum
arquivo dentro de `js/`**, faça isto antes de subir:

1. Abra cada arquivo `.html` (`index.html`, `historia.html`,
   `produtos.html`, `mercados.html`, `contato.html`).
2. Ache as 3 linhas perto do topo/fim parecidas com estas:
   ```html
   <link rel="stylesheet" href="css/style.css?v=1">
   <script src="js/dados.js?v=1"></script>
   <script src="js/main.js?v=1"></script>
   ```
3. Aumente o número depois do `?v=` em 1 (`v=1` → `v=2`, depois `v=3`,
   e assim por diante) nas 5 páginas.
4. Suba os arquivos pelo FileZilla normalmente.

Isso força o navegador de quem visita o site a baixar a versão nova,
em vez de usar a que já tinha guardada. Se você só mudou texto, fotos
ou dados em `js/dados.js` (sem mexer no `style.css`/`main.js`), não
precisa fazer isso — o navegador já busca o HTML de novo sozinho.

## Créditos das imagens
As fotos da pasta `img/` foram baixadas do Wikimedia Commons e são de
licença livre (CC0, CC BY ou CC BY-SA). Os créditos completos estão em
`img/CREDITOS-IMAGENS.md` — mantenha esse arquivo no site para cumprir
as licenças.
