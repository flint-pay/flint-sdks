[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionInputMerchantDefaultInput

The `merchant_default` variant of `InvoiceCollectionInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected. merchant_default resolves when the draft is written, and reads return the resolved mode. Values: `"merchant_default"`. |
| `payment_method_id` | Optional | string or null | The customer's saved card to charge. Accepted only with automatic. Without one, Flint charges the customer's default card, selected when the invoice is issued. Send null to clear it. minLength: `1`. |
| `payment_policy` | Optional | [InvoicePaymentPolicyInput](../models/InvoicePaymentPolicyInput.md#invoicepaymentpolicyinput) | The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit it to use the invoice settings payment_policy, or the checkout payment options when that isn't set. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

