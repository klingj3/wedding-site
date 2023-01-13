import './App.css';
import {LandingSection} from "./sections/Landing";
import {TownInfoSection} from "./sections/TownInfo";
import {OurStorySection} from "./sections/OurStory";
import {DayOfSection} from "./sections/DayOf";

const imagePath = require('./static/img/suprise.jpg');

function App() {
  return (
    <div className="App">
      <LandingSection />
      <DayOfSection />
      <OurStorySection />
      <TownInfoSection />
      <div style={{
        backgroundImage: `url('${imagePath}')`,
        backgroundPositionX: 'right',
        backgroundPositionY: 'bottom',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '250px',
      }}>
      </div>
    </div>
  );
}

export default App;
