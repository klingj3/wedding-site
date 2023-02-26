import './App.css';
import {LandingSection} from "./sections/Landing";
import {TownInfoSection} from "./sections/TownInfo";
import {OurStorySection} from "./sections/OurStory";
import {DayOfSection} from "./sections/DayOf";
import {RegistrySection} from "./sections/Registry";
import {FaqSection} from "./sections/FAQ";
import {Countdown} from "./decor/countdown";
import styled from 'styled-components';

const imagePath = require('./static/img/boat-backdrop.jpg');

const AppContainer = styled.div`
    background-image: url('${imagePath}');
    background-position-z: right;
    background-Position-y: bottom;
    background-size: cover;
    background-attachment: fixed;
    
    hr {
        opacity: 0.2;
    }
`;


function App() {
  return (
    <AppContainer className="App">
      <LandingSection />
      <DayOfSection />
      <OurStorySection />
      <RegistrySection />
      <TownInfoSection />
      <FaqSection />
      <Countdown />
    </AppContainer>
  );
}

export default App;
