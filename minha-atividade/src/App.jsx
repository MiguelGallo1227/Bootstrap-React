import { useState } from 'react';

import FormLivro from './components/FormLivro';
import Acervo from './components/Acervo';

import FormManutencao from './components/FormManutencao';
import TabelaManutencoes from './components/TabelaManutencoes';

function App() {
  const [solucao, setSolucao] = useState(null);

  const [abaBiblioteca, setAbaBiblioteca] = useState('cadastro');
  const [livros, setLivros] = useState([]);

  const [abaManutencao, setAbaManutencao] = useState('registro');
  const [manutencoes, setManutencoes] = useState([]);

  function cadastrarLivro(livro) {
    setLivros([...livros, livro]);
    setAbaBiblioteca('acervo');
  }

  function cadastrarManutencao(manutencao) {
    setManutencoes([...manutencoes, manutencao]);
    setAbaManutencao('historico');
  }

  if (solucao === null) {
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Selecione a solução</h1>

        <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => setSolucao(1)}
          >
            Solução 1
          </button>

          <button
            className="btn btn-primary"
            onClick={() => setSolucao(2)}
          >
            Solução 2
          </button>
        </div>
      </div>
    );
  }

  if (solucao === 1) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <span className="navbar-brand">
              Solução 1 - Biblioteca
            </span>

            <div className="navbar-nav">
              <button
                className="nav-link"
                onClick={() => setSolucao(null)}
              >
                Voltar
              </button>

              <button
                className={
                  abaBiblioteca === 'cadastro'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                onClick={() => setAbaBiblioteca('cadastro')}
              >
                Cadastro
              </button>

              <button
                className={
                  abaBiblioteca === 'acervo'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                onClick={() => setAbaBiblioteca('acervo')}
              >
                Acervo
              </button>
            </div>
          </div>
        </nav>

        <main className="container mt-4">
          {abaBiblioteca === 'cadastro' && (
            <FormLivro cadastrarLivro={cadastrarLivro} />
          )}

          {abaBiblioteca === 'acervo' && (
            <Acervo livros={livros} />
          )}
        </main>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">
            Solução 2 - Manutenção
          </span>

          <div className="navbar-nav">
            <button
              className="nav-link"
              onClick={() => setSolucao(null)}
            >
              Voltar
            </button>

            <button
              className={
                abaManutencao === 'registro'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={() => setAbaManutencao('registro')}
            >
              Registro
            </button>

            <button
              className={
                abaManutencao === 'historico'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={() => setAbaManutencao('historico')}
            >
              Histórico
            </button>
          </div>
        </div>
      </nav>

      <main className="container mt-4">
        {abaManutencao === 'registro' && (
          <FormManutencao
            cadastrarManutencao={cadastrarManutencao}
          />
        )}

        {abaManutencao === 'historico' && (
          <TabelaManutencoes
            manutencoes={manutencoes}
          />
        )}
      </main>
    </div>
  );
}

export default App;