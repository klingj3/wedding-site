import {InnerSection, Section, colors, ImageBox} from "../shared/shared-elements";
import styled from 'styled-components';
import {MenuBar} from "../menu/MenuBar";

const ShortSection = styled(Section)`
    height: fit-content;
`;

const DayOfInnerSection = styled(InnerSection)`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    
    & img {
        margin-right: 20px;
    }
`;

const imagePath = require("../static/img/camden-harbor.jpg");

export const DayOfSection = () => {
    return <ShortSection>
        <DayOfInnerSection>
            <ImageBox src={imagePath} style={{height: '300px'}}/>
            <div>
                <h2 style={{preWrap: 'none'}}> Camden, Maine </h2>
            </div>
        </DayOfInnerSection>
    </ShortSection>
};