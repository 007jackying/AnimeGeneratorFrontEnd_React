import React,{useState ,useEffect}from 'react';
import * as bootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from "../../services/auth.service";

// import './NavBar.css';

const NBar = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  return (
<>
  <bootstrap.Navbar bg="dark" variant="dark">
    <bootstrap.Navbar.Brand href="/">DreamAnime BETA</bootstrap.Navbar.Brand>
    
    <bootstrap.Nav className="mr-auto">
      <bootstrap.Nav.Link as={Link} to="/Home">Home</bootstrap.Nav.Link>
      {currentUser? (<bootstrap.Nav.Link as={Link} to="/Profile">Profile</bootstrap.Nav.Link>):(<> <bootstrap.Nav.Link as={Link} to="/Register">Register</bootstrap.Nav.Link>
      <bootstrap.Nav.Link as={Link} to="/Login">Login</bootstrap.Nav.Link></>) }
     
      <bootstrap.Nav.Link as={Link} to="/Gatcha">Gacha!</bootstrap.Nav.Link>
      {currentUser? (<bootstrap.Nav.Link  as={Link} to='/Home' onClick={logOut}>Logout</bootstrap.Nav.Link>): (<></>)}
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