[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItemInput

One value in a payment risk list.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) or null | The credential that created this list item. Null when Flint created it. The reference may name an API key in the other mode. |
| `risk_list_id` | Required | string |  |
| `risk_list_item_id` | Required | string |  |
| `value` | Required | string | The value as stored after item_type normalization, which is what payments are matched against. |

