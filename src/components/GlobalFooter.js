import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/material";

export const GlobalFooter = () => {
  return (
    <footer className="gnf">
      <Container className="container">
        <div>
          <h1 className="m-0">logo</h1>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </Container>
    </footer>
  );
};
