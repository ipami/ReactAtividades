function Button({cor}){
    const cores={
        "Verde":"green",
        "Preto":"black",
        "Rosa":"pink",
        "Roxo":"purple",
        "Laranja":"orange",
        "Cinza":"gray",
        "Azul":"blue",
        "Amarelo":"yellow",
        "Vermelho":"red",
        "Branco":"white",

    }



    return(
        <button onClick={(e)=>{document.querySelector('body').style.backgroundColor=cores[cor]
        e.preventDefault()}}>
            {cores[cor]}</button>
    )
}
export default Button