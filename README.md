# FFC Tech Spike Rules Engine Proxy

A proxy for connecting to the jBpm Azure container instance

## Prerequisites

- Docker
- Docker Compose

### Environment variables

The following environment variables are required by the application.
Values for development are set in the Docker Compose configuration. Default
values for production-like deployments are set in the Helm chart and may be
overridden by build and release pipelines.

| Name                                            | Description                                                                                      |
| ----                                            | -----------                                                                                      |
| REMOTE_JBPM_URL                              | Host name for the Azure container instance running jBpm, e.g. `http://container-instance-url.io:8080`                           |


# Running the proxy service

`docker-compose up --build`

or

`./scripts/start`


The application will be available at http://localhost:3020.

Licence
THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3

The following attribution statement MUST be cited in your products and applications when using this information.

Contains public sector information licensed under the Open Government license v3

About the licence
The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.

