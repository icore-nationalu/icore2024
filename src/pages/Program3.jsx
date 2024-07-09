import { Fragment, useState } from "react";
import Icon from "../components/Icon";
import ProgramListItem from "../components/ProgramListItem";
import TimeSchedule from "../components/TimeSchedule";
import ParallelSession from "../components/ParallelSession";
import PresenterTable from "../components/PresenterTable";
import parallelSessionsData from "../assets/data/parallel_sessions.json";
import samplePDF from "../assets/SamplePDF.pdf";

const Program2 = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDownloadProgram = async () => {
    const link = document.createElement("a");
    link.href = samplePDF;
    link.setAttribute("download", "PDF");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const dayOne = [
    {
      scheduleHeader: "Morning Session",
      schedules: [
        {
          time: "08:00 AM - 09:00 AM",
          event: "Registration",
        },
        {
          time: "09:00 AM - 10:10 AM",
          event: "Conference Inauguration & Special Messages",
          sub: [
            {
              title: "Welcome Remarks",
              speaker: "Dr. Vladimir Mariano",
              position: ["General Chair, iCORE 2024"],
            },
            {
              title: "Special Message",
              speaker: "Dr. Renato Carlos Ermita",
              position: ["President, National University Philippines"],
            },
            {
              title: "Special Message",
              speaker: "Dr. Jessie Barrot",
              position: [
                "AVP, Research & Development Office of National University",
              ],
            },
            { title: "Messages from University Partners" },
            { title: "Cultural Dance Presentation" },
          ],
        },
        {
          time: "10:10 AM - 10:30 AM",
          event: "Coffee Break and Raffle",
        },
        {
          time: "10:30 AM - 11:15 AM",
          event: "Keynote Address",
          sub: [
            {
              speaker: "Prof. Simon See",
              position: [
                "Professor, NTU, Coventry University and University of Newcastle",
                "Global Head Nvidia AI Technology Centre NVIDIA",
                "Executive Director of ASEAN Applied Research Centre, Professor",
              ],
            },
          ],
        },
        {
          time: "11:15 AM - 12:00 PM",
          event: "Keynote Address",
          sub: [
            {
              speaker: "Dr. Vladimir Mariano",
              position: [
                "Lead Faculty for Technology and Innovation",
                "YSEALI Academy of Fulbright University Vietnam",
              ],
            },
          ],
        },
        {
          time: "12:00 PM - 01:00 PM",
          event: "Lunch Break",
        },
      ],
    },
    {
      scheduleHeader: "Afternoon Session",
      schedules: [
        {
          time: "01:00 PM - 01:30 PM",
          event: "Industry Talk by Alibaba Cloud",
        },
        {
          time: "01:30 PM - 04:45 PM",
          event: "Parallel Sessions",
        },
        {
          time: "04:45 PM - 05:00 PM",
          event: "Day 1 Synthesis",
          sub: [{ title: "Session Chairs" }],
        },
      ],
    },
  ];
  const dayTwo = [
    {
      scheduleHeader: "Morning Session",
      schedules: [
        {
          time: "08:00 AM - 09:00 AM",
          event: "Registration",
        },
        {
          time: "09:00 AM - 12:15 PM",
          event: "Parallel Sessions",
        },
      ],
    },
    {
      scheduleHeader: "Afternoon Session",
      schedules: [
        {
          time: "01:30 PM - 02:15 PM",
          event: "Industry Talk: Google",
          sub: [
            {
              speaker: "Julian Salazar",
              position: [
                "Senior Research Scientist on Perception Team, Google Research",
              ],
            },
          ],
        },
        {
          time: "02:15 PM - 03:00 PM",
          event: "Industry Talk: IBM",
          sub: [
            {
              speaker: "Phaedra Boinodiris",
              position: ["Global Leader for Trustworthy AI, IBM Consulting"],
            },
          ],
        },
        {
          time: "03:00 PM - 03:20 PM",
          event: "Coffee Break",
        },
        {
          time: "03:20 PM - 03:45 PM",
          event: "SAS",
        },
        {
          time: "03:45 PM - 04:15 PM",
          event: "Awarding Ceremony",
          sub: [{ title: "Best Paper" }, { title: "8 Best Presentations" }],
        },
        {
          time: "04:15 PM - 04:30 PM",
          event: "Closing Keynote",
          sub: [
            {
              speaker: "Dr. Vladimir Mariano",
              position: ["General Chair, iCORE 2024"],
            },
          ],
        },
        {
          time: "04:30 PM - 05:00 PM",
          event: "Claiming of Certificates",
        },
      ],
    },
  ];
  return (
    <>
      <section id="program">
        <div className="header-wrapper">
          <span>Program</span>
          <h1 className="heading">Navigating Knowledge</h1>
          <p className="subheading">
            Keep in track of each session during the event ranging from morning
            to evening sessions.
          </p>
          {/* <div className="download">
            <span className=" btn-primary" onClick={handleDownloadProgram}>
              Download Program
            </span>
          </div> */}
        </div>
      </section>
      <section className="program2">
        <div className="wrapper">
          <div className="program-list">
            <ProgramListItem defaultActive={true} header="Day 1">
              {dayOne.map(({ scheduleHeader, schedules }, i) => {
                return (
                  <Fragment key={i}>
                    <p className="schedule-header">{scheduleHeader}</p>
                    <div className="schedule-wrapper">
                      {schedules.map(({ time, event, sub }, i) => {
                        return (
                          <TimeSchedule
                            key={i}
                            time={time}
                            event={event}
                            sub={sub}
                          ></TimeSchedule>
                        );
                      })}
                    </div>
                  </Fragment>
                );
              })}
            </ProgramListItem>

            <ProgramListItem defaultActive={true} header="Day 2">
              {dayTwo.map(({ scheduleHeader, schedules }, i) => {
                return (
                  <Fragment key={i}>
                    <p className="schedule-header">{scheduleHeader}</p>
                    <div className="schedule-wrapper">
                      {schedules.map(({ time, event, sub }, i) => {
                        return (
                          <TimeSchedule
                            key={i}
                            time={time}
                            event={event}
                            sub={sub}
                          ></TimeSchedule>
                        );
                      })}
                    </div>
                  </Fragment>
                );
              })}
            </ProgramListItem>
          </div>
        </div>
      </section>
    </>
  );
};
export default Program2;
