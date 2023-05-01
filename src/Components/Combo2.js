import './Offer2Styles.css'

import React from 'react'
import Into1 from "../assets/combo1.png"
import Into2 from "../assets/combo2.png"
import Into3 from "../assets/rbox.png"
import Into4 from "../assets/combo3.png"


function Offer2() {
    return (
        <div className='offer2'>
            <div className="card-container">
                <div className="card">
                    <img className="img1" src={Into1} alt="Into1 " />
                    <h3>ESOR Drinking Choclate</h3>
                    <h5>Drinking Choclate</h5>
                    <p>Rs. 1223</p>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className="card">
                <img className="img1" src={Into2} alt="Into1 " />
                <h3>ESOR CHOCO CRISPIES</h3>
                <h5>Drinking Choclate</h5>
                <p>Rs. 1223</p>
                <button>Add To Cart</button>
            </div>

            <div className="card">
                <img className="img1" src={Into4} alt="Into1 " />
                <h3>ESOR CHOCO BUTTER</h3>
                <h5>Drinking Choclate</h5>
                <p>Rs. 1223</p>
                <button>Add To Cart</button>
            </div>
           
          
        </div>
    )
}

export default Offer2

