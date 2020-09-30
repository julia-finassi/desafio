import React from 'react';
import './picked.css';

const Picked = () => {
    return(
        
        <section className="picked">
            <div className="row d-flex justify-content-center">
            <div className="col">
            <h2>Most picked player</h2>
            </div>
            <div className="circle mt-5 mb-5"></div>
            <div className="line"></div>
            <div className="col">
            <h2>Less picked player</h2>
            </div>
            </div>
            
        </section>
        
    )
}

export default Picked;