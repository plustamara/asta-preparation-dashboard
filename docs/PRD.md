# PRD: Asta's Preparation Dashboard

## 1. Summary

Asta's Preparation Dashboard is a small web app that shows Asta his training tasks, lets him mark each one as done or not done, and shows how much of his preparation plan is complete.

## 2. User and problem

**User:** Asta, a determined fighter preparing for Lucifero. This is a fictional scenario created for the assignment.

**Problem:** Asta's training tasks are scattered across notes. He forgets what he has finished and cannot quickly see his progress.

## 3. Goal of version 1

Let Asta see his three training tasks in one place, mark them complete or incomplete, and see a count and a percentage that always match.

## 4. Core features

1. **View training tasks.** The dashboard shows three predefined tasks with a description and a priority.
2. **Toggle completion.** Each task can be marked complete and then undone.
3. **See calculated progress.** The dashboard shows "completed / total" and a percentage, calculated from the current task states.

## 5. User stories

- As Asta, I want to see all my training tasks on one screen so that I know what to practise next.
- As Asta, I want to mark a task complete, and undo it if I made a mistake, so that the list shows the truth.
- As Asta, I want to see how many tasks are done and what percentage that is so that I can see my progress quickly.

## 6. Sample data

All tasks start incomplete. This is fictional teaching data, not official character statistics.

| Task | Description | Priority |
| --- | --- | --- |
| Sword control | Practise precise anti-magic sword movements. | High |
| Physical endurance | Complete a focused strength and stamina session. | Medium |
| Team coordination | Review a preparation plan with the Black Bulls. | High |

## 7. Expected behaviour

- The page starts with 0 / 3 and 0%.
- Clicking the control on a task toggles that task between incomplete and complete.
- The count and percentage are calculated from the current task states, never stored separately.
- Percentage = completed / total x 100, rounded to the nearest whole number.
- The percentage means **completion of the preparation plan**. It is not a prediction of whether Asta will win.

## 8. Acceptance criteria

1. On first load, all three tasks show as incomplete and the dashboard shows 0 / 3 and 0%.
2. With one task complete, it shows 1 / 3 and 33%.
3. With two tasks complete, it shows 2 / 3 and 67%.
4. With all three tasks complete, it shows 3 / 3 and 100%.
5. Undoing a completed task lowers the count by one. For example, from 3 / 3 to 2 / 3 and 67%.
6. Clicking the same task repeatedly never counts it twice. The count always stays between 0 and 3.
7. Each task card shows a text status ("Incomplete" or "Complete"), not only a color.
8. A label on the dashboard says the percentage means preparation-plan completion.
9. The dashboard introduces Asta's goal and gives a short Lucifero threat brief.
10. Every control can be reached with Tab and activated with Enter or Space, and shows a visible focus indicator.
11. The layout is readable at about 360px wide and on desktop.
12. After a page refresh, progress resets to 0 / 3 and 0%.
13. The app contains no buttons or sections that pretend to do something.

## 9. Design and accessibility requirements

- One dashboard screen, responsive for mobile and desktop.
- Strong text contrast and large, easy-to-tap controls.
- Clear hierarchy: title and intro first, then threat brief, then task cards, then progress summary.
- Status must not depend on color alone.
- Colors are inspired by the story (for example, dark charcoal, warm white, and a restrained red accent), but readability comes first.
- Character images, if used, must not make the text or controls harder to read.

## 10. Stack, assumptions, and limitations

**Stack:** Next.js, TypeScript, Tailwind CSS. The interactive part is a small Client Component.

**Assumptions**

- There are exactly three tasks, and they never change.
- Asta uses the app in one session on one device.

**Limitations**

- Progress is session-only. It resets when the page is refreshed.
- This PRD is not based on user research, and the product is not validated. A small test with one person happens at the end of the assignment and does not prove demand.

## 11. Out of scope

- Login and accounts
- Database or saving after refresh
- Payments
- Chatbot
- Combat simulation
- Multiplayer
- Live anime data
- Adding, editing, or deleting tasks
- Extra routes or pages
- An MCP server inside the app (MCP is only part of the development workflow)