[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentOptionLimitPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The largest invoice total, in this currency, for which Flint offers the option. |
| `payment_option` | Optional | string or null | The payment option this cap applies to. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. `payment_option`: [declared alternatives](../models/InvoicePaymentOptionLimitPreviousAttributesInput.md#invoicepaymentoptionlimitpreviousattributesinputpayment_option). |

### InvoicePaymentOptionLimitPreviousAttributesInput.payment_option

### InvoicePaymentOptionLimitPreviousAttributesInput.payment_option variant 1

anyOf variant 1: The payment option this cap applies to..

- Value shape: string. The payment option this cap applies to. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### InvoicePaymentOptionLimitPreviousAttributesInput.payment_option variant 2

anyOf variant 2.

- Value shape: null. The payment option this cap applies to. 

