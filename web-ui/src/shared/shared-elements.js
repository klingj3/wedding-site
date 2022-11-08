import styled from 'styled-components';
export const colors = {
    cream: '#FCF5E5',
    charcoal: '#36454F',
    midnightblue: '#191970'
};

export const Section = styled.div`
  height: 100vh;
  min-height: 800px;
  width: 100%;  
  background-color: ${colors.cream};
`;

export const InnerSection = styled.div`
  margin: auto;
  max-width: 950px;  
`;

export const ImageBox = styled.img`
    border-radius: 5px;
    height: 500px;  
`;