import axios from "axios";
import { useState } from "react";
import Tarefa from "./Tarefa";
function GetAxios() {
  const [tarefas, setTarefas]=useState('')
    axios
    .get('https://servidordenotas-kn35.onrender.com/notas')
    .then((response)=>{
      console.log(response.data[0].titulo)
      setTarefas(response.data[0].titulo)
    })
    .catch((error)=>{console.error(error)})
  return (
    <div>
      <Tarefa titulo={tarefas}/>
    </div>
  )
}
export default GetAxios