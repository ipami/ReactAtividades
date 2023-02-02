import axios from "axios";
import { useState } from "react";
import Tarefa from "./Tarefa";
function GetAxios() {
  const [tarefas, setTarefas] = useState([])
  axios
    .get('https://servidordenotas-kn35.onrender.com/notas')
    .then((response) => {
      console.log(response.data[0].titulo)
      setTarefas(response.data)
    })
    .catch((error) => { console.error(error) })
  return (
    <div>

      {tarefas.map((element,key)=>(
      <Tarefa titulo={element.titulo} key={key} />
      ))}
      
    </div>
  )
}
export default GetAxios