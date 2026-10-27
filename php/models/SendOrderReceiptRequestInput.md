[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SendOrderReceiptRequestInput

The request body for: Send an order receipt.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Receipt email, limited to 254 characters (Unicode code points) after trimming surrounding whitespace. Format: `email`. minLength: `1`. maxLength: `254`. |

