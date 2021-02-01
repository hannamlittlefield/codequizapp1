import './App.css';
import NavBar from './NavBar.js'
import Home from './Home.js'
import Footer from './Footer'
import QuizPage from './QuizPage'
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom'


/*add nav bar here */
/*add nav link and route to all components into nav bar -  */


export default function App() {
  return (
    <div className="App">
    <HashRouter>
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/QuizPage">HTML Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/QuizPage">CSS Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/QuizPage">Javascript Quiz</NavLink>
          </li>
        </ul>
      </nav>
      <div id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/QuizPage" component={QuizPage} />
          <Route exact path="/QuizPage" component={QuizPage} />
        </Switch>
      </div>
    </div>
  </HashRouter>
    <div id="content"/>
    <Footer/>
    </div>
  );
}
