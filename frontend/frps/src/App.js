import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //npm install react-router-dom@5
import HomeTest from './HomeTest';
import { Feedback } from '@mui/icons-material';

import Filter from './Boundary/Filter';
import FlatDetails from './Boundary/FlatDetails';
import Navbar from './Boundary/UIElements/Navbar';
import Footer from './Boundary/UIElements/Footer';



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
            <Route path="/feedback">
              <Feedback />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
