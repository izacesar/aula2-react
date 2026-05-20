import "./Botao.css";

const Botao= ({ texto, onClick, classe }) => {
    return (
        <botao className={classe} onClick={onClick}>
            {texto}
        </botao>
    );
};

export default Botao;