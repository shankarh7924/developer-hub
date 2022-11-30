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
 
const CDBasics: FeatureItem[] = [
    {
        title: 'CD overview and key concepts',
        module: 'cd',
        description: (
            <>
                This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
            </>
        )
    },
    {
        title: 'CD Pipeline modeling overview',
        module: 'cd',
        description: (
            <>
                This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
            </>
        ),
    },
    {
        title: 'Services and Environments Overview',
        module: 'cd',
        description: (
            <>
            This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
            </>
        ),
    },
    {
        title: 'Services and Environments Overview',
        module: 'cd',
        description: (
            <>
            This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
            </>
        ),
    }
];

const ServiceList: FeatureItem[] = [{
  title: 'General Service Settings',
  module: 'cd',
  description: (
    <>
      This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
    </>
  ),
},
{
  title: 'Kubernetes',
  module: 'cd',
  description: (
    <>
      This topic describes how you use the Harness Continuous Delivery Abstraction Model.
    </>
  ),
}
];

const InfrastructureList: FeatureItem[] = [{
    title: 'Kubernetes',
    module: 'cd',
    description: (
      <>
        This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
      </>
    ),
  },
  {
    title: 'Terraform',
    module: 'cd',
    description: (
      <>
        This topic describes how you use the Harness Continuous Delivery Abstraction Model.
      </>
    ),
  },
  {
    title: 'Cloud Formation',
    module: 'cd',
    description: (
      <>
        Harness uses a Service-based license model to charge Harness customers using its Continuous Delivery module.
      </>
    ),
  }
];

const DeploymentsList: FeatureItem[] = [{
    title: 'Deployment Concepts and Strategies',
    module: 'cd',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Controlling Resource Usage with Barriers, Resource Constraints, and Queue Steps',
    module: 'cd',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Control Resource Usage with Queue Steps',
    module: 'cd',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Synchronize Parallel Stages and Step Groups using Barriers',
    module: 'cd',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Pipeline Resource Constraints',
    module: 'cd',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Deployment Logs and Limitations',
    module: 'cd',
    description: (
      <>
      </>
    ),
  },
];

const ExecutionList: FeatureItem[] = [{
    title: 'Deployment Concepts and Strategies',
    module: 'cd',
    description: (
      <>
        This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.
      </>
    ),
  },
  {
    title: 'Continuous Verification',
    module: 'cd',
    description: (
      <>
        This topic describes how you use the Harness Continuous Delivery Abstraction Model.
      </>
    ),
  }
  ];
  
export default function CD() {
  return (
      <div className="container">
        <div className={styles.topSection}>
          <div className={styles.spaceBetween}>
            <div className={styles.moduleTitle}>
              <img src="/img/icon_cd.svg"/>
              <h1>Continuous Delivery & GitOps</h1>
            </div>     
          </div>
              <p>
              Continuous Delivery & GitOps focuses on delivery and deployment of application and infrastructure changes in a safe and sustainable way. Your Continuous Delivery pipeline should automate all of the steps necessary to get your changes into production. 
              </p>    
        </div>
        <div className={styles.subSection}>
            <h2>Onboard with Continuous Delivery</h2>
            <p>This topic covers CD Pipeline basics to get you ready to start building Pipelines easily.</p>
          <h3>
            CD Basics
          </h3>
            <Card FeatureList={CDBasics}/>
        </div>
        <div className={styles.subSection}>
          <h2>
            Services
          </h2>
            <Card FeatureList={ServiceList}/>
        </div>
        <div className={styles.subSection}>
          <h2>
            Infrastructure
          </h2>
            <Card FeatureList={InfrastructureList}/>
        </div>
        <div className={styles.subSection}>
          <h2>
            Execution
          </h2>
            <Card FeatureList={ExecutionList}/>
        </div>
        <div className={styles.subSection}>
          <h2>
            Deployments
          </h2>
            <Card FeatureList={DeploymentsList}/>
        </div>
        <div className={styles.subSection}>
          <h2>
            Featured Tutorials
          </h2>
            <ModuleCard FeatureList={FeaturedList} featureCard={true}/>
        </div>
      </div>
  );
}