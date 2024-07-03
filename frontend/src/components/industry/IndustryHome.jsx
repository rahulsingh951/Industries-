/* eslint-disable no-unused-vars */
// IndustryHome.js
import React, { useState } from "react";
import Back from "../common/back/Back";
import IndustryCard from "./IndustryCard";
import "./List.css";

const IndustryHome = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Back title="All Industries List" />

      <center>
        <div className="search">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search industries"
          />
        </div>
      </center>

      <IndustryCard searchQuery={searchQuery} />
    </>
  );
};

export default IndustryHome;
