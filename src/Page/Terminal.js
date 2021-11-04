import React, { Component } from 'react';
import { Route } from 'react-router';
import Menu from '../Layouts/Menu';

const BoxTerminal = {
    width: "40vw",
    minHeight: "75vh",
    backgroundColor: "rgb(252, 252, 252)",
    margin: "30px",
    border: "1px solid black",
}

const PageMain = () => {

    return ( 
        <>
          <div className="Menu">
            {<Menu />}
          </div>
            <div style={BoxTerminal}>

            </div>
        </>
     );
}
 
export default PageMain;