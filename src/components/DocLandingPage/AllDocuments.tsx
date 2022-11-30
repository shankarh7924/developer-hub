import React from 'react'
// import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './style.module.scss';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css'
import moduleStyles from './Card.module.scss';

type FeatureItem = {
  title: string;
  module: string;
  Svg: string;
  link?: string;
};
 
const BuildList: FeatureItem[] = [
    {
        title: 'Continuous Integration',
        module: 'ci',
        Svg: '/img/icon_ci.svg',
        link: '',
    },
    {
        title: 'Security Testing Orchestration',
        module: 'sto',
        Svg: '/img/icon_sto.svg',
        link: '',
    },
    {
        title: 'Chaos Engineering',
        module: 'ce',
        Svg: '/img/icon_ce.svg',
        link: '',
    }
];

 
const DeployList: FeatureItem[] = [
    {
        title: 'Continuous Delivery',
        module: 'cd',
        Svg: '/img/icon_cd.svg',
        link: '',
    },
    {
        title: 'Feature Flags',
        module: 'ff',
        Svg: '/img/icon_ff.svg',
        link: '',
    }
];

const ManageList: FeatureItem[] = [
    {
        title: 'Cloud Cost Management',
        module: 'ccm',
        Svg: '/img/icon_ccm.svg',
        link: '',
    },
    {
        title: 'Service Reliability Management',
        module: 'srm',
        Svg: '/img/icon_srm.svg',
        link: '/tutorials/run-chaos-experiments',
    },
];

const PlatformList: FeatureItem[] = [
    {
        title: '',
        module: '',
        Svg: '/img/harness_icon.svg',
        link: '',
    },
];
  
  function Feature({title, Svg, module, link = "#"}: FeatureItem) {
    return (
      <div className={`${moduleStyles.tutorialCard} ${moduleStyles[module]}`}> 
        <div className={moduleStyles.docsCard}>
          <img src={Svg}/>  
          <h5><Link to={link}>{title}</Link></h5>
        </div>
      </div>
    );
  }
  
  function ModuleCard(props): JSX.Element {
    return (
        <div className={moduleStyles.spaceBetween}>        
            {props.FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
        </div>
    );
  }

export default function GetStarted() {
  return ( 
      <div className="container">
        <div className={styles.topSection}>
            <div className={styles.moduleTitle}>
              <h1>All Documentation</h1>
            </div>  
            <p>
              Learn intelligent software delivery skills with step-by-step tutorials, interactive labs, videos and reference docs.
            </p>    
        </div>
        <div className={styles.subSection}>
            <div className={styles.SectionName}><h3>build & test</h3></div>
            <ModuleCard FeatureList={BuildList}/> 
        </div>
        <div className={styles.subSection}>
            <div className={styles.SectionName}><h3>deploy changes</h3></div>
            <ModuleCard FeatureList={DeployList}/> 
        </div>
        <div className={styles.subSection}>
            <div className={styles.SectionName}><h3>manage business impact</h3></div>
            <ModuleCard FeatureList={ManageList}/> 
        </div>
        <div className={styles.subSection}>
            <div className={styles.SectionName}><h3>Platform</h3></div>
            <ModuleCard FeatureList={PlatformList}/> 
        </div>
      </div>
  );
}
