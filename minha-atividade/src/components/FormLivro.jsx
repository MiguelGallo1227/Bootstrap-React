import { useState } from 'react';

function FormLivro({ cadastrarLivro }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [ano, setAno] = useState('');

  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};
    const anoAtual = new Date().getFullYear();

    if (titulo.trim().length < 3) {
      novosErros.titulo =
        'O título deve ter no mínimo 3 caracteres.';
    }

    if (autor.trim().length < 3) {
      novosErros.autor =
        'O autor deve ter no mínimo 3 caracteres.';
    }

    if (categoria === '') {
      novosErros.categoria =
        'É obrigatório escolher uma categoria.';
    }

    if (
      ano === '' ||
      Number(ano) <= 1900 ||
      Number(ano) > anoAtual
    ) {
      novosErros.ano =
        'O ano deve ser maior que 1900 e não pode ser futuro.';
    }

    return novosErros;
  }

  function enviarFormulario(event) {
    event.preventDefault();

    const novosErros = validar();

    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      return;
    }

    const livro = {
      titulo: titulo.trim(),
      autor: autor.trim(),
      categoria: categoria,
      ano: Number(ano)
    };

    cadastrarLivro(livro);

    setTitulo('');
    setAutor('');
    setCategoria('');
    setAno('');
    setErros({});
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">

        <div className="card shadow-sm">

          <div className="card-header">
            <h2 className="mb-0">
              Cadastro de Livro
            </h2>
          </div>

          <div className="card-body">

            <form onSubmit={enviarFormulario}>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Título
                  </label>

                  <input
                    type="text"
                    className={
                      erros.titulo
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    value={titulo}
                    onChange={(event) =>
                      setTitulo(event.target.value)
                    }
                  />

                  {erros.titulo && (
                    <div className="invalid-feedback">
                      {erros.titulo}
                    </div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Autor
                  </label>

                  <input
                    type="text"
                    className={
                      erros.autor
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    value={autor}
                    onChange={(event) =>
                      setAutor(event.target.value)
                    }
                  />

                  {erros.autor && (
                    <div className="invalid-feedback">
                      {erros.autor}
                    </div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Categoria
                  </label>

                  <select
                    className={
                      erros.categoria
                        ? 'form-select is-invalid'
                        : 'form-select'
                    }
                    value={categoria}
                    onChange={(event) =>
                      setCategoria(event.target.value)
                    }
                  >
                    <option value="">
                      Selecione uma categoria
                    </option>

                    <option value="Romance">
                      Romance
                    </option>

                    <option value="Técnico">
                      Técnico
                    </option>

                    <option value="Infantil">
                      Infantil
                    </option>

                    <option value="Biografia">
                      Biografia
                    </option>
                  </select>

                  {erros.categoria && (
                    <div className="invalid-feedback">
                      {erros.categoria}
                    </div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Ano de publicação
                  </label>

                  <input
                    type="number"
                    className={
                      erros.ano
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    value={ano}
                    onChange={(event) =>
                      setAno(event.target.value)
                    }
                  />

                  {erros.ano && (
                    <div className="invalid-feedback">
                      {erros.ano}
                    </div>
                  )}
                </div>

              </div>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Cadastrar livro
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}

export default FormLivro;