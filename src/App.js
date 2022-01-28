import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Main from './components/Main'
import Skills from './components/Skills'
import About from './components/About'
import Sayhi from './components/Sayhi';
import SoundBar from './subComponents/SoundBar';
import PropagateLoader from "react-spinners/PropagateLoader"


function App() {
  
  return (
    <div className="App">
      <PropagateLoader />
      
      <SoundBar />
      
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/sayhi">
              <Sayhi />
            </Route>
          </Switch>
        </Router>
      
      

    </div>
  );
}

export default App;
