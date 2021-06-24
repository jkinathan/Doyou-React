
import Fragment from './components/Fragment';
import RefsDemo from './components/RefsDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  
  return (
    <div className="App">
      {
        
        <div>
             {/* <Fragment></Fragment> */}
             {/* <RefsDemo></RefsDemo> */}
            <ErrorBoundary>
                <Hero heroName="Joker"></Hero>
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName="Superman"></Hero>
            </ErrorBoundary>
        </div>
        
      }
    </div>
  );
}

export default App;
