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
                    <img style={{height: '350px', width: 'auto'}} src={require("../static/img/carousel/01.jpg")} />
                </div>
                <div>
                    <img style={{height: '350px', width: 'auto'}} src={require("../static/img/carousel/02.jpg")} />
                </div>
                <div>
                    <img style={{height: '350px', width: 'auto'}} src={require("../static/img/carousel/03.jpg")} />
                </div>
                <div>
                    <img style={{height: '350px', width: 'auto'}} src={require("../static/img/carousel/04.jpg")} />
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
        font-size: 23px;
        line-height: 28px;
    }

    padding-bottom: 50px;

`;



export const OurStorySection = () => {
    return (<OurStoryStyledSection id={"ourStory"}>
        <SectionHeader>Our Story</SectionHeader>
        <InnerSection>
            <DemoCarousel />
        </InnerSection>
        <div>
            <br />
            <br />
            <p style={{maxWidth: '600px', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto'}}>
                Jake asked Molly on a date in the summer of 2012, where they went for a hike up Mt. Battie for a picnic.
                They continued dating through college(s) and a shared year off, before both graduating and moving to
                New York together in 2018.
                <br />
                <br />
                Jake proposed to Molly in Prospect Park in July 2021, and Molly will need to help me fill this section in. :)
            </p>
        </div>
    </OurStoryStyledSection>)
};