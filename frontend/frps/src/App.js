import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Filter from './Filter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //npm install react-router-dom@5


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/filters">
              <Filter />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
