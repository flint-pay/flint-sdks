[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryOptionProjectionInput

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Delivery charge for this option. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_estimate` | Optional | [DeliveryArrivalEstimateInput](../models/DeliveryArrivalEstimateInput.md#deliveryarrivalestimateinput) | Estimated arrival dates. Omitted when the method makes no timing promise. The estimated arrival date range for a delivery option, as calendar dates in the option's timezone. |
| `buyer_instructions` | Required | [BuyerInstructionsConfigInput](../models/BuyerInstructionsConfigInput.md#buyerinstructionsconfiginput) | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. |
| `consumed_by_delivery_selection_id` | Optional | string | ID of the delivery selection that chose this option. Omitted until a selection does. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `delivery_method_id` | Required | string | ID of the delivery method that produced this option. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Optional | string | ID of the method revision this option was priced from. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `delivery_option_id` | Optional | string | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `delivery_plan` | Required | [DeliveryPlanInput](../models/DeliveryPlanInput.md#deliveryplaninput) | How the option divides the items into deliveries. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. |
| `description` | Optional | string | Buyer-visible description of the option. Omitted when the method has none. |
| `display_position` | Required | integer | Position in which this option displays among the others. Lower values display first. Format: `int32`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourceInput](../models/DeliveryQuoteExecutionLegResourceInput.md#deliveryquoteexecutionlegresourceinput) | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. |
| `expires_at` | Optional | string | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetailsInput](../models/DeliveryLocalDeliveryDetailsInput.md#deliverylocaldeliverydetailsinput) | Local delivery details. Set only when `type` is `local_delivery`. Details of a local delivery option: instructions and service level. |
| `name` | Required | string | Buyer-visible name of the option. |
| `offered_windows` | Optional | Array of [DeliveryWindowResourceInput](../models/DeliveryWindowResourceInput.md#deliverywindowresourceinput) | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. |
| `pickup` | Optional | [DeliveryPickupDetailsInput](../models/DeliveryPickupDetailsInput.md#deliverypickupdetailsinput) | Pickup details. Set only when `type` is `pickup`. Pickup details of a delivery option: the pickup mode and the pickup location. |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementInput](../models/DeliveryRecipientRequirementInput.md#deliveryrecipientrequirementinput) | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. |
| `recommended` | Required | boolean | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. |
| `shipment` | Optional | [DeliveryShipmentDetailsInput](../models/DeliveryShipmentDetailsInput.md#deliveryshipmentdetailsinput) | Shipment details. Set only when `type` is `shipment`. Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `taxable` | Required | boolean | Whether tax applies to the delivery charge. |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: `"America/New_York"`. |
| `type` | Required | string | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_pricing` | Optional | string | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. |
| `window_selection` | Required | string | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. |
| `window_start_at` | Optional | string | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

