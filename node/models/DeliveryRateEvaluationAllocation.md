[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateEvaluationAllocation

Units of one order line that an execution leg ships.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_delivery_method_ids` | Optional | Array of string | Delivery method IDs these units are limited to. Omitted when no method restriction applies. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `allowed_types` | Required | Array of string | Delivery method types these units allow. |
| `bundle_component_id` | Optional | string | The bundle component these units are, for a line item that sells a bundle. Omitted otherwise. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `demand_key` | Required | string | Flint's key for the demand these units fill, such as `line:` followed by the order line item ID. |
| `inventory_demand_keys` | Optional | Array of string | Keys of the inventory demands these units draw on. Omitted when they draw on none. |
| `merchandise_value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Merchandise value of these units in the request's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `merchandise_value_money`: [field definitions](../models/DeliveryRateEvaluationAllocation.md#deliveryrateevaluationallocationmerchandise_value_money). |
| `order_line_item_id` | Required | string | The order line item being shipped. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number units of the line item in this leg; fractional quantities are not supported. Format: `int64`. |

### DeliveryRateEvaluationAllocation.merchandise_value_money

Merchandise value of these units in the request's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

