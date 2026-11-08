[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargeRequest

A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a percentage with its tax settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed charge amount in the order currency. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/OrderChargeInputAmount.md#orderchargeinputamountamount_money). |
| `calculation_basis` | Optional | string | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `calculation_type` | Required | string | Selects a fixed amount or percentage calculation. Values: `"amount"`, `"percent"`. |
| `description` | Optional | string | Optional description of the charge. minLength: `1`. maxLength: `2048`. |
| `fulfillment_id` | Optional | string | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. minLength: `1`. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentItemizedPackagesRequest.md#fulfillmentitemizedpackagesrequestmetadata). |
| `name` | Required | string | What the buyer sees for this charge at checkout and on receipts. minLength: `1`. maxLength: `255`. |
| `percent` | Conditional | number | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. |
| `tax` | Optional | [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax) | How tax applies to this charge. Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. `tax`: [field definitions](../models/OrderChargeInputAmount.md#orderchargeinputamounttax). |
| `type` | Required | string | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderCharge.md#buyerordercharge-type-values). |

### OrderChargeRequest variant 1: `calculation_type` = `"amount"`

oneOf with calculation_type: "amount": The `amount` variant of `OrderChargeInput`..

- Condition: not (at least one(present(`percent`))).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `calculation_type`: Values: `"amount"`.

### OrderChargeRequest variant 2: `calculation_type` = `"percent"`

oneOf with calculation_type: "percent": The `percent` variant of `OrderChargeInput`..

- Condition: not (at least one(present(`amount_money`))).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `calculation_type`: Values: `"percent"`.

### OrderChargeRequest.amount_money

Field definitions: [OrderChargeInputAmount.amount_money](../models/OrderChargeInputAmount.md#orderchargeinputamountamount_money).

### OrderChargeRequest.metadata

Field definitions: [FulfillmentItemizedPackagesRequest.metadata](../models/FulfillmentItemizedPackagesRequest.md#fulfillmentitemizedpackagesrequestmetadata).

### OrderChargeRequest.tax

Field definitions: [OrderChargeInputAmount.tax](../models/OrderChargeInputAmount.md#orderchargeinputamounttax).

