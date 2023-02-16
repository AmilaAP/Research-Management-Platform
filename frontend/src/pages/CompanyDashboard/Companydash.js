import React, { useEffect, useRef, useState } from 'react';
import { ReactDOM } from 'react';
import Cards from "./Cards/Cards";
import Table from "./Table/Table";
import "./Companydash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Company Profile Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;