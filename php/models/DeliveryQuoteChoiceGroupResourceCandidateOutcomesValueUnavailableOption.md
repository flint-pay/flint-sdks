[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOption

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionAmountMoney](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionAmountMoney.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_estimate` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionArrivalEstimate](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionArrivalEstimate.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionarrivalestimate) | The estimated arrival date range for a delivery option, as calendar dates in the option's timezone. |
| `buyer_instructions` | Required | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionBuyerInstructions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionBuyerInstructions.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionbuyerinstructions) | Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. |
| `consumed_by_delivery_selection_id` | Optional | string |  |
| `delivery_method_id` | Required | string |  |
| `delivery_method_revision_id` | Optional | string |  |
| `delivery_option_id` | Optional | string |  |
| `delivery_plan` | Required | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionDeliveryPlan](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionDeliveryPlan.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptiondeliveryplan) | Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. |
| `description` | Optional | string |  |
| `display_position` | Required | integer | Format: `int32`. |
| `execution_legs` | Optional | Array of ([DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionExecutionLegsItem](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionExecutionLegsItem.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionexecutionlegsitem) and [DeliveryQuoteExecutionLegResource](../models/DeliveryQuoteExecutionLegResource.md#deliveryquoteexecutionlegresource)) | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `local_delivery` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionLocalDelivery](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionLocalDelivery.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionlocaldelivery) | Details of a local delivery option: instructions and service level. |
| `name` | Required | string |  |
| `offered_windows` | Optional | Array of ([DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionOfferedWindowsItem](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionOfferedWindowsItem.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionofferedwindowsitem) and [DeliveryWindowResource](../models/DeliveryWindowResource.md#deliverywindowresource)) |  |
| `pickup` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickup](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionpickup) | Pickup details of a delivery option: the pickup mode and the pickup location. `pickup`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOption.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionpickup-fields-1). |
| `recipient_requirements` | Optional | Array of ([DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionRecipientRequirementsItem](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionRecipientRequirementsItem.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionrecipientrequirementsitem) and [DeliveryRecipientRequirement](../models/DeliveryRecipientRequirement.md#deliveryrecipientrequirement)) | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. |
| `recommended` | Required | boolean |  |
| `shipment` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionShipment](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionShipment.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionshipment) | Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `taxable` | Required | boolean |  |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. |
| `type` | Required | string | Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `window_pricing` | Optional | string | Values: `"uniform"`, `"varies"`. |
| `window_selection` | Required | string | Values: `"none"`, `"offered"`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOption.pickup fields 1

Pickup details of a delivery option: the pickup mode and the pickup location.

Field definitions: [shared fields](DeliveryPickupDetails.md#deliverypickupdetails).

