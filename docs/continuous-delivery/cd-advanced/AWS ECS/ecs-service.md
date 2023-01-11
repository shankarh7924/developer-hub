# ECS Service

## YAML

```YAML
service:
  name: AWS
  identifier: AWS
  tags: {}
  serviceDefinition:
    spec:
      manifests:
        - manifest:
            identifier: TaskDefinition
            type: EcsTaskDefinition
            spec:
              store:
                type: Github
                spec:
                  connectorRef: ProductManagementRohan
                  gitFetchType: Branch
                  paths:
                    - <+env.name>/<+service.name>/taskdef.json
                  repoName: Product-Management
                  branch: main
        - manifest:
            identifier: ServiceDefinition
            type: EcsServiceDefinition
            spec:
              store:
                type: Github
                spec:
                  connectorRef: ProductManagementRohan
                  gitFetchType: Branch
                  paths:
                    - <+env.name>/<+service.name>/servicedef.json
                  repoName: Product-Management
                  branch: main
        - manifest:
            identifier: scalingPolicy
            type: EcsScalingPolicyDefinition
            spec:
              store:
                type: Github
                spec:
                  connectorRef: ProductManagementRohan
                  gitFetchType: Branch
                  paths:
                    - /<+env.name>/<+service.name>/scalingPolicy.json
                  repoName: Product-Management
                  branch: main
        - manifest:
            identifier: scalableTarget
            type: EcsScalableTargetDefinition
            spec:
              store:
                type: Github
                spec:
                  connectorRef: ProductManagementRohan
                  gitFetchType: Branch
                  paths:
                    - /<+env.name>/<+service.name>/scalabletarget.json
                  repoName: Product-Management
                  branch: main
      artifacts:
        primary:
          primaryArtifactRef: <+input>
          sources:
            - spec:
                connectorRef: public_dockerhub
                imagePath: library/nginx
                tag: <+input>
              identifier: nginx-ecs
              type: DockerRegistry
      variables:
        - name: cpu
          type: String
          description: ""
          value: "0.25"
        - name: memory
          type: String
          description: ""
          value: 500Mb
    type: ECS
```

## Key Fields for defining an ECS Service

### Service Definition

In the Harness ECS Service, users can define a Service Definition which encompasses, the manifests, the artifacts and the variables that are to be associated with the ECS Service for Deployment. 

### Manifests

In ECS Service the manifests used for Deployment are the ECS Task Definition, ECS Service Definition, ECS Scaling Target, and ECS Scaling Policy. These manifests are files that can be stored in a remote source like `Github` or a locally with Harness through the `Harness File Store`.

#### Task Definition

In order to deploy an Amazon ECS Service, users need to provide a Task Definition(). The Task Definition can be parameterized from with `<+harness-expression` and can be fetched via a remote source (i.e. github

#### Service Definition


### Artifacts

### Variables
