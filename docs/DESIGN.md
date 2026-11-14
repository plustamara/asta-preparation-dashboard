# Design notes

## Selected design

Stitch project: Asta's Preparation Dashboard
Link: [https://stitch.google.com/projects/13468990697562372729 , or "screenshots in docs/evidence/"]

The design is one dashboard screen with a dark theme inspired by the story: dark charcoal, white text, and red accents.

## Colors

| Use | Color |
| Page background | #0c0e12 |
| Header background | #12151c |
| Task cards | #171a22, border #333846 |
| Progress card | #161922, border #353a47 |
| Main text | white (#f8fafc) |
| Description text | light grey (slate 200 and 300) |
| Red accent, threat brief, high priority | #ff1744 family (rose 500 to 600) |
| Medium priority | green (emerald 400) |
| Incomplete status | amber (amber 200 text, amber 400 border) |
| Completed task | dark green card (#132219) with green border and a check mark |
| Focus outline | #ff4d6d, 3px |

Red is used only for the most important things: the threat brief and high priority tasks. Green marks medium priority tasks, which can be done later.

## Typography

- Plus Jakarta Sans for all main text, titles, and descriptions. Titles are extra bold and large, descriptions are regular weight and slightly smaller.
- Cinzel (a serif font) only for the "Status: Incomplete / Complete" badges, so the status stands out from everything else.
- Small uppercase text with wide letter spacing for labels like priority and "Fighter Briefing".
- Space Mono is loaded in the design but not used.

## Spacing and layout

- One column, centered, with a maximum width of about 896px (max-w-4xl).
- Side padding of 16px on mobile and 24px on larger screens.
- Cards have rounded corners and 20 to 24px of padding inside.
- 16px gap between task cards, and about 28px between the main sections.
- Buttons are at least 48px tall so they are easy to tap, and have a visible focus outline.
- On mobile the button goes full width under the task text. On larger screens it sits on the right of the card.

## Dashboard sections, top to bottom

1. Header: product name, a short subtitle, and an "Active Mission" label.
2. Introduction: a title and a short paragraph about Asta's goal.
3. Lucifero threat brief: a short card about the threat.
4. Training tasks: three cards, each with a priority badge, a status badge, the task name, a description, and a complete / undo button.
5. Progress summary: completed / total, a percentage, a progress bar, and a note that the percentage means preparation-plan completion and that refreshing resets it.

## Improvement after the first design

First version: It was somehow mixed and that that sharpened to some details
so just made it more sharp to the priotities and green for thr rest 
and the font for complete and incomplete was somehow inappropriate.

Change: I asked Stitch to give the Complete and Incomplete status labels a special font so they stand out, to use red only for the most important tasks, and to use green for tasks that can be done later.

Reason: Asta needs to see at a glance what to practise first and what is already finished.

## Things I will adjust when building the MVP

- Green is used for both medium priority and completed tasks. I will use a different color for medium priority so the colors do not mean two things.
- The design added "Stage 1: Core Conditioning" and the word "Daily", which are not in the PRD. I will remove them or add them to the PRD.
- The status badge text is small, and the pulsing animation is only decoration. I will make the text larger and remove the animation.
- The final app will be built with Next.js, TypeScript, and Tailwind, not copied as plain HTML.