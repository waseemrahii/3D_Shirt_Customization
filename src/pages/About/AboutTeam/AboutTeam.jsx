import React from "react";
import "./AboutTeam.css"; // Add a CSS file for styles that cannot be inline
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Sullivan",
    role: "Front End Developer",
    img: "https://quiety-vue.themetags.com/img/team-1.24ed415f.jpg",
  },
  {
    name: "Sarah Taylor",
    role: "UI/UX Designer",
    img: "https://quiety-vue.themetags.com/img/team-2.002cdbac.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Back End Developer",
    img: "https://quiety-vue.themetags.com/img/team-3.44ab67ca.jpg",
  },
  {
    name: "Emily Davis",
    role: "Project Manager",
    img: "https://quiety-vue.themetags.com/img/team-4.14667f7a.jpg",
  },
  {
    name: "David Brown",
    role: "QA Engineer",
    img: "https://quiety-vue.themetags.com/img/team-5.43093446.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Product Owner",
    img: "https://quiety-vue.themetags.com/img/team-6.66958711.jpg",
  },
  {
    name: "Olivia Jones",
    role: "Scrum Master",
    img: "https://quiety-vue.themetags.com/img/team-7.cd13549e.jpg",
  },
  {
    name: "James Smith",
    role: "DevOps Engineer",
    img: "https://quiety-vue.themetags.com/img/team-8.60c832d2.jpg",
  },
];

const AboutTeam = () => (
  <section
    id="our-team"
    className="teamSection"
    style={{ background: "whitesmoke" }}
  >
    <div className="container">
      <div className="rowCenter">
        <div className="colFull">
          <div className="sectionHeading">
            <h5 className="h6">Our Team</h5>
            <h2 className="h2">The People Behind Quiety</h2>
            <p className="p">
              Intrinsicly strategize cutting-edge before interoperable
              applications incubate extensive expertise through integrated
              intellectual capital.
            </p>
          </div>
        </div>
      </div>
      <div className="row office-row">
        {teamMembers.map((member, index) => (
          <div key={index} className="colQuarter">
            <div className="teamSingleWrap">
              <div className="teamImg">
                <img src={member.img} alt="team" className="img" />
                <ul className="teamSocialList ">
                  <li className="listItem ">
                    <a
                      href="https://www.linkedin.com/in/muhammad-wasim-557523224"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="" />
                    </a>
                  </li>
                  <li className="listItem">
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="listItem">
                    <a href="#">
                      <FaGithub />
                    </a>
                  </li>
                  <li className="listItem">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="teamInfo">
                <h5 className="h5 text-dark">{member.name}</h5>
                <p className="textMuted">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutTeam;
