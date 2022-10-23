import './App.css';
import Home from './Boundary/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //npm install react-router-dom@5
import HomeTest from './HomeTest';

import Filter from './Boundary/Filter';
import FlatDetails from './Boundary/FlatDetails';
import Navbar from './Boundary/UIElements/Navbar';
import Footer from './Boundary/UIElements/Footer';
import Feedback from './Boundary/Feedback';
import Admin from './Boundary/Admin';


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
            <Route exact path="/feedback">
              <Feedback />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
