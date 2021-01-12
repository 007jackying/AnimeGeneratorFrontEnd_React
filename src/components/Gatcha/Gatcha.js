import React, { useState, useEffect } from "react";
import { Card, Button, Spinner, Image, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom';
import { func } from "prop-types";
import { useForm } from "react-hook-form";
import ReactCardFlip from 'react-card-flip';
import { CardFlip } from "../CardFlip";
import './Gatcha.css';
const malScraper = require('mal-scraper');
// console.log("Results: ", posts);
const Gatcha =  () => {
    

    const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => console.log("submitted",data);
    // console.log(watch('username'));
    const username = watch('username');
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [click,setClick]= useState(true);
    const onSubmit = async data => {

        const response = await axios.post(`anime/gachamode`,{username: data.username});
       
        const random = response.data.data;
        const animeurlformat = 'https://myanimelist.net';
        
        for (let i = 0; i < random.length; i++) {
            let aurl = random[i].animeUrl;
            random[i].link = animeurlformat + aurl;
            random[i].count = i+1;
            random[i].hdimg = await malScraper.getPictures({
                name: random[i].animeTitle,
                id: random[i].animeId
              })
            random[i].imgLink = random[i].hdimg[0];
        }
        setPosts(random);
        setLoading(false);
        setClick(false);
        
    };





    function PlanToWatchList(data) {
        if (data.status === 6) {
            return true;
        } else {
            return false;
        }

    }

    function MovieCardList(props) {
    
        const movies = props.movies;
   
        const movieCards = movies.map((movie) =>
            <CardFlip data= {movie}/>
        );
        return (
            <>{movieCards}</>
        );
    }

    return (
        <>
            <div className="noNameDiv">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                            Please enter Myanimelist.net username: <input name="username"  ref={register({ required: true })}/> 
                    {/* errors will return when field validation fails  */}
                    {errors.username && <span>This field is required</span>}

                    <input type="submit" value={click? "TRY YOUR LUCK!" : "Try Again!"} />
                </form>

            </div>
            {loading ? <Image className="replacehover"  src="https://media.giphy.com/media/bzvjJOW9sN8aR09XC8/giphy.gif"/> : <div class="cards"><MovieCardList movies={posts} /></div>

            }





        </>
    );
};

export default Gatcha;