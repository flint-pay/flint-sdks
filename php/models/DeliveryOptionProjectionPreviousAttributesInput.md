[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryOptionProjectionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Delivery charge for this option. |
| `arrival_estimate` | Optional | [DeliveryArrivalEstimatePreviousAttributesInput](../models/DeliveryArrivalEstimatePreviousAttributesInput.md#deliveryarrivalestimatepreviousattributesinput) or null | Estimated arrival dates. Omitted when the method makes no timing promise. |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigPreviousAttributesInput](../models/BuyerInstructionsConfigPreviousAttributesInput.md#buyerinstructionsconfigpreviousattributesinput) or null | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. |
| `charge_tax_category` | Optional | string or null | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. `charge_tax_category`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputcharge_tax_category). |
| `consumed_by_delivery_selection_id` | Optional | string or null | ID of the delivery selection that chose this option. Omitted until a selection does. `consumed_by_delivery_selection_id`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputconsumed_by_delivery_selection_id). |
| `delivery_method_id` | Optional | string or null | ID of the delivery method that produced this option. `delivery_method_id`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputdelivery_method_id). |
| `delivery_method_revision_id` | Optional | string or null | ID of the method revision this option was priced from. `delivery_method_revision_id`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputdelivery_method_revision_id). |
| `delivery_option_id` | Optional | string or null | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. `delivery_option_id`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputdelivery_option_id). |
| `delivery_plan` | Optional | [DeliveryPlanPreviousAttributesInput](../models/DeliveryPlanPreviousAttributesInput.md#deliveryplanpreviousattributesinput) or null | How the option divides the items into deliveries. |
| `description` | Optional | string or null | Buyer-visible description of the option. Omitted when the method has none. `description`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputdescription). |
| `display_position` | Optional | integer or null | Position in which this option displays among the others. Lower values display first. `display_position`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputdisplay_position). |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourcePreviousAttributesInput](../models/DeliveryQuoteExecutionLegResourcePreviousAttributesInput.md#deliveryquoteexecutionlegresourcepreviousattributesinput) or null | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. `execution_legs`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputexecution_legs). |
| `expires_at` | Optional | string or null | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. `expires_at`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputexpires_at). |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetailsPreviousAttributesInput](../models/DeliveryLocalDeliveryDetailsPreviousAttributesInput.md#deliverylocaldeliverydetailspreviousattributesinput) or null | Local delivery details. Set only when `type` is `local_delivery`. |
| `name` | Optional | string or null | Buyer-visible name of the option. `name`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputname). |
| `offered_windows` | Optional | Array of [DeliveryWindowResourcePreviousAttributesInput](../models/DeliveryWindowResourcePreviousAttributesInput.md#deliverywindowresourcepreviousattributesinput) or null | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. `offered_windows`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputoffered_windows). |
| `pickup` | Optional | [DeliveryPickupDetailsPreviousAttributesInput](../models/DeliveryPickupDetailsPreviousAttributesInput.md#deliverypickupdetailspreviousattributesinput) or null | Pickup details. Set only when `type` is `pickup`. |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementPreviousAttributesInput](../models/DeliveryRecipientRequirementPreviousAttributesInput.md#deliveryrecipientrequirementpreviousattributesinput) or null | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputrecipient_requirements). |
| `recommended` | Optional | boolean or null | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. `recommended`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputrecommended). |
| `shipment` | Optional | [DeliveryShipmentDetailsPreviousAttributesInput](../models/DeliveryShipmentDetailsPreviousAttributesInput.md#deliveryshipmentdetailspreviousattributesinput) or null | Shipment details. Set only when `type` is `shipment`. |
| `taxable` | Optional | boolean or null | Whether tax applies to the delivery charge. `taxable`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputtaxable). |
| `timezone` | Optional | string or null | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. `timezone`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputtimezone). |
| `type` | Optional | string or null | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputtype). |
| `window_end_at` | Optional | string or null | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_end_at`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputwindow_end_at). |
| `window_pricing` | Optional | string or null | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. `window_pricing`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputwindow_pricing). |
| `window_selection` | Optional | string or null | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. `window_selection`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputwindow_selection). |
| `window_start_at` | Optional | string or null | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_start_at`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinputwindow_start_at). |

