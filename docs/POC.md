# POC

## Question
Can task completion and the progress summary stay consistent when tasks are completed, undone, and toggled repeatedly?

## Approach
A plain page with three task labels, a button for each, a count, and a percentage. The page stores only the list of completed tasks. The count and the percentage are calculated from that list on every render, so they cannot drift apart.

## Results
| Action | Expected | Actual |
| Start with no tasks complete | 0 / 3 and 0% | 0 / 3 (0%) |
| Complete one task | 1 / 3 and 33% | 1 / 3 (33%) |
| Complete a second task | 2 / 3 and 67% | 2 / 3 (67%) |
| Complete all tasks | 3 / 3 and 100% | 3 / 3 (100%) |
| Undo one completed task | 2 / 3 and 67% | 2 / 3 (67%) |
| Toggle the same task repeatedly | between 0 and 3 | stayed between 0 and 3 |

## Observation
All results matched what I expected. The progress resets when the page is refreshed, because the state is only kept in the browser while the page is open. This is accepted in my PRD.

## Decision
Continue to the MVP. The count and percentage stayed consistent in every test, so I reused this logic in the dashboard.

## What this does not prove
It only shows that the counting logic works. It does not prove that the design works on mobile, or that people want the product.