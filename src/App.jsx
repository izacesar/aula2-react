import "./App.css";
import Contador from "./componentes/Contador/Contador";
import Titulo from "./componentes/Titulo/Titulo";
import TituloProps from "./componentes/TituloProps/TituloProps";
import TituloUseState from "./componentes/TituloUseState/TituloUseState";

const App = () => {
  return (
     <fragment>
       <Titulo />
       <hr />
       <TituloProps 
          descricao = "FrontEnd"
          cor = "#0077b6"
       />
       <hr />
       <TituloProps
          cor = "#0077b6"
          qtd_alunos = {30}
          paragrafo = {true}
       />
       <hr />
       <TituloUseState cor = "#0c9cc8"/>
       <TituloUseState cor="#09abb1" />  
       <hr />
       <Contador/>  
     </fragment>
  )
};

export default App;