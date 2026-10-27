[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargeRequest

A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a percentage with its tax settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `calculation_basis` | Optional | string | Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `description` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `fulfillment_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | Map of string | Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `percent` | Conditional | number | multipleOf: `0.0001`. |
| `tax` | Optional | [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax) | Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `type` | Required | string | Values: [17 declared values](BuyerOrderCharge.md#buyerordercharge-type-values). |

### OrderChargeRequest variant 1

oneOf variant 1.

- Condition: not (at least one(present(`percent`))).
- Required: `amount_money`.
- Optional: `percent`.

### OrderChargeRequest variant 2

oneOf variant 2.

- Condition: not (at least one(present(`amount_money`))).
- Required: `percent`.
- Optional: `amount_money`.

### OrderChargeRequest.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

