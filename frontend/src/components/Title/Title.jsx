/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Title.css'
const Title = ({subTitle, title}) => {
  return (
    <>
      <div className='title'>
          <h2>{subTitle}</h2>
          <h1>{title}</h1>      
      </div>
    <div className='title-main container'>
    <div className="contant">
          <p>It is spread in an area of about 2038 acres of land. It is well connected to the Delhi NCR region. It is replete with state-of-the-art infrastructure and caters to the complete business needs of an investor. It has presence of brands such as Mahindra, Hero Moto Corp, ITC Limited, Hindustan Uni Lever, Akums Drugs & Pharmaceuticals, Hamilton Houseware, Lotus Beauty Care Products etc.</p>
    </div>
    
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55307.70659077522!2d78.03810893189443!3d29.95839616975855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909484ac00c81a1%3A0x1eaf07a4ca92a036!2sIntegrated%20Industrial%20Estate%2C%20Sector%205%2C%20Setor%208%20A%2C%20BHEL%20Township%2C%20Salempur%20Mahdood%2C%20Uttarakhand%20249403!5e0!3m2!1sen!2sin!4v1630408596490!5m2!1sen!2sin" width={450}
  height={350}
  margin={400}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade" />
</div>
    </div>
  
    </>
  )
}

export default Title
