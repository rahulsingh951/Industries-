import React from "react"
import Hero from "./hero/Hero"
import Title from '../Title/Title'
import Directory from '../Directory/Directory'
import PhotoGallery from "../Photo_gallery/PhotoGallery"
// import Testimonal from "./testimonal/Testimonal"


const Home = () => {
  window.scrollTo(0,0);
  return (
    <>
      <Hero />
      <div className="container"></div>
      <Directory subTitle='Directory of' title='SIIDCUL' />
      <Title subTitle='OverView' title='SIIDCUL' />
      <PhotoGallery subTitle='Photo Gallery' />
     
    
    </>
  )
}

export default Home
