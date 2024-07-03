import React, {useRef, useState} from "react"
import Back from "../common/back/Back"
import "./contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const map ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55307.70659077522!2d78.03810893189443!3d29.95839616975855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909484ac00c81a1%3A0x1eaf07a4ca92a036!2sIntegrated%20Industrial%20Estate%2C%20Sector%205%2C%20Setor%208%20A%2C%20BHEL%20Township%2C%20Salempur%20Mahdood%2C%20Uttarakhand%20249403!5e0!3m2!1sen!2sin!4v1630408596490!5m2!1sen!2sin" ;


  const form = useRef();
  const [formResponse, setFormResponse] = useState(null); // State variable for form response

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_7zlii3b', 'template_l9otu1g', form.current, {
      publicKey: 'I26t9pcBQSxNk3Ygb',
    })
    .then(
      () => {
        setFormResponse("Your message has been sent successfully.");
        console.log('SUCCESS!');
      },
      (error) => {
        setFormResponse("Failed")
        console.log('FAILED...', error.text);
      },
    );
};

  const validateName = (e) => {
    const regex = /^[a-zA-Z\s]*$/; // Regex pattern to match alphabetic characters and spaces
    if (!regex.test(e.target.value)) {
      e.target.setCustomValidity("Please enter a valid name (only alphabetic characters and spaces)");
    } else {
      e.target.setCustomValidity(""); // Reset custom validation message
    }
  };


  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
          <iframe src={map} width="600" height="450" style={{border:0}} allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Integrated Industrial Estate, Sector 8A, BHEL Township
Haridwar, Uttarakhand 249403</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@site.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 8484 2355 98</p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
            <input
            type="text" pattern="^[A-Za-z-' ]*$" name="user_name"
            placeholder="Your Name"
            required
            data-aos="fade-up"
            onChange={validateName}
            onInput={(e) => {
e.target.value = e.target.value.replace(/[^A-Za-z-' ]/g, '');
e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);}}
             
              
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              data-aos="fade-up"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              data-aos="fade-up"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              data-aos="fade-up"
             onInput={(e) => {
                if (e.target.value.split(' ').length > 50) {
                  e.target.value = e.target.value.split(' ').slice(0, 50).join(' ');
                } }}
            ></textarea>
            <button data-aos="fade-up" className="btn" type="submit">SEND MESSAGE</button>
            {formResponse && <div className="form-response">{formResponse}</div>} {/* Display form response */}
          </form>
        
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact