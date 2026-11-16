[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery charge for this option. |
| `arrival_estimate` | Optional | [DeliveryArrivalEstimatePreviousAttributes](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributes) or null | Estimated arrival dates. Omitted when the method makes no timing promise. `arrival_estimate`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemarrival_estimate). |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigPreviousAttributes](../models/BuyerInstructionsConfigPreviousAttributes.md#buyerinstructionsconfigpreviousattributes) or null | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. |
| `charge_tax_category` | Optional | string or null | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. `charge_tax_category`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemcharge_tax_category). |
| `consumed_by_delivery_selection_id` | Optional | string or null | ID of the delivery selection that chose this option. Omitted until a selection does. `consumed_by_delivery_selection_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemconsumed_by_delivery_selection_id). |
| `delivery_method_id` | Optional | string or null | ID of the delivery method that produced this option. `delivery_method_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdelivery_method_id). |
| `delivery_method_revision_id` | Optional | string or null | ID of the method revision this option was priced from. `delivery_method_revision_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdelivery_method_revision_id). |
| `delivery_option_id` | Optional | string or null | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. `delivery_option_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdelivery_option_id). |
| `delivery_plan` | Optional | [DeliveryPlanPreviousAttributes](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributes) or null | How the option divides the items into deliveries. `delivery_plan`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdelivery_plan). |
| `description` | Optional | string or null | Buyer-visible description of the option. Omitted when the method has none. `description`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdescription). |
| `display_position` | Optional | integer or null | Position in which this option displays among the others. Lower values display first. `display_position`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdisplay_position). |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourcePreviousAttributes](../models/DeliveryQuoteExecutionLegResourcePreviousAttributes.md#deliveryquoteexecutionlegresourcepreviousattributes) or null | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. `execution_legs`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemexecution_legs). |
| `expires_at` | Optional | string or null | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. `expires_at`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemexpires_at). |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetailsPreviousAttributes](../models/DeliveryLocalDeliveryDetailsPreviousAttributes.md#deliverylocaldeliverydetailspreviousattributes) or null | Local delivery details. Set only when `type` is `local_delivery`. |
| `name` | Optional | string or null | Buyer-visible name of the option. `name`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemname). |
| `offered_windows` | Optional | Array of [DeliveryWindowResourcePreviousAttributes](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributes) or null | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. `offered_windows`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemoffered_windows). |
| `pickup` | Optional | [DeliveryPickupDetailsPreviousAttributes](../models/DeliveryPickupDetailsPreviousAttributes.md#deliverypickupdetailspreviousattributes) or null | Pickup details. Set only when `type` is `pickup`. |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementPreviousAttributes](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributes) or null | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecipient_requirements). |
| `recommended` | Optional | boolean or null | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. `recommended`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecommended). |
| `shipment` | Optional | [DeliveryShipmentDetailsPreviousAttributes](../models/DeliveryShipmentDetailsPreviousAttributes.md#deliveryshipmentdetailspreviousattributes) or null | Shipment details. Set only when `type` is `shipment`. |
| `taxable` | Optional | boolean or null | Whether tax applies to the delivery charge. `taxable`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtaxable). |
| `timezone` | Optional | string or null | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. `timezone`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtimezone). |
| `type` | Optional | string or null | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtype). |
| `window_end_at` | Optional | string or null | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_end_at`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_end_at). |
| `window_pricing` | Optional | string or null | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. `window_pricing`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_pricing). |
| `window_selection` | Optional | string or null | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. `window_selection`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_selection). |
| `window_start_at` | Optional | string or null | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_start_at`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_start_at). |

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate

Estimated arrival dates. Omitted when the method makes no timing promise.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `earliest_date` | Conditional | string or null | Calendar date in the option timezone. Do not parse it as a UTC timestamp. `earliest_date`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemarrival_estimate-variant-1earliest_date). |
| `latest_date` | Conditional | string or null | Calendar date in the option timezone. Do not parse it as a UTC timestamp. `latest_date`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemarrival_estimate-variant-1earliest_date). |
| `timezone` | Conditional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributestimezone). |

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate variant 1

