import {
    Column,
    ImageBox,
    SectionHeader,
    FittedSection,
    InnerSection, LinkSpan
} from "../shared/shared-elements";
import styled from 'styled-components';
import React, {useState} from "react";


const PriceText = styled.span`
    font-weight: lighter;
    font-style: italics;
     
     margin-left: 3px;
`;

const OptionContainer = styled.div`
    display: inline-flex;
    margin-left: auto;
    margin-right: auto;
    
    & a {
    }
    
    & a:hover {
    }
`;

const Option = styled(LinkSpan)`
     ${props => props.active && `
        text-decoration: underline;
    `};
    
  opacity: 0;
  transition: opacity 0.6s ease-out;
     ${props => props.delay && `
        transition-delay: ${props.delay}s;
    `};
  &.is-visible {
      opacity: 1;
    }
     
`;

const ActivitySection = styled(Column)`
     ${props => props.visible && `
        display: block;
    `};
    ${props => !props.visible && `
        display: none;
    `};
`;

const ActivitySectionContainer = styled.div`
    max-width: 700px;
    min-height: 100px;
    margin-left: auto;
    margin-right: auto;
`;

const imagePath = require("../static/img/camden-harbor.jpg");

export const TownInfoSection = () => {
    const [isVisible, setVisible] = React.useState(false);
      const domRef = React.useRef();
      React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setVisible(isVisible || entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
      }, []);
    const [activeSection, setActiveSection] = useState(null);

    return (
    <div>
        <FittedSection style={{paddingBottom: "30px"}}>
            <SectionHeader id="location">The Location</SectionHeader>
            <InnerSection>
                <ImageBox src={imagePath} style={{width: '100%', objectFit: 'cover', objectPosition: 'top', marginTop: '40px'}}/>
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
                <span style={{fontStyle: "italic", position: "relative", marginTop: '20px', top: '10px', }}>
                    Click for Information On
                </span>
                <br />
                <OptionContainer>
                    <div onClick={() => setActiveSection("accommodations")}>
                        <Option active={activeSection === "accommodations"} delay={"0.20"}
                          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                          ref={domRef}
                        >
                            <a>Accommodations</a>
                        </Option>
                    </div>
                    <div onClick={() => setActiveSection("restaurants")}>
                        <Option active={activeSection === "restaurants"}  delay={"0.55"}
                          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                          ref={domRef}>
                            <a>Restaurants</a>
                        </Option>
                    </div>
                    <div onClick={() => setActiveSection("activities")}>
                        <Option active={activeSection === "activities"}  delay={"0.85"}
                          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                          ref={domRef}>
                            <a>Activities</a>
                        </Option>
                    </div>
                    <div onClick={() => setActiveSection("transportation")}>
                        <Option active={activeSection === "transportation"}  delay={"1.15"}
                          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                          ref={domRef}>
                            <a>Transportation</a>
                        </Option>
                    </div>
                </OptionContainer>
                <ActivitySectionContainer>
                    <ActivitySection visible={activeSection === "accommodations"}>
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
                     </ActivitySection>
                    <ActivitySection visible={activeSection === "restaurants"}>
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
                    </ActivitySection>
                    <ActivitySection visible={activeSection === "activities"}>
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
                    </ActivitySection>
                    <ActivitySection visible={activeSection === "transportation"}>
                            <h3>By Plane</h3>
                        <p>
                            These days, I find <a href={"https://www.kayak.com/flights/JFK-PWM,RKD,BGR/2023-06-09/2023-06-12?sort=bestflight_a&fs=airports=AUG,OR7,PWM,RKD,BGR,G6L,JFK"}>
                                Kayak</a> to be the best way to find deals on flights, as it allows you to select multiple
                            possible origin and destination airports. <a href={"https://www.kayak.com/flights/JFK-PWM,RKD,BGR/2023-06-09/2023-06-12?sort=bestflight_a&fs=airports=AUG,OR7,PWM,RKD,BGR,G6L,JFK"}>
                            This link </a> is pre-filled for the wedding weekend dates and possible destination airports,
                            updating your search with your preferred origin airport(s) is a great way to make travel plans.

                            <br/><br/>
                            However, while the above may be the best way of finding deals on flights, with all the
                            issues facing airlines recently booking directly with the airline, rather than through
                            Kayak's 3rd party vendors, is the safest option for the possible need of refunds or flight changes.
                        </p>
                        <ul>
                            <li>
                                <b>Portland International Jetport (PWM)</b> - For most guests coming from away, this
                                will be your most common point of entry. Maine's largest airport, PWM has direct flights
                                daily from most major cities on the east coast and in the midwest. In my experience, 
                                JetBlue tends to have the most reliable service and typically the cheapest prices
                                flying into Portland.
                                <br />
                                Hertz, Avis, and Enterprise car rental are all available at the airport, with Camden
                                being about 1 Hr 45 Minutes away.
                            </li>
                            <li>
                                <b>Knox County Regional Airport (RKD)</b> - There is a very small regional airport 
                                in Rockland, about 20 minutes from Camden. This airport only takes the sedan-sized
                                6-seater planes flown by Cape Air, typically from Boston connections. Normally this
                                is a fair bit more expensive than flying to Portland, but is an option worth looking at
                                if you are not scared by small planes and want to cut down on your driving time.
                                <br />
                                There are some small car rental options available, but at this distance you'll
                                likely be fine just taxi-ing into the city.
                            </li>
                            <li>
                                Augusta State Airport and Bangor International Airport are two other regional airports
                                roughly an hour from Camden that may be worth looking at, but neither are likely to
                                be the best option.
                            </li>
                        </ul>
                        <h3> By Bus </h3>
                        <ul>
                            <li>
                                <b>Concord Coach</b> - Concord Coach busses are always really comfortable and reliable,
                                and with the current unreliability of air travel may be a faster and more convenient
                                way of getting to Maine. Routes which may be helpful are:
                                <ul>
                                    <li>
                                        <b> NYC -> Portland </b> - When going from NYC to Maine, I always prefer the
                                        Concord Coach to flying. These busses are extremely spacious and comfortable,
                                        with tons of legroom and deep reclining seats. Tickets are just $70 each way,
                                        and without the need for early arrival or security is competitive time-wise
                                        with flying. Just make sure to book in advance, as these do sell out regularly.
                                    </li>
                                    <li>
                                        <b> Boston -> Portland </b> - If you're finding cheap flights to Boston
                                        but not to Portland, Concord coach does hourly pickups from all terminals
                                        at the Boston airport, and can take you straight from there to Portland.
                                    </li>
                                </ul>
                                For either of the above, you'll need to Uber/Taxi the 10 minute trip to the airport to
                                rent a car. As an alternative to renting a car,
                                <ul>
                                    <li>
                                        <b> Portland -> Camden </b> - The bus can bring you from the Portland Bus Terminal to Camden itself.
                                        Unfortunately, the drop-off point is about a mile outside of downtown
                                        so some Taxi use will still be required. However, this bus does not run frequently,
                                        typically just once or twice a day during the summer.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </ActivitySection>
                </ActivitySectionContainer>
            </InnerSection>
        </FittedSection>
    </div>)
};