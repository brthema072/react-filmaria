import { useParams, useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import "./style.css"
import api from "../../services/api";

export default function Movie(){
    const { id } = useParams();
    const history = useHistory();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function movieLoad(){
            let response = await api.get(`r-api/?api=filmes/${ id }`)

            if(response.data.length === 0){
                history.replace('/');
                return;
            }

            setMovie(response.data)
            setLoading(false)
        }

        movieLoad();

        return () => {
            console.log("Componente desmontado")
        }

    }, [history, id])


    if(loading){
        return(
            <div className="movie-loading">
                <h1>Carregando filme</h1>
            </div>
        )
    }

    return(
        <div className="movie-info">
            <h1>{ movie.nome }</h1>
            <img src={ movie.foto } alt={ movie.nome } />

            <h3>Sinopse</h3>
            { movie.sinopse }

            <div>
                <button onClick={() => {  }}>Salvar</button>
                <button>
                    <a target="blank" href={ `https://youtube.com/results?search_query=${ movie.nome } Trailer` }>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}