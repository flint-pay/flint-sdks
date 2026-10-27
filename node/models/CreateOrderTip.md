[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderTip

Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flat requested tip in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or the post-discount merchandise subtotal. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Flat requested tip in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or the post-discount merchandise subtotal. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateOrderTip.md#createordertipamount_money). |
| `description` | Optional | string | minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `percent` | Conditional | number | Requested tip percentage from 1 through 100, calculated from the post-discount merchandise subtotal. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### CreateOrderTip variant 1

oneOf variant 1.

- Condition: not (at least one(present(`percent`))).
- Required: `amount_money`.
- Optional: `percent`.

### CreateOrderTip variant 2

oneOf variant 2.

- Condition: not (at least one(present(`amount_money`))).
- Required: `percent`.
- Optional: `amount_money`.

### CreateOrderTip.amount_money

Flat requested tip in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or the post-discount merchandise subtotal. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money).

