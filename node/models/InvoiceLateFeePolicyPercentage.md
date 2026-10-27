[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePolicyPercentage

The `percentage` variant of `InvoiceLateFeePolicy`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `application_mode` | Optional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Required | integer | Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Required | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"percentage"`. |

### InvoiceLateFeePolicyPercentage.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

