[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputConstraint

The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_values` | Optional | Array of string |  |
| `earliest_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `format` | Optional | string |  |
| `latest_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `maximum_length` | Optional | integer | Format: `int32`. |
| `minimum_length` | Optional | integer | Format: `int32`. |
| `offered_windows` | Optional | Array of [DeliveryWindowRequest](../models/DeliveryWindowRequest.md#deliverywindowrequest) | `offered_windows[]`: [field definitions](../models/DeliveryInputConstraint.md#deliveryinputconstraintoffered_windows). |
| `supported_countries` | Optional | Array of string |  |
| `type` | Required | string | Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`. |

### DeliveryInputConstraint.offered_windows[]

A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `delivery_window_id` | Required | string |  |
| `end_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Required | string | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. |
| `start_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### DeliveryInputConstraint.offered_windows[].amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

