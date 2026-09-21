export const profile = {
  name: "Joan Grau Noël",
  role: "Site Reliability Engineer",
  location: "London, United Kingdom",
  avatar: "/avatar.jpg",
  summary:
    "Hello! I'm Joan, an SRE at Google, currently working on the Serverless team.\n\nI make sure Cloud Run, App Engine, and Cloud Functions customers are happy and their services keep on running. When I'm not putting out fires, I work on projects to prevent outages, improve observability, and keep the platform fast and reliable.",
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
    dates: "April 2022-Present",
    location: "London, United Kingdom",
    description:
      "I work as a Site Reliability Engineer on the Serverless platform, including Cloud Run, App Engine, and Cloud Functions. I help keep globally distributed service running reliably, while serving millions of QPS. I work across 10+ teams involving traffic routing, ingress/egress networking, container runtimes, high performant multi-tenant serving, scaling and everyting inbetween. It's fun!",
    highlights: [
      {
        label: "Incident Response ",
        text:
          " I have commanded <strong>~20 major customer-facing outages</strong> and participated in approximately 100 incidents overall, leading the majority. I enjoy debugging live production issues, coordinating teams, and mitigating incidents. There is nothing quite like seeing a graph show a step change after a mitigation.",
      },
      {
        label: "Observability",
        text:
          " I led the adoption of <strong>distributed tracing</strong> across five engineering teams and services, making it much faster to track down those annoying p90/p99 latency spikes and cross-service bugs. It also makes it easier to get to root cause quickly during incidents.",
      },
      {
        label: "Capacity & Automation",
        text:
          " I enjoy building automation that takes manual toil out of day-to-day work. Among other things, I built a <strong>globally deployed quota admission service</strong> and <strong>supply/demand-matching</strong> tooling and a pipeline used across multiple partner teams.",
      },
      {
        label: "Reliability & Resilience",
        text:
          " I like diving deep into production issues and proactively finding platform gaps to prevent future problems. Among other things, I created <strong>regional drain and failure simulators</strong> to test how serverless services behave when an entire data center or metro goes down, and ran Production Readiness Reviews (PRRs) for new platform features.",
      },
      {
        label: "Performance",
        text:
          " I like diving deep into code to find optimizations that improve <strong>system performance</strong>, whether during a live incident or as part of broader platform improvements. I have tracked down bottlenecks across networking, containers, and databases to keep customer requests fast and smooth.",
      },
    ],
  },
  {
    company: "Google",
    title: "Technical Solutions Engineer",
    dates: "March 2021–April 2022",
    location: "Dublin, Ireland",
    description:
      "At Google Cloud, I helped some of our biggest customers adopt the platform and get more from its services, specialising in <strong>serverless</strong> and <strong>databases</strong>. I also worked across developer tools, digging into tricky issues end to end—reproducing bugs, finding root causes, and building internal tools to speed up diagnosis—while working with account and engineering teams to make products easier to support.",
  },
  {
    company: "Amazon Web Services",
    title: "Cloud Support Engineer, DevOps",
    dates: "July 2020–March 2021",
    location: "Dublin, Ireland",
    description:
      "At AWS I worked on the DevOps Cloud Support team, helping customers troubleshoot <strong>critical issues</strong> across Kubernetes, CI/CD services, automation, and development tools, with a focus on <strong>EKS, ECS, Lambda, and CloudFormation</strong>. I also provided architecture guidance and partnered with AWS engineering teams to investigate and resolve internal service problems.",
  },
];

export const strengths = [
  {
    label: "Languages & scripting",
    items: ["Python", "Go", "C++", "Java", "Kotlin", "SQL", "Bash / Shell"],
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
    label: "Systems, networking & performance",
    items: [
      "Distributed systems",
      "Systems programming",
      "Low-latency serving",
      "High-throughput services",
      "Performance analysis",
      "Profiling & debugging",
      "Network protocols",
      "Traffic routing",
      "Load balancing",
      "NAT gateways",
      "Concurrency",
    ],
  },
  {
    label: "Reliability & production",
    items: [
      "Incident command",
      "Distributed tracing",
      "SLIs / SLOs",
      "Failover testing",
      "Capacity forecasting",
      "Production Readiness Reviews",
      "Postmortems",
    ],
  },
];

export const projects = [
  {
    name: "Audio source separation",
    description:
      "A PyTorch project separating mixed audio tracks into individual sources using convolutional neural nets. Built as my university thesis with custom data augmentation.",
    tags: ["Python", "PyTorch", "Machine learning"],
    link: "https://github.com/joangro/PytorchConvSep",
  },
  {
    name: "Open-source work",
    description:
      "My personal GitHub where I tinker with systems code, automation scripts, and whatever tech I'm curious about.",
    tags: ["GitHub", "Engineering"],
    link: "https://github.com/joangro",
  },
];
