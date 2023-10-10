import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Col, Container, Image, ResponsiveEmbed, Row, Spinner } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import './clickableButton.css';

const ViewDetails = () => {
    const { id } = useParams();
    let data = useLocation();
    const link = data.value.movie.link;
    // console.log("id passed ",data.value.movie.link)
    // const result = axios.post('http://localhost:5000/anime/getByurl/',{link:link})
    // console.log(result);
    const [posts, setPosts] = useState({ id });
    const [loading, setLoading] = useState(true);
    // const [animes, setAnimes] = useState(null);

    useEffect(async () => {
        const data = await axios.post('http://localhost:5000/anime/getByurl/',{link:link})
        // const data = await result.json();
        const item = await data;
        await setPosts(data);
        setLoading(false);


    }, [])
    if (typeof posts.data !== 'undefined') {
        console.log(posts.data.data.title);
    }


    function MovieCardListDetailed() {
        const data = posts.data.data;
        console.log("moviecard received", data);
        if (data) {
            return (
                <Container className="custom-card">
                    <Row style={{ margin: 10 }, { padding: 10 }}>
                        <Col sm="4">
                            <Image src={data.picture} />
                            <span><b>Score: </b>{data.score}</span><br />
                            <span><b>Type: </b>{data.type}</span><br />
                            <span><b>Episodes: </b>{data.episodes}</span><br />
                            <span><b>Aired: </b>{data.aired}</span><br />
                            <span><b>Status: </b>{data.status}</span><br />
                            <span><b>Genres: </b>{data.genres.toString()}</span><br />
                        </Col>
                        <Col sm="8" className="movie-Description">
                            <h4>{data.title}</h4>
                            <ResponsiveEmbed aspectRatio="16by9">
                                <embed type="image/svg+xml" src={data.trailer} />
                            </ResponsiveEmbed>
                            

                            <p>{data.synopsis}</p>

                        </Col>
                    </Row>
                </Container>
            )

        }


    }


    return (
        <>
            <div>
                {loading ? <Spinner animation="border" /> : <div><MovieCardListDetailed /></div>}

            </div>

        </>
    );
};

export default ViewDetails;