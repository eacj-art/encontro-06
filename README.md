# Prática do encontro 6 · Revisão de PRs, guardrails e experimento

IA para QA · M2 · Qualidade de Software na Era da IA · CESAR School

Hoje são dois laboratórios, com os mesmos grupos do encontro 5, nas salas do Zoom.

1. **Laboratório 1 · 35 min:** o grupo revisa três PRs da loja Vitrine, aqui mesmo no GitHub. O código dos três foi gerado por IA.
2. **Laboratório 2 · 25 min:** o grupo desenha os guardrails das atividades mais arriscadas e escreve uma proposta de experimento.

## Os PRs do seu grupo

Cada grupo tem **3 PRs próprios**. Os PRs de um grupo são diferentes dos PRs dos outros grupos.

| Grupo | Link para os PRs do grupo |
|---|---|
| Grupo 1 | [PRs com a etiqueta grupo-1](https://github.com/eacj-art/encontro-06/pulls?q=is%3Apr+label%3Agrupo-1) |
| Grupo 2 | [PRs com a etiqueta grupo-2](https://github.com/eacj-art/encontro-06/pulls?q=is%3Apr+label%3Agrupo-2) |
| Grupo 3 | [PRs com a etiqueta grupo-3](https://github.com/eacj-art/encontro-06/pulls?q=is%3Apr+label%3Agrupo-3) |
| Grupo 4 | [PRs com a etiqueta grupo-4](https://github.com/eacj-art/encontro-06/pulls?q=is%3Apr+label%3Agrupo-4) |
| Grupo 5 | [PRs com a etiqueta grupo-5](https://github.com/eacj-art/encontro-06/pulls?q=is%3Apr+label%3Agrupo-5) |
| Grupo 6 | [PRs com a etiqueta grupo-6](https://github.com/eacj-art/encontro-06/pulls?q=is%3Apr+label%3Agrupo-6) |

> **Atenção:** revisem só os PRs do seu grupo. Não abram os PRs dos outros grupos.

Os títulos começam com o número do grupo, por exemplo `[Grupo 3]`. As branches seguem o padrão `g3-pr1`, `g3-pr2` e `g3-pr3`.

## Como revisar no GitHub

1. Abra o PR e leia a descrição, na aba **Conversation**.
2. Abra a aba **Files changed** para ver o que mudou. Linhas em verde entraram; linhas em vermelho saíram.
3. Para comentar uma linha, passe o mouse sobre ela e clique no **+**.
4. No fim, clique em **Review changes**, escreva o resumo da revisão e escolha:
   - **Comment**: só comentar;
   - **Approve**: aprovar;
   - **Request changes**: pedir mudança.

Para o resumo da revisão, use o modelo do `guia-revisao-prs.md`.

## Como testar a loja de um PR

O GitHub não roda a loja. Para testar, baixe a branch e abra a loja no navegador:

1. Na página do PR, clique no nome da branch, por exemplo `g3-pr1`.
2. Clique em **Code** e depois em **Download ZIP**.
3. Descompacte e abra `loja/vitrine-loja.html` com dois cliques.

Para comparar, baixe também a branch `main` da mesma forma. A `main` é a loja sem nenhum PR.

> **Atenção:** a `main` já tem defeitos. Se algo errado acontece na loja do PR **e** na `main`, o problema não veio do PR.

**Opcional:** quem tem Node.js 18 ou mais novo pode rodar `node --test` na pasta da branch, quando o PR tiver testes.

## Antes de abrir o PR 2

Antes de abrir o PR 2 do seu grupo, leiam só a situação e a regra abaixo. Respondam, sem código: como vocês resolveriam? O que vocês perguntariam ao PO? Três minutos.

| Grupo | Situação | Regra da US-01 |
|---|---|---|
| Grupo 1 | O cupom MINIMO50 é aceito em qualquer pedido (BUG-109). | R5 |
| Grupo 2 | O cliente aplica um cupom com o carrinho vazio. | R1 a R6 |
| Grupo 3 | O cliente digita o cupom em minúsculas ou com um espaço no meio. | R1 |
| Grupo 4 | O cliente digita um código com menos de 6 caracteres, ou um código que não existe. | R1 |
| Grupo 5 | O cliente troca a entrega depois de aplicar o cupom. | R3 e R6 |
| Grupo 6 | O cliente aplica o cupom antes de escolher a entrega. | R1 a R6 |

Depois, abram o PR 2 e comparem o que vocês decidiram com o que a IA fez.

## Quando terminar o laboratório 1

O porta-voz posta os minutos de revisão no chat do Zoom, neste formato:

`G3 · PR 1: 6 · PR 2: 12 · PR 3: 20`

## Laboratório 2

Use os modelos desta pasta:

- `guardrails-minimos.md`: os guardrails das 2 atividades de maior risco da ficha do encontro 5. **12 min.**
- `proposta-de-experimento.md`: uma proposta de experimento para uma oportunidade do mapa de calor. **13 min.**

No fim, o porta-voz posta a hipótese do experimento no chat.

**Tragam do encontro 5:** a ficha do diagnóstico do grupo e o resumo do mapa de calor.

## Arquivos desta pasta

| Arquivo | Para que serve |
|---|---|
| `guia-revisao-prs.md` | A US-01, os cupons, o checklist e o modelo de resumo da revisão. |
| `loja/vitrine-loja.html` | A loja Vitrine 2.4.0, sem nenhum PR. |
| `guardrails-minimos.md` | O modelo do laboratório 2A, com um exemplo preenchido. |
| `proposta-de-experimento.md` | O modelo do laboratório 2B, com um exemplo preenchido. |

## Sobre os dados

A Vitrine é fictícia. A loja, o time, os números e os PRs foram criados para o curso.

> **Atenção:** não coloquem dados reais de cliente nos comentários, nas revisões nem nos modelos.
