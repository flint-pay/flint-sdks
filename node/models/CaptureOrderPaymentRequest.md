[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CaptureOrderPaymentRequest

The request body for: Capture order payment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `order_payment_attempt_id` | Optional | string | Owning Flint payment attempt ID. Required while the authorization belongs to an active attempt. minLength: `1`. |

### CaptureOrderPaymentRequest.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

