import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Filter from './Filter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //npm install react-router-dom@5
import StackTest from './StackTest';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#37474f',
    },
    secondary: {
      main: '#fbc02d',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
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
              <Route path="/lol">
                <StackTest />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
