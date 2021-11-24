import React, { Component, useState} from 'react';
import Menu from '../Layouts/Menu';



const PageMain = () => {

    return ( 
        <>
        <style>{`
        td{
         border-top:1px solid black;
         border-bottom:1px solid black;
        }
        tr,td{
          padding: 5px;
          font-size: 16px;
        }
        tr:hover{
          background-color: rgba(0, 110, 255, 0.137);
        }
      `}</style>
          <div className="Menu">
            {<Menu />}
          </div>
        </>
     );
}
 
export default PageMain;