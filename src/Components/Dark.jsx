import React, { useState } from "react";

export default function Dark() {
  const [darkMode, setDarkMode] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText, setBtnText] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (darkMode.color === "white") {
      // Switch to Light Mode
      setDarkMode({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      // Switch to Dark Mode
      setDarkMode({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div className="darkmode-container" style={darkMode}>
      <p>
        Generating random paragraphs can be an excellent way for writers to get
        their creative flow going at the beginning of the day. The writer has no
        idea what topic the random paragraph will be about when it appears. This
        forces the writer to use creativity to complete one of three common
        writing challenges...
      </p>
      <button onClick={toggleStyle}>{btnText}</button>

    
    </div>
  );
}
