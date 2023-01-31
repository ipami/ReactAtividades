import axios from "axios";


function GetAxios(){

    axios
    .get('https://servidordenotas-kn35.onrender.com/notas')
    .then((response) => {console.log(response.data[0].titulo)})
    .catch((error) => {console.error(error)});

    return(
        <div>Get Axios</div>
    )
}

export default GetAxios;