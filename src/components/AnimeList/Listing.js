import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './Listing.css';


const Listing = (type) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [animes, setAnimes] = useState(null);

  useEffect(async () => {
    const result = await axios.post('anime/seasonlist/', { year: thisYear(), season: seasonThisYear(), type: "TV" })
    // const data = await result.json();
    const item = result.data;
    setPosts(item);
    setLoading(false);
    console.log("Results: ", posts);

  }, [])




  function thisYear() {
    var dt = new Date();
    return dt.getFullYear();
  }

  function seasonThisYear() {
    const dt = new Date();
    const month = dt.getMonth() + 1;
    const dateofMonth = dt.getDate();
    if (month >= 3 && month < 6) {
      return "spring"
    } else if (month >= 6 && month < 9) {
      return "summer"
    } else if (month >= 9 && month < 12) {
      return "fall"
    } else {
      return "winter"
    }

  }

  function MovieCardList(props) {
    console.log("props: ", props);

    const movies = props.movies;
    console.log("movies: ", movies);
    const movieCards = movies.map((movie) =>


		<Link to={{
      pathname: '/viewDetails/' + movie.title,
      value: {
        movie
      }
    }} variant="primary">

		<figure class="card" >
   	<img src={movie.picture}/>
	<figcaption>{movie.title}</figcaption>
		</figure>
    </Link>





     
    );
    return (
      <div class="wrapper">

	<h2><strong>Latest Release: <span>({props.movies.length})</span></strong></h2>
  <div class="cards">
  {movieCards}
  </div>
      </div>
    );
  }

  return (
    <>
      <div className="animethisseason">
        {loading ? <Spinner animation="border" /> : <MovieCardList movies={posts} />

        }

      </div>

    </>
  );
};

export default Listing;