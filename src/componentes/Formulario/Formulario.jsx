import "./Formulario.css";
import { useState } from "react";

function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    return (
        <div className="formulario-container">
            <h2>Formulário de Contato</h2>

            <label>Nome:</label>
            <input
                type="text"
                id="nome"
                placeholder="Digite o seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <label>Email:</label>
            <input
                type="email"
                id="email"
                placeholder="Digite o seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Telefone:</label>
            <input
                type="telefone"
                id="telefone"
                placeholder="Digite seu telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
            />
            <button onClick={() => {
                alert(`Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`);
            }}>
                Enviar
            </button>
        </div>
    )
}

export default Formulario;