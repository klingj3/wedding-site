import logo from './logo.svg';
import './App.css';
import {LandingSection} from "./sections/Landing";
import {DayOfSection} from "./sections/TownInfo";

function App() {
  return (
    <div className="App">
      <LandingSection />
      <DayOfSection />
    </div>
  );
}

export default App;