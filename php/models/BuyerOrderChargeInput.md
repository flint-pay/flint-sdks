[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderChargeInput

An additional charge applied to an order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Resolved charge amount after charge discounts and before additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `name` | Required | string |  |
| `order_charge_id` | Required | string |  |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Charge amount already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax` | Optional | [OrderCalculatedChargeTaxInput](../models/OrderCalculatedChargeTaxInput.md#ordercalculatedchargetaxinput) | Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tax calculated for the charge, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Applied charge amount plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Values: [17 declared values](#buyerorderchargeinput-type-values). |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

#### BuyerOrderChargeInput type values

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

