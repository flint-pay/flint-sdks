[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CloseOrderRequestInput

The request body for: Close order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collected_money_behavior` | Optional | string | Send keep to close while keeping collected money. Required when collected money remains refundable to its original tenders, after pending refunds. Closing does not refund money, and the order remains refundable. Accepted when nothing was collected. Values: `"keep"`. |
| `expected_version` | Optional | integer string | Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason_message` | Optional | string | Your note explaining why you are closing the order. It is not shown to the buyer. minLength: `1`. maxLength: `500`. |

