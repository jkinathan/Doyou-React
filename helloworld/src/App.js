
import './App.css';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {
        // <Counter></Counter>
        <div>
            {/* <FunctionClick></FunctionClick> */}
            {/* <ClassClick></ClassClick> */}
            <EventBind></EventBind>
        </div>
        
      }
    </div>
  );
}

export default App;
