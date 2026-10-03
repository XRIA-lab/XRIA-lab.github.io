---
title: Projects
nav:
  order: 2
  tooltip: Funded research projects
---

# {% include icon.html icon="fa-solid fa-diagram-project" %}Projects

Our research is carried out in close collaboration with industry and funded by the European Commission, Vinnova, the RESILIENT Competence Centre, and Uppsala University.

{% include tags.html tags="extended reality, decision support, simulation, energy, education" %}

{% include search-info.html %}

{% include section.html %}

## Upcoming

{% include list.html component="card" data="projects" filter="group == 'upcoming'" %}

{% include section.html %}

## Ongoing

{% include list.html component="card" data="projects" filter="group == 'ongoing'" %}

{% include section.html %}

## Completed

{% include list.html component="card" data="projects" filter="group == 'completed'" style="small" %}
