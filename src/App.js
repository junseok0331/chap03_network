import logo from './logo.svg';
import './App.css';
import PromiseTest from './component/PromiseTest';
import WeatherApp from './component/WeatherApp';

export default function App() {
  return (
    <div className="App">
     <PromiseTest />
     <br/><br/>
     <WeatherApp />
    </div>
  );
}


