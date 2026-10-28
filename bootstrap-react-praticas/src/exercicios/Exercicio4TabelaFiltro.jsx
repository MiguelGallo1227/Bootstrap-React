// EXERCÍCIO 4 · Tabela com filtro
// 8 alunos, 4 colunas, busca por nome (filter sobre o array original),
// badge vermelho para nota abaixo de 6 e mensagem quando nada é encontrado.
import { useState } from "react";

const ALUNOS = [
  { id: 1, nome: "Ana Beatriz Souza", curso: "ADS", turma: "A", nota: 9.2 },
  { id: 2, nome: "Bruno Henrique Lima", curso: "ADS", turma: "A", nota: 5.5 },
  { id: 3, nome: "Carla Mendes", curso: "MEI", turma: "B", nota: 7.8 },
  { id: 4, nome: "Diego Ferreira", curso: "ADS", turma: "B", nota: 4.9 },
  { id: 5, nome: "Eduarda Martins", curso: "Automação", turma: "A", nota: 8.4 },
  { id: 6, nome: "Felipe Andrade", curso: "MEI", turma: "A", nota: 6.0 },
  { id: 7, nome: "Gabriela Rocha", curso: "ADS", turma: "B", nota: 5.9 },
  { id: 8, nome: "Heitor Nogueira", curso: "Automação", turma: "B", nota: 10 },
];

// ignora maiúsculas/minúsculas e acentos na busca
const normalizar = (texto) =>
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const formatarNota = (n) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export default function TabelaFiltro() {
  const [busca, setBusca] = useState("");

  // o array original nunca é alterado: o filter gera uma lista nova a cada render
  const filtrados = ALUNOS.filter((a) =>
    normalizar(a.nome).includes(normalizar(busca.trim()))
  );

  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">Exercício 4 · Tabela com filtro</h1>

      <div className="row mb-3">
        <div className="col-12 col-md-6">
          <label htmlFor="busca" className="form-label">Buscar aluno por nome</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-search" aria-hidden="true"></i>
            </span>
            <input
              id="busca"
              type="search"
              className="form-control"
              placeholder="Digite um nome…"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <div className="form-text">
            {filtrados.length} de {ALUNOS.length} alunos
          </div>
        </div>
      </div>

      {/* wrapper = rolagem horizontal no celular */}
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>Aluno</th>
              <th>Curso</th>
              <th>Turma</th>
              <th className="text-end">Nota</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center text-body-secondary py-4">
                  Nenhum aluno encontrado.
                </td>
              </tr>
            ) : (
              filtrados.map((a) => (
                <tr key={a.id}>
                  <td>{a.nome}</td>
                  <td>{a.curso}</td>
                  <td>{a.turma}</td>
                  <td className="text-end">
                    {a.nota < 6 ? (
                      <span className="badge text-bg-danger">{formatarNota(a.nota)}</span>
                    ) : (
                      formatarNota(a.nota)
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
