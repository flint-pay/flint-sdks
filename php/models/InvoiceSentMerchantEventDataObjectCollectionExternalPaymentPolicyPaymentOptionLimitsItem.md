[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSentMerchantEventDataObjectCollectionExternalPaymentPolicyPaymentOptionLimitsItem

The largest invoice total allowed for a payment option.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_total_money` | Required | [InvoiceSentMerchantEventDataObjectCollectionExternalPaymentPolicyPaymentOptionLimitsItemMaxTotalMoney](../models/InvoiceSentMerchantEventDataObjectCollectionExternalPaymentPolicyPaymentOptionLimitsItemMaxTotalMoney.md#invoicesentmerchanteventdataobjectcollectionexternalpaymentpolicypaymentoptionlimitsitemmaxtotalmoney) | The largest invoice total, in this currency, for which Flint offers the option. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_option` | Required | string | The payment option this cap applies to. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |

