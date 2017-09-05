import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

const Header =()=>{
    return(
        <Route>
        <div className="header">
            <img src="/images/logo.png" width="64"/>
            <Link to="/"><h3>GAGAS SEMESTA ALAM</h3></Link>
        </div>
        </Route>
    );
}

export default Header;