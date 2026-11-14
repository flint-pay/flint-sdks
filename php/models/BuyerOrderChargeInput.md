[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderChargeInput

An additional charge applied to an order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Resolved charge amount after charge discounts and before additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Optional description of the charge. |
| `fulfillment_id` | Optional | string | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `name` | Required | string | What the buyer sees for this charge at checkout and on receipts. |
| `order_charge_id` | Required | string | Unique identifier for this order charge, prefixed `och_`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_id` | Required | string | Order that owns this charge, including the source order of an invoice snapshot. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `percent` | Optional | number | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Charge amount already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax` | Optional | [OrderCalculatedChargeTaxInput](../models/OrderCalculatedChargeTaxInput.md#ordercalculatedchargetaxinput) | How tax applies to this charge. Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tax calculated for the charge, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Applied charge amount plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](#buyerorderchargeinput-type-values). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

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

