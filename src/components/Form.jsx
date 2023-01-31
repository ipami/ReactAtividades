import Button from "./Button"

function Form(){
    return(
        <form>
            <label>Nome: 
            <input type="text"/>
            </label>
            <br/>
            <label>email:
            <input type="email"/>
            </label>
            <br/>
            <label>Mensagem:
            <textarea rows="5" cols="40"/>
            </label>
            <br/>
            <Button cor="Branco"/>
            <Button  cor="Preto"/>
            <Button  cor="Azul"/>
        </form>
    )
}
export default Form