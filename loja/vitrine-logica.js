/**
 * Vitrine · lógica do checkout (sem DOM).
 *
 * Extraído de vitrine-loja.html para permitir testes automatizados.
 * Organização:
 *   - Catálogo: produtos e opções de entrega
 *   - Cupons: tabela, normalização, validação e cálculo de desconto
 *   - Resumo: consolidação dos valores do pedido
 *   - Formatação: moeda
 */
var VitrineLogica = (function () {
  "use strict";

  /* ---------- Catálogo ---------- */

  var PRODUTOS = [
    { id: "luminaria", nome: "Luminária de mesa Aurora", preco: 100.00, icone: "💡", cor: "#FFF3D6" },
    { id: "vaso", nome: "Vaso de cerâmica Terra", preco: 40.00, icone: "🏺", cor: "#F5E3D7" },
    { id: "almofada", nome: "Almofada de linho cru", preco: 60.00, icone: "🛋️", cor: "#EDE7DD" },
    { id: "quadro", nome: "Quadro Mar Aberto", preco: 150.00, icone: "🖼️", cor: "#DDEBF2" },
    { id: "manta", nome: "Manta de tricô Serra", preco: 80.00, icone: "🧶", cor: "#EEE2EC" },
    { id: "cesto", nome: "Cesto de palha Praia", preco: 35.00, icone: "🧺", cor: "#F1EAD6" }
  ];

  var FRETES = [
    { id: "economica", nome: "Econômica", prazo: "até 7 dias úteis", valor: 5.00 },
    { id: "padrao", nome: "Padrão", prazo: "até 4 dias úteis", valor: 20.00 },
    { id: "expressa", nome: "Expressa", prazo: "1 dia útil", valor: 30.00 }
  ];

  function buscarProduto(id) {
    for (var i = 0; i < PRODUTOS.length; i++) if (PRODUTOS[i].id === id) return PRODUTOS[i];
    return null;
  }

  function buscarFrete(id) {
    for (var i = 0; i < FRETES.length; i++) if (FRETES[i].id === id) return FRETES[i];
    return null;
  }

  /* ---------- Cupons ---------- */

  var TIPO = { PERCENTUAL: "percentual", FIXO: "fixo" };

  var MENSAGENS = {
    INVALIDO: "Cupom inválido",
    EXPIRADO: "Cupon expirado"
  };

  var FORMATO_CODIGO = /^[A-Za-z0-9]{6,12}$/;

  // Cupons cadastrados pelo marketing (tabela da homologação)
  var CUPONS = {
    BEMVINDO10:  { tipo: TIPO.PERCENTUAL, valor: 10, minimo: 0,  validade: "2026-12-31" },
    PRIMAVERA15: { tipo: TIPO.PERCENTUAL, valor: 15, minimo: 0,  validade: "2026-12-20" },
    MINIMO50:    { tipo: TIPO.FIXO,       valor: 10, minimo: 50, validade: "2026-12-31" },
    DESC30:      { tipo: TIPO.FIXO,       valor: 30, minimo: 0,  validade: "2026-12-31" },
    VERAO2025:   { tipo: TIPO.PERCENTUAL, valor: 10, minimo: 0,  validade: "2026-03-31" }
  };

  function normalizarCodigo(codigoDigitado) {
    return String(codigoDigitado || "");
  }

  function dataISO(agora) {
    var d = agora || new Date();
    var mes = String(d.getMonth() + 1).padStart(2, "0");
    var dia = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + mes + "-" + dia;
  }

  function estaVencido(cupom, agora) {
    return dataISO(agora) > cupom.validade;
  }

  // Valida um código digitado. Retorna { ok, codigo, mensagem }.
  function validarCupom(codigoDigitado, agora) {
    var codigo = normalizarCodigo(codigoDigitado);
    if (!FORMATO_CODIGO.test(codigo)) return { ok: false, mensagem: MENSAGENS.INVALIDO };
    var cupom = CUPONS[codigo];
    if (!cupom) return { ok: false, mensagem: MENSAGENS.INVALIDO };
    if (estaVencido(cupom, agora)) return { ok: false, mensagem: MENSAGENS.EXPIRADO };
    return { ok: true, codigo: codigo };
  }

  function calcularDesconto(codigo, produtos, frete, itens) {
    var cupom = codigo ? CUPONS[codigo] : null;
    if (!cupom) return 0;
    if (cupom.tipo === TIPO.PERCENTUAL) return arredondar((produtos + frete) * cupom.valor / 100);
    return arredondar(Math.min(cupom.valor * (itens || 1), produtos));
  }

  function descricaoCupom(codigo) {
    var cupom = CUPONS[codigo];
    if (!cupom) return "";
    return cupom.tipo === TIPO.PERCENTUAL ? cupom.valor + "% de desconto" : brl(cupom.valor) + " de desconto";
  }

  /* ---------- Resumo ---------- */

  function arredondar(v) { return Math.round(v * 100) / 100; }

  function subtotalProdutos(carrinho) {
    var soma = 0;
    Object.keys(carrinho).forEach(function (id) {
      var p = buscarProduto(id);
      if (p) soma += p.preco;
    });
    return arredondar(soma);
  }

  function quantidadeItens(carrinho) {
    var n = 0;
    Object.keys(carrinho).forEach(function (id) { n += carrinho[id]; });
    return n;
  }

  function valorFrete(freteId) {
    var f = buscarFrete(freteId);
    return f ? f.valor : 0;
  }

  function resumo(carrinho, freteId, cupomCodigo) {
    var produtos = subtotalProdutos(carrinho);
    var frete = valorFrete(freteId);
    var desconto = calcularDesconto(cupomCodigo, produtos, frete, quantidadeItens(carrinho));
    return {
      produtos: produtos,
      frete: frete,
      desconto: desconto,
      total: arredondar(produtos + frete - desconto),
      temFrete: !!freteId
    };
  }

  /* ---------- Formatação ---------- */

  function brl(v) {
    return "R$ " + v.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return {
    PRODUTOS: PRODUTOS,
    FRETES: FRETES,
    MENSAGENS: MENSAGENS,
    validarCupom: validarCupom,
    calcularDesconto: calcularDesconto,
    descricaoCupom: descricaoCupom,
    subtotalProdutos: subtotalProdutos,
    resumo: resumo,
    brl: brl
  };
})();

if (typeof module !== "undefined") module.exports = VitrineLogica;
