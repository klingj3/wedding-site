import {
    colors,
    Column,
    ColumnContainer,
    ImageBox,
    SectionHeader,
    FittedSection,
    InnerSection, DarkFittedSection
} from "../shared/shared-elements";
import styled from 'styled-components';

const DayOfStyledSection = styled(DarkFittedSection)`

    & h3 {
        text-align: center;
        font-size: 32px;
    }

    .map-link {
        font-weight: lighter;
    }
    
    p {
        font-size: 16px;
        line-height: 30px;  
        text-align: center;
    }
    
    .adr {
        font-style: italic;
        font-size: 18px;
    }
`;

const StyledButton = styled.button`
    background-color: #27254c;
    color: white;
    height: 22px;
    font-family: serif;
    height: 80px;
    font-size: 30px;
    border-radius: 5px;
    padding: 22px;
    cursor: pointer;
    
    &:hover {
        background-color: #666495;
    }
    
    transition: 0.3s;
`;

const StyledButton2 = styled(StyledButton)`
    color: #27254c;
    background-color: white;
`;

const ampipath = require("../static/img/camden-maine-amp.jpg");
const yachtpath = require("../static/img/camden-yacht-club.jpg");

export const DayOfSection = () => {
    return (
        <div>
            <DayOfStyledSection id={"ceremony"}>
                <SectionHeader>Ceremony & Reception</SectionHeader>
                <InnerSection>
                    <ColumnContainer>
                        <Column>
                            <h3>The Ceremony</h3>
                            <h3>4:00 PM</h3>
                            <p>
                                Camden Library Amphitheatre<br/> Camden, ME
                            </p>
                            <p className={"adr"}>
                                Located on Atlantic Street next to the Library
                            </p>
                            <ImageBox src={ampipath} style={{width: '100%', height: '282px', objectPosition: 'top'}}/>
                        </Column>
                        <Column>
                            <h3>The Reception</h3>
                            <h3>5:00 PM</h3>
                            <p>
                                Camden Yacht Club<br/> Camden, ME
                            </p>
                            <p className="adr">
                                68 Bay View St
                            </p>
                            <ImageBox src={yachtpath} style={{
                                width: '100%',
                                height: '282px',
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }}/>
                        </Column>
                    </ColumnContainer>
                    <div>
                        Guests are invited to join the bride and groom's families on a 10 minute walk between the two
                        locations.
                        <br/>
                        <br/>
                        For those who prefer to drive, parking near the Ampitheatre is typically available at a hidden
                        lot
                        entered just before 16 Atlantic Avenue, though this may be full in summer months. A small lot is
                        available to us at the Yacht Club.
                    </div>
                </InnerSection>
            </DayOfStyledSection>
        </div>

    )
};