
import './App.css';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Parent from './components/Parent';
import Usergreeting from './components/Usergreeting';
import NameList from './components/NameList';
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyle.module.css'; //for the module.css
import Form from './components/Form';
 
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
             {/* <NameList></NameList> */}
             {/* <Inline></Inline>
             <h1 className="error">Error</h1> */}
             {/* Regular css file error above */}
             {/* <h2 className={styles.success}>Success</h2> */}
             {/* Modules method above */}
             <Form></Form>
        </div>
        
      }
    </div>
  );
}

export default App;
