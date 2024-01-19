import { useState } from "react";
import Icon from "../components/Icon";
import ProgramListItem from "../components/ProgramListItem";
import TimeSchedule from "../components/TimeSchedule";
import ParallelSession from "../components/ParallelSession";
import PresenterTable from "../components/PresenterTable";
import parallelSessionsData from "../assets/data/parallel_sessions.json";
import samplePDF from "../assets/SamplePDF.pdf";

const Program = () => {
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
  return (
    <>
      <section id="program">
        <div className="header-wrapper">
          <span>Program</span>
          <h1 className="heading">Navigating Knowledge</h1>
          <p className="subheading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maiores
            culpa debitis perspiciatis impedit molestiae officiis veniam placeat
            tempore quod, aut provident voluptate earum blanditiis iusto quasi
            mollitia repellat et.
          </p>
          <div className="download">
            <span className=" btn-primary" onClick={handleDownloadProgram}>
              Download Program
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="program-list">
            <ProgramListItem
              defaultActive={true}
              header="December 9, 2022 - Friday (Manila Time UTC+8) "
            >
              <div className="schedule-wrapper">
                <TimeSchedule
                  time="13:00 - 17:00"
                  schedule="Preparation & Connectivity Check via Virtual Platform"
                />
              </div>
            </ProgramListItem>

            <ProgramListItem
              defaultActive={true}
              header="December 10, 2022 - Saturday (Manila Time UTC+8)"
            >
              <div className="schedule-wrapper">
                <TimeSchedule time="9:00 - 9:05" schedule="Preliminaries" />
                <TimeSchedule time="9:20 - 9:35" schedule="Welcome Remarks">
                  <div className="content-wrapper">
                    <p className="content">Dr Irish Juanatas</p>
                    <p className="sub-content">
                      Session Chair, Far Eastern University
                    </p>
                  </div>
                </TimeSchedule>
                <TimeSchedule time="9:20 - 9:35" schedule="Break" />
                <TimeSchedule time="9:20 - 9:35" schedule="Poster Presentation">
                  <div className="content-wrapper">
                    <div className="presenters-grid">
                      {Array.from({ length: 5 }).map((v, i) => {
                        return (
                          <div key={i}>
                            <p className="content">Dr. Irish Juanatas</p>
                            <p className="sub-content">
                              Session Chair, Far Eastern University Diliman
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <PresenterTable data={data} />
                  </div>
                </TimeSchedule>
                <TimeSchedule time="9:20 - 9:35" schedule="Industry Workshop">
                  <div className="content-wrapper">
                    <div className="content">Trend Micro Philippines</div>
                  </div>
                </TimeSchedule>
              </div>
            </ProgramListItem>

            <ProgramListItem
              defaultActive={true}
              header="December 11, 2022 - Sunday (Manila Time UTC+8)"
            >
              <TimeSchedule time="9:20 - 9:35" schedule="Parallel Sessions">
                <div className="content-wrapper">
                  {parallelSessionsData &&
                    parallelSessionsData.map((v, i) => {
                      const { session_name, facilitators, papers } = v;
                      return (
                        <ParallelSession key={i} header={session_name}>
                          <div className="presenters-grid">
                            {facilitators.map((v, i) => {
                              const { facilitator_name, faciltator_desc } = v;
                              return (
                                <div key={i}>
                                  <p className="content">{facilitator_name}</p>
                                  <p className="sub-content">
                                    {faciltator_desc}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                          <PresenterTable data={papers} />
                        </ParallelSession>
                      );
                    })}
                </div>
              </TimeSchedule>
              <TimeSchedule time="9:20 - 9:35" schedule="Break" />
              <TimeSchedule
                time="9:20 - 9:35"
                schedule="Awarding and Closing Ceremonies"
              >
                <div className="content-wrapper">
                  <p className="content">Awarding of Certificates</p>
                  <div className="sub-content-wrapper">
                    <p className="content">Dr Irish Juanatas</p>
                    <p className="sub-content">
                      Session Chair, Far Eastern University
                    </p>
                  </div>
                </div>
                <div className="content-wrapper">
                  <p className="content">Closing Remarks</p>
                  <div className="sub-content-wrapper">
                    <p className="content">Dr Irish Juanatas</p>
                    <p className="sub-content">
                      Session Chair, Far Eastern University
                    </p>
                  </div>
                </div>
              </TimeSchedule>
            </ProgramListItem>
          </div>
        </div>
      </section>
    </>
  );
};
export default Program;
