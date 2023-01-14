import './App.css';
import {LandingSection} from "./sections/Landing";
import {TownInfoSection} from "./sections/TownInfo";
import {OurStorySection} from "./sections/OurStory";
import {DayOfSection} from "./sections/DayOf";
import {Countdown} from "./decor/countdown";

const imagePath = require('./static/img/boat-backdrop.jpg');

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
        <Countdown />
      </div>
    </div>
  );
}

export default App;
