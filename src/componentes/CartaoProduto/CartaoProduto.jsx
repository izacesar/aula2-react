import "./CartaoProduto.css"

const CartaoProduto = ({nome, descricao, preco, imagem}) =>{
    return(
        <div className="cartao">
            <img src={imagem} alt={descricao} className="imagem" />
            <h3 className="nome">{nome}</h3>
            <p className="descricao">{descricao}</p>
            <p className="preco">{preco}</p>
        </div>

    )
}

export default CartaoProduto
