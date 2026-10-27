[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCompletionBlocker

Something still owed before a return can complete, with the return line or record it concerns.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | What is still owed before this Return can complete. Each blocker names the Return line it belongs to and, where one exists, the receipt, inspection, disposition, or resolution holding it up. An empty completion_blockers array means nothing is outstanding. Values: [11 declared values](#returncompletionblocker-code-values). |
| `message` | Required | string |  |
| `return_disposition_id` | Optional | string |  |
| `return_inspection_id` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_receipt_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `shipment_id` | Optional | string |  |

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

