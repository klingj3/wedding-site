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
  position: relative; 
  top: 20px;
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

const LinkSpan = styled.div`
    
    & a {
    display: block;
    font-weight 800;
    text-decoration: none;
    margin: 14px;
    color:  ${colors.charcoal} !important;
    }
    
    & a:hover {
        text-decoration: underline;
        color: #0072bf !important;
        cursor: pointer;
    }
`;

const imagePath = require("../static/img/boat-backdrop.jpg");

const Link = ({destinationId, text}) => {
    return <LinkSpan>
        <a href={'#' + destinationId}>{text}</a>
    </LinkSpan>
};

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
                        will be held in Camden, Maine on
                    </p>
                    <Date>
                        June 10th 2023
                    </Date>
                    <p>
                        <br />
                        <br />
                        <br />
                        Guests are invited to look below for information on
                        <br/>
                        <br/>
                        <Link text="The Ceremony & Reception" destinationId="ceremony"/>
                        <Link text="Our Story" destinationId="ourStory" />
                        <Link text="Camden & Accommodations" destinationId="location"/>
                        <Link text="Things to Do in Maine" destinationId="thingsToDo" />
                    </p>
                </BorderBox>
            </Invitation>
        </div>
    </Section>
};