[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceReopenedInstalledMerchantsEventDataObjectCollectionAutomaticPaymentPolicy

The payment options the hosted invoice page offers. Present only with buyer_initiated.

Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Required | Array of string | The payment options the buyer can use on the hosted invoice page. Send at least one. maxItems: `5`. uniqueItems: `true`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_option_limits` | Optional | Array of ([InvoiceReopenedInstalledMerchantsEventDataObjectCollectionAutomaticPaymentPolicyPaymentOptionLimitsItem](../models/InvoiceReopenedInstalledMerchantsEventDataObjectCollectionAutomaticPaymentPolicyPaymentOptionLimitsItem.md#invoicereopenedinstalledmerchantseventdataobjectcollectionautomaticpaymentpolicypaymentoptionlimitsitem) and [InvoicePaymentOptionLimit](../models/InvoicePaymentOptionLimit.md#invoicepaymentoptionlimit)) | Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. maxItems: `100`. |
| `show_cost_comparison` | Optional | boolean | Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. |

