import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import About from "./About";

export default function Work() {
  return (
    <>
      <About />
      <div className="work">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2022 - June 2022"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Developer Intern - Salesforce
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Virtual</h4>
            <p>
              Got working experience on the salesforce technology with
              experienced mentors.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Quality Engineer - Ivanti
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hyderabad, India
            </h4>
            <p>
              On campus placement, Internship starting from Jan 2023 followed by
              Full time
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
