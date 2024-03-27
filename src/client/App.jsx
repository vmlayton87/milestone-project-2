import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

function App() {

  return (
    // <div className="App">
      <>
        <Navigation/>
        <HomePage />
        <Footer />
      </>
    // </div>
  );
}

export default App;
