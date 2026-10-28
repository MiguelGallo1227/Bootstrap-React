// Tabela responsiva de inscritos, com remoção e mensagem de lista vazia.

export default function TabelaInscritos({ inscritos, onRemover }) {
  return (
    <section id="inscritos" className="py-5">
      <h2 className="h4 mb-4">
        Inscritos <span className="badge text-bg-secondary">{inscritos.length}</span>
      </h2>

      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Curso</th>
              <th className="text-end">Ações</th>
            </tr>
          </thead>
          <tbody>
            {inscritos.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center text-body-secondary py-4">
                  Nenhum inscrito ainda. Use o formulário abaixo.
                </td>
              </tr>
            ) : (
              inscritos.map((i) => (
                <tr key={i.id}>
                  <td>{i.nome}</td>
                  <td>{i.email}</td>
                  <td>{i.curso}</td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      aria-label={`Remover ${i.nome}`}
                      onClick={() => onRemover(i.id)}
                    >
                      <i className="bi bi-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
