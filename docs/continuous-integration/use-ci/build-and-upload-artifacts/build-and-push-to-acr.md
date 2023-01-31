---
title: Build and Push to ACR
description: This topic provides settings to Build and Push an image to Azure Container Registry (GCR).
tags: 
   - helpDocs
sidebar_position: 30
---

This topic provides settings to build and push an image to [Azure Container Registry](https://azure.microsoft.com/en-us/free/container-registry/) (ACR).

:::note
This step is supported on Kubernetes build infrastructures only.
:::

### Before You Begin

* [CI Pipeline Quickstart](../../ci-quickstarts/ci-pipeline-quickstart.md)
* [Delegates Overview](/docs/platform/2_Delegates/get-started-with-delegates/delegates-overview.md)
* [CI Stage Settings](../../ci-technical-reference/ci-stage-settings.md)
* [Learn Harness' Key Concepts](../../../getting-started/learn-harness-key-concepts.md)

### Workflow 

1. In your Harness Pipeline, click **Add Stage**, and then click Build.

2. Specify the [Codebase](/docs/continuous-integration/use-ci/codebase-configuration/create-and-configure-a-codebase.md) you want to build.
   
3. Set up your [Build Infrastructure](docs/category/set-up-build-infrastructure). 

4. Add the Build and Push Step: In the stage's Execution, select **Build and Push to GCR**.

5. Configure the step as described in the following section. 

6. Build the pipeline and view the results. 


### Step Parameters

#### Name

The unique name for this Step.

#### Azure Connector

The Harness GCP Connector to use to connect to GCR. GCP account associated with the GCP Connector needs specific roles.

See [Connect to an Artifact Repo](/docs/platform/7_Connectors/connect-to-an-artifact-repo.md).

#### Repository

The target repository where you want to push your artifacts. This field needs to be in the format:

     `$CONTAINER_REGISTRY_NAME.azure.io/$IMAGE_NAME`


#### Subscription Id

Name or ID of your ACR subscription. To configure the default subscription, enter the following CLI command:  `az account set -s NAME_OR_ID`

You need to specify the subscription ID if you want to see your artifact in the **Artifacts** tab of the Build UI. 

<!-- TBD need more info. When would you want to specify this? What is it useful for? -->

###  Tags

 [Docker build tag](https://docs.docker.com/engine/reference/commandline/build/#tag-an-image--t) (`-t`). Add each tag separately.


##### Tags

The [Docker build tag](https://docs.docker.com/engine/reference/commandline/build/#tag-an-image--t) \(--target\).

Each tag should be added separately.

##### Option: Add a Tag using Harness Expression

You can tag the image in any way, but a Harness expression can be very useful.

The `<+pipeline.sequenceId>` is a built-in Harness variable. It represents the Build ID number, such as Build ID: 9. You can then use the same tag in another stage to reference the same build with its tag.

### Optional configuration

#### Optimize 

<!-- TBD Need more info. Tooltip says "Enables redo snapshot mode" which is kind of cryptic.... -->

##### Dockerfile

Enter the path of the Dockerfile. If you don't provide a name, Harness assumes the Dockerfile is in the root folder of the codebase.

##### Context

Enter a path to a directory containing a Dockerfile.

##### Labels

[Docker object labels](https://docs.docker.com/config/labels-custom-metadata/) to add metadata to the Docker image.

##### Build Arguments

The [Docker build-time variables](https://docs.docker.com/engine/reference/commandline/build/#set-build-time-variables---build-arg) (--build-arg).

##### Target

The [Docker target build stage](https://docs.docker.com/engine/reference/commandline/build/#specifying-target-build-stage---target) (--target).

For example, build-env.

#### Remote Cache Image

Harness enables remote Docker Layer Caching where each Docker layer is uploaded as an image to a Docker repo you identify. If the same layer is used in later builds, Harness downloads the layer from the Docker repo.

This is different from other CI vendors that are limited to local caching and persistent volumes.

You can also specify the same Docker repo for multiple Build and Push steps, enabling them to share the same remote cache.

Remote Docker Layer Caching can dramatically improve build time by sharing layers across Pipelines, Stages, and steps.

Enter the name of the remote cache image (for example, `gcr.io/project-id/<image>`).

The Remote Cache Repository must be in the same account and organization as the build image. For caching to work, the entered image name must exist.

#### Run as User

Set the value to specify the user id for all processes in the pod, running in containers. See [Set the security context for a pod](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod).

##### Set container resources

Maximum resources limit values for the resources used by the container at runtime.

##### Limit Memory

Maximum memory that the container can use.

You can express memory as a plain integer or as a fixed-point number using suffixes G or M. You can also use the power-of-two equivalents Gi or Mi.

##### Limit CPU

See [Resource units in Kubernetes](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes).

Limit the number of cores that the container can use.

Limits for CPU resources are measured in CPU units.

Fractional requests are allowed. The expression 0.1 is equivalent to the expression 100m, which can be read as one hundred millicpu.

##### Timeout

Timeout for the step. Once the timeout is reached, the step fails, and the Pipeline execution continues.

#### Advanced Options

##### Conditional Execution

Set conditions to determine when the step should be executed. See [Conditional Execution](../../../platform/8_Pipelines/w_pipeline-steps-reference/step-skip-condition-settings.md).

##### Failure Strategy

Define one or more failure strategies to control the behavior of your pipeline when your step execution encounters an error. See [Failure Strategy](../../../platform/8_Pipelines/w_pipeline-steps-reference/step-failure-strategy-settings.md).

#### Looping Strategy

You can define a looping strategy for the individual step. See [Looping Strategies Overview -- Matrix, Repeat, and Parallelism](/docs/platform/8_Pipelines/looping-strategies-matrix-repeat-and-parallelism.md).  


### See Also

* [Run Step Settings](../../ci-technical-reference/run-step-settings.md)

