import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserCards from "./Components/UserCards";
import Details from "./Components/Details"
import { ThemeProvider } from "./Components/ThemeContext";

const App = () => {
  return (
<ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<UserCards />} />
        <Route path="/user/:id" element={<Details />} />
      </Routes>
    </Router>
  </ThemeProvider>
  );
};

export default App;
