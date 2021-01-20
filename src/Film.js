import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/film.css";
import { useHistory } from "react-router-dom";
export default function Film(props) {
  const [film, setFilm] = useState("");
  let history = useHistory();
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-details",
      params: { tconst: props.movie },
      headers: {
        "x-rapidapi-key": "ec4e580d1emsh50b7c6e7c0f6badp1f8721jsn5cf900843a11",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setFilm(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
      
  }, [props.movie]);

  const control = () => {

    return (
      <div className="film">
        <h2>{film.title}</h2>
        <img src={film.image.url} alt={film.title} />
      </div>
    );
  };

  const loading = () => {

      setTimeout(function () {
      history.push("/generatefilm");
    }, 7000);

    return <div id="loader" />;
  };

  return <div>{film !=="" ? control() : loading()}</div>;
}
