import axios from 'axios';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CardFlip } from "../CardFlip";
import './Gatcha.css';
// console.log("Results: ", posts);
const Gatcha = () => {
    

    const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => console.log("submitted",data);
    // console.log(watch('username'));
    const username = watch('username');
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [click,setClick]= useState(true);
    const onSubmit = async data => {
        console.log("onsubmit: ", data);
        const response = await axios.get(`http://localhost:5000/anime/getuser/${data.username}`);
        console.log("responded data: ", response.data);

        var animelist = response.data.data.filter(PlanToWatchList);
        let n = 10;
        if (animelist.length < 10) {
            n = animelist.length;
        }
        console.log("after filtered: ", animelist);
        let random = animelist.sort(() => .5 - Math.random()).slice(0, n);
        console.log("random ",random)
        const animeurlformat = 'https://myanimelist.net';
        for (let i = 0; i < random.length; i++) {
            let aurl = random[i].animeUrl;
            random[i].link = animeurlformat + aurl;
            random[i].count = i+1;
        }
        setPosts(random);
        setLoading(false);
        setClick(false);
        console.log("random generated: ", random);
    };





    function PlanToWatchList(data) {
        if (data.status === 6) {
            return true;
        } else {
            return false;
        }

    }

    function MovieCardList(props) {
        console.log("props: ", props);
        const movies = props.movies;
        console.log("movies: ", movies);
        const movieCards = movies.map((movie) =>
            <CardFlip data= {movie}/>
        );
        return (
            <>{movieCards}</>
        );
    }
    // return (
    //     <>
    //         <div>
    //             <form onSubmit={handleSubmit(onSubmit)}>
    //                 {/* register your input into the hook by invoking the "register" function */}
    //                         Please enter Myanimelist.net username: <input name="username"  ref={register({ required: true })}/> 
    //                 {/* errors will return when field validation fails  */}
    //                 {errors.username && <span>This field is required</span>}

    //                 <input type="submit" value={click? "TRY YOUR LUCK!" : "Try Again!"} />
    //             </form>

    //         </div>
    //         {loading ? <Spinner animation="border" /> : <div><MovieCardList movies={posts} /></div>

    //         }





    //     </>
    // );

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} style={{backgroundColor:'white'}}>
                    {/* register your input into the hook by invoking the "register" function */}
                            Please enter Myanimelist.net username: <input name="username"  ref={register({ required: true })}/> 
                    {/* errors will return when field validation fails  */}
                    {errors.username && <span>This field is required</span>}

                    <input type="submit" value={click? "TRY YOUR LUCK!" : "Try Again!"} />
                </form>

            </div>
            {loading ? <i class="fas fa-circle-notch fa-spin"></i> : <div><MovieCardList movies={posts} /></div>

            }





        </>
    );
};

export default Gatcha;