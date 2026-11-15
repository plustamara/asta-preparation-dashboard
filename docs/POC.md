# POC

## Question
Can task completion and the progress summary stay consistent when tasks are completed, undone, and toggled repeatedly?

## Approach
A plain page with three task labels, a button for each, a count, and a percentage. I store only the list of completed tasks. The count and percentage are calculated from that list on every render.

## Results
| Action | Expected | Actual |
| Complete one | 1 / 3 and 33% | Done |
| Complete two | 2 / 3 and 67% | Done |
| Complete all | 3 / 3 and 100% | Done |
| Undo one | 2 / 3 and 67% | Done |
| Toggle same task repeatedly | between 0 and 3 | Done |

## Observation
 progress resets when I refresh the page.

## What this does not prove
It only shows the counting logic works. It does not prove the design works on mobile, or that people want the product.