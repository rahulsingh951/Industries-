import React from 'react';
import { listsData } from './detail';
import Back from '../common/back/Back';
import './detail.css';
import { Link } from 'react-router-dom';

const IndustryDetail = ({ match }) => {
  window.scrollTo(0, 0);

  const { id } = match.params;
  const industry = listsData.find((item) => item.id === parseInt(id));

  if (!industry) {
    return (
      <div className="error-message">
        <h2>Industry not found</h2>
        <p>Please try again or contact us for assistance.</p>
      </div>
    );
  }

  return (
    <>
      <Back title={industry.destTitle} />
      <div className="industry-detail container">
        <div className="indtitle">
          <h1>{industry.destTitle}</h1>
          <hr />
        </div>
        <p>{industry.p1}</p>
        <br />
        <br />
        <table className="industry-table">
          <tbody>
            <tr key="address">
              <th>Address:</th>
              <td>{industry.address}</td>
            </tr>
            <tr key="industry">
              <th>Industry:</th>
              <td>{industry.industry}</td>
            </tr>
            <tr key="about">
              <th>About:</th>
              <td>{industry.p}</td>
            </tr>
            <tr key="location">
              <th>Location:</th>
              <td>{industry.Location}</td>
            </tr>
            <tr key="link">
              <th>Link:</th>
              <td>
                <a href={industry.link} target="_blank" rel="noopener noreferrer">
                  {industry.destTitle}
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="button-read">
          <Link to="/industry">
            <button className="dark-btn clg" style={{ backgroundColor: 'rgb(189, 189, 217)', color: 'white' }}>
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default IndustryDetail;