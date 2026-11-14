[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCharge

An additional charge applied to an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargeamount_money). |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Resolved charge amount after charge discounts and before additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargeapplied_money). |
| `calculation_basis` | Optional | string | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Optional description of the charge. |
| `fulfillment_id` | Optional | string | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CheckoutSession.md#checkoutsessionmetadata). |
| `name` | Required | string | What the buyer sees for this charge at checkout and on receipts. |
| `order_charge_id` | Required | string | Unique identifier for this order charge, prefixed `och_`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_id` | Required | string | Order that owns this charge, including the source order of an invoice snapshot. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `percent` | Optional | number | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge amount already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargerefunded_money). |
| `tax` | Optional | [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax) | How tax applies to this charge. Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. `tax`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargetax). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax calculated for the charge, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargetax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Applied charge amount plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargetotal_money). |
| `type` | Required | string | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderCharge.md#buyerordercharge-type-values). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### OrderCharge.amount_money

Field definitions: [BuyerOrderCharge.amount_money](../models/BuyerOrderCharge.md#buyerorderchargeamount_money).

### OrderCharge.applied_money

Field definitions: [BuyerOrderCharge.applied_money](../models/BuyerOrderCharge.md#buyerorderchargeapplied_money).

### OrderCharge.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

### OrderCharge.refunded_money

Field definitions: [BuyerOrderCharge.refunded_money](../models/BuyerOrderCharge.md#buyerorderchargerefunded_money).

### OrderCharge.tax

Field definitions: [BuyerOrderCharge.tax](../models/BuyerOrderCharge.md#buyerorderchargetax).

### OrderCharge.tax_money

Field definitions: [BuyerOrderCharge.tax_money](../models/BuyerOrderCharge.md#buyerorderchargetax_money).

### OrderCharge.total_money

Field definitions: [BuyerOrderCharge.total_money](../models/BuyerOrderCharge.md#buyerorderchargetotal_money).

