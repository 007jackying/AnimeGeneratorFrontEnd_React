import axios from "axios";
import {Redirect} from 'react-router-dom';


const register = (firstName,lastName,username, email, password) => {
    
    const data = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        password:password,
        email:email
    }
  
  return axios.post("user/register", data);
};

const login = (username, password) => {
    const data = {
        username: username,
        password: password
    }
  return axios
    .post("user/login", data)
    .then((response) => {
        
      if (response.data.accessToken) {
    
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};