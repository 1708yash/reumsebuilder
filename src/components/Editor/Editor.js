import React from "react";
import styles from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";
import { X } from "react-feather";

function Editor(props) {
  const sections = props.sections;

  const [activeSectionKey, setActiveSectionKey] = React.useState(
    Object.keys(sections)[0]);

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg.Developer" />
        <InputControl label="Company Name" placeholder="Enter company name" />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter Certificate link"
        />
        <InputControl
          label="Location"
          placeholder="Enter the location eg. remote"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          placeholder="Enter start date"
          type="date"
        />
        <InputControl
          label="End Date"
          placeholder="Enter end date"
          type="date"
        />
      </div>
      <div className={styles.column}>
        <label>Enter the work Description</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg.Developer" />
        <InputControl
          label="Overview"
          placeholder="Enter basic overview of project"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployment link"
        />
        <InputControl label="GitHub Link" placeholder="Enter GitHub link" />
      </div>
      <div className={styles.column}>
        <label>Enter the work Description</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg B.Tech" />
        <InputControl
          label="College/School Name"
          placeholder="Delhi University"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          placeholder="Enter start date"
          type="date"
        />
        <InputControl
          label="End Date"
          placeholder="Enter end date"
          type="date"
        />
      </div>
      <div className={styles.column}>
        <label>Enter the work Description</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Name" placeholder="Enter your name" />
        <InputControl
          label="Domian of Work"
          placeholder="Your Domain eg. Front-end developer"
        />
      </div>
      <div className={styles.row}>
        <InputControl label="Phone" placeholder="Enter your phone number" />
        <InputControl label="Email" placeholder="Enter Your Email" />
      </div>
      <div className={styles.row}>
        <InputControl
          label="LinkedIn"
          placeholder="Enter your LinkedIn profile link"
        />
        <InputControl
          label="GitHub"
          placeholder="Enter your GitHub profile link"
        />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className={styles.detail}>
      <div className="styles.column">
        <label>Enter Your Achievements</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <label>Enter Your Objective/Summary</label>
      <InputControl placeholder="Your Objective/Summary" />
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <label>Other</label>
      <InputControl placeholder="Enter other description if required" />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workEXP:
        return workExpBody;
      case sections.projects:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievements:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl label="Title" placeholder="Enter section Title" />
        <div className={styles.chips}>
          <div className={styles.chip}>
            <p>Project1</p>
            <X size={12} />
          </div>
          <div className={styles.chip}>
            <p>Project2</p>
            <X size={12} />
          </div>
        </div>
        {generateBody()}
      </div>
    </div>
  );
}

export default Editor;
