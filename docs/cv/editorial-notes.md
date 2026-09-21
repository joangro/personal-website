# CV editorial notes

These notes support editing; they are not part of the exported CV.

## Confirmed facts

- Google SRE / Software Engineer: April 2022–Present.
- Google Technical Solutions Engineer: March 2021–April 2022. The user corrected the end date; the SRE role started in April 2022.
- Education: 2014–2018. No grade or classification.
- Observability result: approximately 60% reduction in p90 time to debug and resolve incidents. Do not describe this as an average or a reduction in incident count. Original CV scope was incidents resolved using tracing; do not extrapolate to the entire platform.
- The user confirmed that the corrected metric may be published on the website.

## Excluded claims

- The 40% fleet reduction is projected, not delivered. The user requested its omission for now. Describe the migration design without claiming completed savings.
- The original 75% reduction in capacity incidents was incorrect. Do not reuse it.

## Additional confirmed experience

- Do not claim Linux debugging or Linux internals expertise.
- Network troubleshooting includes tcpdump, NAT gateway debugging, and NAT capacity planning. Omit eBPF from the CV and website at the user's request.
- Incident experience: participated in approximately 100 incidents, leading the majority, including approximately 20 major customer-facing outages that the user led. Emphasize outage leadership; do not use 100+ or 30+, or imply leadership of every incident. The outage count is included in the incident count, not additive.
- Target roles: SRE, Production Engineer, and Platform Engineer at trading and quant firms. Do not imply prior trading or quant experience.
- List Python, Go, C++, Java, Kotlin, SQL, and Bash/Shell without primary/additional proficiency labels; do not present C++ as a primary language.
- Saved draft edits merged into the current CV: systems reliability focus; ingress/egress networking, low-latency multi-tenant serving, compute serving/scaling and container file serving; long-term remediation planning; data analytics including SQL, data pipelines, forecasting, and regression analysis.
- C++ diagnostics include heap/core dumps, segmentation faults, memory leaks, race conditions, and tracing instrumentation.
- Globally deployed quota admission service in Go: automatic approvals and decision support using real-time capacity signals; approximately 20–30% reduction in associated operational toil. Use "quota admission service", not "quota broker".
- Built a C++ presubmit service and designed a backend-drained simulator for production drains to improve platform reliability. This user-corrected wording replaces "presubmit checks" and "backend-draining safeguards".
- Cloud Architect certification is expired and omitted.
- User authorized keeping the phone number in the public PDF; normalize UK international formatting to +44 7724 317076.

## Current deliverable

- Leads projects covering inorganic growth projections, capacity models, and automated supply planning to reduce capacity incidents across the fleet. Works on capacity efficiency to reduce service operating costs while preserving customer workload performance and latency. Describe these objectives without inventing achieved incident reductions or cost savings.

- Leads capacity work from the SRE side for platform regionalization, a multi-quarter effort involving multiple teams. Describe ongoing leadership without implying the migration is complete or claiming projected savings.

- Keep the full website technical skills list in the CV, excluding eBPF, alongside CV-specific skills. Do not shorten it to selected cloud services. Use separate Google Cloud and AWS categories and no language proficiency labels.

- Confirmed Cloud Run control-plane SRE liaison role, covering multiple binaries.
- Confirmed ownership of the team's capacity analytics service, setting much of its technical direction with tech leads. Multiple engineers contribute and multiple partner developer teams use it; ownership does not imply sole authorship. Do not assume this service is identical to the forecasting platform.

- Edit `joan-grau-cv.md` and build `public/Joan-Grau-CV.pdf` using `build_pdf.py`.
- The earlier files with `draft` in their names are historical drafts, not publication artifacts.
