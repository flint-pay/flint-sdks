[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCharge

An additional charge applied to an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargeamount_money). |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Resolved charge amount after charge discounts and before additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargeapplied_money). |
| `calculation_basis` | Optional | string | Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BuyerRefund.md#buyerrefundmetadata). |
| `name` | Required | string |  |
| `order_charge_id` | Required | string |  |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge amount already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargerefunded_money). |
| `tax` | Optional | [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax) | Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax calculated for the charge, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargetax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Applied charge amount plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/BuyerOrderCharge.md#buyerorderchargetotal_money). |
| `type` | Required | string | Values: [17 declared values](BuyerOrderCharge.md#buyerordercharge-type-values). |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

### OrderCharge.amount_money

Field definitions: [BuyerOrderCharge.amount_money](../models/BuyerOrderCharge.md#buyerorderchargeamount_money).

### OrderCharge.applied_money

Field definitions: [BuyerOrderCharge.applied_money](../models/BuyerOrderCharge.md#buyerorderchargeapplied_money).

### OrderCharge.metadata

Field definitions: [BuyerRefund.metadata](../models/BuyerRefund.md#buyerrefundmetadata).

### OrderCharge.refunded_money

Field definitions: [BuyerOrderCharge.refunded_money](../models/BuyerOrderCharge.md#buyerorderchargerefunded_money).

### OrderCharge.tax_money

Field definitions: [BuyerOrderCharge.tax_money](../models/BuyerOrderCharge.md#buyerorderchargetax_money).

### OrderCharge.total_money

Field definitions: [BuyerOrderCharge.total_money](../models/BuyerOrderCharge.md#buyerorderchargetotal_money).

