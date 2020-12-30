import React from 'react';
import './home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Listing} from '../../components/AnimeList';
const Home = props => {
  return (
    <div className="HomeCSS">
        <Listing/>
        

    </div>
  );
};

export default Home;