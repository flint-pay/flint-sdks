[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationImpactInput

Counts of active delivery quotes and current delivery selections affected by a delivery revocation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_quote_count` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `current_selection_count` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

