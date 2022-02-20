import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"
import "./style.css"

export default function Favorites(){
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const listMovies = localStorage.getItem("movies")
        setMovies(JSON.parse(listMovies) || [])
    },[])

    function handleDelete(movieId){
        let movieFilter = movies.filter((x) => {
            return (x.id !== movieId)
        })

        setMovies(movieFilter)
        localStorage.setItem("movies", JSON.stringify(movieFilter))

        toast.success("Filme excluído com sucesso!")
    }

    return(
        <div id="favorite-movies">
            <h1>Filmes favoritados: </h1>

            { movies.length === 0 && <span>Você não possui nenhum filme favoritado :(</span> }

            <ul>
                {
                    movies.map((movie) => {
                        return(
                            <li key={ movie.id }>
                                <span>{ movie.nome }</span>
                                <div>
                                    <Link to={ `/filme/${ movie.id }` }>Ver detalhes</Link>
                                    <button onClick={ () => handleDelete(movie.id) }>Excluir</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}