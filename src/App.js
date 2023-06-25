import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {BrowserRouter as Router,Routes, Route,} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
         <Navbar/>
         <News key="general" country="in" category ="general"></News>
         <Routes>
          <Route exact  path="/" element={<general/>}> <News key="general" country="in" category ="general"/></Route>
          <Route exact path="/business" element={<business/>}>< News key="business" country="in" category ="business"/></Route>
          <Route exact path="/entertainment" element={<entertainment/>} ><News key="entertainment" country="in" category ="entertainment"/></Route>
          <Route exact path="/general" element={<general/>} ><News key="general" country="in" category ="general"/> </Route>
          <Route exact path="/healths" element={<healths/>}>< News key="healths" country="in" category ="healths"/></Route>
          <Route exact path="/scienc" element={<science/>}>< News key="science" country="in" category ="science"/> </Route>
          <Route exact path="/sports" element={<sports/>} ><News key="sports" country="in" category ="sports"/></Route>
          </Routes>
          
        </div>
         </Router>
     
    );
  }
}

