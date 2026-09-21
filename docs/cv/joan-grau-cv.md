# JOAN GRAU NOËL
Site Reliability Engineer | Distributed Systems & Production Reliability
London, United Kingdom | [contact@graunoel.com](mailto:contact@graunoel.com) | [+44 7724 317076](tel:+447724317076)
[LinkedIn](https://www.linkedin.com/in/joan-grau/) | [graunoel.com](https://www.graunoel.com/) | [GitHub](https://github.com/joangro)

## PROFILE
Site Reliability Engineer / Software Engineer at Google working on globally distributed serverless systems. Focused on reliability, observability, capacity planning, efficiency, incident response, and technical leadership.

## EXPERIENCE
### Google — Site Reliability Engineer / Software Engineer
April 2022–Present | London, United Kingdom
Work on Google’s serverless platform supporting Cloud Run, App Engine, Cloud Functions, and internal workloads at millions of requests per second, spanning networking, container serving, scaling, and control-plane services.
- **Incident leadership:** Led response for approximately 20 major customer-facing outages and the majority of approximately 100 incidents overall, coordinating mitigation and follow-up across engineering teams.
- **Automation:** Built a globally deployed quota admission service in Go using real-time capacity signals, combining automatic approvals with decision support for manual reviews; reduced associated operational toil for SRE and development teams by approximately 20–30%.
- **Observability:** Led distributed tracing adoption across five software engineering teams and 10+ binaries, connecting request paths across asynchronous Spanner and Pub/Sub boundaries; reduced p90 time to debug and resolve incidents investigated using tracing by approximately 60%.
- **Performance & debugging:** Investigated production failures and performance regressions across C++ services, networking, containers, and databases using heap/core dumps, packet captures, and distributed tracing. Built a C++ presubmit service and designed a backend-drained simulator for production drains to improve platform reliability.
- **Capacity engineering:** Architected and deployed a supply-demand forecasting platform adopted by four partner teams, combining stockout prediction, forecast-skew detection, and capacity modelling. Lead projects covering inorganic growth projections, capacity models, and automated supply planning to reduce capacity incidents across the fleet. Work on capacity efficiency to reduce service operating costs while preserving customer workload performance and latency.
- **Resilience:** Lead capacity work from the SRE side for platform regionalization, a multi-quarter effort involving multiple teams. Built a continuous indicator of regional N+1 capacity coverage and led remediation of regions below target. Developed a drain simulator to evaluate failover capacity across zone, metro, and disaster-domain failures.
- **Technical leadership:** Own the team’s capacity analytics service and set technical direction with tech leads and contributing engineers. Conduct production readiness reviews for autoscaling and deployment features, and mentor junior SREs and software engineers.

<!-- pagebreak -->

## EARLIER EXPERIENCE
### Google — Technical Solutions Engineer
March 2021–April 2022 | Dublin, Ireland
- Investigated enterprise serverless escalations involving architecture, networking, and performance; partnered with software and reliability engineers to identify platform issues, recurring failure modes, and long-term remediation plans.
- Built diagnostic scripts, automation tools, and troubleshooting playbooks to streamline issue reproduction and investigation. Translated customer incidents into observability improvements and product engineering priorities.

### Amazon Web Services — Cloud Support Engineer, DevOps
July 2020–March 2021 | Dublin, Ireland
- Diagnosed production issues through reproduction, root-cause analysis, and systematic debugging; partnered with service engineering teams on complex customer escalations.
- Advised enterprise customers on scalability, reliability, and operational practices across Amazon EKS, Amazon ECS, Lambda, CloudWatch, and AWS CI/CD services.

## TECHNICAL SKILLS
**Languages:** Python, Go, C++, Java, Kotlin, SQL, Bash/Shell.
**Google Cloud:** Cloud Run, App Engine, Cloud Functions, Compute Engine, Bigtable, Cloud Storage (GCS), Pub/Sub, Cloud SQL, Spanner, VPC Networking.
**AWS:** EKS, ECS, EC2, Fargate, Lambda, RDS, Aurora, DynamoDB, S3, VPC, Elastic Load Balancing, Route 53, IAM, KMS, CloudTrail, CloudFormation, CloudWatch, AWS CI/CD, automation & development tools.
**Containers & platform:** Kubernetes, Docker, serverless workloads, container serving, autoscaling.
**Systems & performance:** Distributed systems, systems programming, low-latency serving, high-throughput services, performance analysis, profiling & debugging, concurrency.
**Networking:** Network protocols, traffic routing, load balancing, ingress/egress networking, NAT gateways, tcpdump.
**Reliability & production:** Incident command, distributed tracing, SLIs/SLOs, monitoring and alerting, failover testing and simulation, capacity planning and forecasting, N+1 redundancy, production readiness reviews, postmortems.
**Data & analytics:** Protocol Buffers, SQL data pipelines, forecasting, regression analysis.

## EDUCATION & PROJECT
### Universitat Pompeu Fabra — Audiovisual Systems Engineering
2014–2018 | Barcelona, Spain
**Thesis — Audio source separation:** Adapted a CNN-based PyTorch architecture for monaural audio source separation and applied data augmentation to improve model output. [Source code and thesis](https://github.com/joangro/PytorchConvSep)
