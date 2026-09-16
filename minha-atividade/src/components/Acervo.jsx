function Acervo({ livros }) {
  return (
    <div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Acervo da Biblioteca</h2>

        <span className="badge text-bg-primary">
          {livros.length} livro(s)
        </span>
      </div>

      {livros.length > 0 ? (

        <div className="table-responsive">

          <table className="table table-striped align-middle">

            <thead className="table-dark">
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>Ano</th>
              </tr>
            </thead>

            <tbody>

              {livros.map((livro, index) => (
                <tr key={index}>
                  <td>{livro.titulo}</td>
                  <td>{livro.autor}</td>
                  <td>{livro.categoria}</td>
                  <td>{livro.ano}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      ) : (

        <div className="alert alert-info">
          Nenhum livro cadastrado no acervo.
        </div>

      )}

    </div>
  );
}

export default Acervo;