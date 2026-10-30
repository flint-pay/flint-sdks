[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInventoryLevelRequestInput

The request body for: Update inventory level.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `safety_stock_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |

