[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderTip

Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flat requested tip in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or the post-discount merchandise subtotal. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Flat requested tip in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or the post-discount merchandise subtotal. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateOrderTip.md#createordertipamount_money). |
| `calculation_type` | Required | string | Selects the calculation type branch. Values: `"amount"`, `"percent"`. |
| `description` | Optional | string | minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `percent` | Conditional | number | Requested tip percentage from 1 through 100, calculated from the post-discount merchandise subtotal. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### CreateOrderTip variant 1: `calculation_type` = `"amount"`

oneOf variant 1: Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent..

- Condition: not (at least one(present(`percent`))).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `calculation_type`: Values: `"amount"`.

### CreateOrderTip variant 2: `calculation_type` = `"percent"`

oneOf variant 2: Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent..

- Condition: not (at least one(present(`amount_money`))).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `calculation_type`: Values: `"percent"`.

### CreateOrderTip.amount_money

Flat requested tip in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or the post-discount merchandise subtotal. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money).

### CreateOrderTip.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

