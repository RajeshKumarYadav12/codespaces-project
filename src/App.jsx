import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

const siteProps = {
  name: "Rajesh Kumar Yadav",
  title: "Full Stack Developer",
  email: "yrajeshkumar799@gmail.com",
  gitHub: "RajeshKumarYadav12",
  instagram: "rajeshkumaryadav8118",
  linkedIn: "rky99",
  medium: "", // No Medium profile
  twitter: "RAJESHK55283311",
  youTube: "Insights4U-n4t",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
