import ClickCounter from './components/ClickCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter from './components/HoverCounter';
import HoverCounter2 from './components/HoverCounter2';
import User from "./components/User";
import PropCounter from './components/PropCounter'

function App() {
  
  return (
    <div className="App">
      {
        
        <div>
             {/* <Fragment></Fragment> */}
             {/* <RefsDemo></RefsDemo> */}
            {/* <ErrorBoundary>
                <Hero heroName="Joker"></Hero>
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName="Superman"></Hero>
            </ErrorBoundary> */}
            {/* <ClickCounter name="Kinobe"/>
            <HoverCounter></HoverCounter> */}
            {/* <ClickCounter2></ClickCounter2> */}
            {/* <HoverCounter2></HoverCounter2> */}
            {/* <User render = {(isLoggedin) => isLoggedin ? "Kinobe" : "Guest"}></User> */}
            
            <PropCounter render={(count,clicked)=><ClickCounter2 count={count} clicked={clicked}></ClickCounter2>}></PropCounter>
            <PropCounter render={(count,clicked)=><HoverCounter2 count={count} clicked={clicked}/>}></PropCounter>
            
        </div>
        
      }
    </div>
  );
}

export default App;
