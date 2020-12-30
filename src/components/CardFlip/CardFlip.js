import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, Button, Spinner, Image, Col, Row, Container } from 'react-bootstrap';
import { Link, useParams, useLocation } from 'react-router-dom';
import './CardFlip.css';

const CardFlip = (props) => {
    const movie = props.data;
    console.log("props in card", movie)
    const [isFlipped, setIsFlipped] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card onClick={handleClick} className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                    <h1>{movie.count}</h1>
                </blockquote>
            </Card>
            <Card >
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