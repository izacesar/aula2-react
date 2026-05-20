import "./App.css";
import BoasVindas from "./componentes/BoasVindas/BoasVindas";
import CartaoProduto from "./componentes/CartaoProduto/CartaoProduto";
import MensagemSecreta from "./componentes/MensagemSecreta/MensagemSecreta";

const App = () => {
  return (
     <fragment>
       <BoasVindas nome = "Izadora"/>

       <MensagemSecreta mensagem = {true}/>
       <MensagemSecreta/>


      <div className="container">
            <CartaoProduto
            nome = "Pizza"
            descricao = "Pizza de Calabresa com borda recheada"
            preco = "R$ 40,00"
            imagem = "Img-pizza.png"
            />

            <CartaoProduto
            nome = "Hamburguer"
            descricao = "Hamburguer artesanal com queijo"
            preco = "R$ 30,00"
             imagem = "Img-burguer.png"
            />

            <CartaoProduto
            nome = "Milk Shake"
            descricao = "Milk Shake de chocolate"
            preco = "R$ 15,00"
            imagem = "Img-shake.png"
            />
      </div>
     </fragment>
  )
};

export default App;