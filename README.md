# Prática do encontro 6 · Revisão de PRs, guardrails e experimento

IA para QA · M2 · Qualidade de Software na Era da IA · CESAR School

Hoje são dois laboratórios, com os mesmos grupos do encontro 5, nas salas do Zoom.

1. **Laboratório 1:** o grupo revisa três PRs da Vitrine. O código dos três foi gerado por IA.
2. **Laboratório 2:** o grupo desenha os guardrails das atividades mais arriscadas e escreve uma proposta de experimento.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `guia-revisao-prs.md` | O passo a passo do laboratório 1, com a US-01 e o checklist de revisão. **Comece por aqui.** |
| `registro-revisao.csv` | O registro do laboratório 1: tempo de revisão, achados e decisão de cada PR. |
| `prs/` | Os três PRs e a loja sem nenhum PR (`base`). |
| `guardrails-minimos.md` | O modelo do laboratório 2A, com um exemplo preenchido. |
| `proposta-de-experimento.md` | O modelo do laboratório 2B, com um exemplo preenchido. |

Cada pasta de PR tem três arquivos:

- `descricao.md`: o que o autor diz que o PR faz.
- `mudanca.diff`: o que mudou no código. Linhas com `+` entraram; linhas com `-` saíram.
- `vitrine-loja.html`: a loja com o PR aplicado.

A pasta do PR-203 tem também `vitrine-logica.js` e `vitrine-logica.test.js`.

## Como baixar

- **Com Git:** clone o repositório.
- **Sem Git:** clique em **Code** e depois em **Download ZIP**. Descompacte a pasta.

> **Atenção:** mantenham a estrutura de pastas. A loja do PR-203 carrega o `vitrine-logica.js` da mesma pasta. Sem ele, a loja abre sem produtos.

## Como abrir as lojas

- Dê dois cliques no `vitrine-loja.html` de cada pasta, ou arraste o arquivo para o navegador.
- Abram a loja do PR ao lado da loja `base` para comparar.
- Não é preciso instalar nada.
- **Opcional:** quem tem Node.js 18 ou mais novo pode rodar `node --test` dentro da pasta `PR-203`.

O `registro-revisao.csv` usa ponto e vírgula (`;`) como separador. No Excel, abra com dois cliques. No Google Sheets, use **Arquivo > Importar** e escolha o separador `;`.

## Laboratório 1 em resumo · 35 min

1. Anotem a hora de início de cada PR no registro.
2. **Antes de abrir o PR-202:** leiam só o BUG-109 e a regra R5. Respondam como vocês resolveriam e o que perguntariam ao PO. Três minutos, sem código.
3. Leiam a descrição e o diff. O que mudou de fato?
4. Testem a loja do PR ao lado da `base`, com a US-01 aberta.
5. Classifiquem cada achado: defeito, lacuna decidida sem o PO, mudança não declarada ou teste fraco.
6. Decidam: aprovar, pedir mudança ou rejeitar. Anotem a hora de fim.
7. O porta-voz posta os minutos de revisão no chat, neste formato:

   `G3 · PR-201: 6 · PR-202: 12 · PR-203: 20`

Os detalhes estão no `guia-revisao-prs.md`.

## Laboratório 2 em resumo · 25 min

1. **Guardrails mínimos · 12 min.** Escolham as 2 atividades de maior risco da ficha do encontro 5. Para cada uma, escrevam os controles: que risco contém, se é determinístico ou de julgamento, quem faz e quando.
2. **Proposta de experimento · 13 min.** Escolham uma oportunidade do mapa de calor. Escrevam a hipótese, o baseline, as métricas, o critério de sucesso e a decisão.
3. O porta-voz posta a hipótese do experimento no chat.

## O que trazer do encontro 5

- A ficha do diagnóstico do grupo (`ficha-diagnostico.csv`).
- O resumo do mapa de calor da turma.
- O `projeto-vitrine.md`, com os números da loja.

## Entrega

- O `registro-revisao.csv` preenchido, salvo com o número do grupo. Exemplo: `registro-revisao-grupo-3.csv`.
- O `guardrails-minimos.md` e a `proposta-de-experimento.md` preenchidos.
- Os minutos de revisão e a hipótese do experimento, postados no chat.

## Sobre os dados

A Vitrine é fictícia. A loja, o time, os números e os PRs foram criados para o curso.

> **Atenção:** não coloquem dados reais de cliente nos registros nem nos modelos.
