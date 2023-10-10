import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './Listing.css';


const Listing = (type) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [animes, setAnimes] = useState(null);

  useEffect(async () => {
    const result = await axios.post('http://localhost:5000/anime/seasonlist/', { year: thisYear(), season: seasonThisYear(), type: "TV" })
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
      <Card>
        <Card.Img variant="top" src={movie.picture} />
        <Card.Body>
          <Card.Title key={movie.title} className="card-title">{movie.title}</Card.Title>
          {/* <Card.Text className="truncate-overflow">
            {movie.synopsis}
          </Card.Text> */}
          <Link to={{
            pathname: '/viewDetails/' + movie.title,
            value: {
              movie
            }
          }} variant="primary">Details</Link>
        </Card.Body>
      </Card>
    );
    return (
      <div>{movieCards}</div>
    );
  }

  return (
    <>
      <div className="animethisseason">
        
        <h2>Anime Released in {thisYear()}:</h2>
        {loading ? <Spinner animation="border" /> : <div><MovieCardList movies={posts} /></div>

        }
      </div>

    </>
  );
};

export default Listing;