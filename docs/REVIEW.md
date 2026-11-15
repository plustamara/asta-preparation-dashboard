# Review notes

## 1. PRD review

I wrote the first draft of the PRD with help from Claude. I read it and checked it against the assignment. 

What I changed: acceptance criterion 10 said controls "can be used with the keyboard". That is vague because it does not say which keys. I changed it to say that every control can be reached with Tab and used with Enter or Space, and shows a visible focus indicator. Now I can test it by hand.

Ideas I considered and did not add:

1. Removing the complete and undo button. I kept it because it is one of the three required features and the progress count depends on it.
2. Removing priority. I kept it because it tells Asta what to practise first.
3. A skills log for Asta. I did not add it to version 1 because the PRD allows exactly three features. It could be an idea for version 2.

## 2. Design review (Stitch)

My improvement after the first design: I asked Stitch to give the Complete and Incomplete labels a special font so they stand out, to use red only for the most important tasks, and to use green for tasks that can be done later.

Problems I found in the Stitch code and fixed in the MVP:

1. Green meant two things: medium priority and completed. I made medium priority blue, so green only means complete.
2. The button text said "Mark Complete" but the accessible name said "Toggle completion for ...". I made the visible text part of the name, for example "Mark complete for Sword control".
3. Stitch added "Stage 1: Core Conditioning", the word "Daily" and an "Active Mission" label. They are not in my PRD, so I removed them.
4. The status text was small and there were pulsing animations that were only decoration. I made the text bigger and removed the pulse.
5. Stitch gave plain HTML with inline JavaScript. The assignment needs Next.js, TypeScript and Tailwind, so I rebuilt it as React components.

## 3. Check on the MVP

- npm run lint: passed
- npm run build: passed
- Acceptance criteria checked by hand: all passed
- Count and percentage: I checked 0 / 3 (0%), 1 / 3 (33%), 2 / 3 (67%), 3 / 3 (100%), undo, and repeated clicks.
- Refresh: progress goes back to 0 / 3, as the PRD says.
- Not verified: I did not test with a screen reader.

## 4. Test with one person

Who: My Sister
What they did: She was able to toggle and use it as wished.
What they said the percentage means: the percentage were same as we wanted them to be.
What confused them: that when they refreshed they lost the whole progress.

This was one small test. It gives feedback but does not show that people want the product.

## 5. Questions

**How did your PRD prevent an unnecessary feature?**
I had the idea of a skills log for Asta. The PRD said exactly three features and listed what is out of scope, so I could see it was a new feature that needs input forms and more state. I left it for a possible version 2.

**What did the POC test, and what did it not prove?**
It tested whether the count and percentage stay correct when I complete, undo and toggle tasks many times. It did not prove that the design works on mobile, or that people would use the product.

**Why is this MVP useful even though it is small?**
Asta can see his three tasks, mark them done, and see how much of his plan is complete. That solves his problem of not knowing what he finished.

**What did MCP allow your agent to do, or how did your fallback work?**

The agent used the Stitch MCP tools to list my projects and get design context. The server log showed "Discovered 18 tools". I still needed my PRD for the behaviour.

**Which AI-generated decision did you correct?**
The keyboard criterion in the PRD was vague, so I made it specific. In the design, I also fixed the green color that meant two things.

**Explain the task state and progress calculation.**
The app stores only a list of the ids of completed tasks. The count is the length of that list. The percentage is the count divided by 3, times 100, rounded. Because they are calculated every time, the count and percentage cannot drift apart from the task states. A task is either in the list or not, so clicking it many times cannot count it twice.

**If agents can generate code, what decisions and checks were still your responsibility?**
I decided the scope, what to leave out, and which design to use. I also had to check that the app really works, be honest about what I could not verify, keep my API key out of the repository, and understand the code well enough to explain it.