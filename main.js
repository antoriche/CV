import { WordCloud } from "./WordCloud";
import "./style.css";
import data from "./data.json";
import * as d3 from "d3";

console.log("data", data);

const colorScale = d3
  .scaleOrdinal()
  .domain(["Development", "Data Science", "DevOps", undefined])
  .range(["#8a1414", "#006600", "#cc6600", "grey"]);

const wordcloud = WordCloud(data.skills, {
  word: (d) => d.name,
  size: (d) => d[0].level / 10,
  color: (d) => colorScale(d.category),
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  maxWords: 250,
  width: 300,
  height: 150,
  fontScale: 20,
});

console.log(wordcloud);
document.querySelector("#wordcloud").appendChild(wordcloud);
const legend = document.createElement("div");
legend.setAttribute("class", "legend");
legend.innerHTML = `
  ${colorScale
    .domain()
    .filter((d) => d)
    .map((d) => {
      return `
    <div class="legend-item">
      <div class="legend-color" style="background-color: ${colorScale(
        d
      )}"></div>
      <div class="legend-text">${d}</div>
    </div>
    `;
    })
    .join("")}
  `;
document.querySelector("#wordcloud").appendChild(legend);

function planMeeting(title, description, attendees) {
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedAttendees = encodeURIComponent(attendees.join(","));

  const meetingUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodedTitle}&details=${encodedDescription}&add=${encodedAttendees}&trp=true&sf=true&output=xml`;

  return meetingUrl;
}
document
  .querySelector("#book_meeting")
  .setAttribute(
    "href",
    planMeeting("Interview with Antonin Riche", "", ["antoriche.ar@gmail.com"])
  );
