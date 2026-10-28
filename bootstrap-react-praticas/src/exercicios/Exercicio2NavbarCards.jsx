// EXERCÍCIO 2 · Navbar + cards
// Navbar escura (React-Bootstrap) que colapsa abaixo de 992px + 4 cards via map.
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const LINKS = [
  { id: 1, rotulo: "Início", href: "#inicio" },
  { id: 2, rotulo: "Cursos", href: "#cursos" },
  { id: 3, rotulo: "Contato", href: "#contato" },
];

const CARDS = [
  { id: 1, titulo: "Lógica de Programação", texto: "Algoritmos, variáveis, condições e laços para quem está começando." },
  { id: 2, titulo: "HTML e CSS", texto: "Estrutura e estilo de páginas web responsivas desde o primeiro dia." },
  { id: 3, titulo: "JavaScript", texto: "Funções, arrays, objetos e manipulação de dados no navegador." },
  { id: 4, titulo: "React", texto: "Componentes, props, estado e efeitos para construir interfaces modernas." },
];

export default function NavbarCards() {
  const [escolhido, setEscolhido] = useState(null);

  return (
    <>
      {/* expand="lg": o menu colapsa abaixo de 992px; o Toggle abre/fecha sozinho */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#inicio">
            <i className="bi bi-mortarboard-fill me-2" aria-hidden="true"></i>
            Escola
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-principal" />
          <Navbar.Collapse id="menu-principal">
            <Nav className="ms-auto">
              {LINKS.map((l) => (
                <Nav.Link href={l.href} key={l.id}>
                  {l.rotulo}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container py-5" id="cursos">
        <h1 className="h3 mb-4">Exercício 2 · Navbar + cards</h1>

        {escolhido && (
          <div className="alert alert-info" role="alert">
            Você escolheu: <strong>{escolhido}</strong>
          </div>
        )}

        <div className="row g-4">
          {CARDS.map((c) => (
            // key no elemento mais externo do map
            <div className="col-12 col-md-6 col-lg-3" key={c.id}>
              {/* h-100 iguala a altura dos cards da linha */}
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{c.titulo}</h5>
                  <p className="card-text text-body-secondary">{c.texto}</p>
                  <button
                    type="button"
                    className="btn btn-primary mt-auto"
                    onClick={() => setEscolhido(c.titulo)}
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
