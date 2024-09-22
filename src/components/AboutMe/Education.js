import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import About from "./About";

export default function Education() {
  return (
    <>
      <About />
      <div className="education">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2017"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              St Marks High School, West Maredpally, Hyderabad
            </h3>
            <p> High School</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2019"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Sri Chaitanya Junior kalasala, WestMaredpally, Hyderabad
            </h3>

            <h4 className="vertical-timeline-element-subtitle">Intermediate</h4>

            <p> MPC </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2023"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Keshav Memorial Institute of Technology, Narayanaguda, Hyderabad
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Bachelor of Technology
            </h4>

            <p> Information Technology </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
