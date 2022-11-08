import {InnerSection, Section, colors, ImageBox} from "../shared/shared-elements";
import styled from 'styled-components';
import {MenuBar} from "../menu/MenuBar";

const ShortSection = styled(Section)`
    height: fit-content;
`;

const DayOfInnerSection = styled(InnerSection)`
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    
    & .left {
        margin-right: 20px;
    }
    
    & .centered-descriptor {
        width: 650px;
        margin-left: auto;
        margin-right: auto;
    }
    
    & .centered-descriptor p {
        text-align: left;
    }
    
    padding-bottom: 20px;
`;

const SectionHeader = styled.h2`
    pre-wrap: none;
    margin: 0px;
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px; 
`;

const Column = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: left; 
    margin-right: 20px;
`;


const PriceText = styled.span`
    font-weight: lighter;
    font-style: italics;
`;

const imagePath = require("../static/img/camden-harbor.jpg");

export const DayOfSection = () => {
    return <ShortSection>
        <SectionHeader>The Location</SectionHeader>
        <DayOfInnerSection>
            <ImageBox src={imagePath} style={{width: '100%', objectFit: 'cover', objectPosition: 'top'}}/>
            <div className="centered-descriptor">
                <h3>
                    Camden, Maine
                </h3>
                <p>
                    The wedding is being held in Camden, Maine. This town, frequently called one of the most beautiful
                    in Maine and a continually popular tourist destination, is the middle point between Jake's home
                    of Rockport and Molly's home of Appleton.
                </p>
                <p>
                    Between the festivities, we hope that our guests will have time to take advantage of all
                    that this beautiful area has to offer!
                </p>
            </div>
            <ColumnContainer>
                <Column>
                    <h3>Accommodations</h3>
                    <p>
                        As a tourist destination, Camden and the neighboring towns have a number of hotels available.

                        June 10th is a little earlier than the typical tourist season, so hotels for this date should
                        be available for some time - though it's always best to book sooner so as to err on the side
                        of caution.
                    </p>
                    <ul>
                        <li>
                            <b>16 Bayview</b> - A modern hotel just a few minutes walk from the reception venue,
                            with a rooftop bar and in the center of town.
                            <PriceText>Last Check shows $360 / night for wedding weekend. </PriceText>
                        </li>
                        <li>
                            <b>Lord Camden Inn</b> - One of the larger hotels in Camden, on Main St and just a
                            few minutes walk from the venue.
                            <PriceText>Last Check shows $260 / night for wedding weekend. </PriceText>
                        </li>
                        <li>
                            <b>Cedar Crest Inn</b> - A smaller hotel a mile from the reception venue. Visiting
                                New Yorkers may call this a walkable distance to the venue, but busy street
                                makes this inadvisable at night.
                            <PriceText> Last Check shows $160 / night for wedding weekend. </PriceText>
                        </li>
                        <li>
                            <b>Ledges By The Bay</b> - Car / Taxi Required, 10 minutes driving from the venues.
                            A great little motel with nice water views.
                            <PriceText> Last check shows $150-$250 / night for wedding weekend. </PriceText>
                        </li>
                        <h4>
                            This list will be expanded as the wedding continues to get closer.
                        </h4>
                    </ul>
                 </Column>
                <Column>
                    <h3>Travel Options </h3>
                    <p>
                        Midcoast Maine has few public transportation options, so some personal transportation will
                        be necesary for most visitors. For arriving in the area, common options are:
                        <ul>
                            TBD!!!
                        </ul>
                    </p>
                </Column>
            </ColumnContainer>
        </DayOfInnerSection>
    </ShortSection>
};