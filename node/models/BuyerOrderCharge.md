[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderCharge

An additional charge applied to an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargeamount_money). |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Resolved charge amount after charge discounts and before additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargeapplied_money). |
| `calculation_basis` | Optional | string | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Optional description of the charge. |
| `fulfillment_id` | Optional | string | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `name` | Required | string | What the buyer sees for this charge at checkout and on receipts. |
| `order_charge_id` | Required | string | Unique identifier for this order charge, prefixed `och_`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `percent` | Optional | number | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge amount already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargerefunded_money). |
| `tax` | Optional | [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax) | How tax applies to this charge. Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. `tax`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargetax). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax calculated for the charge, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargetax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Applied charge amount plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargetotal_money). |
| `type` | Required | string | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](#buyerordercharge-type-values). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

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

Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerOrderCharge.applied_money

Resolved charge amount after charge discounts and before additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerOrderCharge.refunded_money

Charge amount already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerOrderCharge.tax

How tax applies to this charge. Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable.

Field definitions: [shared fields](OrderCalculatedChargeTax.md#ordercalculatedchargetax).

### BuyerOrderCharge.tax_money

Tax calculated for the charge, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerOrderCharge.total_money

Applied charge amount plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

