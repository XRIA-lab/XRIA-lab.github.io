---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

XRIA Lab brings together researchers in industrial engineering, human-computer interaction, simulation, and AI at Uppsala University, working closely with industrial PhD students and partners.

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}
{% include list.html data="members" component="portrait" filter="role == 'senior-researcher'" %}
{% include list.html data="members" component="portrait" filter="role == 'postdoc'" %}
{% include list.html data="members" component="portrait" filter="role == 'phd'" %}

<!-- TODO: add an Alumni section (former thesis students, visiting researchers) -->

{% include section.html %}

Interested in joining us? See [open positions and thesis projects]({{ "join" | relative_url }}).
