import styled from 'styled-components';

export const colors = {
    cream: '#FCF5E5',
    charcoal: '#36454F',
    midnightblue: '#191970',
    backgroundblue: '#011419',
};

export const Section = styled.div`
  height: 100vh;
  min-height: 800px;
  background-color: ${colors.cream};
  padding: 15px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 10px; 
`;

export const ImageBox = styled.img`
    border-radius: 5px;
    height: 500px;  
`;
export const FittedSection = styled(Section)`
    height: fit-content;
    padding-top: 50px;
    padding-bottom: 50px;
`;

export const DarkFittedSection = styled(FittedSection)`
  background-color: ${colors.backgroundblue};
  color: ${colors.cream} !important;
`;

export const InnerSection = styled.div`
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
`;
export const SectionHeader = styled.h2`
    pre-wrap: none;
    margin: 0px;
    height: 70px;
`;
export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px; 
`;
export const Column = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: left; 
    margin-right: 40px;
`;