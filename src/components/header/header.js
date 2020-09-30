import React from 'react';
import './header.css';
import logo from "../../logo.png";

const Header = () => {
    return (
        

        <nav className="navbar header">

            <img src={logo} className="d-inline-block align-top venturus ml-5 mb-1" alt="venturus logo"/>
            <h2 className="squadTool mb-2">Squad Management Tool</h2>
            <div className="navbar-nav ml-auto">
                <h5 className="username">John Doe</h5>
            </div>
          <div className="nav-item mr-1">

            <div className="usercircle mr-5">

                <h4 className="textcircle">JD</h4>
            </div>
            </div>


         </nav>

        /*
       
               <div className="header">
                   <nav className="navbar">
                       <div className="row">
                           <div className="col">
                               <img src={logo} width="40" height="40" className="venturus d-inline-block align-top" alt=""/>
                           </div>
                           <div className="col3">
                               <h2>Squad Management Tool</h2>
                           </div>
                           <div className="col3 justify-content-end">
                               <h2>buebos amreelos</h2>
                           </div>
       
                           
                          
                       </div>
                   </nav>
               </div>
               */
    )
}

export default Header;