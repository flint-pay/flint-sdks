[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateOrderChargeRequestInput

The request body for: Update order charge.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Replacement fixed charge amount in the order currency. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `fulfillment_id` | Optional | string or null |  Send null to unlink the fulfillment. minLength: `1`. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. |
| `name` | Optional | string | What the buyer sees for this charge at checkout and on receipts. minLength: `1`. maxLength: `255`. |
| `percent` | Optional | number | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. |
| `tax` | Optional | [OrderCalculatedChargeTaxRequestInput](../models/OrderCalculatedChargeTaxRequestInput.md#ordercalculatedchargetaxrequestinput) | How tax applies to this charge. Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `type` | Optional | string | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). |

