import { React, useState, useEffect } from 'react';
import baseUrl from '../requests/api';
import './Row.css';

function Row({ title, fetchUrl }) {
    const url = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch(`${baseUrl}${fetchUrl}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(err => console.log(err))
    }, [fetchUrl])

    return (
        <div className="Row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map(movie => (
                    <img key={movie.id} className="row_poster" src={`${url}${movie.poster_path}`} alt={movie.name} />
                )
                )}
            </div>
        </div>
    )
}

export default Row
