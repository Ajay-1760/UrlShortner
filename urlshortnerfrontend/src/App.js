import logo from './logo.svg';
import './App.css';
import URLshortner from './component/URLshortner';
import OriginalUrl from './component/OriginalUrl';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        Welcome to our URL Shortener
       </h1>
      <URLshortner/>
      <OriginalUrl/>
    </div>
  );
}

export default App;
