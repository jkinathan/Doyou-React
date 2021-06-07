
import './App.css';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      {
        // <Counter></Counter>
        <div>
            {/* <FunctionClick></FunctionClick> */}
            <ClassClick></ClassClick>
        </div>
        
      }
    </div>
  );
}

export default App;
