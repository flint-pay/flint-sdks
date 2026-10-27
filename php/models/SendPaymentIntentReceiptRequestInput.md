[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SendPaymentIntentReceiptRequestInput

The request body for: Send a payment receipt.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Email address that receives the receipt. Omit to use the order's receipt address for an order-owned intent, or receipt_email then the customer's email for a standalone intent. Format: `email`. minLength: `1`. maxLength: `254`. |

