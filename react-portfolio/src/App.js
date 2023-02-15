import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Bio from './components/Bio';
import AboutMe from './components/AboutMe';
import MyPortfolio from './components/Myportfolio';
function App() {
  return (
    <div className="App">
      <Header/>
      <Bio/>
      <AboutMe/>
      <MyPortfolio/>
    </div>
  );
}

export default App;
