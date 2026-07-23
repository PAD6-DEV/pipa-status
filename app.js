const dataUrl = new URL("./data/projects.json", import.meta.url);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function renderCard(project, index) {
  const article = el("article", "card");
  article.style.animationDelay = `${0.04 * index}s`;

  const top = el("div", "card-top");
  top.append(el("h3", null, project.name));
  if (project.status) {
    top.append(el("span", "status", project.status));
  }
  article.append(top);

  if (project.blurb) {
    article.append(el("p", null, project.blurb));
  }

  if (project.tags?.length) {
    const tags = el("ul", "tags");
    for (const t of project.tags) {
      tags.append(el("li", null, t));
    }
    article.append(tags);
  }

  if (project.features?.length) {
    const feats = el("ul", "features");
    for (const f of project.features) {
      feats.append(el("li", null, f));
    }
    article.append(feats);
  }

  if (project.links?.length) {
    const links = el("div", "card-links");
    for (const link of project.links) {
      const a = el("a", null, link.label);
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      links.append(a);
    }
    article.append(links);
  }

  return article;
}

function fillGrid(id, items) {
  const root = document.getElementById(id);
  if (!root) return;
  root.replaceChildren(...items.map((item, i) => renderCard(item, i)));
}

async function main() {
  try {
    const res = await fetch(dataUrl);
    if (!res.ok) throw new Error(`Failed to load projects (${res.status})`);
    const data = await res.json();

    const title = data.site?.title ?? "Pipa";
    document.title = `${title} — Xiaomi Pad 6 ports`;
    const h1 = document.getElementById("site-title");
    if (h1) h1.textContent = title;

    const tagline = document.getElementById("site-tagline");
    if (tagline) tagline.textContent = data.site?.tagline ?? "";

    const device = document.getElementById("device-label");
    if (device && data.site?.device) device.textContent = data.site.device;

    fillGrid("ports-grid", data.ports ?? []);
    fillGrid("shared-grid", data.shared ?? []);
  } catch (err) {
    const mainEl = document.querySelector("main");
    if (mainEl) {
      mainEl.replaceChildren(el("p", "error", String(err.message || err)));
    }
  }
}

main();