anyOf DeliveryArrivalEstimatePreviousAttributes.

- Optional: `earliest_date`, `latest_date`, `timezone`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate variant 2

anyOf variant 2.

- Undeclared: `earliest_date`, `latest_date`, `timezone`.
- Value shape: null. Estimated arrival dates. Omitted when the method makes no timing promise. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate variant 1.earliest_date

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate variant 1.earliest_date variant 1

anyOf variant 1: Calendar date in the option timezone. Do not parse it as a UTC timestamp..

- Value shape: string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: `date`. Example: `"2026-08-02"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate variant 1.earliest_date variant 2

anyOf variant 2.

- Value shape: null. Calendar date in the option timezone. Do not parse it as a UTC timestamp. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate variant 1.latest_date

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate variant 1.earliest_date](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemarrival_estimate-variant-1earliest_date).

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate variant 1.timezone

Declared alternatives: [DeliveryArrivalEstimatePreviousAttributes.timezone](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributestimezone).

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.charge_tax_category

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.charge_tax_category variant 1

anyOf variant 1: Flint charge tax category..

- Value shape: string. Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.charge_tax_category variant 2

anyOf variant 2.

- Value shape: null. Flint charge tax category. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.consumed_by_delivery_selection_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.consumed_by_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that chose this option. Omitted until a selection does..

- Value shape: string. ID of the delivery selection that chose this option. Omitted until a selection does. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.consumed_by_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that chose this option. Omitted until a selection does. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_method_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method that produced this option..

- Value shape: string. ID of the delivery method that produced this option. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method that produced this option. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_method_revision_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_method_revision_id variant 1

anyOf variant 1: ID of the method revision this option was priced from..

- Value shape: string. ID of the method revision this option was priced from. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method revision this option was priced from. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_option_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_option_id variant 1

anyOf variant 1: ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected..

- Value shape: string. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_option_id variant 2

anyOf variant 2.

- Value shape: null. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_plan

How the option divides the items into deliveries.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `complete_by_at` | Conditional | string or null | RFC3339 timestamp. `complete_by_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `first_arrival_at` | Conditional | string or null | RFC3339 timestamp. `first_arrival_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `planned_delivery_count` | Conditional | integer or null | Number of deliveries the plan makes. `planned_delivery_count`: [declared alternatives](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributesplanned_delivery_count). |
| `type` | Conditional | string or null | Whether the items arrive together. Values: `"single_delivery"`, `"multiple_deliveries"`. `type`: [declared alternatives](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributestype). |

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_plan variant 1

anyOf DeliveryPlanPreviousAttributes.

- Optional: `complete_by_at`, `first_arrival_at`, `planned_delivery_count`, `type`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_plan variant 2

anyOf variant 2.

- Undeclared: `complete_by_at`, `first_arrival_at`, `planned_delivery_count`, `type`.
- Value shape: null. How the option divides the items into deliveries. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_plan variant 1.complete_by_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_plan variant 1.first_arrival_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_plan variant 1.planned_delivery_count

Declared alternatives: [DeliveryPlanPreviousAttributes.planned_delivery_count](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributesplanned_delivery_count).

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_plan variant 1.type

Declared alternatives: [DeliveryPlanPreviousAttributes.type](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributestype).

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.description

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.description variant 1

anyOf variant 1: Buyer-visible description of the option. Omitted when the method has none..

- Value shape: string. Buyer-visible description of the option. Omitted when the method has none. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.description variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible description of the option. Omitted when the method has none. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.display_position

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.display_position variant 1

anyOf variant 1: Position in which this option displays among the others. Lower values display first..

- Value shape: integer. Position in which this option displays among the others. Lower values display first. Position in which this option displays among the others. Lower values display first. Format: `int32`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.display_position variant 2

anyOf variant 2.

- Value shape: null. Position in which this option displays among the others. Lower values display first. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs variant 1

anyOf variant 1: Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs..

- Value shape: Array of [DeliveryQuoteExecutionLegResourcePreviousAttributes](../models/DeliveryQuoteExecutionLegResourcePreviousAttributes.md#deliveryquoteexecutionlegresourcepreviousattributes). Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs variant 2

anyOf variant 2.

- Value shape: null. Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_execution_leg_id` | Optional | string or null | Unique ID of this leg. `delivery_execution_leg_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemexecution_legs-variant-1-fields-1delivery_execution_leg_id). |
| `origin_location_id` | Optional | string or null | ID of the Location the items leave from. `origin_location_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemexecution_legs-variant-1-fields-1origin_location_id). |

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs variant 1.[] fields 1.delivery_execution_leg_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs variant 1.[] fields 1.delivery_execution_leg_id variant 1

