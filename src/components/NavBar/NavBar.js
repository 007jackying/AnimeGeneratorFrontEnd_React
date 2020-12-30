import React from 'react';
import * as bootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import './NavBar.css';

const NBar = () => {
  return (
<>
  <bootstrap.Navbar bg="dark" variant="dark">
    <bootstrap.Navbar.Brand href="/">DreamAnime</bootstrap.Navbar.Brand>
    <bootstrap.Nav className="mr-auto">
      <bootstrap.Nav.Link as={Link} to="/Home">Home</bootstrap.Nav.Link>
      <bootstrap.Nav.Link as={Link} to="/About">About</bootstrap.Nav.Link>
      <bootstrap.Nav.Link as={Link} to="/Gatcha">Gatcha!</bootstrap.Nav.Link>
    </bootstrap.Nav>
    <bootstrap.Form inline>
      <bootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <bootstrap.Button variant="outline-info">Search</bootstrap.Button>
    </bootstrap.Form>
  </bootstrap.Navbar>
</>
  );
};

export default NBar;