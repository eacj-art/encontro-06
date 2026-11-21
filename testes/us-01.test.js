// Testes de aceitação da US-01 sobre a lógica da loja.
// Rodar com: node --test
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

// Carrega a lógica de dentro do HTML da loja, sem alterar a loja.
const html = fs.readFileSync(path.join(__dirname, "..", "loja", "vitrine-loja.html"), "utf8");
const codigo = html.slice(html.indexOf("var VitrineLogica"), html.indexOf("if (typeof module"));
const ctx = {};
vm.createContext(ctx);
vm.runInContext(codigo + "; this.L = VitrineLogica;", ctx);
const L = ctx.L;
const HOJE = new Date(2026, 10, 15); // 15/11/2026

test("R1: código fora do formato é recusado", () => {
  assert.equal(L.validarCupom("AB1", HOJE).ok, false);
});

test("R1: código válido e cadastrado é aceito", () => {
  assert.equal(L.validarCupom("BEMVINDO10", HOJE).ok, true);
});

test("CA1: 10% sobre R$ 200,00 em produtos, com frete de R$ 20,00", () => {
  const r = L.resumo({ luminaria: 2 }, "padrao", "BEMVINDO10");
  assert.equal(r.desconto, 20);
  assert.equal(r.total, 200);
});

test("R2: desconto fixo de R$ 30,00 com dois itens no carrinho", () => {
  const r = L.resumo({ almofada: 2 }, "economica", "DESC30");
  assert.equal(r.desconto, 30);
});

test("R4 e CA2: cupom vencido é recusado com a mensagem \"Cupom expirado\"", () => {
  assert.deepEqual(L.validarCupom("VERAO2025", HOJE), { ok: false, mensagem: "Cupom expirado" });
});

test("R5: cupom com mínimo é aplicado quando o pedido passa do mínimo", () => {
  const r = L.resumo({ luminaria: 1 }, "padrao", "MINIMO50");
  assert.equal(r.desconto, 10);
});
