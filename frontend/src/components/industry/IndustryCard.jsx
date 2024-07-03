/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./List.css";
import { Data } from "./Data";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Not from './industries/404.png'
import axios from "axios";


const IndustryCard = ({ searchQuery }) => {
  const [industry,setIndustry]=useState([])
  useEffect(()=>{
    getIndustry()
  },[])
  const getIndustry = async () => {
    try {
      const res = await axios.get('http://localhost:7000/api/getIndustryData');
      console.log(res.data);
      setIndustry(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  getIndustry()
 

  useEffect(() => {
    Aos.init({ duration: 2000 });
    getIndustry(); // Call the function here
  }, [searchQuery]);

  // Filter data based on searchQuery
  const filteredData = Data.filter((item) => {
    return searchQuery.toLowerCase() === "" || item.destTitle.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // If no results found, display "NOT FOUND" message
  if (filteredData.length === 0) {
    return <div className="not-found container"><img src={Not}/> </div>;
  }
    
  return (
    <section className="industryCard">
      <div className="container grid2">
        {filteredData.map(({ id, img, destTitle, industry, Location, address, head }) => (
          <div key={id}  className="singleDestination">
            <div className="imgdiv">
              <img src={img || 'path/to/fallback/image'} alt={destTitle} />
            </div>
            <div className="content">
              <h2 className="destTitle">{destTitle}</h2>
              <br />
              <p className="address">
                <h3>Address:-</h3> {address}{" "}
              </p>
              <br />
              <p className="address">Industry:-{industry} </p>
              <br />
              <span className="contitent flex">
             
                <span icon="fa-solid fa-location-pin" className="name">{Location}</span>
              </span>
              <div className="industry">
                <h5>{head}</h5>
              </div>
            </div>
            <div className="button-read">
              <Link to={`/industry/${id}`}>
                <button className="btn dark-btn clg">Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryCard;
