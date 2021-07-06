import './App.css';
import ArrayDestruc from './components/ArrayDestruc';
import CounterHook from './components/CounterHook';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import ComponentC from './components/UseContext/ComponentC';
import CounterOne from './components/UseEffect/CounterOne';
import DataFetch from './components/UseEffect/DataFetch';
import React from 'react'
import MyRenderProp from './components/UseContext/MyRenderProp';
import RenderSon from './components/UseContext/RenderSon';

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">

      
      {/* <ArrayDestruc></ArrayDestruc> */}
      {/* <CounterHook></CounterHook> */}
      {/* <HookCounter3></HookCounter3> */}

      {/* <HookCounter4/> */}
      {/* <CounterOne/> */}
      {/* <DataFetch/> */}
      <UserContext.Provider value={'Jordan'}>
        <ComponentC/>
      </UserContext.Provider>

      <MyRenderProp name={(count,myFunction) => <RenderSon count={count} myFunc={myFunction}/>}/>
      
    </div>
  );
}

export default App;
