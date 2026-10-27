[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLimitSettings

Optional merchant limits that can lower Flint's payment-option and surface policy limits.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_amounts` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Map replaced as a whole: the keys you send become the full map. Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot raise Flint's policy ceiling. `max_amounts{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `min_amounts` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Map replaced as a whole: the keys you send become the full map. Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot lower Flint's payment-option floor. `min_amounts{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### PaymentLimitSettings.max_amounts{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PaymentLimitSettings.min_amounts{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

