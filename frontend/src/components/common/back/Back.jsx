import React ,{useEffect}from "react"
import { useLocation } from "react-router-dom"
import Aos from 'aos';
import 'aos/dist/aos.css'

const Back = ({ title }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const location = useLocation()

  return (
    <>
      <section className='back'>
        <h2>Home / {location.pathname.split("/")[1]}/</h2>
        <h1 data-aos="fade-up">{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
