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
        <ReactCardFlip isFlipped={isFlipped} flipSpeedFrontToBack={1.0}
            flipSpeedBackToFront={1.0}
            flipDirection="vertical">
            <Card onClick={handleClick} bg="primary" text="white" style={{ cursor: "pointer" }} className="frontflipcard">
            <Card.Img  src={picture}/>
                
            </Card>
            <Card>
                <Card.Img variant="top" src={movie.animeImagePath} />
                <Card.Body>
                    <Card.Title key={movie.animeTitle} className="card-title">{movie.animeTitle}</Card.Title>
                    <Link to={{
                        pathname: '/viewDetails/' + movie.animeTitle,
                        value: {
                            movie
                        }
                    }} variant="primary">Details</Link>

                </Card.Body>
            </Card>
        </ReactCardFlip>
    );
};
export default CardFlip;