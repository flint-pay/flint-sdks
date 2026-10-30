[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargeRequestInput

A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a percentage with its tax settings.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Fixed charge amount in the order currency. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `calculation_type` | Required | string | Selects a fixed amount or percentage calculation. Values: `"amount"`, `"percent"`. |
| `description` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `fulfillment_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `percent` | Conditional | number | multipleOf: `0.0001`. |
| `tax` | Optional | [OrderCalculatedChargeTaxInput](../models/OrderCalculatedChargeTaxInput.md#ordercalculatedchargetaxinput) | Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `type` | Required | string | Values: [17 declared values](BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). |

### OrderChargeRequestInput variant 1: `calculation_type` = `"amount"`

oneOf with calculation_type: "amount": The `amount` variant of `OrderChargeInput`..

- Condition: not (at least one(present(`percent`))).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `calculation_type`: Values: `"amount"`.

### OrderChargeRequestInput variant 2: `calculation_type` = `"percent"`

oneOf with calculation_type: "percent": The `percent` variant of `OrderChargeInput`..

- Condition: not (at least one(present(`amount_money`))).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `calculation_type`: Values: `"percent"`.

