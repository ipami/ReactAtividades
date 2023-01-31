import axios from "axios";


function PostAxios() {



    const dado = {
        id: "",
        titulo: "Estudando Post Axios",
        status: true
    };


    function PostarNota(){

    axios
        .post('https://servidordenotas-kn35.onrender.com/notas', dado)
        .then((response) => { console.log(response) })
        .catch((error) => { console.error(error) });

    }
    return (
        <button onClick={() => PostarNota()}>Postar</button>
    )
}

export default PostAxios;