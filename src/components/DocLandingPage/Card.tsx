import React from "react";
// import clsx from 'clsx';
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import styles from "./Card.module.scss";
import Link from "@docusaurus/Link";
import { FeatureItem } from "./AllTutorials";

function Feature({
  title,
  description,
  module,
  link = "#",
}: FeatureItem) {
  return (
    <Link
      to={link}
      className={`${styles.tutorialCard} ${styles[module]}`}
    >
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function Card(props): JSX.Element {
  return (
    <div className={styles.spaceBetween}>
      {props.FeatureList.map((props, idx) => (
            <Feature key={idx} {...props}/>
          ))}
    </div>
  );
}
