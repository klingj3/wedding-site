import {InnerSection, Section} from "../shared/shared-elements";
import styled from 'styled-components';
import {MenuBar} from "../menu/MenuBar";

const Initials = styled.h2`
  font-size: 100px;
  font-family: serif;
`;

const Date = styled.h3`
  font-family: serif;
  font-size: 60px;
`;

const LandingInnerSection = styled(InnerSection)`
  & h3, h2 {
    margin: auto;
  }
`;

export const LandingSection = () => {
  return <Section>
      <LandingInnerSection>
      <Initials>
        Jake + Molly
      </Initials>
      <Date>
        06-10-2023
      </Date>
      <MenuBar items={[
          "Our Story",
          "Wedding Day Schedule",
          "Accommodations & Location",
          "Contact",
      ]}/>
    </LandingInnerSection>
  </Section>
};