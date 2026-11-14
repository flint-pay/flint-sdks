[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCompletionBlocker

Something still owed before a return can complete, with the return line or record it concerns.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | What is still owed before this Return can complete. Each blocker names its Return line, except resolution_pending for a correction and merchandise_exception for unidentified units. resolution_* codes also name return_resolution_id when a resolution exists; merchandise_exception also names return_receipt_id. An empty completion_blockers array means nothing is outstanding. Values: [11 declared values](ReturnCompletionBlockerInput.md#returncompletionblockerinput-code-values). |
| `message` | Required | string | Explanation of what is still owed. |
| `return_id` | Required | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. |
| `return_line_item_id` | Optional | string | ID of the Return line the entry is about. |
| `return_receipt_id` | Optional | string | ID of the receipt holding this blocker up. |
| `return_resolution_id` | Optional | string | ID of the resolution holding this blocker up. |

