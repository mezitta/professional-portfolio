import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
