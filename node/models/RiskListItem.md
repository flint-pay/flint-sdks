[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItem

One value in a payment risk list.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that created this list item. Null when Flint created it. The reference may name an API key in the other mode. |
| `risk_list_id` | Required | string | ID of the risk list this value is on. Example: `"rl_01KEZF7C00VYSERA4QCTJP147A"`. |
| `risk_list_item_id` | Required | string | Unique identifier for this risk list item, prefixed `rli_`. Example: `"rli_01KEZF7C006BND1CJYPAJW9JWE"`. |
| `value` | Required | string | The value as stored after item_type normalization, which is what payments are matched against. |

