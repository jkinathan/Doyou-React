import logo from './logo.svg';
import './App.css';

// import {Greet} from './components/Greet';
// or
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Zaga from './components/myown';
import Message from './components/Message';

import counter from './components/counter';

function App() {
  return (
    <div className="App">
      {
  
          /* <Message>
        
          </Message> */

        <counter></counter>
      
      /* <Zaga>
        <header>Talk to me children</header>
      </Zaga>
      <Greet name="Jordan" heroname="Superman">
        <p>This is Children props</p>
      </Greet>
      <Greet name="Kent" heroname="Batman">
        <button>Click Me!</button>
      </Greet>
      <Greet name="Jabari" heroname="Spiderman"></Greet>

      <Welcome name="Jordan" heroname="Superman">
        <p>For instance I am a child of Jordan</p>
      </Welcome>
      <Welcome name="Khloe" heroname="Antman"></Welcome>
      <Welcome name="Bobby" heroname="Waspman"></Welcome> */}
    </div>
  );
}

export default App;
