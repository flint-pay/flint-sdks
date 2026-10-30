[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderTipAmount

Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flat requested tip in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise subtotal. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Flat requested tip in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise subtotal. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateOrderTip.md#createordertipamount_money). |
| `calculation_type` | Required | string | Selects the calculation type branch. Values: `"amount"`. |
| `description` | Optional | string | minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `percent` | Optional | number | Requested tip percentage from 1 through 100, calculated from the post-discount merchandise subtotal. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### CreateOrderTipAmount.amount_money

Field definitions: [CreateOrderTip.amount_money](../models/CreateOrderTip.md#createordertipamount_money).

### CreateOrderTipAmount.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

