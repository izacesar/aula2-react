import "./MensagemSecreta.css"

const MensagemSecreta = ({mensagem}) => {
  return (
     <>
     <h2 className="mensagem">{mensagem ? "Mensagem Super Secreta" : "" } </h2>
     </>
  )
};

export default MensagemSecreta;