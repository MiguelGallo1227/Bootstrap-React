// Catálogo em cards (grid responsivo) com o MESMO card escrito nas duas versões.
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { CURSOS } from "./cursos.js";
import CardCursoClasses from "./CardCursoClasses.jsx";
import CardCursoRB from "./CardCursoRB.jsx";

const VERSOES = [
  { id: "classes", rotulo: "Classes", Card: CardCursoClasses },
  { id: "rb", rotulo: "React-Bootstrap", Card: CardCursoRB },
];

export default function CatalogoCursos({ onInscrever }) {
  const [versao, setVersao] = useState("classes");
  const { Card } = VERSOES.find((v) => v.id === versao);

  return (
    <section id="catalogo" className="py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <h2 className="h4 mb-0">Catálogo de cursos</h2>

        <div className="d-flex align-items-center gap-2">
          <span className="text-body-secondary small">Card escrito com:</span>
          <ButtonGroup size="sm" aria-label="Versão do card">
            {VERSOES.map((v) => (
              <Button
                key={v.id}
                variant={versao === v.id ? "dark" : "outline-dark"}
                onClick={() => setVersao(v.id)}
              >
                {v.rotulo}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>

      <div className="row g-4">
        {CURSOS.map((curso) => (
          <div className="col-12 col-md-6 col-lg-4" key={curso.id}>
            <Card curso={curso} onInscrever={onInscrever} />
          </div>
        ))}
      </div>
    </section>
  );
}
