import styled from 'styled-components';
const MenuBarContainer = styled.div`
    font-family: serif;
    font-size: 30px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;

const MenuBarItem = styled.div`
    padding: 22px;
`;


export const MenuBar = ({items}) => {
    console.log(items);
    return <MenuBarContainer>
        {items.forEach((v) => <MenuBarItem>{v}</MenuBarItem>)}
    </MenuBarContainer>
};