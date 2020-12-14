import './App.css';
import AppBar from './AppBar.js'
import Mainpage from './Mainpage.js'
import QuestionCard from './QuestionCard'
import Footer from './Footer'

export default function App() {
  return (
    <div className="App">
    <Mainpage id="main"/>
    <Footer/>
    </div>
  );
}
