[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApplyOrderGiftCardRequestInput

The request body for: Apply a gift card to an order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | minLength: `1`. maxLength: `64`. Input only. |
| `expected_version` | Optional | integer string | Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

