import React from 'react'
// import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './style.module.scss';
import Card from './Card';
import ModuleCard from './../LandingPage/ModuleCard';

enum docType {
  Documentation = 'doc',
  Interactive = 'interactive',
  Video = 'video',
}

type Item = {
    title: string;
    module: string;
    ribbon: boolean;
  //   Svg?: string;
    description: JSX.Element;
    type: docType[];
    time: string;
    link?: string;
  };

const FeaturedList: Item[] = [
    {
      title: 'Build Code',
      module: 'cd',
      description: (
        <>
          The deployment guides walk you through setting up a specific deployment using Harness, such as ECS, Kubernetes, and Helm. They are written to provide you with everything you need to learn how to model your CD process in Harness.
        </>
      ),
      ribbon: true,
      type: [docType.Documentation, docType.Interactive, docType.Video],
      time: '15 min',
      link: '/tutorials/deploy-services/helm-argocd-gitops-k8s',
    },
    {
      title: 'Manage Features',
      module: 'cd',
      description: (
        <>
          The deployment guides walk you through setting up a specific deployment using Harness, such as ECS, Kubernetes, and Helm. They are written to provide you with everything you need to learn how to model your CD process in Harness.
        </>
      ),
      ribbon: false,
      type: [docType.Documentation, docType.Interactive],
      time: '8 min',
      link: '/tutorials/deploy-services/cdce-helm-k8s',
    },
];

type FeatureItem = {
  title: string;
  module: string;
  description: JSX.Element;
};
 
const ConceptsBasics: FeatureItem[] = [
    {
        title: 'Delegate Overview',
        module: 'ci',
        description: (
            <>
                This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
            </>
        )
    },
    {
        title: 'Input Sets and Overlay',
        module: 'ci',
        description: (
            <>
                This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
            </>
        ),
    },
    {
        title: 'Templates Overview',
        module: 'ci',
        description: (
            <>
            This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
            </>
        ),
    },
    {
        title: 'Organizations & Projects Overview',
        module: 'ci',
        description: (
            <>
            This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
            </>
        ),
    },
    {
        title: 'Authentication Overview',
        module: 'ci',
        description: (
            <>
            This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
            </>
        ),
    },
    {
        title: 'Harness Secrets Manangement',
        module: 'ci',
        description: (
            <>
            This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
            </>
        ),
    }
];

const QuickstartsList: FeatureItem[] = [{
  title: 'Harness YAML Quickstarts',
  module: 'ci',
  description: (
    <>
      This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
    </>
  ),
},
{
  title: 'Harness Policy As Code Quickstarts',
  module: 'ci',
  description: (
    <>
      This topic describes how you use the Harness Continuous Delivery Abstraction Model.
    </>
  ),
},
{
  title: 'Harness Terraform Provider Quickstarts',
  module: 'ci',
  description: (
    <>
      This topic describes how you use the Harness Continuous Delivery Abstraction Model.
    </>
  ),
}
];

const HowList: FeatureItem[] = [{
    title: 'Kubernetes',
    module: 'ci',
    description: (
      <>
        This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
      </>
    ),
  },
  {
    title: 'Terraform',
    module: 'ci',
    description: (
      <>
        This topic describes how you use the Harness Continuous Delivery Abstraction Model.
      </>
    ),
  },
  {
    title: 'Cloud Formation',
    module: 'ci',
    description: (
      <>
        Harness uses a Service-based license model to charge Harness customers using its Continuous Delivery module.
      </>
    ),
  }
];

const ReferenceList: FeatureItem[] = [{
    title: 'Kubernetes',
    module: 'ci',
    description: (
      <>
        This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
      </>
    ),
  },
  {
    title: 'Continuous Verification',
    module: 'ci',
    description: (
      <>
        This topic describes how you use the Harness Continuous Delivery Abstraction Model.
      </>
    ),
  }
];
  
export default function platform() {
  return (
      <div className="container">
        <div className={styles.topSection}>
          <div className={styles.spaceBetween}>
            <div className={styles.moduleTitle}>
              <img src="/img/logo.svg"/>
              <h1>Platform Documentation</h1>
            </div>     
          </div>
              <p>
                Continuous Delivery focuses on delivery and deployment of any sort of change or new feature in a safe and sustainable way. Your Continuous Delivery Pipeline focuses on all of the steps to get your changes into production. 
              </p>    
        </div>
        <div className={styles.subSection}>
            <h2>Platform Concepts</h2>
            <p>This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.</p>
            <Card FeatureList={ConceptsBasics}/>
        </div>
        <div className={styles.subSection}>
          <h3>
            Platform Quickstarts
          </h3>
            <Card FeatureList={QuickstartsList}/>
        </div>
        <div className={styles.subSection}>
          <h3>
            Platform How-to
          </h3>
            <Card FeatureList={HowList}/>
        </div>
        <div className={styles.subSection}>
          <h3>
            Platform Technical Reference
          </h3>
            <Card FeatureList={ReferenceList}/>
        </div>
        <div className={styles.subSection}>
          <h3>
            Tutorials
          </h3>
            <ModuleCard FeatureList={FeaturedList} featureCard={true}/>
        </div>
      </div>
  );
}