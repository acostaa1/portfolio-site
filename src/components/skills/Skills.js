import React, { useState, useEffect } from 'react';
import './skills.scss';
import SkillsList from '../skills-list/SkillsList';
import { proficient, learning } from '../../skillsInfo';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [selected, setSelected] = useState('proficient');

  const list = [
    {
      id: 'proficient',
      title: 'Proficient',
    },
    { id: 'learning', title: 'Learning' },
  ];

  useEffect(() => {
    switch (selected) {
      case 'proficient':
        setSkills(proficient);
        break;
      case 'learning':
        setSkills(learning);
        break;
      default:
        setSkills(proficient);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <h1>Technical Skills</h1>
      <ul>
        {list.map((item) => (
          <SkillsList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {skills.map((skill) => (
          <div className="item">
            <img src={skill.img} alt="" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
      <a href="#projects">
        <img src="portfolio_logos/arrow-down.png" alt="" />
      </a>
    </div>
  );
}
