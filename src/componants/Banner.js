import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTreanding);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      
      return request;
      
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.themoviedb.org/t/p/original/${movie?.backdrop_path}"
           )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contant">
        <h1 className='title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie?.overview}</h1>
      </div>
      <div className="fade"></div>
    </header>
  );
}

export default Banner;
