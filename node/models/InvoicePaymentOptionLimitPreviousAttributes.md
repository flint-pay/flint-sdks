[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentOptionLimitPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The largest invoice total, in this currency, for which Flint offers the option. `max_total_money`: [declared alternatives](../models/InvoicePaymentOptionLimitPreviousAttributes.md#invoicepaymentoptionlimitpreviousattributesmax_total_money). |
| `payment_option` | Optional | string or null | The payment option this cap applies to. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. `payment_option`: [declared alternatives](../models/InvoicePaymentOptionLimitPreviousAttributes.md#invoicepaymentoptionlimitpreviousattributespayment_option). |

### InvoicePaymentOptionLimitPreviousAttributes.max_total_money

The largest invoice total, in this currency, for which Flint offers the option.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoicePaymentOptionLimitPreviousAttributes.max_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoicePaymentOptionLimitPreviousAttributes.max_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The largest invoice total, in this currency, for which Flint offers the option. 

### InvoicePaymentOptionLimitPreviousAttributes.max_total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoicePaymentOptionLimitPreviousAttributes.max_total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoicePaymentOptionLimitPreviousAttributes.payment_option

### InvoicePaymentOptionLimitPreviousAttributes.payment_option variant 1

anyOf variant 1: The payment option this cap applies to..

- Value shape: string. The payment option this cap applies to. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### InvoicePaymentOptionLimitPreviousAttributes.payment_option variant 2

anyOf variant 2.

- Value shape: null. The payment option this cap applies to. 

