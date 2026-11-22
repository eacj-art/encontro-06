# Laboratório 1 · Guia de revisão dos PRs

**Em grupo · 35 minutos · entrega: uma revisão no GitHub para cada PR**

O time Checkout da Vitrine abriu PRs. O código foi gerado com Claude Code. Vocês são o QA que revisa antes do merge.

A pergunta não é só "funciona?". A pergunta é: **o que este PR muda, e isso está de acordo com a US-01?**

## O oráculo: US-01 · Aplicar cupom de desconto no checkout

- **R1.** O cupom é um código de 6 a 12 caracteres, formado por letras e números.
- **R2.** Cada cupom concede desconto percentual, entre 5% e 50%, ou desconto de valor fixo em reais.
- **R3.** O desconto incide sobre o valor dos produtos. O frete não recebe desconto.
- **R4.** Cada cupom tem data de validade. Depois dela, o cupom é recusado com a mensagem "Cupom expirado".
- **R5.** Alguns cupons exigem um valor mínimo de pedido.
- **R6.** Só um cupom pode ser aplicado por pedido.
- **CA1.** Carrinho com R$ 200,00 em produtos e frete de R$ 20,00, cupom BEMVINDO10 (10%): desconto de R$ 20,00 e total de R$ 200,00.
- **CA2.** Cupom vencido: mensagem "Cupom expirado" e o total não muda.
- **CA3.** Com um cupom aplicado, aplicar outro cupom válido: o novo substitui o anterior.

## Os cupons da homologação

| Cupom | Desconto | Mínimo | Validade |
|---|---|---|---|
| BEMVINDO10 | 10% | — | 31/12/2026 |
| PRIMAVERA15 | 15% | — | 20/12/2026 |
| MINIMO50 | R$ 10,00 | R$ 50,00 | 31/12/2026 |
| DESC30 | R$ 30,00 | — | 31/12/2026 |
| VERAO2025 | 10% | — | venceu em 31/03/2026 |

## Passo a passo

1. **Antes de abrir o PR 2**, façam o exercício do README: a situação, a regra e o que vocês perguntariam ao PO.
2. Leiam a descrição do PR. O que o autor diz que mudou?
3. Leiam a aba **Files changed**. O que mudou de fato? Bate com a descrição?
4. **Só no PR 3:** baixem a `main` e a branch do PR 3 e façam os 5 testes do README nas duas lojas. Depois, leiam o arquivo de testes: o valor esperado vem da US-01 ou do código? Os PRs 1 e 2 são só leitura.
5. Classifiquem cada achado:
   - **defeito:** contraria a US-01;
   - **lacuna decidida sem o PO:** a US-01 não define, e o PR decidiu;
   - **mudança não declarada:** o PR faz algo que a descrição não diz;
   - **teste fraco:** o teste não prova o que diz provar.
6. Enviem a revisão no GitHub: **Approve**, **Request changes** ou **Comment**.

## Modelo para o resumo da revisão

Copiem no campo de **Review changes** e preencham:

```
Achados:
1. [defeito / lacuna decidida sem o PO / mudança não declarada / teste fraco] O que acontece. Como reproduzir.
2. ...

Pergunta ao PO (se houver):

Decisão: aprovar / pedir mudança / rejeitar, porque ...
```

## Checklist de revisão

- [ ] O PR está ligado a um bug ou a uma regra da US-01?
- [ ] O que a descrição diz bate com o que mudou?
- [ ] Toda mudança de comportamento está declarada?
- [ ] Alguma decisão de produto foi tomada sem o PO?
- [ ] O "Como validei" pode ser refeito por vocês? Vocês refizeram?
- [ ] Os testes esperam o que a US-01 diz, ou o que o código faz hoje?
- [ ] O PR é pequeno o bastante para ser revisado com atenção?
- [ ] O problema também acontece na `main`? Se sim, ele não veio do PR.
