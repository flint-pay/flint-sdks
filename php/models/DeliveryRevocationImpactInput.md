[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationImpactInput

Counts of active delivery quotes and current delivery selections affected by a delivery revocation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_quote_count` | Required | integer | Number of active delivery quotes that depended on the target at revocation creation. This recorded count does not change afterward. Format: `int64`. |
| `current_selection_count` | Required | integer | Number of provisional delivery selections that depended on the target at revocation creation. Payment-owned and committed selections are excluded; this recorded count does not change afterward. Format: `int64`. |

