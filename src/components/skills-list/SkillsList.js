import React from 'react';
import './skillsList.scss';
// import {Menu} from "@mui/icons-material"

export default function SkillsList({title, active, setSelected, id}) {
  return (
    <li className= {active ? "skills_list active" : "skills_list"} onClick = {()=> setSelected(id)}>
      {title}
    </li>
  );
}
