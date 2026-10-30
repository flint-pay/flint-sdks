[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RemoveDiscountsRequestInput

The request body for: Remove discounts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `order_discount_ids` | Required | Array of string | Items: minLength: `1`. |

