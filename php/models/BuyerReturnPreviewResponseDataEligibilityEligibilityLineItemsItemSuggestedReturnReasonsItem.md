[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItemSuggestedReturnReasonsItem

A return reason a buyer can pick for a line, with its `handle` and whether a note is required.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handle` | Required | string | Handle of the reason. |
| `is_note_required` | Required | boolean | Whether a line that uses this reason needs a `buyer_note`. |
| `name` | Required | string | Name of the reason. |
| `return_reason_id` | Required | string | ID of the reason. |

