
// import Fragment from './components/Fragment';
// import RefsDemo from './components/RefsDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
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
            <ClickCounter></ClickCounter>
            <HoverCounter></HoverCounter>
        </div>
        
      }
    </div>
  );
}

export default App;
