export const profile = {
  name: "Joan Grau Noël",
  role: "Site Reliability Engineer",
  location: "London, United Kingdom",
  summary:
    "I build reliable, observable, and capacity-efficient systems for globally distributed serverless infrastructure.",
  email: "contact@graunoel.com",
  phone: "+44 7724 317076",
  linkedin: "https://www.linkedin.com/in/joan-grau/",
  github: "https://github.com/joangro",
  cv: "/Joan-Grau-CV.pdf",
};

export const impact = [
  {
    label: "Incident leadership",
    value: "~20 major outages",
    detail:
      "Led response for major customer-facing outages and participated in approximately 100 incidents overall, leading the majority.",
  },
  {
    label: "Observability",
    value: "60% faster p90",
    detail:
      "Led distributed tracing adoption across five engineering teams and more than ten binaries.",
  },
  {
    label: "Production automation",
    value: "20–30% less toil",
    detail:
      "Built a Go quota broker using real-time capacity signals, automatic approvals, and decision support.",
  },
];

export const experience = [
  {
    company: "Google",
    title: "Site Reliability Engineer / Software Engineer",
    dates: "April 2022–Present",
    location: "London, United Kingdom",
    description:
      "SRE liaison for the Cloud Run control plane, supporting globally distributed serverless workloads across networking, low-latency serving, containers, databases, and control-plane APIs.",
    highlights: [
      "Architected a supply-demand forecasting and capacity matching platform adopted by four partner teams.",
      "Built regional N+1 capacity indicators and a drain simulator for zone, metro, and disaster-domain failures.",
      "Conducted production readiness reviews and set technical direction for the team's capacity analytics service.",
    ],
  },
  {
    company: "Google",
    title: "Technical Solutions Engineer",
    dates: "March 2021–August 2022",
    location: "Dublin, Ireland",
    description:
      "Investigated enterprise serverless escalations involving architecture, networking, and performance, turning customer incidents into observability and product improvements.",
  },
  {
    company: "Amazon Web Services",
    title: "Cloud Support Engineer, DevOps",
    dates: "July 2020–March 2021",
    location: "Dublin, Ireland",
    description:
      "Resolved production issues and advised enterprise customers on scalable, reliable operations across Kubernetes, containers, Lambda, CloudWatch, and AWS CI/CD services.",
  },
];

export const strengths = [
  { label: "Languages", items: ["Python", "Go", "C++", "Java", "Kotlin"] },
  {
    label: "Reliability",
    items: [
      "Incident command",
      "Distributed tracing",
      "SLIs / SLOs",
      "Failover modelling",
    ],
  },
  {
    label: "Systems",
    items: [
      "Capacity forecasting",
      "Networking",
      "Kubernetes",
      "Docker",
      "Google Cloud",
      "AWS",
    ],
  },
];

export const projects = [
  {
    name: "Audio source separation",
    description:
      "Adapted a CNN-based PyTorch architecture for monaural audio source separation and improved its output with data augmentation.",
    tags: ["Python", "PyTorch", "Machine learning"],
    link: "https://github.com/joangro/PytorchConvSep",
  },
  {
    name: "Open-source work",
    description:
      "Explore engineering projects and experiments across systems, automation, data, and machine learning.",
    tags: ["GitHub", "Engineering"],
    link: "https://github.com/joangro",
  },
];
