import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import mainpage from './components/mainpage';
//import contact_me from './components/contact-me';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={mainpage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
