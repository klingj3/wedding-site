import {
    colors,
    Column,
    ColumnContainer,
    ImageBox,
    SectionHeader,
    FittedSection,
    InnerSection
} from "../shared/shared-elements";
import styled from 'styled-components';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const LimitedCol = styled(Column)`
    width: auto;
`;

const ImageBoxSmall = styled(ImageBox)`
    width: 300px;
    height: auto;
    margin-top: 1em;
`;

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel
            infiniteLoop
            autoplay={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight={true}
            >
                <div>
                    <img style={{height: '350px', width: 'auto'}} src={require("../static/img/carousel/09.jpg")} />
                </div>
                <div>
                    <img style={{height: '350px', width: 'auto'}} src={require("../static/img/carousel/05.jpg")} />
                </div>
                <div>
                    <img style={{height: '350px', width: 'auto'}} src={require("../static/img/carousel/06.jpg")} />
                </div>
                <div>
                    <img style={{height: '350px', width: 'auto'}} src={require("../static/img/carousel/07.jpg")} />
                </div>
                <div>
                    <img style={{height: '350px', width: 'auto'}} src={require("../static/img/carousel/08.jpg")} />
                </div>
            </Carousel>
        );
    }
};

const OurStoryStyledSection = styled(FittedSection)`
    & .carousel-root {
        width: 100%;
        max-width: 650px;
        margin-left: auto;
        margin-right: auto;
        background-color: ${colors.backgroundblue};
        border-radius: 5px;
    }
    

    & p {
        font-size: 18px;
        line-height: 28px;
    }

    padding-bottom: 50px;

`;



export const OurStorySection = () => {
    return (<OurStoryStyledSection id={"ourStory"}>
        <SectionHeader>Our Story</SectionHeader>
        <InnerSection  style={{maxWidth: '750px', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto'}}>
            <ColumnContainer style={{maxWidth: '100%'}}>
                    <p>

                We met all the way back in high school–in fact, I (Molly) clearly remember meeting Jake in my freshman year, hanging out after school! While we were not close friends then, our mutual friends (such as Hannah, our lovely officiant) brought us together throughout the years in passing. Our early memories together consist of working on the fall musical together (Molly working “Tech Crew” while Jake was on stage), nerdy watch parties of BBC shows, and the occasional hitching of a ride home.
                    </p>            </ColumnContainer>
            <ColumnContainer style={{maxWidth: '100%'}}>
                <LimitedCol>
                    <p>
                    It wasn’t until after Jake graduated high school that we truly connected, through the good fortune of close-in-proximity summer jobs. While I worked at my dock job in Camden harbor selling tickets for schooner daysails, Jake would take his breaks walking down by the water–leading to our first real chats, just the two of us. Jake asked me out right there on the docks, and we had our first date up on Mount Battie. We hiked up and had a picnic packed by Jake, looking over the harbor. We talked for hours and shared PB&Js and sparkling cider. Neither of us had our drivers license yet, so our parents had to drive us! Other first dates included going out to the Union Fair and going on the ferris wheel, and going to breakfast at the Bagel Cafe.
                    </p>

                </LimitedCol>
                <LimitedCol>
                    <ImageBoxSmall src={require("../static/img/carousel/02.jpg")} />
                    <ImageBoxSmall src={require("../static/img/carousel/01.jpg")} />
                </LimitedCol>
            </ColumnContainer>
            <ColumnContainer style={{maxWidth: '100%'}}>
                <LimitedCol>
                    <ImageBoxSmall src={require("../static/img/carousel/03.jpg")} />
                </LimitedCol>
                <LimitedCol>
                    <p>
                    Jake and I stayed together through college, each pursuing our interests and staying in touch with lots of texting, calls, and visits. We loved our summers at home together. Finally, we both graduated in 2018, and moved to NYC! Here we have found a beautiful neighborhood community that we love, new friends, and many new experiences.
                    </p>
                </LimitedCol>
            </ColumnContainer>
            <ColumnContainer style={{maxWidth: '100%'}}>
                <LimitedCol>
                    <p>
                In our nearly 11 years together we have experienced so much – it’s been a gift to experience the ups-and-downs of life alongside one another, learning and growing all the while. We’re so excited for all that’s to come!
                    </p>
                </LimitedCol>
            </ColumnContainer>
            <DemoCarousel />
        <div>
        </div>
        </InnerSection>
    </OurStoryStyledSection>)
};