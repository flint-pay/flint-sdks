[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItem

One value in a payment risk list.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that created this list item. Null when Flint created it. The reference may name an API key in the other mode. |
| `risk_list_id` | Required | string |  |
| `risk_list_item_id` | Required | string |  |
| `value` | Required | string |  |

