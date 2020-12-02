import './App.css';
import AppBar from './AppBar.js'
import Mainpage from './Mainpage.js'
import Paragraph from './Paragraph';
import QuestionCard from './QuestionCard'

function App() {
  return (
    <div className="App">
    <AppBar/>
    <Paragraph/>
    <Mainpage/>
    <QuestionCard/>
    </div>
  );
}

export default App;
