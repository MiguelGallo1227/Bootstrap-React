// EXERCÍCIO 3 · Formulário validado
// Nome (mín. 3 letras), e-mail (precisa conter @) e select de curso.
// Válido → alerta de sucesso + campos limpos. Inválido → is-invalid + invalid-feedback.
import { useState } from "react";

const CURSOS = ["ADS", "MEI", "Automação"];

export default function FormularioValidado() {
  // todos os campos controlados por estado
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");

  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState(false);

  function validar() {
    const novos = {};
    if (nome.trim().length < 3) novos.nome = "O nome precisa ter no mínimo 3 letras.";
    if (!email.includes("@")) novos.email = "O e-mail precisa conter @.";
    if (!curso) novos.curso = "Escolha um curso.";
    return novos;
  }

  function handleSubmit(e) {
    e.preventDefault(); // não recarrega a página

    const novos = validar();
    setErros(novos);

    if (Object.keys(novos).length > 0) {
      setSucesso(false);
      return;
    }

    setSucesso(true);
    setNome("");
    setEmail("");
    setCurso("");
  }

  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">Exercício 3 · Formulário validado</h1>

      {sucesso && (
        <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
          <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
          <span>Matrícula enviada com sucesso!</span>
        </div>
      )}

      <form className="row g-3" onSubmit={handleSubmit} noValidate>
        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            id="nome"
            name="nome"
            className={`form-control ${erros.nome ? "is-invalid" : ""}`}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <div className="invalid-feedback">{erros.nome}</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            className={`form-control ${erros.email ? "is-invalid" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="invalid-feedback">{erros.email}</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="curso" className="form-label">Curso</label>
          <select
            id="curso"
            name="curso"
            className={`form-select ${erros.curso ? "is-invalid" : ""}`}
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          >
            <option value="">Selecione…</option>
            {CURSOS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="invalid-feedback">{erros.curso}</div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary px-4">Enviar</button>
        </div>
      </form>
    </div>
  );
}
