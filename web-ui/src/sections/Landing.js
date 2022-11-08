import {InnerSection, Section, colors} from "../shared/shared-elements";
import styled from 'styled-components';
import {MenuBar} from "../menu/MenuBar";

const Names = styled.h1`
    margin: auto;
    height: 86px;
    font-family: "Herr Von Muellerhoff", "Benne", serif;
    font-weight: lighter;
    font-size: 86px;
`;

const Date = styled.h3`
  font-size: 60px;
  font-family: "Benne";
  line-height: 30px;
`;

const Invitation = styled.div`
  & h3 {
    margin: inherit;
    color: ${colors.charcoal};
  }

  &  p {
    color: ${colors.charcoal};
    font-family: "Benne";
    font-weight: lighter;
    font-size: 25px;  
    margin-top: 10px;
  }

@keyframes example {
  0% {transform: rotateX(5deg) rotateY(-10deg); filter: brightness(0.8); color: gold;}
  25% {transform: rotateX(0deg) rotateY(0deg); filter: brightness(1); color: darkgoldenrod;}
  50% {transform: rotateX(5deg) rotateY(10deg); filter: brightness(0.92); color: gold;}
  75% {transform: rotateX(0deg) rotateY(0deg); filter: brightness(1); color: darkgoldenrod;}
  100% {transform: rotateX(5deg) rotateY(-10deg); filter: brightness(0.92); color: gold;}
}
    
  opacity: 0.95;
  animation-name: example;
  animation-iteration-count: infinite;
  animation-duration: 10s;
  
  height: 40vh;
  max-width: 700px;
  min-width: 500px;
  min-height: 700px;
  background-color: ${colors.cream};
  margin: auto;
  padding: 30px;
  border-radius: 3px;
  
  transition: all .15s linear;
  transform-origin: center center;  

  box-shadow: 10px 14px 15px -1px rgba(0,0,0,0.54);
  filter: brightness(.95);
  
  &:hover {
      box-shadow: 15px 19px 15px -1px rgba(0,0,0,0.54);
  }
`;

const BorderBox = styled.div`
    height: 100%; width: 100%;
    border: 2px solid ${colors.charcoal};
`;

const imagePath = require("../static/img/boat-backdrop.jpg");


export const LandingSection = () => {
    return <Section style={{
        backgroundImage: `url('${imagePath}')`,
        backgroundPositionX: 'right',
        backgroundPositionY: 'bottom',
        backgroundSize: 'cover',
        display: 'flex',
    }}>
        <div style={{margin: '20px', width: '100%', marginTop: 'auto', marginBottom: 'auto'}}>
            <Invitation id="invitation">
                <BorderBox>
                    <h3 style={{marginTop: '20px'}}>
                        THE WEDDING OF
                    </h3>
                    <Names>
                        Jake Klingelhofer
                    </Names>
                    <h3>
                        and
                    </h3>
                    <Names style={{position: 'relative', bottom: '20px'}}>
                        Molly Kelley
                    </Names>
                    <p>
                        will he held in Camden, Maine on
                    </p>
                    <Date>
                        June 10th 2023
                    </Date>
                    <p>
                        <br />
                        <br />
                        <span style={{fontSize: '20px', fontWeight: 'lighter'}} >(Website in Development - Dates Not Final)</span>
                        <br />
                        <br />
                        <h3>SCHEDULE OF EVENTS</h3>
                        <p>
                        3 PM - Ceremony - Harbor Park Ampitheater
                        <br />
                        <br />
                        5 PM - Reception - Camden Yacht Club
                        </p>
                    </p>
                </BorderBox>
            </Invitation>
        </div>
    </Section>
};