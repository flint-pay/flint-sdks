[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryOptionProjectionInput

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_estimate` | Optional | [DeliveryArrivalEstimateInput](../models/DeliveryArrivalEstimateInput.md#deliveryarrivalestimateinput) | The estimated arrival date range for a delivery option, as calendar dates in the option's timezone. |
| `buyer_instructions` | Required | [BuyerInstructionsConfigInput](../models/BuyerInstructionsConfigInput.md#buyerinstructionsconfiginput) | Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. |
| `consumed_by_delivery_selection_id` | Optional | string |  |
| `delivery_method_id` | Required | string |  |
| `delivery_method_revision_id` | Optional | string |  |
| `delivery_option_id` | Optional | string |  |
| `delivery_plan` | Required | [DeliveryPlanInput](../models/DeliveryPlanInput.md#deliveryplaninput) | Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. |
| `description` | Optional | string |  |
| `display_position` | Required | integer | Format: `int32`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourceInput](../models/DeliveryQuoteExecutionLegResourceInput.md#deliveryquoteexecutionlegresourceinput) | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetailsInput](../models/DeliveryLocalDeliveryDetailsInput.md#deliverylocaldeliverydetailsinput) | Details of a local delivery option: instructions and service level. |
| `name` | Required | string |  |
| `offered_windows` | Optional | Array of [DeliveryWindowResourceInput](../models/DeliveryWindowResourceInput.md#deliverywindowresourceinput) |  |
| `pickup` | Optional | [DeliveryPickupDetailsInput](../models/DeliveryPickupDetailsInput.md#deliverypickupdetailsinput) | Pickup details of a delivery option: the pickup mode and the pickup location. |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementInput](../models/DeliveryRecipientRequirementInput.md#deliveryrecipientrequirementinput) | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. |
| `recommended` | Required | boolean |  |
| `shipment` | Optional | [DeliveryShipmentDetailsInput](../models/DeliveryShipmentDetailsInput.md#deliveryshipmentdetailsinput) | Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `taxable` | Required | boolean |  |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: `"America/New_York"`. |
| `type` | Required | string | Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `window_pricing` | Optional | string | Values: `"uniform"`, `"varies"`. |
| `window_selection` | Required | string | Values: `"none"`, `"offered"`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

