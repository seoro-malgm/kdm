import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

export const GlobalNav = () => {
  return (
    <div className="gnb">
      <Container>
        <div className="wrap">
          <h1>logo</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
