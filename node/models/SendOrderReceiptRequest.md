[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SendOrderReceiptRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Format: `email`. Example: `"buyer@example.com"`. |

### SendOrderReceiptRequest variant 1

anyOf variant 1: Declared schema PaymentLinkResolvePrefillRequest. Buyer-editable email prefill for payment-link checkout. It never identifies a customer..

- Constraints for `email`: Email to fill in for the buyer, who can change it. It is not verified, so it never links the purchase to an existing customer. The local part before @ must be at most 64 octets (UTF-8 bytes). minLength: `1`. maxLength: `320`.

### SendOrderReceiptRequest variant 2

anyOf variant 2: Declared schema SendOrderReceiptRequest. The request body for: Send an order receipt..

- Constraints for `email`: Receipt email, limited to 254 characters (Unicode code points) after trimming surrounding whitespace. The local part before @ must be at most 64 octets (UTF-8 bytes). minLength: `1`. maxLength: `254`.

### SendOrderReceiptRequest variant 3

anyOf variant 3: Declared schema SendPaymentIntentReceiptRequest. The request body for: Send a payment receipt..

- Constraints for `email`: Email address that receives the receipt. Omit to use receipt_email, then the order's receipt address for an order-owned intent or the customer's email for a standalone intent. The local part before @ must be at most 64 octets (UTF-8 bytes). minLength: `1`. maxLength: `254`.

