import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import mainpage from './components/mainpage';
import contact_me from './components/contact-me';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={mainpage} />
          <Route path='/' component={contact_me} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
