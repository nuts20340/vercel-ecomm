import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-container">
        <div className="right">
        <div className="phone">
                <h4> <FaPhone size={20 } style={{color:"white",marginRight:"2rem"}}/>
            9089897664</h4>
            </div>
            <div className="email">
                <h4> <FaMailBulk size={20 } style={{color:"white",marginRight:"2rem"}}/>
            krishna@hmail.com</h4>
            </div>
            <div className="location">
                <FaHome size={20 } style={{color:"white",marginRight:"2rem"}}/>
                <div>
                <p>A1 Good Earth Haveli, Eroor West, Perikadu P.O, Kochi - 682306</p>
                <p>India</p>
                </div>
            </div>
            
           
        </div>
        <div className="left">
            <h4>About Us</h4>
            <p>We are Retail Foods a MSME ( Micro Small & Medium Enterprise) unit that was started in 2019 with the motive to offer consumers quality products bought from the right, direct source in fresh and hygienic condition..</p>
                 <div className="social">
                <FaFacebook size={30} style={{color:"white",marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"white",marginRight:"1rem"}}/>
                <FaInstagram size={30} style={{color:"white",marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"white",marginRight:"1rem"}}/>

            </div>
                 
        </div>
       </div>
    </div>
  )
}

export default Footer
