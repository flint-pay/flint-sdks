[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionInputAutomatic

The `automatic` variant of `InvoiceCollectionInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected. merchant_default resolves when the draft is written, and reads return the resolved mode. Values: `"automatic"`. |
| `payment_method_id` | Optional | string or null | The customer's saved card to charge. Accepted only with automatic. Without one, Flint charges the customer's default card, selected when the invoice is issued. Send null to clear it. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | The payment options the hosted invoice page offers. Accepted only with buyer_initiated. An explicit policy takes precedence over invoices.payment_policy, then checkout payment options, then the platform default of card, apple_pay, and google_pay. Defaults resolve when the draft is written; later settings changes do not change its stored policy. Wallets appear only on supported devices over HTTPS with the payment domain registered. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceCollectionExternal.md#invoicecollectionexternal-variant-2payment_policy). |

### InvoiceCollectionInputAutomatic.payment_policy

Field definitions: [InvoiceCollectionExternal variant 2.payment_policy](../models/InvoiceCollectionExternal.md#invoicecollectionexternal-variant-2payment_policy).

