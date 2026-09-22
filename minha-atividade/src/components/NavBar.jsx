function NavBar({ aba, setAba }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">
          Sistema de Manutenções
        </span>

        <div className="navbar-nav">
          <button
            className={
              aba === 'registro'
                ? 'nav-link active'
                : 'nav-link'
            }
            onClick={() => setAba('registro')}
          >
            Registro
          </button>

          <button
            className={
              aba === 'historico'
                ? 'nav-link active'
                : 'nav-link'
            }
            onClick={() => setAba('historico')}
          >
            Histórico
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;