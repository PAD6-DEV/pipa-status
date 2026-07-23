# Pipa Status

Static GitHub Pages hub for **Xiaomi Pad 6 (pipa)** ports and shared infrastructure.

**Live:** https://aymanrgab.github.io/pipa-status/

## Edit projects

Update [`data/projects.json`](data/projects.json) — ports and shared entries render automatically.

## Local preview

```bash
cd ~/pipa-status
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```

## Deploy

Push to `main`. GitHub Actions publishes via Pages (`github-pages` environment).
