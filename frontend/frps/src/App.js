import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Filter from './Boundary/Filter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //npm install react-router-dom@5

// import logo from './logo.svg';
// import Test from './Test';
import HouseCards from './Boundary/UIElements/HouseCards.js';
import FlatDetails from './Boundary/FlatDetails';
import Test from './Test';
import HomeTest from './HomeTest';



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
            <Route path="/flat/:flatID">
              <FlatDetails />
            </Route>
            <Route path="/err">
              <HomeTest />
            </Route>
            <Route path="/dbtest">
              <Test />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
