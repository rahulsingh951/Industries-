import React from "react"
// import { blog } from "../../../dummydata"
import "./footer.css"
import { Link } from "react-router-dom/cjs/react-router-dom"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className='container padding'>
          <div className='box logo'>
            <h1>SIIDCUL</h1>
            <span>THE CITY OF INDUSTRIES</span>
            <p>State Infrastructure & Industrial Development Corporation Uttarakhand Ltd. (SIIDCUL), a Government of Uttarakhand Enterprise was established primarily with an objective of providing overall industrial development of the state.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul className="footer-link">
             
               <li><Link to= "/" >Home </Link></li>
              <Link to= "/about" > <li>About Us</li></Link>
              <Link to= "/industry" ><li>Industries</li></Link>
              <Link to= "/contact" ><li>Contact us</li></Link>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Famous</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i> <nsvp/>
                Integrated Industrial Estate, Sector 8A, BHEL Township Haridwar, Uttarakhand 249403
              </li>
              <li>
                <i className='fa fa-phone-alt'></i> <nsvp/> <nsvp/>
                + 0135-2708100
              </li>
              <li>
                <i className='fa fa-paper-plane'></i> <nsvp/>
                md@siidcul.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This template is made with <i className='fa fa-heart'></i> by .....
        </p>
      </div>
    </>
  )
}

export default Footer
