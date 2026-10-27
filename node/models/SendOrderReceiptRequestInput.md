[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SendOrderReceiptRequestInput

Request input. Response: [SendOrderReceiptRequest](../models/SendOrderReceiptRequest.md#sendorderreceiptrequest).

The request body for: Send an order receipt.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Receipt email, limited to 254 characters (Unicode code points) after trimming surrounding whitespace. Format: `email`. minLength: `1`. maxLength: `254`. |

