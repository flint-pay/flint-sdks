[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption

The option the method produced. Set only when `type` is `available`.

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionAmountMoney](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionAmountMoney.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionamountmoney) | Delivery charge for this option. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_estimate` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionArrivalEstimate](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionArrivalEstimate.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionarrivalestimate) | Estimated arrival dates. Omitted when the method makes no timing promise. The estimated arrival date range for a delivery option, as calendar dates in the option's timezone. `arrival_estimate`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionarrival_estimate). |
| `buyer_instructions` | Required | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionBuyerInstructions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionBuyerInstructions.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionbuyerinstructions) | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. |
| `consumed_by_delivery_selection_id` | Optional | string | ID of the delivery selection that chose this option. Omitted until a selection does. |
| `delivery_method_id` | Required | string | ID of the delivery method that produced this option. |
| `delivery_method_revision_id` | Optional | string | ID of the method revision this option was priced from. |
| `delivery_option_id` | Optional | string | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. |
| `delivery_plan` | Required | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionDeliveryPlan](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionDeliveryPlan.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptiondeliveryplan) | How the option divides the items into deliveries. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. `delivery_plan`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptiondelivery_plan). |
| `description` | Optional | string | Buyer-visible description of the option. Omitted when the method has none. |
| `display_position` | Required | integer | Position in which this option displays among the others. Lower values display first. Format: `int32`. |
| `execution_legs` | Optional | Array of ([DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionExecutionLegsItem](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionExecutionLegsItem.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionexecutionlegsitem) and [DeliveryQuoteExecutionLegResource](../models/DeliveryQuoteExecutionLegResource.md#deliveryquoteexecutionlegresource)) | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. |
| `expires_at` | Optional | string | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: `date-time`. |
| `local_delivery` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionLocalDelivery](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionLocalDelivery.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionlocaldelivery) | Local delivery details. Set only when `type` is `local_delivery`. Details of a local delivery option: instructions and service level. |
| `name` | Required | string | Buyer-visible name of the option. |
| `offered_windows` | Optional | Array of ([DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionOfferedWindowsItem](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionOfferedWindowsItem.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionofferedwindowsitem) and [DeliveryWindowResource](../models/DeliveryWindowResource.md#deliverywindowresource)) | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. |
| `pickup` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickup) | Pickup details. Set only when `type` is `pickup`. Pickup details of a delivery option: the pickup mode and the pickup location. `pickup`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickup-fields-1). |
| `recipient_requirements` | Optional | Array of ([DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionRecipientRequirementsItem](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionRecipientRequirementsItem.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionrecipientrequirementsitem) and [DeliveryRecipientRequirement](../models/DeliveryRecipientRequirement.md#deliveryrecipientrequirement)) | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. |
| `recommended` | Required | boolean | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. |
| `shipment` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionShipment](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionShipment.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionshipment) | Shipment details. Set only when `type` is `shipment`. Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `taxable` | Required | boolean | Whether tax applies to the delivery charge. |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. |
| `type` | Required | string | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. |
| `window_pricing` | Optional | string | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. |
| `window_selection` | Required | string | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. |
| `window_start_at` | Optional | string | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. |

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.arrival_estimate

Estimated arrival dates. Omitted when the method makes no timing promise. The estimated arrival date range for a delivery option, as calendar dates in the option's timezone.

Field definitions: [shared fields](DeliveryArrivalEstimateInput.md#deliveryarrivalestimateinput).

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.delivery_plan

How the option divides the items into deliveries. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count.

Field definitions: [shared fields](DeliveryPlanInput.md#deliveryplaninput).

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.pickup fields 1

Pickup details. Set only when `type` is `pickup`. Pickup details of a delivery option: the pickup mode and the pickup location.

Field definitions: [shared fields](DeliveryPickupDetails.md#deliverypickupdetails).

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.pickup fields 1.location

Location where the buyer collects the items. A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Field definitions: [shared fields](DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocation-fields-1).

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.pickup fields 1.location.address

Field definitions: [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.location fields 1.address](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocation-fields-1address).

