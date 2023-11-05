import React from 'react'
import styles from './Body.module.css'
import { Download } from 'react-feather';
import Editor from '../Editor/Editor';
function Body() {
  const colors = [
     "#333333", 
     "#0066cc", 
     "#009900", 
     "#cc3333", 
     "#660066", 
     "#FF6600", 
];
// section objects
const sections= {
  basicInfo:"Basic Info",
  workEXP:"Work Experience",
  education:"Education",
  projects:"Projects",
  achievements:"Achievements",
  summary:"Summary",
  other:"Other",
}
  return (
    <div className={styles.container}>
      <p className={styles.heading}> </p>
      <span>Resume builder</span>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={styles.color}
            />
          ))}
        </div>
        <button className={styles.button}>
          <Download /> Download
        </button>
      </div>
      <div className={styles.main}>
        <Editor sections={sections} />
      </div>
    </div>
  );
}

export default Body