function TabelaManutencoes({ manutencoes }) {
  function formatarData(data) {
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  function obterBadge(tipo) {
    if (tipo === 'Preventiva') {
      return 'badge bg-success';
    }

    if (tipo === 'Corretiva') {
      return 'badge bg-danger';
    }

    return 'badge bg-primary';
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h2 className="h4 mb-0">Histórico de Manutenções</h2>
      </div>

      <div className="card-body">
        {manutencoes.length === 0 ? (
          <div className="alert alert-info mb-0">
            Nenhuma manutenção registrada.
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Equipamento</th>
                  <th>Setor</th>
                  <th>Tipo</th>
                  <th>Data</th>
                  <th>Responsável</th>
                  <th>Descrição</th>
                </tr>
              </thead>

              <tbody>
                {manutencoes.map((manutencao) => (
                  <tr key={manutencao.id}>
                    <td>{manutencao.equipamento}</td>
                    <td>{manutencao.setor}</td>
                    <td>
                      <span className={obterBadge(manutencao.tipo)}>
                        {manutencao.tipo}
                      </span>
                    </td>
                    <td>{formatarData(manutencao.data)}</td>
                    <td>{manutencao.responsavel}</td>
                    <td>{manutencao.descricao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabelaManutencoes;