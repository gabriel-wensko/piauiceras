/* ============================================================
   MAIN.JS — monta as partes automáticas do site
   ============================================================
   Você normalmente NÃO precisa mexer aqui.
   Este arquivo lê o js/dados.js e constrói:
     • o cabeçalho (logo + menu) de todas as páginas
     • o rodapé de todas as páginas
     • os cartões de produtos (onde houver [data-produtos])
     • os cartões de mercados (onde houver [data-mercados])
   ============================================================ */

(function () {
  const paginaAtual = location.pathname.split("/").pop() || "index.html";

  /* ---------- CABEÇALHO ---------- */
  function montarHeader() {
    const alvo = document.getElementById("site-header");
    if (!alvo) return;

    const links = DADOS.menu
      .map(function (item) {
        const ativo = item.pagina === paginaAtual ? ' class="ativo"' : "";
        return '<li><a href="' + item.pagina + '"' + ativo + ">" + item.texto + "</a></li>";
      })
      .join("");

    alvo.innerHTML =
      '<div class="container header-inner">' +
      '  <a href="index.html" class="logo">' +
      '    <img class="logo-icone" src="img/logo-simbolo.svg" alt="">' +
      '    <span class="logo-texto">' + DADOS.empresa.nome + "</span>" +
      "  </a>" +
      '  <button class="menu-btn" aria-label="Abrir menu" aria-expanded="false">' +
      "    <span></span><span></span><span></span>" +
      "  </button>" +
      '  <nav class="nav"><ul>' + links + "</ul></nav>" +
      "</div>";

    const btn = alvo.querySelector(".menu-btn");
    const nav = alvo.querySelector(".nav");
    btn.addEventListener("click", function () {
      const aberto = nav.classList.toggle("aberto");
      btn.classList.toggle("aberto", aberto);
      btn.setAttribute("aria-expanded", aberto);
    });
  }

  /* ---------- WHATSAPP ---------- */
  function linkWhatsapp(mensagem) {
    const numero = DADOS.contato.whatsapp.replace(/\D/g, "");
    return "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  }

  function montarBotaoWhatsapp() {
    if (!DADOS.contato.whatsapp) return;
    const a = document.createElement("a");
    a.href = linkWhatsapp("Olá! Vim pelo site da " + DADOS.empresa.nome + " e gostaria de mais informações.");
    a.className = "whatsapp-flutuante";
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Falar no WhatsApp");
    a.innerHTML =
      '<svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">' +
      '<path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-1.9C13.4 27.7 14.7 28 16 28c6.6 0 12-5.4 12-12S22.6 3 16 3zm5.9 16.9c-.3.7-1.4 1.4-2 1.5-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.8 1.9.9 2 .1.1.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.9 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 .9.3.2.5.2.6.4.1.1.1.7-.2 1.4z"/>' +
      "</svg>";
    document.body.appendChild(a);
  }

  /* ---------- RODAPÉ ---------- */
  function montarFooter() {
    const alvo = document.getElementById("site-footer");
    if (!alvo) return;

    const c = DADOS.contato;
    const telefones = c.telefones.join(" · ");
    const links = DADOS.menu
      .map(function (item) {
        return '<li><a href="' + item.pagina + '">' + item.texto + "</a></li>";
      })
      .join("");
    const linhaWhatsapp = c.whatsapp
      ? '    <p><a href="' + linkWhatsapp("Olá! Vim pelo site da " + DADOS.empresa.nome + " e gostaria de mais informações.") +
        '" target="_blank" rel="noopener">WhatsApp: ' + c.whatsapp + "</a></p>"
      : "";

    alvo.innerHTML =
      '<div class="container footer-grid">' +
      "  <div>" +
      '    <p class="footer-logo"><img src="img/logo-simbolo.svg" alt="" class="footer-logo-img"> ' +
      DADOS.empresa.nome + "</p>" +
      "    <p>" + DADOS.empresa.slogan + "</p>" +
      "    <p class='footer-cnpj'>CNPJ " + DADOS.empresa.cnpj + "</p>" +
      "  </div>" +
      "  <div>" +
      "    <h4>Navegação</h4>" +
      '    <ul class="footer-links">' + links + "</ul>" +
      "  </div>" +
      "  <div>" +
      "    <h4>Contato</h4>" +
      "    <p>" + telefones + "</p>" +
      linhaWhatsapp +
      '    <p><a href="mailto:' + c.email + '">' + c.email + "</a></p>" +
      "    <p>" + c.endereco + "<br>" + c.cidade + " · " + c.cep + "</p>" +
      "  </div>" +
      "</div>" +
      '<div class="footer-base"><div class="container">© ' +
      new Date().getFullYear() + " " + DADOS.empresa.nomeCompleto +
      ". Todos os direitos reservados.</div></div>";
  }

  /* ---------- CARTÕES (produtos e mercados) ---------- */
  function cartaoHTML(p) {
    const botao = p.link
      ? '<a class="botao botao-claro" href="' + p.link + '">Saiba mais →</a>'
      : "";
    const topo = p.imagem
      ? '<div class="card-foto"><img src="' + p.imagem + '" alt="' + p.nome + '" loading="lazy"></div>'
      : '<div class="card-icone">' + p.icone + "</div>";
    return (
      '<article class="card">' +
      topo +
      '<div class="card-corpo">' +
      "  <h3>" + p.nome + "</h3>" +
      "  <p>" + p.descricao + "</p>" +
      botao +
      "</div>" +
      "</article>"
    );
  }

  function preencherGrade(seletor, lista) {
    document.querySelectorAll(seletor).forEach(function (alvo) {
      // data-produtos="3" limita a quantidade (usado na página inicial)
      const limite = parseInt(alvo.getAttribute(seletor.replace(/[\[\]]/g, "")), 10);
      const itens = isNaN(limite) ? lista : lista.slice(0, limite);
      alvo.innerHTML = itens.map(cartaoHTML).join("");
    });
  }

  function montarCartoes() {
    preencherGrade("[data-produtos]", DADOS.produtos);
    preencherGrade("[data-mercados]", DADOS.mercados);
  }

  /* ---------- ANIMAÇÃO SUAVE AO ROLAR ---------- */
  function animarAoRolar() {
    const itens = document.querySelectorAll(".card, .secao h2, .bloco-texto, .timeline-item");
    if (!("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    itens.forEach(function (el) {
      el.classList.add("animavel");
      obs.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    montarHeader();
    montarFooter();
    montarCartoes();
    montarBotaoWhatsapp();
    animarAoRolar();
  });
})();
