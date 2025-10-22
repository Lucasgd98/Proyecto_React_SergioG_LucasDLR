import './App.css';
import  MiLista from '../lista/MiLista';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';


function App() {
  return (
    <>
      <Header/>
        <h1>Mi Aplicacion </h1>
        <div className="Parrafo">
          <p>Este es mi contenido de la app:</p>
          <MiLista/>
        </div>
        <Footer/>
    </>
  );
}

export default App;
