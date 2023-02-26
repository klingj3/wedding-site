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


const questions = [
  {
    "question": "What’s the best way to RSVP?",
    "answer": "We will have an online RSVP option on our website, as well as the classic snail mail route. Please let us know as soon as you can if you plan to celebrate with us!\n\nRSVP Deadline: April 10th"
  },
  {
    "question": "Where will the wedding be held?",
    "answer": "Our ceremony will take place at the Camden Library Amphitheatre. The Library's official address is 55 Main St., and the park is off of the adjacent Atlantic Avenue.\n\nOur reception will be a 10 minute walk through town at the Camden Yacht Club: 68 Bay View St."
  },
  {
    "question": "What will the wedding-day timeline look like?",
    "answer": "Thank you for helping us celebrate our very special day!\n\n4pm: Ceremony at the Camden Library Amphitheatre\n\n5pm: Cocktail hour and jazz at the Camden Yacht Club\n\n6pm: Dinner in the Tent\n\n7pm: Dancing and Dessert!\n\n9:45pm: Last dance and sparklers on the front lawn"
  },
  {
    "question": "I’m visiting from out of town. What can I do while I’m in Camden?",
    "answer": "Camden and the surrounding area is full of fun things to do, as it’s chock full of great hikes, boating, art galleries, and wonderful restaurants. Check out our website’s “Things to Do” section for inspiration!"
  },
  {
    "question": "Are children welcome?",
    "answer": "Yes! We’re lucky that there are many special kids in our lives that we’d love to celebrate with. Please feel welcome to celebrate with us as a family. \n\nAs a heads up, the ceremony location is very kid friendly, in a library park. Our following reception will be at the yacht club, right on the water. Like the downtown Camden harbor, the edge of the lawn has no railing and is directly over deep water, so extra parental supervision will be necessary here around the front lawn and dock area."
  },
  {
    "question": "Can I take pictures?",
    "answer": "We are so excited to have an amazing photographer to document our very special day. We want our ceremony to be “unplugged” and cell phone free so we can all stay in the moment together. We’re asking guests to please put away phones and cameras and stay present with us. We’ll be sure to share our photos with everyone after the wedding! Thanks so much in advance."
  },
  {
    "question": "What should I wear?",
    "answer": "Our dress code is semi-formal."
  },
  {
    "question": "What is June in Maine like?",
    "answer": "Maine in June is… full of surprises! Our wedding weekend could be hot, cold, rainy–or anything in between! We will be right on the water, meaning that it may be chilly or breezy. To stay comfortable for the festivities, please plan to bring a layer such as a sweater, jacket, or shawl in case you’re chilly. You may also want to have an umbrella handy if it rains, sunglasses for the sun, or bug spray for pesky blackflies."
  },
  {
    "question": "Is there parking available at the wedding venue?",
    "answer": "Yes! While our ceremony and reception are located right in downtown Camden, there is free parking available if you prefer. At our ceremony location, the Camden Library Amphitheatre, there is a small, free parking lot to the right of the park, right off Atlantic Avenue.\n\nOur reception location, the Camden Yacht Club, also has a small parking lot that you may use: (68 Bay View St., Camden, ME 04843).  The town of Camden also has another large parking lot behind the Camden Police Department: 31 Washington St. Camden, ME 04843.\n\nIf you’re staying downtown and walking from venue to venue, prepare for about a 10 minute stroll from ceremony to reception. Our families will lead guests in walking together down to the reception and cocktail hour after the ceremony."
  },
  {
    "question": "The ceremony is outside– what happens if it rains?",
    "answer": "A little drizzle won’t stop us– bring an umbrella! If we have a total rain-out, we will hold our ceremony at our reception space– the Camden Yacht Club."
  },
  {
    "question": "What type of food and drink will be served during the cocktail hour and reception?",
    "answer": "At cocktail hour, we will be serving an array of fruits and veggies, dips, and crackers.\n\nOur following dinner will be family style, involving breads, a salad, and vegan dishes (including gluten free options). Then, we’ll celebrate with cake and desserts!\n\nOur bar offerings will include local beer and wine, as well as non-alcoholic beverages and soda."
  },
  {
    "question": "What health and safety measures will you be taking during the event?",
    "answer": "If you are planning on attending, we ask that you please test for COVID-19 before arriving. While we will miss you, we ask that you stay home if you are feeling unwell. Thank you for helping us keep our wedding as safe as possible for everyone!"
  },
  {
    "question": "My question isn't listed!",
    "answer": "If there's anything else you want to know, just send an email to Jake (  jkklingelhofer@gmail.com  ) or" +
        " Molly (  molly.kelley10@gmail.com  ) and we'll help you find an answer!"
  }
]


export const FaqSection = () => {
    return (
    <div>
        <FittedSection style={{paddingBottom: "30px"}}>
            <SectionHeader id="faq">Common Questions</SectionHeader>
            <br/>
            <InnerSection style={{textAlign: 'left', maxWidth: '800px'}}>
                {
                    questions.map((q, i) => <div>
                        <h3>{q.question}</h3>
                        {<p style={{whiteSpace: 'pre-wrap'}}>{q.answer}</p>}
                        {i !== questions.length -1 && <hr />}
                    </div>)
                }
                <br />
            </InnerSection>
        </FittedSection>
    </div>)
};