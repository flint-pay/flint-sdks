[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnCompletionBlockerInput

A condition the buyer can resolve before the Return can complete.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | A blocker the buyer can resolve. resolution_pending is included only for a payable resolution. Values: `"resolution_pending"`, `"handoff_pending"`, `"resolution_not_selected"`, `"resolution_requires_action"`, `"resolution_failed"`. |
| `message` | Required | string | Explanation of what is still owed. |
| `return_line_item_id` | Optional | string | ID of the Return line the entry is about. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `return_resolution_id` | Optional | string | ID of the resolution holding this blocker up. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |

