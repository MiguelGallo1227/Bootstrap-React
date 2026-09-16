import { useState } from 'react';
import FormLivro from './components/FormLivro';
import Acervo from './components/Acervo';

function App() {
  const [aba, setAba] = useState('cadastro');
  const [livros, setLivros] = useState([]);

  function cadastrarLivro(livro) {
    setLivros([...livros, livro]);
    setAba('acervo');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">
            Biblioteca
          </span>

          <div className="navbar-nav">
            <button
              className={
                aba === 'cadastro'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={() => setAba('cadastro')}
            >
              Cadastro
            </button>

            <button
              className={
                aba === 'acervo'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={() => setAba('acervo')}
            >
              Acervo
            </button>
          </div>
        </div>
      </nav>

      <main className="container mt-4">
        {aba === 'cadastro' && (
          <FormLivro cadastrarLivro={cadastrarLivro} />
        )}

        {aba === 'acervo' && (
          <Acervo livros={livros} />
        )}
      </main>
    </div>
  );
}

export default App;