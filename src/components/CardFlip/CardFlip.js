import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, Button, Spinner, Image, Col, Row, Container } from 'react-bootstrap';
import { Link, useParams, useLocation } from 'react-router-dom';
import './CardFlip.css';
import picture from '../../img/cardback.png';
let imagelink = "https://image.shutterstock.com/image-vector/not-available-grunge-rubber-stamp-260nw-549465907.jpg";

const CardFlip = (props) => {
    const movie =  props.data;
    if (typeof movie.imgLink !== 'undefined') imagelink = movie.imgLink.imageLink;

    const [isFlipped, setIsFlipped] = useState(false);
    const [count, setCount] = useState(0);
    const mystyle = {
        padding: "70px"
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip className="carddiv" isFlipped={isFlipped} 
            flipDirection="vertical">

            <figure className="cards cardfront" onClick={handleClick}>
                <img src={picture} />
            </figure>
            <Link to={{
                pathname: '/viewDetails/' + movie.animeTitle,
                value: {
                    movie
                }
            }} variant="primary">
                <figure className="cards cardback" >
                    <img className="imageincard" src={imagelink} />
                    <figcaption className="captionstitle">{movie.animeTitle}</figcaption>
                </figure>
            </Link>

        </ReactCardFlip>
    );
};
export default CardFlip;