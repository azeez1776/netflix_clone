import { React, useState, useEffect } from 'react';
import baseUrl from '../requests/api';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css';

function Row({ title, fetchUrl, isLarge }) {
    const url = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);
    const [trailer, setTrailer] = useState("");

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    useEffect(() => {

        fetch(`${baseUrl}${fetchUrl}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(err => console.log(err))
    }, [fetchUrl])

    const handleClick = (movie) => {
        if (trailer) {
            setTrailer("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const uarel = new URLSearchParams(new URL(url).search);
                    setTrailer(uarel.get("v"));
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <div className="Row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map(movie => (
                    <img onClick={handleClick(movie)} key={movie.id} className={`row_poster ${isLarge && "row_posterLarge"}`} src={`${url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                )
                )}
            </div>
            {trailer && <Youtube videoId={trailer} opts={opts} />}
        </div>
    )
}

export default Row
