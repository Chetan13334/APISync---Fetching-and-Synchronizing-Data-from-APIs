import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserCards from "./Components/UserCards";
import Details from "./Components/Details"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserCards />} />
        <Route path="/user/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
