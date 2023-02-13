import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Bio from './components/Bio';
import AboutMe from './components/AboutMe';
function App() {
  return (
    <div className="App">
      <Header/>
      <Bio/>
      <AboutMe/>
    </div>
  );
}

export default App;
