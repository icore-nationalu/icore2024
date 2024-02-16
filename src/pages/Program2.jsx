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

  const data = {
    rowHeaders: ["TIME", "PAPER ID", "PAPER TITLE AND AUTHOR"],
    items: [
      {
        time: "10-00 - 10:15",
        paperID: "000",
        title:
          "Topic Modelling on Customer Feedback from an Online Ticketing System using Latent Dirichlet Allocation and BERTopic",
        author: "Charmaine Ponay",
      },
      {
        time: "10-00 - 10:15",
        paperID: "000",
        title:
          "Topic Modelling on Customer Feedback from an Online Ticketing System using Latent Dirichlet Allocation and BERTopic",
        author: "Charmaine Ponay",
      },
      {
        time: "10-00 - 10:15",
        paperID: "000",
        title:
          "Topic Modelling on Customer Feedback from an Online Ticketing System using Latent Dirichlet Allocation and BERTopic",
        author: "Charmaine Ponay",
      },
    ],
  };

  const dayOne = [
    {
      scheduleHeader: "Morning Session",
      schedules: [
        {
          time: "08:30 AM - 09:00 AM",
          schedule: "Registration and Welcome",
          caption:
            "Registration desk opens, attendees check-in, and networking.",
        },
        {
          time: "09:00 AM - 10:30 AM",
          schedule: "Opening Ceremony",
          caption:
            "Welcome address, introduction of keynote speakers, and official conference inauguration.",
        },
        {
          time: "10:30 AM - 12:00 PM",
          schedule: "Keynote Speeches",
          caption:
            "Insightful talks from industry experts, setting the tone for the conference.",
        },
        {
          time: "12:00 PM - 01:30 PM",
          schedule: "Lunch Break",
          caption: "Networking lunch for participants to interact and discuss.",
        },
      ],
    },
    {
      scheduleHeader: "Afternoon Session",
      schedules: [
        {
          time: "01:30 PM - 04:45 PM",
          schedule: "Parallel Sessions - Paper Presentations",
          caption:
            "Concurrent sessions featuring research paper presentations in various tracks.",
        },
      ],
    },
    {
      scheduleHeader: "Evening Program",
      schedules: [
        {
          time: "05:00 PM - 07:00 PM",
          schedule: "Networking Reception",
          caption:
            "Social event for participants to connect, share ideas, and build collaborations.",
        },
      ],
    },
  ];
  const dayTwo = [
    {
      scheduleHeader: "Morning Session",
      schedules: [
        {
          time: "09:00 AM - 10:30 AM",
          schedule: "Morning Keynote Address",
          caption: "Keynote speaker addressing pertinent topics in the field.",
        },
        {
          time: "10:30 AM - 12:00 PM",
          schedule: "Specialized Tracks - Panel Discussions",
          caption: "Parallel panel discussions on specific industry tracks.",
        },
        {
          time: "12:00 PM - 1:30 PM",
          schedule: "Lunch Break",
          caption: "Networking lunch and poster presentations.",
        },
      ],
    },
    {
      scheduleHeader: "Afternoon Session",
      schedules: [
        {
          time: "01:30 PM - 03:00 PM",
          schedule: "Industry Talks",
          caption:
            "Talks from industry leaders sharing insights and experiences.",
        },
        {
          time: "03:15 PM - 04:45 PM",
          schedule: "Poster Sessions and Exhibits",
          caption:
            "Poster presentations and exhibition showcasing innovative projects and products.",
        },
      ],
    },
    {
      scheduleHeader: "Closing Ceremony",
      schedules: [
        {
          time: "05:00 PM - 06:30 PM",
          schedule: "Closing Keynote",
          caption:
            "Final keynote speech summarizing key takeaways and future trends.",
        },
        {
          time: "06:30 PM - 07:30 PM",
          schedule: "Awards and Recognition",
          caption:
            "Acknowledgment of outstanding contributions, best paper awards, and recognition of sponsors.",
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
          <div className="download">
            {/* <span className=" btn-primary" onClick={handleDownloadProgram}> */}
            <span className=" btn-primary">Download Program</span>
          </div>
        </div>
      </section>
      <section className="program2">
        <div className="wrapper">
          <div className="program-list">
            <ProgramListItem defaultActive={true} header="Day 1: Opening Day">
              {dayOne.map(({ scheduleHeader, schedules }, i) => {
                return (
                  <Fragment key={i}>
                    <p className="schedule-header">{scheduleHeader}</p>
                    <div className="schedule-wrapper">
                      {schedules.map(({ time, schedule, caption }, i) => {
                        return (
                          <TimeSchedule
                            key={i}
                            time={time}
                            schedule={schedule}
                            caption={caption}
                          ></TimeSchedule>
                        );
                      })}
                    </div>
                  </Fragment>
                );
              })}
            </ProgramListItem>

            <ProgramListItem
              defaultActive={true}
              header="Day 2: Specialized Tracks and Closing Ceremony"
            >
              {dayTwo.map(({ scheduleHeader, schedules }, i) => {
                return (
                  <Fragment key={i}>
                    <p className="schedule-header">{scheduleHeader}</p>
                    <div className="schedule-wrapper">
                      {schedules.map(({ time, schedule, caption }, i) => {
                        return (
                          <TimeSchedule
                            key={i}
                            time={time}
                            schedule={schedule}
                            caption={caption}
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
