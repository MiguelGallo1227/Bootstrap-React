// DESAFIO FINAL · Catálogo do curso
// Navbar + catálogo em cards + tabela de inscritos + formulário de inscrição,
// numa aplicação de página única, toda responsiva com o grid.
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import CatalogoCursos from "./CatalogoCursos.jsx";
import TabelaInscritos from "./TabelaInscritos.jsx";
import FormInscricao from "./FormInscricao.jsx";

const LINKS = [
  { id: 1, rotulo: "Catálogo", href: "#catalogo" },
  { id: 2, rotulo: "Inscritos", href: "#inscritos" },
  { id: 3, rotulo: "Inscrição", href: "#inscricao" },
];

export default function Desafio() {
  const [inscritos, setInscritos] = useState([]);
  const [cursoEscolhido, setCursoEscolhido] = useState("");

  // clicar em "Inscrever-se" no card pré-seleciona o curso e leva ao formulário
  function escolherCurso(curso) {
    setCursoEscolhido(curso.nome);
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  }

  function adicionar(novo) {
    setInscritos((lista) => [...lista, novo]);
  }

  function remover(id) {
    setInscritos((lista) => lista.filter((i) => i.id !== id));
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#catalogo">
            <i className="bi bi-journal-code me-2" aria-hidden="true"></i>
            Catálogo do Curso
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-desafio" />
          <Navbar.Collapse id="menu-desafio">
            <Nav className="ms-auto">
              {LINKS.map((l) => (
                <Nav.Link href={l.href} key={l.id}>{l.rotulo}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
        <CatalogoCursos onInscrever={escolherCurso} />
        <TabelaInscritos inscritos={inscritos} onRemover={remover} />
        <FormInscricao
          curso={cursoEscolhido}
          onCursoChange={setCursoEscolhido}
          onEnviar={adicionar}
        />
      </div>

      <footer className="bg-dark text-white-50 text-center py-3 mt-4 small">
        Desafio final · Bootstrap no React
      </footer>
    </>
  );
}
