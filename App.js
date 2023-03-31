
import './App.css';
import  Day from './Day';
import Errorboundary from './Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Day a={["chocalate","icecream","fruits","Cookies"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;