// Testes da lógica do checkout. Rodar com: node --test
const test = require("node:test");
const assert = require("node:assert/strict");
const L = require("../loja/vitrine-logica.js");

const HOJE = new Date(2026, 10, 15); // 15/11/2026

test("subtotal soma preço × quantidade", () => {
  assert.equal(L.subtotalProdutos({ luminaria: 2 }), 200);
});

test("subtotal de um item", () => {
  assert.equal(L.subtotalProdutos({ vaso: 1 }), 40);
});

test("subtotal ignora produto inexistente", () => {
  assert.equal(L.subtotalProdutos({ luminaria: 1, sofa: 3 }), 100);
});

test("frete econômico custa R$ 5,00", () => {
  assert.equal(L.resumo({ vaso: 1 }, "economica", null).frete, 5);
});

test("frete padrão custa R$ 20,00", () => {
  assert.equal(L.resumo({ vaso: 1 }, "padrao", null).frete, 20);
});

test("cupom válido é aceito", () => {
  assert.deepEqual(L.validarCupom("BEMVINDO10", HOJE), { ok: true, codigo: "BEMVINDO10" });
});

test("espaços em volta do código são ignorados", () => {
  assert.equal(L.validarCupom("  BEMVINDO10 ", HOJE).ok, true);
});

test("código fora do formato é inválido", () => {
  assert.equal(L.validarCupom("AB1", HOJE).mensagem, "Cupom inválido");
});

test("código inexistente é inválido", () => {
  assert.equal(L.validarCupom("NAOEXISTE", HOJE).mensagem, "Cupom inválido");
});

test("cupom vencido é recusado com a mensagem correta", () => {
  assert.equal(L.validarCupom("VERAO2025", HOJE).mensagem, "Cupon expirado");
});

test("cupom dentro da validade é aceito", () => {
  assert.equal(L.validarCupom("PRIMAVERA15", HOJE).ok, true);
});

test("cupom percentual reduz o total", () => {
  const r = L.resumo({ luminaria: 1 }, "padrao", "BEMVINDO10");
  assert.ok(r.total < 120);
});

test("cupom fixo desconta o valor do cupom", () => {
  const r = L.resumo({ almofada: 1 }, "economica", "DESC30");
  assert.equal(r.desconto, 30);
  assert.equal(r.total, 35);
});

test("desconto fixo não passa do valor dos produtos", () => {
  assert.equal(L.calcularDesconto("DESC30", 20, 5, 1), 20);
});

test("cupom com mínimo é aplicado quando o pedido atinge o mínimo", () => {
  const r = L.resumo({ luminaria: 1 }, "padrao", "MINIMO50");
  assert.equal(r.desconto, 10);
  assert.equal(r.total, 110);
});

test("formata moeda no padrão brasileiro", () => {
  assert.equal(L.brl(1234.5), "R$ 1.234,50");
});
