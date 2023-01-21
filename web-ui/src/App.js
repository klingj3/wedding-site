import './App.css';
import {LandingSection} from "./sections/Landing";
import {TownInfoSection} from "./sections/TownInfo";
import {OurStorySection} from "./sections/OurStory";
import {DayOfSection} from "./sections/DayOf";
import {Countdown} from "./decor/countdown";
import styled from 'styled-components';

const imagePath = require('./static/img/boat-backdrop.jpg');

const AppContainer = styled.div`
    
        background-image: url('${imagePath}');
        background-position-z: right;
        background-Position-y: bottom;
        background-size: cover;
        background-attachment: fixed;
        margin-bottom: -15px;
`;


function App() {
  return (
    <AppContainer className="App">
      <LandingSection />
      <DayOfSection />
      <OurStorySection />
      <TownInfoSection />
        <Countdown />
    </AppContainer>
  );
}

export default App;
