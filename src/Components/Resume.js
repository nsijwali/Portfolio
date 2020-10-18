import React, { useEffect, useState } from 'react';

function Resume({ data }) {
  const [skillmessage, setSkillmessage] = useState('');
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (data) {
      setSkillmessage(data.skillmessage);
      setEducation(data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      }))
      setWork(data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      }))
      setSkills(data.skills.map(function (skill) {
        let className = 'bar-expand ' + skill.name.toLowerCase();
        return <li key={skill.name}><span style={{ width: skill.level }} className={className}></span><em>{skill.name}</em></li>
      }))
    }
  }, [data])
  return (
    <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education}
            </div>
          </div>
        </div>
      </div>


      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {work}
        </div>
      </div>



      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{skillmessage}
          </p>

          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;