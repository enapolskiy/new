import React from "react"
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import Example1 from "./components/Example1/Example1";
import Example2 from "./components/Example2/Example2";
import Example3 from "./components/Example3/Example3";
import Example4 from "./components/Example4/Example4";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import ChatDesk from "./components/ChatDesk/ChatDesk";
import MessageDesk from "./components/Messages/MessageDesk";
import UsersContainer from "./components/Users/UsersContainer";
import Product from "./components/Product/Product";





const App = () => {
  return (

    <div className="App-cont">
     <Header />
     <Nav />

        <Route path='/section' component = {Section} />
        <Route path='/example1' component={Example1} />
        <Route path='/example2' component={Example2} />
        <Route path='/example3' component={Example3} />
        <Route path='/example4' component={Example4} />
        <Route path='/messages' render={ ()=><MessageDesk/>}/>
        <ChatDesk />
        <Product />
        <Route path='/users' render={ ()=><UsersContainer />}  />

        <Footer />


    </div>




  );
}

export default App;
