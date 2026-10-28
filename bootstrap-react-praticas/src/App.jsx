import { useState } from "react";
import Nav from "react-bootstrap/Nav";

import Galeria from "./exercicios/Exercicio1Galeria.jsx";
import NavbarCards from "./exercicios/Exercicio2NavbarCards.jsx";
import FormularioValidado from "./exercicios/Exercicio3Formulario.jsx";
import TabelaFiltro from "./exercicios/Exercicio4TabelaFiltro.jsx";
import Desafio from "./desafio/Desafio.jsx";

const PAGINAS = [
  { id: "ex1", rotulo: "Exercício 1 · Galeria", Componente: Galeria },
  { id: "ex2", rotulo: "Exercício 2 · Navbar + cards", Componente: NavbarCards },
  { id: "ex3", rotulo: "Exercício 3 · Formulário", Componente: FormularioValidado },
  { id: "ex4", rotulo: "Exercício 4 · Tabela", Componente: TabelaFiltro },
  { id: "desafio", rotulo: "Desafio final", Componente: Desafio },
];

export default function App() {
  const [ativa, setAtiva] = useState("desafio");
  const { Componente } = PAGINAS.find((p) => p.id === ativa);

  return (
    <>
      <header className="bg-white border-bottom shadow-sm">
        <div className="container py-2">
          <Nav
            variant="pills"
            activeKey={ativa}
            onSelect={(chave) => setAtiva(chave)}
            className="flex-wrap gap-1"
          >
            {PAGINAS.map((p) => (
              <Nav.Item key={p.id}>
                <Nav.Link eventKey={p.id}>{p.rotulo}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </header>

      <main>
        <Componente />
      </main>
    </>
  );
}
