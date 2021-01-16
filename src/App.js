import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contents from './components/Contents/Contents';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Contents />
    </div>
  );
}

export default App;
