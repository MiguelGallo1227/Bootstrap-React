// Formulário de inscrição: campos controlados, validação por estado,
// is-invalid + invalid-feedback e alerta de sucesso.
import { useState } from "react";
import { CURSOS } from "./cursos.js";

export default function FormInscricao({ curso, onCursoChange, onEnviar }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
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
    e.preventDefault();

    const novos = validar();
    setErros(novos);
    if (Object.keys(novos).length > 0) {
      setSucesso(false);
      return;
    }

    // o pai recebe os dados por callback
    onEnviar({ id: Date.now(), nome: nome.trim(), email: email.trim(), curso });

    setNome("");
    setEmail("");
    onCursoChange("");
    setSucesso(true);
  }

  return (
    <section id="inscricao" className="py-5">
      <h2 className="h4 mb-4">Formulário de inscrição</h2>

      {sucesso && (
        <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
          <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
          <span>Inscrição realizada com sucesso!</span>
        </div>
      )}

      <form className="row g-3" onSubmit={handleSubmit} noValidate>
        <div className="col-12 col-md-6">
          <label htmlFor="insc-nome" className="form-label">Nome</label>
          <input
            id="insc-nome"
            className={`form-control ${erros.nome ? "is-invalid" : ""}`}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <div className="invalid-feedback">{erros.nome}</div>
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="insc-email" className="form-label">E-mail</label>
          <input
            id="insc-email"
            type="email"
            placeholder="seu@email.com"
            className={`form-control ${erros.email ? "is-invalid" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="invalid-feedback">{erros.email}</div>
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="insc-curso" className="form-label">Curso</label>
          <select
            id="insc-curso"
            className={`form-select ${erros.curso ? "is-invalid" : ""}`}
            value={curso}
            onChange={(e) => onCursoChange(e.target.value)}
          >
            <option value="">Selecione…</option>
            {CURSOS.map((c) => (
              <option key={c.id} value={c.nome}>{c.nome}</option>
            ))}
          </select>
          <div className="invalid-feedback">{erros.curso}</div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary px-4">Inscrever</button>
        </div>
      </form>
    </section>
  );
}
