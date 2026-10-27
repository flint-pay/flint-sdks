[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOption

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionAmountMoney](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionAmountMoney.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_estimate` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionArrivalEstimate](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionArrivalEstimate.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionarrivalestimate) | The estimated arrival date range for a delivery option, as calendar dates in the option's timezone. |
| `buyer_instructions` | Required | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionBuyerInstructions](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionBuyerInstructions.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionbuyerinstructions) | Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. |
| `consumed_by_delivery_selection_id` | Optional | string |  |
| `delivery_method_id` | Required | string |  |
| `delivery_method_revision_id` | Optional | string |  |
| `delivery_option_id` | Optional | string |  |
| `delivery_plan` | Required | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionDeliveryPlan](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionDeliveryPlan.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptiondeliveryplan) | Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. |
| `description` | Optional | string |  |
| `display_position` | Required | integer | Format: `int32`. |
| `execution_legs` | Optional | Array of ([DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionExecutionLegsItem](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionExecutionLegsItem.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionexecutionlegsitem) and [DeliveryQuoteExecutionLegResource](../models/DeliveryQuoteExecutionLegResource.md#deliveryquoteexecutionlegresource)) | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `local_delivery` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionLocalDelivery](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionLocalDelivery.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionlocaldelivery) | Details of a local delivery option: instructions and service level. |
| `name` | Required | string |  |
| `offered_windows` | Optional | Array of ([DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionOfferedWindowsItem](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionOfferedWindowsItem.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionofferedwindowsitem) and [DeliveryWindowResource](../models/DeliveryWindowResource.md#deliverywindowresource)) |  |
| `pickup` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionpickup) | Pickup details of a delivery option: the pickup mode and the pickup location. `pickup`: [field definitions](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOption.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionpickup-fields-1). |
| `recipient_requirements` | Optional | Array of ([DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionRecipientRequirementsItem](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionRecipientRequirementsItem.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionrecipientrequirementsitem) and [DeliveryRecipientRequirement](../models/DeliveryRecipientRequirement.md#deliveryrecipientrequirement)) | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. |
| `recommended` | Required | boolean |  |
| `shipment` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionShipment](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionShipment.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionshipment) | Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `taxable` | Required | boolean |  |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. |
| `type` | Required | string | Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `window_pricing` | Optional | string | Values: `"uniform"`, `"varies"`. |
| `window_selection` | Required | string | Values: `"none"`, `"offered"`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOption.pickup fields 1

Pickup details of a delivery option: the pickup mode and the pickup location.

Field definitions: [shared fields](DeliveryPickupDetails.md#deliverypickupdetails).

