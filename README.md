# SlideLauncher

Slide-väljare för NO 7-9 sammanfattningsslides.

## Live URL

```
https://hktcr.github.io/SlideLauncher/
```

## Struktur

```
SlideLauncher/
├── index.html           ← Launcher med dropdown-menyer
├── slides/
│   ├── assets/          ← Bakgrundsbilder (gemensamma)
│   └── solsystemet/     ← The Martian recap-slides
├── nyheter/             ← (legacy, se hktcr/nyhetskartan)
└── presentations/       ← Framtida presentationer
```

## Deploy

```bash
git add .
git commit -m "Update slides"
git push origin main
```

## Första setup

```bash
git remote add origin https://github.com/hktcr/SlideLauncher.git
git branch -M main
git push -u origin main
```

Aktivera sedan **GitHub Pages** i repo-inställningarna:
- Settings → Pages → Source: `main` branch → Save
