import { useEffect, useState } from "react";
import api from "../../services/api"
import { Link } from "react-router-dom";
import "./style.css"

export default function Home(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function movieLoad(){
            const response = await api.get("r-api/?api=filmes")
            setMovies(response.data);
        }

        movieLoad();
    }, [])

    return (
        <div className="container">
            <div className="lista-filmes">
                {
                    movies.map((movie) => {
                        return(
                            <article key={ movie.id }>
                                <strong> { movie.nome } </strong>
                                <img src={ movie.foto } alt={ movie.nome } />
                                <Link to="/">Acessar</Link>
                            </article>
                        );
                    })
                }
            </div>
        </div>
    );
}