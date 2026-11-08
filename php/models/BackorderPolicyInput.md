[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BackorderPolicyInput

Backorder settings shared by every variant using an inventory item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Required | boolean | Whether this inventory item allows backorders. |
| `expected_ship_date` | Required | string or null | Expected shipping date. Null when unknown. Format: `date`. Example: `"2026-08-02"`. |
| `limit_quantity` | Required | integer or null | Maximum units on backorder across the item's levels. Null when there is no cap. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |

