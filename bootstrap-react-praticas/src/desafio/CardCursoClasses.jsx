// VERSÃO A · Bootstrap CSS puro: o conhecimento das classes mora no nosso JSX.

export default function CardCursoClasses({ curso, onInscrever }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{curso.nome}</h5>
        <p className="card-text text-body-secondary">{curso.descricao}</p>

        <p className="card-text d-flex align-items-center gap-2">
          <span className="badge text-bg-secondary">{curso.nivel}</span>
          <span>
            <i className="bi bi-clock" aria-hidden="true"></i> {curso.carga} h
          </span>
        </p>

        <button
          type="button"
          className="btn btn-primary mt-auto"
          onClick={() => onInscrever(curso)}
        >
          Inscrever-se
        </button>
      </div>
    </div>
  );
}
