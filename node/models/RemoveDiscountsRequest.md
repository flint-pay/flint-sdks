[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RemoveDiscountsRequest

The request body for: Remove discounts.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `order_discount_ids` | Required | Array of string | Items: minLength: `1`. |

