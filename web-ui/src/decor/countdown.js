import styled from 'styled-components';
import {InnerSection, Section, colors, FittedSection} from "../shared/shared-elements";

const CountdownContainer = styled.div`
& {
  align-items: center;
  color: white;
  font-family: "Benne",
    sans-serif;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
}

& .inner {
}

& .container {
  color: #333;
  margin: 0 auto;
  text-align: center;
}

& h1 {
  font-weight: normal;
  letter-spacing: .125rem;
  text-transform: uppercase;
}

& li {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
}

& li span {
  display: block;
  font-size: 4.5rem;
}

& ul {
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
}
`;

export const Countdown = () => {

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let weddingDay = "06/10/2023";

    const countDown = new Date(weddingDay).getTime();
    const x = setInterval(function () {

        const now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
            document.getElementById("headline").innerText = "We're getting married!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
        }
        //seconds
    }, 1000)

    return (
        <CountdownContainer id="countdown">
            <div class="inner">
                <ul>
                    <li><span id="days"></span>days</li>
                    <li><span id="hours"></span>Hours</li>
                    <li><span id="minutes"></span>Minutes</li>
                    <li><span id="seconds"></span>Seconds</li>
                </ul>
            </div>
        </CountdownContainer>
    )
};