import logo from './logo.svg';
import galicia from './galicia.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={galicia}  />
        <p>
          Esta es una aplicación realizada para examen de selección de Banco Galicia
        </p>
      </header>
    </div>
  );
}

export default App;
