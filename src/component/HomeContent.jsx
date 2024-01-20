import React from "react";
import styles from "./HomeContent.module.css";
import { Link } from "react-router-dom";
export default function HomeContent({ image, data }) {
  return (
    <div className={styles.content}>
      <div className="content">
        <div className={styles.image}>
          <img src={image} alt="hey" />
        </div>
        <div className={styles.detail}>
          <div>
            <h3>{data.name}</h3>
          </div>
          <div>
            <p>{data.description}</p>
          </div>
          <div>
            <p>{data.profession}</p>
          </div>
        </div>
        <div className={styles.AddProject}>
          <Link>
            <div className="icon">{/* {%ICON%} */} i</div>
            <h3>Add your Project</h3>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
}
