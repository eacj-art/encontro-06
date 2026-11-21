# Laboratório 2 · parte A · Guardrails mínimos

**Em grupo · 12 minutos · parte da entrega do grupo**

Guardrail é um controle que limita o dano que a saída da IA pode causar, calibrado pelo nível de risco. Quanto maior o risco, mais forte o controle.

Peguem a ficha do diagnóstico do encontro 5 e escolham as **2 atividades de maior risco** em que o grupo decidiu **usar com guardrail**. Para cada uma, preencham o quadro.

## Os dois eixos de cada controle

- **Que risco ele contém?** Erro de regra, dado errado, decisão sem dono, efeito difícil de desfazer…
- **Determinístico ou de julgamento?** Determinístico funciona sempre do mesmo jeito, sem depender de alguém lembrar: um teste na pipeline, uma permissão bloqueada, um campo obrigatório. De julgamento depende de uma pessoa olhar com critério: revisão, aprovação.

Instrução no prompt ou no CLAUDE.md orienta a IA, mas não garante nada. Se for o único controle, a atividade está sem guardrail.

## Escada de referência

| Faixa de risco (P × I) | Revisão humana | Testes | Aprovação | Rastreabilidade | Monitoramento | Reversão |
|---|---|---|---|---|---|---|
| Baixo (1 a 2) | Por amostragem | Os que já existem | Não precisa | Registro de que foi feito com IA | Opcional | Desfazer manual |
| Médio (3 a 4) | Item a item | Caso específico para a mudança | Uma pessoa | Origem de cada item (fonte ou decisão) | Alerta simples | Plano de reversão escrito |
| Alto (6 a 9) | Item a item, com critério escrito | Regressão automatizada na pipeline | Uma pessoa com autoridade sobre o risco | Origem + quem aprovou + evidência | Alerta com dono | Reversão testada antes |

A escada é um ponto de partida, não uma regra. Um controle de faixa alta pode ser exagero numa atividade específica; justifiquem quando fugirem dela.

---

## Exemplo · A10 · Analisar o risco de um PR antes do merge

- **Risco no diagnóstico:** P 2 × I 3 = **6 (alto)**
- **Nível de autonomia escolhido:** 3 · AI-generated + Human-approved. A IA lê o diff e aponta o que pode quebrar. O QA confere e decide.
- **Se a IA errar:** ela classifica como "risco baixo" um PR que muda o cálculo do desconto. O PR entra sem teste específico, e o erro chega a 360 pedidos por dia, como no BUG-101.

| Controle | Que risco contém | Determinístico ou julgamento | Quem faz e quando |
|---|---|---|---|
| A análise da IA lista cada regra de negócio que o diff toca, com o arquivo e a linha. Sem a origem, a análise volta. | Risco omitido sem rastro | Determinístico (formato obrigatório, conferido antes de usar) | A IA gera; o QA confere |
| PR que muda preço, desconto ou frete só entra com um caso de teste específico na pipeline. | Regressão em cálculo de valor | Determinístico (regra na pipeline) | O dev escreve; a pipeline barra |
| Se a IA disser "risco baixo" num PR com mais de 100 linhas, o QA lê o diff inteiro. | "Risco baixo" falso em PR grande | Julgamento | QA, antes do merge |
| A descrição do PR tem "Como validei" e lista toda mudança de comportamento. | Mudança não declarada, como no PR grande | Julgamento, com campo obrigatório no modelo de PR | O autor do PR |
| O merge precisa da aprovação de uma pessoa do time Checkout. | Decisão sem dono | Julgamento | Dev sênior do Checkout |

**Cenário em que não usaríamos IA nesta atividade:** PR que muda a integração com o pagamento, ou qualquer PR na semana de Black Friday. Nesses casos, duas pessoas analisam o risco, sem IA.

---

## Atividade 1: ______

- **Risco no diagnóstico:** P __ × I __ = __ ( )
- **Nível de autonomia escolhido:**
- **Se a IA errar:**

| Controle | Que risco contém | Determinístico ou julgamento | Quem faz e quando |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

**Cenário em que não usaríamos IA nesta atividade:**

## Atividade 2: ______

- **Risco no diagnóstico:** P __ × I __ = __ ( )
- **Nível de autonomia escolhido:**
- **Se a IA errar:**

| Controle | Que risco contém | Determinístico ou julgamento | Quem faz e quando |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

**Cenário em que não usaríamos IA nesta atividade:**

## Conferência rápida

- [ ] Cada atividade tem pelo menos um controle determinístico?
- [ ] Nenhuma atividade depende só de instrução no prompt?
- [ ] Toda aprovação tem um dono com nome de papel (QA, PO, dev sênior)?
- [ ] O controle é proporcional ao risco, nem fraco nem burocrático demais?
