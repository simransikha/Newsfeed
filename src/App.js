import './App.css';
import React, { Component,useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
         <Navbar/>
         <LoadingBar
        color='#f11946'
        progress={10}
        
      />
         <Routes>
          <Route exact  path="/" element={<News key="general" country="in" category ="general"/>}></Route>
          <Route exact path="/business" element={< News key="business" country="in" category ="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" category ="entertainment"/>} ></Route>
          <Route exact path="/general" element={<News key="general" country="in" category ="general"/>}> </Route>
          <Route exact path="/healths" element={< News key="healths" country="in" category ="healths"/>}></Route>
          <Route exact path="/scienc" element={< News key="science" country="in" category ="science"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" country="in" category ="sports"/>} ></Route>
          </Routes>
          
        </div>
         </Router>
     
    );
  }
}

