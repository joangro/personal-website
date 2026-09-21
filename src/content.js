export const profile = {
  name: "Joan Grau Noël",
  role: "Site Reliability Engineer",
  location: "London, United Kingdom",
  avatar: "/avatar.jpg",
  summary:
    "Site Reliability Engineer / Software Engineer at Google working on globally distributed serverless systems.\n\nFocused on reliability, observability, capacity planning, efficiency, incident response, and technical leadership.",
  email: "contact@graunoel.com",
  phone: "+44 7724 317076",
  linkedin: "https://www.linkedin.com/in/joan-grau/",
  github: "https://github.com/joangro",
  cv: "/Joan-Grau-CV.pdf",
};

export const experience = [
  {
    company: "Google",
    title: "Site Reliability Engineer / Software Engineer",
    dates: "April 2022–Present",
    location: "London, United Kingdom",
    description:
      "Work on Google’s serverless platform supporting Cloud Run, App Engine, Cloud Functions, and internal workloads at millions of requests per second, spanning networking, container serving, scaling, and control-plane services.",
    highlights: [
      {
        label: "Incident leadership",
        text: " Led response for <strong>approximately 20 major customer-facing outages</strong> and the majority of approximately 100 incidents overall, coordinating mitigation and follow-up across engineering teams.",
      },
      {
        label: "Automation",
        text: " Built a <strong>globally deployed quota admission service in Go</strong> using real-time capacity signals, combining automatic approvals with decision support for manual reviews; reduced associated operational toil for SRE and development teams by <strong>approximately 20–30%</strong>.",
      },
      {
        label: "Observability",
        text: " Led distributed tracing adoption across five software engineering teams and 10+ binaries, connecting request paths across asynchronous Spanner and Pub/Sub boundaries; reduced p90 time to debug and resolve incidents investigated using tracing by <strong>approximately 60%</strong>.",
      },
      {
        label: "Performance & debugging",
        text: " Investigated production failures and performance regressions across C++ services, networking, containers, and databases using heap/core dumps, packet captures, and distributed tracing. Built a <strong>C++ presubmit service</strong> and designed a backend-drained simulator for production drains to improve platform reliability.",
      },
      {
        label: "Capacity engineering",
        text: " Architected and deployed a supply-demand forecasting platform adopted by four partner teams, combining stockout prediction, forecast-skew detection, and capacity modelling. Lead projects covering <strong>inorganic growth projections, capacity models, and automated supply planning</strong> to reduce capacity incidents across the fleet. Work on capacity efficiency to reduce service operating costs while preserving <strong>customer workload performance and latency</strong>.",
      },
      {
        label: "Resilience",
        text: " Lead capacity work from the SRE side for <strong>platform regionalization</strong>, a multi-quarter effort involving multiple teams. Built a continuous indicator of regional N+1 capacity coverage and led remediation of regions below target. Developed a drain simulator to evaluate failover capacity across zone, metro, and disaster-domain failures.",
      },
      {
        label: "Technical leadership",
        text: " Own the <strong>team’s capacity analytics service</strong> and set technical direction with tech leads and contributing engineers. Conduct production readiness reviews for autoscaling and deployment features, and mentor junior SREs and software engineers.",
      },
    ],
  },
  {
    company: "Google",
    title: "Technical Solutions Engineer",
    dates: "March 2021–April 2022",
    location: "Dublin, Ireland",
    description:
      "Investigated enterprise serverless escalations involving architecture, networking, and performance; partnered with software and reliability engineers to identify platform issues, recurring failure modes, and long-term remediation plans.\n\nBuilt diagnostic scripts, automation tools, and troubleshooting playbooks to streamline issue reproduction and investigation. Translated customer incidents into observability improvements and product engineering priorities.",
  },
  {
    company: "Amazon Web Services",
    title: "Cloud Support Engineer, DevOps",
    dates: "July 2020–March 2021",
    location: "Dublin, Ireland",
    description:
      "Diagnosed production issues through reproduction, root-cause analysis, and systematic debugging; partnered with service engineering teams on complex customer escalations.\n\nAdvised enterprise customers on scalability, reliability, and operational practices across Amazon EKS, Amazon ECS, Lambda, CloudWatch, and AWS CI/CD services.",
  },
];

export const strengths = [
  {
    label: "Languages",
    items: ["Python", "Go", "C++", "Java", "Kotlin", "SQL", "Bash/Shell"],
  },
  {
    label: "Google Cloud",
    items: [
      "Cloud Run",
      "App Engine",
      "Cloud Functions",
      "Compute Engine",
      "Bigtable",
      "Cloud Storage (GCS)",
      "Pub/Sub",
      "Cloud SQL",
      "Spanner",
      "VPC Networking",
    ],
  },
  {
    label: "AWS",
    items: [
      "EKS",
      "ECS",
      "EC2",
      "Fargate",
      "Lambda",
      "RDS",
      "Aurora",
      "DynamoDB",
      "S3",
      "VPC",
      "Elastic Load Balancing",
      "Route 53",
      "IAM",
      "KMS",
      "CloudTrail",
      "CloudFormation",
      "CloudWatch",
      "AWS CI/CD",
      "Automation & development tools",
    ],
  },
  {
    label: "Containers & platform",
    items: [
      "Kubernetes",
      "Docker",
      "Serverless workloads",
      "Container serving",
      "Autoscaling",
    ],
  },
  {
    label: "Systems & performance",
    items: [
      "Distributed systems",
      "Systems programming",
      "Low-latency serving",
      "High-throughput services",
      "Performance analysis",
      "Profiling & debugging",
      "Concurrency",
    ],
  },
  {
    label: "Networking",
    items: [
      "Network protocols",
      "Traffic routing",
      "Load balancing",
      "Ingress/egress networking",
      "NAT gateways",
      "tcpdump",
    ],
  },
  {
    label: "Reliability & production",
    items: [
      "Incident command",
      "Distributed tracing",
      "SLIs/SLOs",
      "Monitoring and alerting",
      "Failover testing and simulation",
      "Capacity planning and forecasting",
      "N+1 redundancy",
      "Production Readiness Reviews",
      "Postmortems",
    ],
  },
  {
    label: "Data & analytics",
    items: [
      "Protocol Buffers",
      "SQL data pipelines",
      "Forecasting",
      "Regression analysis",
    ],
  },
];

export const projects = [
  {
    name: "Audio source separation",
    description:
      "Adapted a CNN-based PyTorch architecture for monaural audio source separation and applied data augmentation to improve model output.",
    tags: ["Python", "PyTorch", "Machine learning"],
    link: "https://github.com/joangro/PytorchConvSep",
    education:
      "Universitat Pompeu Fabra — Audiovisual Systems Engineering · 2014–2018 · Barcelona, Spain",
  },
  {
    name: "Open-source work",
    description:
      "My personal GitHub where I tinker with systems code, automation scripts, and whatever tech I'm curious about.",
    tags: ["GitHub", "Engineering"],
    link: "https://github.com/joangro",
  },
];
