[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderCharge

An additional charge applied to an order.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `name` | Required | string |  |
| `order_charge_id` | Required | string |  |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax` | Optional | [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax) | Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Values: [17 declared values](BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

