import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    
                        <p className="col-sm-12 p-2 m-0 text-center">
                            {new Date().getFullYear()} All rights reserved.
                        </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;