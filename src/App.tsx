import React from 'react';
import Home from './HomeScreen/Home';
import Detail from './HomeScreen/Detail';
import Read from './HomeScreen/Read'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route
              exact path='/'
                render={(props) =>{
                  return <Home {...props}/>}
                } 
        />
        <Route
        exact path='/detail/:comicid'
          render={(props) =>{
            return <Detail {...props}/>}
          } 
        />
        <Route
            exact path='/:chapterid'
              render={(props) =>{
                return <Read {...props}/>}
              } 
          />
      </div>
    </Router>
  );
}

export default App;
