[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SendPaymentIntentReceiptRequestInput

The request body for: Send a payment receipt.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Email address that receives the receipt. Omit to use receipt_email, then the order's receipt address for an order-owned intent or the customer's email for a standalone intent. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. |

