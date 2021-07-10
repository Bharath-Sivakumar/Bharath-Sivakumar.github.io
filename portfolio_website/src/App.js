import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import mainpage from './components/mainpage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={mainpage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
