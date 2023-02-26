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


export const RegistrySection = () => {
    return (
        <div>
            <DayOfStyledSection id={"registry"} style={{minHeight: "0"}}>
                <SectionHeader>RSVP & Registry</SectionHeader>
                <InnerSection>
                    <br/>
                    <p style={{fontSize: '22px'}}>
                        We kindly ask that all guests RSVP by April 10th. Due to Camden's being a popular tourist
                        destination, booking any accommodations before this time is likely necessary to secure a
                        place to stay.
                    </p>
                    <a  href="https://forms.gle/bSkTXSau12GJukxQ8" target="_blank">
                        <StyledButton>
                        Click to RSVP
                        </StyledButton>
                    </a>
                    <p>
                        Please just one response per party.
                    </p>
                    <br />
                    <p style={{fontSize: '22px'}}>
                        For guests who wish to contribute to our registry or Honeymoon Fund, see below
                    </p>
                    <a  href="https://registry.theknot.com/molly-kelley-jake-klingelhofer-june-2023-me/47784190" target="_blank">
                    <StyledButton2>
                        See Registry
                    </StyledButton2>
                    </a>
                </InnerSection>
            </DayOfStyledSection>
        </div>

    )
};