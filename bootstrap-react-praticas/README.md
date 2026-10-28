# Práticas · Bootstrap no React

**Aluno:** Miguel Andrade Gallo · ADS
**Tecnologias:** React 18 · Vite · Bootstrap 5 · React-Bootstrap · Bootstrap Icons

Projeto com os quatro exercícios e o desafio final da aula *Bootstrap no React*,
reunidos em uma única aplicação. O menu no topo alterna entre as práticas.

## Como executar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/
```

## Estrutura

```
src/
├─ main.jsx                         # importa o CSS do Bootstrap UMA vez
├─ cores.css                        # único CSS próprio: só variáveis de cor
├─ App.jsx                          # menu que alterna entre as práticas
├─ exercicios/
│  ├─ Exercicio1Galeria.jsx         # Galeria responsiva
│  ├─ Exercicio2NavbarCards.jsx     # Navbar escura + 4 cards com map
│  ├─ Exercicio3Formulario.jsx      # Formulário validado
│  └─ Exercicio4TabelaFiltro.jsx    # Tabela com filtro e badge
└─ desafio/
   ├─ Desafio.jsx                   # página única: navbar + catálogo + tabela + form
   ├─ CatalogoCursos.jsx            # grid de cards (alterna as duas versões do card)
   ├─ CardCursoClasses.jsx          # card escrito com classes do Bootstrap
   ├─ CardCursoRB.jsx               # o mesmo card escrito com React-Bootstrap
   ├─ TabelaInscritos.jsx           # tabela responsiva de inscritos
   ├─ FormInscricao.jsx             # formulário controlado com validação
   └─ cursos.js                     # dados dos cursos
```

## Checklist dos exercícios

| Exercício | Critérios atendidos |
|---|---|
| 1 · Galeria | 6 blocos; 1/2/3 por linha (`col-12 col-md-6 col-lg-4`); hierarquia container → row → col; espaçamento com `g-4`; sem CSS próprio e sem estilo inline |
| 2 · Navbar + cards | Navbar escura com marca e 3 links, colapsa no celular (`expand="lg"`); 4 cards via `map` com `key`; `h-100` para igualar a altura; botão em cada card |
| 3 · Formulário | Nome ≥ 3 letras e e-mail com `@`; select de curso; campos controlados; `is-invalid` + `invalid-feedback`; `htmlFor`; alerta de sucesso e campos limpos ao enviar |
| 4 · Tabela | 8 alunos, 4 colunas; busca com `filter` sobre o array original; `table-responsive`; badge vermelho para nota < 6; mensagem quando nenhum aluno é encontrado |

## Checklist do desafio final

- **Requisito 1** — Interface toda responsiva com o grid; o único CSS próprio é `src/cores.css`, que só define variáveis de cor.
- **Requisito 2** — O componente **card de curso** existe nas duas versões: `CardCursoClasses.jsx` (classes) e `CardCursoRB.jsx` (React-Bootstrap). O botão "Card escrito com" no catálogo alterna entre elas, e o HTML gerado e a aparência são os mesmos.
- **Requisito 3** — Veja a seção abaixo.

## Qual abordagem eu escolheria para o projeto inteiro: React-Bootstrap

Eu escolheria o **React-Bootstrap** (Caminho B) para o projeto inteiro, mantendo
`className` apenas para grid e utilitários (`row`, `col-*`, `g-4`, `py-5`, `d-flex`...).

1. **Sem conflito com o React.** O JS nativo do Bootstrap manipula o DOM por baixo do
   Virtual DOM e deixa modais e dropdowns sem resposta após um re-render. O React-Bootstrap
   reimplementa esse comportamento com estado do React, então o problema deixa de existir.
2. **Componentes interativos prontos.** O projeto tem navbar colapsável, botões de alternância
   e pode ganhar modal ou dropdown. Com o `Navbar.Toggle`, por exemplo, o menu abre e fecha
   sem uma linha de lógica nossa.
3. **Acessibilidade e teclado** já resolvidos pela biblioteca (`aria-*`, foco, navegação).
4. **JSX mais limpo.** `<Button variant="primary" size="lg">` esconde as classes dentro da
   biblioteca, e o código fica mais fácil de ler e de manter em equipe.
5. **Custo baixo.** O CSS do Bootstrap continua sendo importado uma única vez, e a importação
   por arquivo (`react-bootstrap/Card`) mantém o bundle enxuto.

O Caminho A (classes puras) continua sendo uma boa opção para converter um layout HTML
existente ou quando o time já domina as classes. Aqui, como a interface tem interação, o
React-Bootstrap compensa. Grid e utilitários seguem como classes nos dois caminhos, porque o
React-Bootstrap não os substitui.

## Boas práticas aplicadas

- CSS do Bootstrap importado uma única vez, em `main.jsx`.
- `className` (nunca `class`) e `htmlFor` (nunca `for`) no JSX.
- Nenhum atributo `data-bs-*`: toda interação é estado do React.
- Utilitários em vez de estilos inline; nenhum `!important`.
- Ícones decorativos com `aria-hidden` e botões só de ícone com `aria-label`.
- Pensado para 375px de largura (mobile first).
