// EXERCÍCIO 1 · Galeria responsiva
// Celular: 1 por linha (col-12) · Tablet: 2 (col-md-6) · Desktop: 3 (col-lg-4)
// Somente classes do Bootstrap: nenhum CSS próprio, nenhum estilo inline.

const BLOCOS = [
  { id: 1, nome: "Bloco 1", cor: "bg-primary text-white" },
  { id: 2, nome: "Bloco 2", cor: "bg-success text-white" },
  { id: 3, nome: "Bloco 3", cor: "bg-danger text-white" },
  { id: 4, nome: "Bloco 4", cor: "bg-warning text-dark" },
  { id: 5, nome: "Bloco 5", cor: "bg-info text-dark" },
  { id: 6, nome: "Bloco 6", cor: "bg-dark text-white" },
];

export default function Galeria() {
  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">Exercício 1 · Galeria responsiva</h1>

      {/* container → row → col; o espaçamento entre blocos vem de g-4 */}
      <div className="row g-4">
        {BLOCOS.map((b) => (
          <div className="col-12 col-md-6 col-lg-4" key={b.id}>
            <div className={`${b.cor} rounded-3 shadow-sm p-5 text-center fs-4 fw-semibold`}>
              {b.nome}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
