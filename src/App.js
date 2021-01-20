
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GenerateFilm from "./GenerateFilm";
import { Route , useHistory } from "react-router-dom";
import Film from "./Film";

export default function App() {


  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState();
  const [movie, setMovie] = useState();
  const [error, setError] = useState();
  
  let history = useHistory();

  function getData() {
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies',
      params: {homeCountry: 'US', purchaseCountry: 'US', currentCountry: 'US'},
      headers: {
        'x-rapidapi-key': 'ec4e580d1emsh50b7c6e7c0f6badp1f8721jsn5cf900843a11',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setData(response.data)
      console.log(response.data)
    }).catch(function (error) {
      setError(error)
      console.error(error);
    });

    
  }

   function randMovie() {
    
    try{
      let number = Math.floor(Math.random() * 100); 
      let id= data[number].substring(7,16);
      setMovie(id)
     history.push("/film")
     }
     catch{
       if(error)
       alert(error)
       else
       alert("Wait a second")
     }
     
  }

    

  return (
    <div>
      <Route path="/generatefilm" render={(props) => <GenerateFilm {...props} randMovie={randMovie} />} />
      <Route path="/film" render={(props) => <Film {...props} movie={movie} /> } />
    </div>
  );
}
