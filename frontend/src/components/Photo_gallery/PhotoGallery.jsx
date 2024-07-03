/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "./PhotoGallery.css"
import Photo1 from './photo1.png'
import Photo2 from './photo2.png'
import Photo3 from './photo3.png'
import Photo4 from './photo4.png'
import Photo5 from './photo5.png'
import Photo6 from './photo6.png'

const PhotoGallery = ({subTitle, title}) => {
  return (
    <>
    <div className='title'>
        <h2>{subTitle}</h2>
        <h1>{title}</h1>      
    </div>
    <div data-aos="fade-right" className="photo-gallery container">
      <div className="photo-box"><img src={Photo1}/></div>
      <div className="photo-box"><img src={Photo2}/></div>
      <div className="photo-box"><img src={Photo3}/></div>
      <div className="photo-box"><img src={Photo4}/></div>
      <div className="photo-box"><img src={Photo5}/></div>
      <div className="photo-box"><img src={Photo6}/></div>
    </div>
    </>
  )
}

export default PhotoGallery