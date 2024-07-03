import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
// import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
        Welcome to SIIDCUL HARIDWAR, this website is to provide you the information about the SIIDCUL Haridwar Industries . We are dedicated to providing job seekers that the Industries present here.

At SIIDCUL HARIDWAR, we believe in getting all the relavtive information about the industries that comes under SIIDCUL. Our team is passionate about giving good service through this site.

</p>
        <h2>Our Mission</h2>
        <p>

Whether you're looking for searching the companies or industries  or seeking jobs in that company.
Thank you for choosing SIIDCUL HARIDWAR. We look forward to serving you and helping you achieve your goals.
        </p>
        <h2>History of SIIDCUL</h2>
        <p>
        SIIDCUL was incorporated as a Limited Company in the year 2002 with an authorised share capital of ₹50 crores and ₹20 crores paid up capital through the Government of Uttarakhand in order to promote industrial development and develop an industrial infrastructure.
        </p>
        <Heading subtitle='LEARN MORE' title='Infrastructure developed by SIIDCUL' />
        <p>
          <ul>
            <li>* Integrated Industrial Estate at BHEL, Haridwar (near Shivalik Nagar)</li>
            <li>* Integrated Industrial Estate at Pantnagar (Rudrapur)</li>
            <li>* IT Park, Dehradun</li>
            <li>* Pharma City - Selaqui Industrial Area, Dehradun</li>
            <li>* Sigaddi Growth Centre, Kotdwar</li>
          </ul>
        </p>
      </div>
    </div>
  

      <Awrapper />
    </>
  )
}

export default AboutCard