### DeliveryOptionProjectionPreviousAttributesInput.charge_tax_category

### DeliveryOptionProjectionPreviousAttributesInput.charge_tax_category variant 1

anyOf variant 1: Flint charge tax category..

- Value shape: string. Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`.

### DeliveryOptionProjectionPreviousAttributesInput.charge_tax_category variant 2

anyOf variant 2.

- Value shape: null. Flint charge tax category. 

### DeliveryOptionProjectionPreviousAttributesInput.consumed_by_delivery_selection_id

### DeliveryOptionProjectionPreviousAttributesInput.consumed_by_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that chose this option. Omitted until a selection does..

- Value shape: string. ID of the delivery selection that chose this option. Omitted until a selection does. ID of the delivery selection that chose this option. Omitted until a selection does. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### DeliveryOptionProjectionPreviousAttributesInput.consumed_by_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that chose this option. Omitted until a selection does. 

### DeliveryOptionProjectionPreviousAttributesInput.delivery_method_id

### DeliveryOptionProjectionPreviousAttributesInput.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method that produced this option..

- Value shape: string. ID of the delivery method that produced this option. ID of the delivery method that produced this option. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliveryOptionProjectionPreviousAttributesInput.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method that produced this option. 

### DeliveryOptionProjectionPreviousAttributesInput.delivery_method_revision_id

### DeliveryOptionProjectionPreviousAttributesInput.delivery_method_revision_id variant 1

anyOf variant 1: ID of the method revision this option was priced from..

- Value shape: string. ID of the method revision this option was priced from. ID of the method revision this option was priced from. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. 

### DeliveryOptionProjectionPreviousAttributesInput.delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method revision this option was priced from. 

### DeliveryOptionProjectionPreviousAttributesInput.delivery_option_id

### DeliveryOptionProjectionPreviousAttributesInput.delivery_option_id variant 1

anyOf variant 1: ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected..

- Value shape: string. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. 

### DeliveryOptionProjectionPreviousAttributesInput.delivery_option_id variant 2

anyOf variant 2.

- Value shape: null. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. 

### DeliveryOptionProjectionPreviousAttributesInput.description

### DeliveryOptionProjectionPreviousAttributesInput.description variant 1

anyOf variant 1: Buyer-visible description of the option. Omitted when the method has none..

- Value shape: string. Buyer-visible description of the option. Omitted when the method has none. 

### DeliveryOptionProjectionPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible description of the option. Omitted when the method has none. 

### DeliveryOptionProjectionPreviousAttributesInput.display_position

### DeliveryOptionProjectionPreviousAttributesInput.display_position variant 1

anyOf variant 1: Position in which this option displays among the others. Lower values display first..

- Value shape: integer. Position in which this option displays among the others. Lower values display first. Position in which this option displays among the others. Lower values display first. Format: `int32`. 

### DeliveryOptionProjectionPreviousAttributesInput.display_position variant 2

anyOf variant 2.

- Value shape: null. Position in which this option displays among the others. Lower values display first. 

### DeliveryOptionProjectionPreviousAttributesInput.execution_legs

### DeliveryOptionProjectionPreviousAttributesInput.execution_legs variant 1

anyOf variant 1: Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs..

- Value shape: Array of [DeliveryQuoteExecutionLegResourcePreviousAttributesInput](../models/DeliveryQuoteExecutionLegResourcePreviousAttributesInput.md#deliveryquoteexecutionlegresourcepreviousattributesinput). Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. 

### DeliveryOptionProjectionPreviousAttributesInput.execution_legs variant 2

anyOf variant 2.

- Value shape: null. Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. 

### DeliveryOptionProjectionPreviousAttributesInput.expires_at

### DeliveryOptionProjectionPreviousAttributesInput.expires_at variant 1

anyOf variant 1: Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected..

- Value shape: string. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryOptionProjectionPreviousAttributesInput.expires_at variant 2

anyOf variant 2.

- Value shape: null. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. 

### DeliveryOptionProjectionPreviousAttributesInput.name

### DeliveryOptionProjectionPreviousAttributesInput.name variant 1

anyOf variant 1: Buyer-visible name of the option..

- Value shape: string. Buyer-visible name of the option. 

### DeliveryOptionProjectionPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible name of the option. 

### DeliveryOptionProjectionPreviousAttributesInput.offered_windows

### DeliveryOptionProjectionPreviousAttributesInput.offered_windows variant 1

anyOf variant 1: Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`..

