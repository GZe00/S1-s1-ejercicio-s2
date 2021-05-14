
import './App.css';
import Perfil from "./Perfil";
import Intereses from "./Intereses";
import Aprender from "./Aprender";
import Expectativas from "./Expectativas";
import Hobbies from "./Hobbies";

// 1 SOLO CARD

import Card from "./Card";


function App() {
  return (
    <div className="App">
      <Perfil name="Moisés Fuentes" info="Colima, México, 23 años"/>
      <Intereses name="Intereses" info="Aprendizaje, Música, Mejora constante" />
      <Aprender name="Me gustaría aprender" info="Alemán, Manipular PLC, Tocar el violín"/>
      <Expectativas name="Expectativas" info="Poder seguir con el ritmo de la escuela, el servicio, trabajo y Academlo"/>
      <Hobbies name="Hobbies"  info="Escuchar músicam Escrbir, Diseñar cosas/dibujar"/>

    {/* --------------------------------------- 1 SOLO CARD REUTILIZABLE ---------------------- */}

    <Card name="Moisés Fuentes" info="Colima, México, 23 años" _class="Perfil"/>
    <Card name="Intereses" info="Aprendizaje, Música, Mejora constante" _class="Intereses"/>
    <Card name="Me gustaría aprender" info="Alemán, Manipular PLC, Tocar el violín" _class="Aprender"/>
    <Card name="Expectativas" info="Poder seguir con el ritmo de la escuela, el servicio, trabajo y Academlo" _class="Expectativas"/>
    <Card name="Hobbies"  info="Escuchar músicam Escrbir, Diseñar cosas/dibujar" _class="Hobbies"/>
  </div>
  );
}

export default App;
