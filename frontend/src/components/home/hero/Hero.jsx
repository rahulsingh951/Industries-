import React , {useEffect}from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div data-aos="fade-down" className='row'>
            <Heading  subtitle='WELCOME TO SIIDCUL HARIDWAR' title='THE CITY OF INDUSTRIES' />
            <p>State Infrastructure & Industrial Development Corporation Uttarakhand Ltd. (SIIDCUL), a Government of Uttarakhand Enterprise was established primarily with an objective of providing overall industrial development of the state.</p>
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