- Value shape: Array of [DeliveryWindowResourcePreviousAttributesInput](../models/DeliveryWindowResourcePreviousAttributesInput.md#deliverywindowresourcepreviousattributesinput). Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. 

### DeliveryOptionProjectionPreviousAttributesInput.offered_windows variant 2

anyOf variant 2.

- Value shape: null. Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. 

### DeliveryOptionProjectionPreviousAttributesInput.recipient_requirements

### DeliveryOptionProjectionPreviousAttributesInput.recipient_requirements variant 1

anyOf variant 1: Recipient fields this option asks for. A selection can leave out required fields, but payment needs them..

- Value shape: Array of [DeliveryRecipientRequirementPreviousAttributesInput](../models/DeliveryRecipientRequirementPreviousAttributesInput.md#deliveryrecipientrequirementpreviousattributesinput). Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. 

### DeliveryOptionProjectionPreviousAttributesInput.recipient_requirements variant 2

anyOf variant 2.

- Value shape: null. Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. 

### DeliveryOptionProjectionPreviousAttributesInput.recommended

### DeliveryOptionProjectionPreviousAttributesInput.recommended variant 1

anyOf variant 1: Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`..

- Value shape: boolean. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. 

### DeliveryOptionProjectionPreviousAttributesInput.recommended variant 2

anyOf variant 2.

- Value shape: null. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. 

### DeliveryOptionProjectionPreviousAttributesInput.taxable

### DeliveryOptionProjectionPreviousAttributesInput.taxable variant 1

anyOf variant 1: Whether tax applies to the delivery charge..

- Value shape: boolean. Whether tax applies to the delivery charge. 

### DeliveryOptionProjectionPreviousAttributesInput.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether tax applies to the delivery charge. 

### DeliveryOptionProjectionPreviousAttributesInput.timezone

### DeliveryOptionProjectionPreviousAttributesInput.timezone variant 1

anyOf variant 1: IANA timezone for displaying window_start_at, window_end_at, and any offered windows..

- Value shape: string. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: `"America/New_York"`. 

### DeliveryOptionProjectionPreviousAttributesInput.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. 

### DeliveryOptionProjectionPreviousAttributesInput.type

### DeliveryOptionProjectionPreviousAttributesInput.type variant 1

anyOf variant 1: Delivery type of this option..

- Value shape: string. Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`.

### DeliveryOptionProjectionPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. Delivery type of this option. 

### DeliveryOptionProjectionPreviousAttributesInput.window_end_at

### DeliveryOptionProjectionPreviousAttributesInput.window_end_at variant 1

anyOf variant 1: End of the delivery window for this option. Omitted when the option has no single window; see offered_windows..

- Value shape: string. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryOptionProjectionPreviousAttributesInput.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. 

### DeliveryOptionProjectionPreviousAttributesInput.window_pricing

### DeliveryOptionProjectionPreviousAttributesInput.window_pricing variant 1

anyOf variant 1: Whether the offered windows cost the same..

- Value shape: string. Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`.

### DeliveryOptionProjectionPreviousAttributesInput.window_pricing variant 2

anyOf variant 2.

- Value shape: null. Whether the offered windows cost the same. 

### DeliveryOptionProjectionPreviousAttributesInput.window_selection

### DeliveryOptionProjectionPreviousAttributesInput.window_selection variant 1

anyOf variant 1: Whether the buyer chooses a delivery window..

- Value shape: string. Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`.

### DeliveryOptionProjectionPreviousAttributesInput.window_selection variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer chooses a delivery window. 

### DeliveryOptionProjectionPreviousAttributesInput.window_start_at

### DeliveryOptionProjectionPreviousAttributesInput.window_start_at variant 1

anyOf variant 1: Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows..

- Value shape: string. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryOptionProjectionPreviousAttributesInput.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. 

