import React, { Component } from 'react';
import '../Style/App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Page from './Page';
import NavBar from './Nav';

class App extends Component{
  render(){
    return(
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="Nav">
            {<NavBar />}
          </div>
          <div className="Page">
            {<Page />}
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
 