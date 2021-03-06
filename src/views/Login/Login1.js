import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Listing} from '../../components/AnimeList';
import {Form, Button } from 'react-bootstrap';

const Login = props => {

  return (
      <>
      <div className="RegisterForm">
      <Form>
                <h3>Sign In</h3>

                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className="Form-control" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className="Form-control" placeholder="Enter password" />
                </Form.Group>

                <Form.Group>
                    <div className="custom-control custom-checkbox">
                        <Form.Control type="checkbox" className="custom-control-Form.Control" id="customCheck1" />
                        <Form.Label className="custom-control-Form.Label" htmlFor="customCheck1">Remember me</Form.Label>
                    </div>
                </Form.Group>

                <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
        </Form>

      </div>

      </>
  );
};

export default Login;