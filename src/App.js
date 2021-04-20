
import './App.css';

import Navbar from './components/Navigationbar';
import Headlines from './components/Headlines';
import Politics from './components/Politics';
import Business from './components/Business';
import Culture from './components/Culture';
import Economics from './components/Economics';
import Environment from './components/Environment';
import Entertainment from './components/Entertainment';
import Education from './components/Education';
import Health from './components/Health';
import India from './components/India';
import Latest from './components/Latest';
import Music from './components/Music';
import Science from './components/Science';
import Sports from './components/Sports';
import Search from './components/Search';
import Home from './components/Home';
import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br/><br/>
        <Container >
          
            
              <Switch>
                <Route path="/" exact component={Home} />
              </Switch>
              <Switch>
                <Route path="/headlines" component={Headlines} />
              </Switch>
              <Switch>
                <Route path="/businessandfinance" component={Business} />
              </Switch>
              <Switch>
                <Route path="/culture" component={Culture} />
              </Switch>
              <Switch>
                <Route path="/economics" component={Economics} />
              </Switch>
              <Switch>
                <Route path="/environment" component={Environment} />
              </Switch>
              <Switch>
                <Route path="/entertainment" component={Entertainment} />
              </Switch>
              <Switch>
                <Route path="/education" component={Education} />
              </Switch>
              <Switch>
                <Route path="/health" component={Health} />
              </Switch>
              <Switch>
                <Route path="/latest" component={Latest} />
              </Switch>
              <Switch>
                <Route path="/india" component={India} />
              </Switch>
              <Switch>
                <Route path="/music" component={Music} />
              </Switch>
              <Switch>
                <Route path="/worldpolitics" component={Politics} />
              </Switch>
              <Switch>
                <Route path="/scienceandtechnology" component={Science} />
              </Switch>
              <Switch>
                <Route path="/sports" component={Sports} />
              </Switch>
              <Switch>
                <Route path="/search" component={Search} />
              </Switch>
              
        </Container>


      </div>
    </Router>

  );
}

export default App;
