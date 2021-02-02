import './App.css';
import NavBar from './NavBar.js'
import Home from './Home.js'
import Footer from './Footer'
import QuizPage from './QuizPage'
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
    <HashRouter>
    <div>
      <nav className="navbar">
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
