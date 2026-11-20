[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutQuickPayItemRequestInput

A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | object | Positive price for the quick-pay item. `amount_money`: [field definitions](../models/CheckoutQuickPayItemRequestInput.md#checkoutquickpayitemrequestinputamount_money). |
| `name` | Required | string | Name shown for the item. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. |
| `tax` | Optional | [OrderLineItemTaxRequestInput](../models/OrderLineItemTaxRequestInput.md#orderlineitemtaxrequestinput) | Tax settings for the item. A line item's tax category and whether it is taxable. |

### CheckoutQuickPayItemRequestInput.amount_money

Positive price for the quick-pay item.

Field definitions: [shared fields](CapturePaymentIntentRequestInput.md#capturepaymentintentrequestinputamount_money).

