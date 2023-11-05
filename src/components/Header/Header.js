import React from 'react'
import styles from '../Header/Header.module.css'
import resumesvg from '../../assets/resume.svg'
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume builder</span>
        </p>
        <p className={styles.heading}>
          Make your Own Resume <span>It's Free to use</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumesvg} alt="resume"/>
      </div>
    </div>
  );
}

export default Header