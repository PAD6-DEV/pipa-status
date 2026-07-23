#!/usr/bin/env python3
"""Regenerate index.html and data.js from data/projects.json."""
import json
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def card_html(project, index):
    delay = f"{0.04 * index:.2f}".rstrip("0").rstrip(".") or "0"
    href = project.get("href") or (project.get("links") or [{}])[0].get("url", "#")
    icon = project.get("icon") or f"assets/icons/{project['id']}.svg"
    image = project.get("image") or f"assets/covers/{project['id']}.svg"
    name = escape(project["name"])
    pid = escape(project["id"])

    parts = [
        f'<article class="card" style="animation-delay:{delay}s" data-id="{pid}">',
        f'<a class="card-hit" href="{escape(href, quote=True)}" target="_blank" '
        f'rel="noopener noreferrer" aria-label="Open {name}"></a>',
        f'<div class="card-media"><img src="{escape(image, quote=True)}" alt="" '
        f'loading="lazy" width="640" height="360" /></div>',
        '<div class="card-body">',
        '<div class="card-top">',
        f'<div class="card-title"><img class="card-icon" src="{escape(icon, quote=True)}" '
        f'alt="" width="28" height="28" />',
        f"<h3 id=\"title-{pid}\">{name}</h3></div>",
    ]
    if project.get("status"):
        parts.append(f'<span class="status">{escape(project["status"])}</span>')
    parts.append("</div>")
    if project.get("blurb"):
        parts.append(f'<p>{escape(project["blurb"])}</p>')
    if project.get("tags"):
        parts.append(
            '<ul class="tags">'
            + "".join(f"<li>{escape(t)}</li>" for t in project["tags"])
            + "</ul>"
        )
    if project.get("features"):
        parts.append(
            '<ul class="features">'
            + "".join(f"<li>{escape(t)}</li>" for t in project["features"])
            + "</ul>"
        )
    if project.get("links"):
        links = "".join(
            f'<a href="{escape(link["url"], quote=True)}" target="_blank" '
            f'rel="noopener noreferrer">{escape(link["label"])}</a>'
            for link in project["links"]
        )
        parts.append(f'<div class="card-links">{links}</div>')
    parts.append("</div></article>")
    return "".join(parts)


def main():
    data = json.loads((ROOT / "data" / "projects.json").read_text())
    (ROOT / "data.js").write_text(
        "window.PIPA_PROJECTS = "
        + json.dumps(data, indent=2, ensure_ascii=False)
        + ";\n"
    )
    ports = "".join(card_html(p, i) for i, p in enumerate(data["ports"]))
    shared = "".join(card_html(p, i) for i, p in enumerate(data["shared"]))
    html = f"""<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{escape(data["site"]["title"])} — Xiaomi Pad 6 ports</title>
    <meta
      name="description"
      content="Community Linux and mobile OS ports for the Xiaomi Pad 6 (pipa)."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Source+Sans+3:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="atmosphere" aria-hidden="true"></div>

    <header class="hero">
      <p class="device" id="device-label">{escape(data["site"]["device"])}</p>
      <h1 id="site-title">{escape(data["site"]["title"])}</h1>
      <p class="tagline" id="site-tagline">{escape(data["site"]["tagline"])}</p>
      <nav class="hero-links" aria-label="Foundations">
        <a href="https://github.com/aymanrgab/linux-android-xiaomi-pipa">Kernel</a>
        <a href="https://github.com/thespider2/pipa-pkgs">Packages</a>
        <a href="#ports">Ports</a>
      </nav>
    </header>

    <main>
      <section id="ports" class="section" aria-labelledby="ports-heading">
        <h2 id="ports-heading">Ports</h2>
        <p class="section-lead">Operating systems running on pipa. Click a card to open its main repo.</p>
        <div id="ports-grid" class="grid">{ports}</div>
      </section>

      <section id="shared" class="section" aria-labelledby="shared-heading">
        <h2 id="shared-heading">Shared infrastructure</h2>
        <p class="section-lead">Kernel, packages, and image plumbing used across ports.</p>
        <div id="shared-grid" class="grid grid-shared">{shared}</div>
      </section>
    </main>

    <footer class="site-footer">
      <p>
        Maintained across
        <a href="https://github.com/aymanrgab">aymanrgab</a>,
        <a href="https://github.com/thespider2">thespider2</a>, and
        <a href="https://github.com/PAD6-DEV">PAD6-DEV</a>.
      </p>
      <p>
        <a href="https://github.com/PAD6-DEV/pipa-status">Source for this site</a>
      </p>
    </footer>
  </body>
</html>
"""
    (ROOT / "index.html").write_text(html)
    print(f"Wrote index.html ({len(data['ports'])} ports, {len(data['shared'])} shared)")


if __name__ == "__main__":
    main()
