# Pipa Status

Static GitHub Pages hub for **Xiaomi Pad 6 (pipa)** ports and shared infrastructure.

**Live:** https://pad6-dev.github.io/pipa-status/

## Edit projects

1. Update [`data/projects.json`](data/projects.json)
2. Regenerate the browser bundle:

```bash
python3 -c "import json; from pathlib import Path; p=Path('data/projects.json'); Path('data.js').write_text('window.PIPA_PROJECTS = '+json.dumps(json.loads(p.read_text()), indent=2, ensure_ascii=False)+';\n')"
```

## Local preview

```bash
cd ~/pipa-status
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```

## Deploy

Push to `main`. GitHub Actions publishes via Pages (`github-pages` environment).
