import './App.css';
import  MiLista from '../lista/MiLista';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header/>
        <h1>Hola Mundo </h1>
        <h2>Este es mi primer composable React</h2>
        <div className="Parrafo">
          <p>Bienvenido a mi aplicación, esto fue creado con JavaScript en React</p>
        </div>
        <MiLista titulo="Personas" nombre1="Sergio" nombre2="Felipe" nombre3="Adrián" nombre4="Ainara"/>
        <MiLista titulo="Persona2" nombre1="Sergio" nombre2="Felipe" nombre3="Adrián" nombre4="Ainara"/>
        <MiLista titulo="Persona3" nombre1="Sergio" nombre2="Felipe" nombre3="Adrián" nombre4="Ainara"/>
        <Footer/>
    </div>
  );
}

export default App;
