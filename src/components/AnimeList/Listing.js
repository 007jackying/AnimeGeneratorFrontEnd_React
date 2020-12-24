import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Card,Button} from 'react-bootstrap';

import './Listing.css';


const Listing = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [animes, setAnimes] = useState(null);

  useEffect(async () => {
    const result = await axios.post('http://localhost:3300/anime/seasonlist/',{year:thisYear(), season:seasonThisYear() ,type: "TV"})
    // const data = await result.json();
    const item = result.data;
     setPosts(item);
     setLoading(false);
     console.log("Results: ", posts);

  },[])



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
    const movies = props.movies;
    const movieCards = movies.map((movie)=>
      <Card>
        <Card.Img variant="top" src={movie.picture} />
        <Card.Body>
          <Card.Title className="card-title">{movie.title}</Card.Title>
          {/* <Card.Text className="truncate-overflow">
            {movie.synopsis}
          </Card.Text> */}
          <Button key={movie.title} variant="primary">View Details</Button>
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
        {loading ? <div>Loading...</div> : <div><MovieCardList movies={posts}/></div>
        
      }
      </div>

    </>
  );
};

export default Listing;