[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderCharge

An additional charge applied to an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `calculation_basis` | Optional | string | Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `name` | Required | string |  |
| `order_charge_id` | Required | string |  |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `tax` | Optional | [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax) | Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `type` | Required | string | Values: [17 declared values](#buyerordercharge-type-values). |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

#### BuyerOrderCharge type values

- `"service_fee"`
- `"delivery_fee"`
- `"shipping_fee"`
- `"handling_fee"`
- `"packaging_fee"`
- `"small_order_fee"`
- `"service_area_fee"`
- `"setup_fee"`
- `"installation_fee"`
- `"cleaning_fee"`
- `"booking_fee"`
- `"reservation_fee"`
- `"ticket_fee"`
- `"fulfillment_fee"`
- `"restocking_fee"`
- `"rush_fee"`
- `"other"`

### BuyerOrderCharge.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### BuyerOrderCharge.applied_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### BuyerOrderCharge.refunded_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### BuyerOrderCharge.tax_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### BuyerOrderCharge.total_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