anyOf variant 1: Unique ID of this leg..

- Value shape: string. Unique ID of this leg. Unique ID of this leg. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs variant 1.[] fields 1.delivery_execution_leg_id variant 2

anyOf variant 2.

- Value shape: null. Unique ID of this leg. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs variant 1.[] fields 1.origin_location_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs variant 1.[] fields 1.origin_location_id variant 1

anyOf variant 1: ID of the Location the items leave from..

- Value shape: string. ID of the Location the items leave from. ID of the Location the items leave from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs variant 1.[] fields 1.origin_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the items leave from. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.expires_at

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.expires_at variant 1

anyOf variant 1: Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected..

- Value shape: string. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: `date-time`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.expires_at variant 2

anyOf variant 2.

- Value shape: null. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.name

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.name variant 1

anyOf variant 1: Buyer-visible name of the option..

- Value shape: string. Buyer-visible name of the option. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.name variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible name of the option. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.offered_windows

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.offered_windows variant 1

anyOf variant 1: Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`..

- Value shape: Array of [DeliveryWindowResourcePreviousAttributes](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributes). Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.offered_windows variant 2

anyOf variant 2.

- Value shape: null. Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.offered_windows variant 1.[] fields 1

Field definitions: [DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesoffered_windows-variant-1-fields-1).

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recipient_requirements

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recipient_requirements variant 1

anyOf variant 1: Recipient fields this option asks for. A selection can leave out required fields, but payment needs them..

- Value shape: Array of [DeliveryRecipientRequirementPreviousAttributes](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributes). Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recipient_requirements variant 2

anyOf variant 2.

- Value shape: null. Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recommended

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recommended variant 1

anyOf variant 1: Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`..

- Value shape: boolean. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recommended variant 2

anyOf variant 2.

- Value shape: null. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.taxable

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.taxable variant 1

anyOf variant 1: Whether tax applies to the delivery charge..

- Value shape: boolean. Whether tax applies to the delivery charge. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether tax applies to the delivery charge. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.timezone

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.timezone variant 1

anyOf variant 1: IANA timezone for displaying window_start_at, window_end_at, and any offered windows..

- Value shape: string. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.type

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.type variant 1

anyOf variant 1: Delivery type of this option..

- Value shape: string. Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.type variant 2

anyOf variant 2.

- Value shape: null. Delivery type of this option. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_end_at

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_end_at variant 1

anyOf variant 1: End of the delivery window for this option. Omitted when the option has no single window; see offered_windows..

- Value shape: string. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_pricing

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_pricing variant 1

anyOf variant 1: Whether the offered windows cost the same..

- Value shape: string. Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_pricing variant 2

anyOf variant 2.

- Value shape: null. Whether the offered windows cost the same. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_selection

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_selection variant 1

anyOf variant 1: Whether the buyer chooses a delivery window..

- Value shape: string. Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_selection variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer chooses a delivery window. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_start_at

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_start_at variant 1

anyOf variant 1: Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows..

- Value shape: string. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. 

