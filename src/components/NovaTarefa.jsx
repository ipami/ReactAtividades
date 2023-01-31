import { useState } from "react";

function NovaTarefa() {

    const [titulo, setTitulo] = useState('Nenhum título digitado')

    return (
        <>
            <label htmlFor="titulo">Título:</label>
            <input type="text" id ="titulo" onChange={() =>{ 
                setTitulo(document.getElementById('titulo').value) 
                }} />
            <h3>{titulo}</h3>
        </>

    )

}

export default NovaTarefa;