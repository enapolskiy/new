import React from "react"
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Example1 from "./components/Example1/Example1";
import Example2 from "./components/Example2/Example2";

function App() {
  return (
    <div className="App-cont">
     <Header />
     <Nav />
     {/*<Section />*/}
     <Aside />
     <Footer />
     <Example1 />
     {/*<Example2 />*/}

    </div>



  );
}

export default App;
