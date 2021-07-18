import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import mainpage from './components/mainpage';
import Footer from './components/Footer';
import past_projects from './components/past_projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={mainpage} />
          <Route path='/' component={past_projects} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
