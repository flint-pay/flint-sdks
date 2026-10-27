[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInventoryLevelRequestInput

The request body for: Update inventory level.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `safety_stock_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

