[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnCompletionBlocker

A condition the buyer can resolve before the Return can complete.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | A blocker the buyer can resolve. resolution_pending is included only for a payable resolution. Values: `"resolution_pending"`, `"handoff_pending"`, `"resolution_not_selected"`, `"resolution_requires_action"`, `"resolution_failed"`. |
| `message` | Required | string | Explanation of what is still owed. |
| `return_line_item_id` | Optional | string | ID of the Return line the entry is about. |
| `return_resolution_id` | Optional | string | ID of the resolution holding this blocker up. |

