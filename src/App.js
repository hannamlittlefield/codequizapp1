import './App.css';
import NavBar from './NavBar.js'
import Home from './Home.js'
import Footer from './Footer'
import htmlQuiz from './HTMLQuiz'
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom'
import cssQuiz from './CSSQuiz';
import jsQuiz from './JSQuiz';

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
            <NavLink to="/HTMLQuiz">HTML Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/CSSQuiz">CSS Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/JavascriptQuiz">Javascript Quiz</NavLink>
          </li>
        </ul>
      </nav>
      <div id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/HTMLQuiz" component={htmlQuiz} />
          <Route exact path="/CSSQuiz" component={cssQuiz} />
          <Route exact path="/JavascriptQuiz" component={jsQuiz} />
        </Switch>
      </div>
    </div>
  </HashRouter>
    <div id="content"/>
    <Footer/>
    </div>
  );
}
