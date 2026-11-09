---
title: Join Us
nav:
  order: 7
  tooltip: Positions, thesis projects, and contact
redirect_from: /contact/
---

# {% include icon.html icon="fa-solid fa-user-plus" %}Join Us

We are always looking for motivated students, researchers, and industrial collaborators who want to work at the intersection of extended reality, AI, simulation, and industrial innovation.

{% include section.html %}

## Open positions

### Postdoc in industrial energy flexibility (FLEXIVA)

**Application deadline: 27 November 2026** · Ref. UFV-PA 2026/3382 · Two years, full time · Uppsala

We are recruiting a postdoctoral researcher in Industrial Engineering and Management, specializing in energy flexibility in industrial operations.
The position is part of the [FLEXIVA]({{ "projects/flexiva" | relative_url }}) project within RESILIENT, a national competence centre for resilient energy systems co-financed by the Swedish Energy Agency, and is carried out in close collaboration with Scania.

The research concerns how manufacturing companies can adapt when and how they use electricity to meet the needs of the energy system while maintaining productivity, from energy-aware production planning, scheduling, and control to integrating flexibility into operations strategy, decision-making, and business models.
Depending on the industrial case and your profile, the work can draw on data analytics, simulation and digital twins, optimization and AI-based decision support, and case study or mixed-methods research.
The industrial case and research questions will be shaped jointly with Scania at the start of the project, so you will have a real opportunity to influence the direction of the research.

We are looking for applicants with a recent PhD (normally within the last three years) in industrial engineering and management, operations management, production engineering, energy systems engineering, computer science, or a related field.
See the full advertisement for duties, requirements, and how to apply.

{%
  include button.html
  link="https://uu.varbi.com/en/what:job/jobID:987229/"
  text="Read the ad and apply"
  icon="fa-solid fa-arrow-up-right-from-square"
%}
{%
  include button.html
  type="email"
  text="Questions? Contact Kaveh Amouzgar"
  link="kaveh.amouzgar@angstrom.uu.se?subject=FLEXIVA%20postdoc%20(UFV-PA%202026%2F3382)"
%}

{% include section.html %}

## Upcoming positions

### PhD position

<!-- TODO: add the topic and expected opening when known -->
A fully funded PhD position at XRIA Lab will be announced soon.

{%
  include button.html
  type="email"
  text="Express interest"
  link="kaveh.amouzgar@angstrom.uu.se?subject=PhD%20position%20-%20XRIA%20Lab"
%}

{% include section.html %}

## Master's thesis projects

We supervise Master's theses in industrial engineering, XR, AI, simulation, and optimization, often connected to our research projects and industrial partners.
The topics below are currently open. Click a topic to read the full description; please contact the person listed for each topic.

{% assign open_theses = site.data.theses | where: "status", "open" %}
{% assign main_theses = open_theses | where_exp: "t", "t.area == nil" %}
{% assign sports_theses = open_theses | where: "area", "sports" %}
{% for thesis in main_theses %}
  {% include thesis.html thesis=thesis %}
{% endfor %}

{% if sports_theses.size > 0 %}
### Sports analytics

The optimization, reinforcement learning, and explainable AI methods we use in manufacturing also apply to professional football.
These topics are led by [Pegah Rahimian]({{ "members/pegah-rahimian" | relative_url }}).

{% for thesis in sports_theses %}
  {% include thesis.html thesis=thesis %}
{% endfor %}
{% endif %}

Have your own idea within our research areas? Contact **Kaveh Amouzgar** to discuss it.

<script>
  // open a thesis card when the page is visited with its link, e.g. /join/#its-title
  (function () {
    var el = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el && el.tagName === "DETAILS") { el.open = true; el.scrollIntoView(); }
  })();
</script>

## Internships

We welcome students interested in applying XR and AI to real-world industrial challenges.

{% include section.html %}

## Contact

For collaboration, student projects, or open positions, contact **Kaveh Amouzgar**, Lab Director.

{%
  include button.html
  type="email"
  text="kaveh.amouzgar@angstrom.uu.se"
  link="kaveh.amouzgar@angstrom.uu.se"
%}
{%
  include button.html
  type="address"
  text="Uppsala University, Sweden"
  link="https://www.uu.se/en"
%}
