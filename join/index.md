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

## Upcoming positions

We will announce one PhD position and one postdoctoral position soon. Calls will be published here and on the [Uppsala University vacancies page](https://www.uu.se/en/about-uu/join-us/jobs-and-vacancies); interested candidates are welcome to get in touch in advance.

### Postdoc in industrial energy flexibility (FLEXIVA)

Within the [FLEXIVA]({{ "projects/flexiva" | relative_url }}) project in the RESILIENT Competence Centre, together with Scania and the USER group: using energy management and production data, simulation, and economic assessment to identify, validate, and value energy flexibility in manufacturing.

{%
  include button.html
  type="email"
  text="Express interest"
  link="kaveh.amouzgar@angstrom.uu.se?subject=FLEXIVA%20postdoc%20-%20XRIA%20Lab"
%}

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
The topics below are currently open; please contact the person listed for each topic.

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
