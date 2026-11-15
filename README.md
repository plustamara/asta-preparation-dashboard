# Asta's Preparation Dashboard

Author: Tamara Allam

TechTalks Assignment 2. This is a fictional scenario inspired by Black Clover.

## Summary

Asta is preparing for Lucifero, but his training notes are scattered and he cannot see what he has finished. This is a small web app with one dashboard screen. It shows three training tasks, lets him mark each one complete or undo it, and shows a completed / total count and a percentage of his preparation plan.

The percentage measures how much of the plan is complete. It is not a prediction that Asta will win.

## Stack

Next.js, TypeScript, Tailwind CSS.

## How to run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 in your browser.

Other scripts:

```bash
npm run lint
npm run build
```

## Limitations

- Progress is session-only. It resets to 0 / 3 and 0% when the page is refreshed.
- There are exactly three fixed tasks. Tasks cannot be added, edited, or deleted.
- There is no login, database, or saving.
- The MVP was tried by one person only. This gives feedback but does not show that people want the product.

## Project documents

- [docs/PRD.md](docs/PRD.md): requirements and acceptance criteria
- [docs/DESIGN.md](docs/DESIGN.md): selected Stitch design and visual decisions
- [docs/MCP.md](docs/MCP.md): Stitch MCP connection evidence
- [docs/POC.md](docs/POC.md): proof of concept and results
- [docs/REVIEW.md](docs/REVIEW.md): verification, user feedback, and reflection
- [docs/evidence/](docs/evidence/): screenshots