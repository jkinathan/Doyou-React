
import './App.css';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Parent from './components/Parent';
import Usergreeting from './components/Usergreeting';
import NameList from './components/NameList';


function App() {
  return (
    <div className="App">
      {
        // <Counter></Counter>
        <div>
            {/* <FunctionClick></FunctionClick> */}
            {/* <ClassClick></ClassClick> */}
            {/* <EventBind></EventBind> */}
            {/* <Parent></Parent>
             */}
             {/* <Usergreeting></Usergreeting> */}
             <NameList></NameList>
        </div>
        
      }
    </div>
  );
}

export default App;
