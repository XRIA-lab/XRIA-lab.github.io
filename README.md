Visit **[xria-lab.github.io](https://xria-lab.github.io)** 🚀

# XRIA Lab website

Source of **https://xria-lab.github.io**, the website of XRIA Lab (eXtended Reality and Intelligent Analytics for Human-Centered Industrial Systems), Uppsala University.

Built with the [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs) (Jekyll). Every push to `main` rebuilds the site automatically via GitHub Actions and publishes it to the `gh-pages` branch.

## How to update the site

All content is plain Markdown/YAML; edit directly on GitHub and commit to `main`.

| To do this | Edit |
|---|---|
| Add or edit a team member | `_members/firstname-lastname.md` (copy an existing file); photo in `images/team/` |
| Add a news item | `_posts/YYYY-MM-DD-short-title.md` (copy an existing post) |
| Add a publication | add `- id: doi:10.xxxx/yyyy` (plus optional `tags`) to `_data/sources.yaml`; title, authors and journal are fetched automatically |
| Add/finish a project | card in `_data/projects.yaml` (`group: ongoing` or `completed`) and a page in `projects/` |
| Change courses, thesis topics, contact | `teaching/index.md`, `join/index.md` |
| Lab name, description, rotating "IA" expansions, footer links | `_config.yaml` |
| Colors | `_styles/-theme.scss` |

Do **not** edit `_data/citations.yaml`; it is regenerated from `sources.yaml` (and from ORCID iDs in `_data/orcid.yaml`) on every push and weekly.

Theme tags used to filter projects and publications: `extended reality`, `decision support`, `simulation`, `energy`, `education`.

Pull requests get an automatic live preview, so students can propose changes safely.

## Local preview (optional)

```bash
bundle install
bundle exec jekyll serve
```

Or use Docker: `./.docker/run.sh`.
