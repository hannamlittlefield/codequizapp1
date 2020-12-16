import './App.css';
import NavBar from './NavBar.js'
import Home from './Home.js'
import QuestionCard from './QuestionCard'
import Footer from './Footer'

export default function App() {
  return (
    <div className="App">
    <Home id="main"/>
    <Footer/>
    </div>
  );
}
