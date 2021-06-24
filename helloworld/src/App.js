
// import Fragment from './components/Fragment';
// import RefsDemo from './components/RefsDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';

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
        </div>
        
      }
    </div>
  );
}

export default App;
