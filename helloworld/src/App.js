import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

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
            <ClickCounter name="Kinobe"/>
            <HoverCounter></HoverCounter>
        </div>
        
      }
    </div>
  );
}

export default App;
