import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, Button, Spinner, Image, Col, Row, Container } from 'react-bootstrap';
import { Link, useParams, useLocation } from 'react-router-dom';
import './CardFlip.css';
import picture from '../../img/cardback.png';


const CardFlip = (props) => {
    const movie = props.data;
    console.log("props in card", movie)

    const [isFlipped, setIsFlipped] = useState(false);
    const [count, setCount] = useState(0);
    const mystyle = {
        padding: "70px"
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
        // <Card onClick={handleClick} className="p-3">
        // <Card.Img variant="top" src='https://wallpaperaccess.com/full/1152503.jpg' />
        //     <blockquote className="blockquote mb-0 card-body">
        //         <h1>{movie.count}</h1>
        //     </blockquote>
        // </Card>
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
                    <img src={movie.animeImagePath} />
                    <figcaption>{movie.animeTitle}</figcaption>
                </figure>
            </Link>

        </ReactCardFlip>
    );
};
export default CardFlip;