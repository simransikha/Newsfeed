import './App.css';
import React, {useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


 const App =()=> {
 const[progress, setProgress] = useState(0)

 
    return (
      <>
      <Router>
      <div>
         <Navbar/>
         <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
         <Routes>
          <Route exact  path="/" element={<News setProgress={setProgress}  key="general" country="in" category ="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" country="in" category ="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" country="in" category ="entertainment"/>} ></Route>
          <Route exact path="/general" element={<News setProgress={setProgress}  key="general" country="in" category ="general"/>}> </Route>
          <Route exact path="/healths" element={<News setProgress={setProgress} key="healths" country="in" category ="healths"/>}></Route>
          <Route exact path="/scienc" element={<News setProgress={setProgress} key="science" country="in" category ="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" country="in" category ="sports"/>} ></Route>
          </Routes>
          
        </div>
         </Router>
     </>
    )
 }
 export default App;
  


