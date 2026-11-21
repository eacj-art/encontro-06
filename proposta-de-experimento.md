# Laboratório 2 · parte B · Proposta de experimento

**Em grupo · 13 minutos · parte da entrega do grupo · no fim, o porta-voz posta a hipótese no chat**

Adotar IA numa atividade é um experimento, não uma decisão de fé. Escolham **uma oportunidade** do mapa de calor do encontro 5 (dor e oportunidade altas, risco que o grupo sabe controlar) e preencham a proposta.

```
hipótese → baseline → executar → medir → analisar → decidir
```

## Perguntas que ajudam

- **Hipótese:** “Se a IA fizer ___ no nível ___, então ___ melhora em ___, sem piorar ___.” Uma hipótese boa diz o que pode dar errado, não só o ganho.
- **Baseline:** quanto é hoje, antes da IA? Sem baseline, qualquer resultado parece ganho.
- **Métricas:** pelo menos uma de ganho (tempo, volume) e uma de qualidade (defeito que escapou, retrabalho, taxa de aproveitamento). Contem o tempo de revisão como custo: no laboratório 1 vocês viram quanto ele pesa.
- **Critério de sucesso:** o número que, se atingido, faz o grupo escalar. Decidam antes de executar.
- **Decisão de rollout:** escalar, ajustar ou descartar. Escrevam o que leva a cada uma.

---

## Exemplo · A02 · Escrever casos de teste a partir das histórias

| Campo | Proposta |
|---|---|
| Atividade e nível | A02, nível 3 (a IA gera os casos com a origem de cada um; o QA aprova caso a caso) |
| Hipótese | Com a IA gerando o rascunho, o tempo para ter a suíte de uma história cai pela metade, sem aumentar casos inventados nem defeitos que escapam. |
| Baseline | Hoje: cerca de 2 horas por história (média das últimas 6 histórias); 7 defeitos em produção no último trimestre. |
| Como executar | 4 histórias novas, nas próximas 2 sprints. Mesmo QA, mesma base de conhecimento, pedido com papel, contexto, tarefa, restrição e aceite. |
| Métricas | Tempo total (geração + revisão) por história; taxa de aproveitamento (casos aprovados ÷ gerados); casos inventados encontrados na revisão; defeitos da história que escaparam. |
| Critério de sucesso | Tempo total ≤ 1 hora por história, aproveitamento ≥ 70%, nenhum defeito Alta escapado nessas histórias. |
| Guardrails durante o experimento | Caso sem origem não entra; revisão item a item; colega revisa uma suíte por sprint. |
| Decisão | **Escalar** se atingir o critério. **Ajustar** (melhorar a base ou o pedido e repetir) se o tempo cair, mas o aproveitamento ficar abaixo de 70%. **Descartar** se o tempo total não cair ou se escapar defeito Alta. |

---

## A proposta do grupo

**Grupo:** ___

| Campo | Proposta |
|---|---|
| Atividade e nível | |
| Hipótese | |
| Baseline | |
| Como executar | |
| Métricas | |
| Critério de sucesso | |
| Guardrails durante o experimento | |
| Decisão | **Escalar** se… **Ajustar** se… **Descartar** se… |

## Conferência rápida

- [ ] A hipótese diz o que não pode piorar?
- [ ] O baseline é um número, não uma impressão?
- [ ] O tempo de revisão está contado como custo?
- [ ] O critério de sucesso foi decidido antes de executar?
- [ ] Está escrito o que leva a descartar?
