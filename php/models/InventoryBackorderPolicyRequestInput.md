[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryBackorderPolicyRequestInput

Patch object: fields you send are applied, fields you omit are unchanged.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean | Whether this inventory item allows backorders. |
| `expected_ship_date` | Optional | string or null | Expected shipping date. Send null to clear it. Format: `date`. minLength: `1`. pattern: `^[0-9]{4}-[0-9]{2}-[0-9]{2}$`. Example: `"2026-08-02"`. |
| `limit_quantity` | Optional | integer or null | Maximum units on backorder across the item's levels. Send null for no cap. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |

