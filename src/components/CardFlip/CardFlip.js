import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, Button, Spinner, Image, Col, Row, Container } from 'react-bootstrap';
import { Link, useParams, useLocation } from 'react-router-dom';
import './CardFlip.css';
import picture from '../../img/cardback.png';


const CardFlip = (props) => {
    const movie = props.data;

    const [isFlipped, setIsFlipped] = useState(false);
    const [count, setCount] = useState(0);
    const mystyle = {
        padding: "70px"
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip className="cards" isFlipped={isFlipped} 
            flipDirection="vertical">

            <figure className="cards" onClick={handleClick}>
                <img src={picture} />
            </figure>
            <Link to={{
                pathname: '/viewDetails/' + movie.animeTitle,
                value: {
                    movie
                }
            }} variant="primary">
                <figure className="cards" >
                    <img src={movie.imgLink.imageLink} />
                    <figcaption>{movie.animeTitle}</figcaption>
                </figure>
            </Link>

        </ReactCardFlip>
    );
};
export default CardFlip;