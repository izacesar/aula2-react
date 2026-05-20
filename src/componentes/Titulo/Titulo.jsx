import "./Titulo.css";

const Titulo = () => {
    let nome = "Livia"
  return (
    <div className="container">
        <h1 className="titulo-principal">Aula 2 - Trabalhando com useState</h1>
        <h2 className="sub-titulo">
            Olá, eu sou {nome}, e hoje vamos aprender um pouco sobre o Hook useState.
        </h2>
        <p className="paragrafo">
            O useState é um Hook fundamental do React que permite criar variáveis 
            de estado em componetes funcionais.
        </p>
        <p className="paragrafo">
            Ele retorna um array com a variavel de estado (valor atual) e uma função para 
            atualiza-la, forçando o componente a renderizar novamente quando o valor muda.
        </p>
        <img 
            src="reactHook.jpg" 
            alt="imagem da logo do react" 
            className="imagem-titulo"
        />
    </div>
  );
};

export default Titulo;