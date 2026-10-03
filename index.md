---
---

<h1 style="text-transform: none;">
  eXtended Reality and
  <span class="ia-rotate" data-words="{{ site.ia-expansions | join: '|' }}">{{ site.ia-expansions | first }}</span><br>
  for Human-Centered Industrial Systems
</h1>

<script>
  (function () {
    var el = document.querySelector(".ia-rotate");
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var words = el.dataset.words.split("|"), w = 0, i = words[0].length, deleting = true;
    function tick() {
      var word = words[w];
      if (deleting) {
        i--;
        if (i === 0) { deleting = false; w = (w + 1) % words.length; }
      } else {
        i++;
        if (i === words[w].length) { deleting = true; el.textContent = words[w]; return setTimeout(tick, 2500); }
      }
      el.textContent = words[w].slice(0, i) || "\u200b";
      setTimeout(tick, deleting ? 40 : 90);
    }
    setTimeout(tick, 2500);
  })();
</script>

XRIA Lab at Uppsala University develops AI-driven extended reality (XR), simulation, and decision-support systems that help people in industry learn faster, work safer, and make better decisions.
We work hand in hand with manufacturers, from Hitachi Energy and Scania to SMEs, and validate our solutions in learning factories and industrial pilots.

{%
  include button.html
  link="projects"
  text="Our projects"
  icon="fa-solid fa-diagram-project"
%}
{%
  include button.html
  link="join"
  text="Work with us"
  icon="fa-solid fa-user-plus"
%}

{% include section.html %}

## Research themes

{% capture text %}

We build XR systems that guide, train, and support industrial operators in real time, combining headsets, multimodal sensing, and AI agents to transfer expert knowledge and reduce cognitive and physical strain.

{% include button.html link="research" text="XR & human augmentation" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/research/learning-factory.jpg" link="research" title="XR & Human Augmentation" text=text %}

{% capture text %}

We combine discrete-event simulation, simulation-based optimization, multi-agent AI, and generative AI to support production planning, energy efficiency, industrial energy flexibility, and sustainable manufacturing decisions.

{% include button.html link="research" text="Decision support & simulation" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/projects/ai-compete.jpg" link="research" title="AI Decision Support & Simulation-Based Optimization" flip=true text=text %}

{% capture text %}

We bring XR into engineering classrooms as virtual labs, and study how immersive learning affects motivation, spatial reasoning, and cognitive load.

{% include button.html link="teaching" text="Teaching" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/projects/puma2023.jpg" link="research" title="XR in Engineering Education" text=text %}

{% include section.html %}

## Latest news

{% for post in site.posts limit:3 %}
  {% include post-excerpt.html lookup=post.slug %}
{% endfor %}

{% include button.html link="news" text="All news" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

{% include section.html %}

## Funders and partners

<!-- TODO: replace this list with a row of partner logos once you have permission/files -->
<ul class="partner-list">
  <li>European Commission – Horizon Europe</li>
  <li>Vinnova</li>
  <li>Uppsala University</li>
  <li>Uppsala Innovation Centre</li>
  <li>RESILIENT Competence Centre</li>
  <li>USER – Uppsala Smart Energy Research group</li>
  <li>Hitachi Energy</li>
  <li>Scania</li>
  <li>Volvo Penta</li>
  <li>University of Skövde</li>
  <li>AugmentedRealm</li>
  <li>Solme</li>
  <li>Ekets Group</li>
  <li>Daloc AB</li>
  <li>Evoma AB</li>
</ul>

{% include eu-funding.html text="MANUFACTOR is funded by the European Union under Horizon Europe. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union. Neither the European Union nor the granting authority can be held responsible for them." %}
