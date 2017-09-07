import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

const Header =()=>{
    return(
        <Route>
        <div className="header" style={{marginTop:"40px"}}>
            <img src="/images/logo.png" width="64"/>
            <Link to="/" style={{textDecoration:"none", color:"#AE7548"}}><h3 style={title}>GAGAS SEMESTA ALAM</h3></Link>
        </div>
        </Route>
    );
}

const title={
    fontFamily: "'Alegreya', serif",
    
    fontWeight: 'Bold',
}

export default Header;