[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCompletionBlocker

Something still owed before a return can complete, with the return line or record it concerns.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | What is still owed before this Return can complete. Each blocker names its Return line, except resolution_pending for a correction and merchandise_exception for unidentified units. resolution_* codes also name return_resolution_id when a resolution exists; merchandise_exception also names return_receipt_id. An empty completion_blockers array means nothing is outstanding. Values: [11 declared values](#returncompletionblocker-code-values). |
| `message` | Required | string | Explanation of what is still owed. |
| `return_line_item_id` | Optional | string | ID of the Return line the entry is about. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `return_receipt_id` | Optional | string | ID of the receipt holding this blocker up. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `return_resolution_id` | Optional | string | ID of the resolution holding this blocker up. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |

#### ReturnCompletionBlocker code values

- `"decision_pending"`
- `"handoff_pending"`
- `"receipt_pending"`
- `"inspection_pending"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolution_not_selected"`
- `"resolution_pending"`
- `"resolution_requires_action"`
- `"resolution_failed"`
- `"merchandise_exception"`

