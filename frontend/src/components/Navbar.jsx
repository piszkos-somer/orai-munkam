import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px',
      backgroundColor: '#333',
      color: 'white',
    };
  
    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
    };
  
    return (
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Főoldal</Link>
        <Link to="/add-user" style={linkStyle}>Felhasználó Hozzáadása</Link>
      </nav>
    );
  };
  
  export default Navbar;