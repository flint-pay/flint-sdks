[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SendPaymentIntentReceiptRequestInput

Request input. Response: [SendOrderReceiptRequest](../models/SendOrderReceiptRequest.md#sendorderreceiptrequest).

The request body for: Send a payment receipt.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Email address that receives the receipt. Omit to use the order's receipt address for an order-owned intent, or receipt_email then the customer's email for a standalone intent. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. |

