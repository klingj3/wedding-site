import {
    Column,
    ColumnContainer,
    ImageBox,
    SectionHeader,
    FittedSection,
    InnerSection
} from "../shared/shared-elements";
import styled from 'styled-components';


const PriceText = styled.span`
    font-weight: lighter;
    font-style: italics;
     
     margin-left: 3px;
`;

const imagePath = require("../static/img/camden-harbor.jpg");

export const TownInfoSection = () => {
    return <FittedSection>
        <SectionHeader id="location">The Location</SectionHeader>
        <InnerSection>
            <ImageBox src={imagePath} style={{width: '100%', objectFit: 'cover', objectPosition: 'top'}}/>
            <div className="centered-descriptor">
                <h3>
                    Camden, Maine
                </h3>
                <p>
                    The wedding is being held in Camden, Maine. This town, frequently called one of the most beautiful
                    in Maine and a continually popular tourist destination, is the middle point between Jake's home
                    of Rockport and Molly's home of Appleton, and where they both worked in summers growing up.
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
                            <b>Camden Riverhouse Hotel and Inns</b> - Centrally located hotel with a pool.
                            <PriceText> Last Check shows $259 / night for wedding weekend. </PriceText>
                        </li>
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
                            Above are just the hotels we've had direct experience with or are especially convenient, but
                            there are many other great hotels in the area in the $130 - $300 range, generally getting
                            cheaper as you get farther from Camden.
                        </h4>
                    </ul>
                 </Column>
                <Column>
                    <h3>Recommended Restaurants</h3>
                    <p>
                        Camden has a lot of great restaurants and you will be hard-pressed to find a bad meal in town.
                        Some highlights include:
                    </p>
                    <ul>
                    <li>
                        <b>Long Grain</b> - Famous Camden Asian-Fusion Restaurant, one of the few places in town where
                        you'll probably need a reservation.
                    </li>
                    <li><b>B.O.W.A</b> - Faster and more casual spin-off of Long Grain</li>
                    <li><b>40 Paper</b> - Cocktails and Small Plates</li>
                    <li><b>French & Brawn</b> - Deli/Grocery in Camden for quick lunches and hotel snacks</li>
                    <li><b>The View Rooftop Bar</b> - Rooftop bar on top of 16 Bayview Hotel</li>
                    <li>
                        <b>Flatbread</b> - Just over the town line into Rockport, Flatbread is the best pizza in the
                        area! Maybe get some take-out and eat it in beautiful Rockport Harbor Park!
                    </li>
                    <li><b>Peter Ott's on the Water</b> - Best view in Camden and a varied menu.</li>
                    </ul>
                </Column>
            </ColumnContainer>
            <ColumnContainer id={"thingsToDo"}>
                <Column>
                    <h3>Hiking</h3>
                    <p>
                        Camden, Maine is a major tourist destination for a reason, and has lots to offer wedding guests
                        visiting from away.
                    </p>
                    <ul>
                        <li>
                            <b>Mt Battie</b> - Seen clearly from the Camden Yacht Club, Mt. Battie is where Jake and Molly had
                            their first date, and is one of the best hikes in the area! Going through the 
                            <a href="https://www.google.com/maps/place/Mount+Battie+Trail,+Camden,+ME+04843/@44.216913,-69.0687644,17z/data=!4m5!3m4!1s0x4cadd79c1ca2e471:0x38702733237e005!8m2!3d44.2198964!4d-69.0697944">
                                trail on the back side of the mountain
                            </a>
                            off Spring Street in Camden avoids any entrance fees to the park and is the best way to 
                            approach the mountain. Though the hike is just a brief half hour to an hour, it's contains
                            some extremely vertical sections and so is not recommended for families with young children.
                        </li>
                        <li>
                            <b>Maiden Cliff</b> - One of the more popular hikes in the area, Maiden Cliff offers a great
                            view of Megunticook Lake. This hike is roughly 2 miles up and is a pretty easy trail.
                        </li>
                        <li>
                            <b>Beauchamp Point</b> - A long flat road along the ocean with great views
                        </li>
                        <li>
                            <b>Rockland Breakwater</b> - About a 20 minute drive from Camden, Rockland Breakwater is
                            a walk along a mile-long granite breakwater out to a lighthouse.
                        </li>
                        <li>
                            <b>Beech Hill Preserve</b> - In Rockport, just a few minutes from Jake's old house, there's
                            a beautiful walk up Beech Hill, a large blueberry field-covered hill with an old stone
                            picnic house at the top. The treeless hill affords a beautiful view of the sea, and is one of the nicest walks in the area.
                        </li>
                    </ul>
                </Column>
            </ColumnContainer>
        </InnerSection>
    </FittedSection>
};