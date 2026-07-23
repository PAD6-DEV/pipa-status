function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function renderCard(project, index) {
  const article = el("article", "card");
  article.style.animationDelay = 0.04 * index + "s";

  const top = el("div", "card-top");
  top.appendChild(el("h3", null, project.name));
  if (project.status) {
    top.appendChild(el("span", "status", project.status));
  }
  article.appendChild(top);

  if (project.blurb) {
    article.appendChild(el("p", null, project.blurb));
  }

  if (project.tags && project.tags.length) {
    const tags = el("ul", "tags");
    for (var i = 0; i < project.tags.length; i++) {
      tags.appendChild(el("li", null, project.tags[i]));
    }
    article.appendChild(tags);
  }

  if (project.features && project.features.length) {
    const feats = el("ul", "features");
    for (var j = 0; j < project.features.length; j++) {
      feats.appendChild(el("li", null, project.features[j]));
    }
    article.appendChild(feats);
  }

  if (project.links && project.links.length) {
    const links = el("div", "card-links");
    for (var k = 0; k < project.links.length; k++) {
      const link = project.links[k];
      const a = el("a", null, link.label);
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      links.appendChild(a);
    }
    article.appendChild(links);
  }

  return article;
}

function fillGrid(id, items) {
  const root = document.getElementById(id);
  if (!root || !items) return;
  root.textContent = "";
  for (var i = 0; i < items.length; i++) {
    root.appendChild(renderCard(items[i], i));
  }
}

function main() {
  const data = window.PIPA_PROJECTS;
  if (!data) {
    const mainEl = document.querySelector("main");
    if (mainEl) {
      mainEl.appendChild(el("p", "error", "Project data failed to load."));
    }
    return;
  }

  const title = (data.site && data.site.title) || "Pipa";
  document.title = title + " — Xiaomi Pad 6 ports";

  const h1 = document.getElementById("site-title");
  if (h1) h1.textContent = title;

  const tagline = document.getElementById("site-tagline");
  if (tagline && data.site && data.site.tagline) {
    tagline.textContent = data.site.tagline;
  }

  const device = document.getElementById("device-label");
  if (device && data.site && data.site.device) {
    device.textContent = data.site.device;
  }

  fillGrid("ports-grid", data.ports || []);
  fillGrid("shared-grid", data.shared || []);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
