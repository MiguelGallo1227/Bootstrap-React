import { useState } from 'react';

function FormManutencao({ cadastrarManutencao }) {
  const [equipamento, setEquipamento] = useState('');
  const [setor, setSetor] = useState('');
  const [tipo, setTipo] = useState('');
  const [data, setData] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};

    if (!equipamento.trim()) {
      novosErros.equipamento = 'Informe o equipamento.';
    }

    if (!setor.trim()) {
      novosErros.setor = 'Informe o setor.';
    }

    if (!tipo) {
      novosErros.tipo = 'Selecione o tipo de manutenção.';
    }

    if (!data) {
      novosErros.data = 'Informe a data da manutenção.';
    }

    if (!responsavel.trim()) {
      novosErros.responsavel = 'Informe o responsável.';
    }

    if (!descricao.trim()) {
      novosErros.descricao = 'Informe a descrição da manutenção.';
    }

    return novosErros;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const novosErros = validar();
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      return;
    }

    const manutencao = {
      id: Date.now(),
      equipamento,
      setor,
      tipo,
      data,
      responsavel,
      descricao
    };

    cadastrarManutencao(manutencao);

    setEquipamento('');
    setSetor('');
    setTipo('');
    setData('');
    setResponsavel('');
    setDescricao('');
    setErros({});
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h2 className="h4 mb-0">Registro de Manutenção</h2>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit} noValidate>
          <div className="row g-3">

            <div className="col-md-6">
              <label htmlFor="equipamento" className="form-label">
                Equipamento
              </label>

              <input
                type="text"
                id="equipamento"
                className={`form-control ${
                  erros.equipamento ? 'is-invalid' : ''
                }`}
                value={equipamento}
                onChange={(event) => setEquipamento(event.target.value)}
                placeholder="Ex.: Computador Dell"
              />

              {erros.equipamento && (
                <div className="invalid-feedback">
                  {erros.equipamento}
                </div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="setor" className="form-label">
                Setor
              </label>

              <input
                type="text"
                id="setor"
                className={`form-control ${
                  erros.setor ? 'is-invalid' : ''
                }`}
                value={setor}
                onChange={(event) => setSetor(event.target.value)}
                placeholder="Ex.: Informática"
              />

              {erros.setor && (
                <div className="invalid-feedback">
                  {erros.setor}
                </div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="tipo" className="form-label">
                Tipo de manutenção
              </label>

              <select
                id="tipo"
                className={`form-select ${
                  erros.tipo ? 'is-invalid' : ''
                }`}
                value={tipo}
                onChange={(event) => setTipo(event.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="Preventiva">Preventiva</option>
                <option value="Corretiva">Corretiva</option>
                <option value="Preditiva">Preditiva</option>
              </select>

              {erros.tipo && (
                <div className="invalid-feedback">
                  {erros.tipo}
                </div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="data" className="form-label">
                Data da manutenção
              </label>

              <input
                type="date"
                id="data"
                className={`form-control ${
                  erros.data ? 'is-invalid' : ''
                }`}
                value={data}
                onChange={(event) => setData(event.target.value)}
              />

              {erros.data && (
                <div className="invalid-feedback">
                  {erros.data}
                </div>
              )}
            </div>

            <div className="col-12">
              <label htmlFor="responsavel" className="form-label">
                Responsável
              </label>

              <input
                type="text"
                id="responsavel"
                className={`form-control ${
                  erros.responsavel ? 'is-invalid' : ''
                }`}
                value={responsavel}
                onChange={(event) => setResponsavel(event.target.value)}
                placeholder="Nome do responsável"
              />

              {erros.responsavel && (
                <div className="invalid-feedback">
                  {erros.responsavel}
                </div>
              )}
            </div>

            <div className="col-12">
              <label htmlFor="descricao" className="form-label">
                Descrição
              </label>

              <textarea
                id="descricao"
                rows="4"
                className={`form-control ${
                  erros.descricao ? 'is-invalid' : ''
                }`}
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                placeholder="Descreva o serviço realizado"
              ></textarea>

              {erros.descricao && (
                <div className="invalid-feedback">
                  {erros.descricao}
                </div>
              )}
            </div>

            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary">
                Registrar manutenção
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default FormManutencao;