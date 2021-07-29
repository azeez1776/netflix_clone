import { React, useState, useEffect } from 'react';
import './Banner.css';
import baseUrl from '../requests/api';
import request from '../requests/request';


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}${request.fetchNetflixOg}`)
            .then(response => response.json())
            .then(data => setMovie(data.results[Math.floor(Math.random() * data.results.length)]))
    }, [])


    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__content">
                <h1 className="banner__title">{movie.title || movie.name || movie.original_name}</h1>
                <div className="banner__btn">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie.overview, 150)}
                </h1>

            </div>
            <div className="banner__fadeBottom" />

        </header>
    )
}

export default Banner
