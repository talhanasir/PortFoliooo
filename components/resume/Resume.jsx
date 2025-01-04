import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Web Developer`,
    jobType: `Austin, TX | Remote`,
    jobDuration: `Jan 2023 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "CoVentech",
    jobDescription: `Work with UX to implement and manage all phases of application design from coding to deployment.

Responsibilities:
● Creating responsive UI components using JavaScript by following React.js front-end framework.
● Creating reusable React components using hooks and manage application state with Redux.
● Using JSON to make asynchronous API calls to the project server to fetch data on the fly.
● Using JEST testing framework to test react components.
● Transforming Sketch mockups to React components with Redux, Semantic-UI, and various libraries.
● Collaborating with the user experience team to design and then implemented cutting edge UI designs.
● Involved in Agile process, monthly Sprints, and daily Scrums to discuss the development.`,
  },
  {
    jobPosition: `Front-End Developer`,
    jobType: `Ashburn, VA | Remote`,
    jobDuration: `Oct 2020 - Dec 2022`,
    timeDuraton: `Full time`,
    compnayName: "SLAR LLC",
    jobDescription: `Developed and supported web applications using React.\nManaged all phases of application design from coding to deployment.\nWorked with the user experience team to implement cutting-edge UI designs.\n\nResponsibilities:\n● Worked within small development team using JavaScript/jQuery, HTML, SQL within the software.\n● Used React-Router to turn application into Single Page Application.\n● Wrote external CSS file, which linked to the HTML file to increase the traffic of the website.\n● Handled cross browser/platform compatibility issues in all modern web browsers.\n● Assisted BA/QA team with testing and requirement clarification when needed.\n● Used JIRA as tracking system for project tasks within each sprint.`,
  },
  {
    jobPosition: `System Engineer`,
    jobType: `Karachi, Pakistan | On-site`,
    jobDuration: `May 2019 - Oct 2020`,
    timeDuraton: `Full Time`,
    compnayName: "Feroze1888 Mills",
    jobDescription: ` Responsible for complete Maintenance & Troubleshooting of Printing & processing machines.
● Responsible for the assurance of Preventive Maintenance, Scheduling PM, Corrective actions
● Coordinated with erectors and oversee electrical erection and commissioning work.`,
  },
];

const educatonContent = [
  {
    passingYear: "2022-2024",
    degreeTitle: "Master's in Computer Science",
    instituteName: "University Of Illinois, Springfield",
  },
  {
    passingYear: "2014-2018",
    degreeTitle: "BS. in Electrical Engineering",
    instituteName: "FAST-National University",
  },
  
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section scrollSpysection">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${"/img/border-dark.png"})`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
