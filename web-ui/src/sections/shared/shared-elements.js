import styled from 'styled-components';
export const colors = {
    cream: '#FCF5E5',
    charcoal: '#36454F',
    midnightblue: '#191970'
};

export const Section = styled.div`
  height: 100vh;
  width: 100%;  
  background-color: ${colors.cream};
`;

export const InnerSection = styled.div`
  margin: auto;
  padding: 50px;
  max-width: 950px;  
`;