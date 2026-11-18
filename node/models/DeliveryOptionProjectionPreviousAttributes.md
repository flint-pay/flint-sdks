[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryOptionProjectionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery charge for this option. `amount_money`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesamount_money). |
| `arrival_estimate` | Optional | [DeliveryArrivalEstimatePreviousAttributes](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributes) or null | Estimated arrival dates. Omitted when the method makes no timing promise. |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigPreviousAttributes](../models/BuyerInstructionsConfigPreviousAttributes.md#buyerinstructionsconfigpreviousattributes) or null | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. |
| `charge_tax_category` | Optional | string or null | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. `charge_tax_category`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributescharge_tax_category). |
| `consumed_by_delivery_selection_id` | Optional | string or null | ID of the delivery selection that chose this option. Omitted until a selection does. `consumed_by_delivery_selection_id`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesconsumed_by_delivery_selection_id). |
| `delivery_method_id` | Optional | string or null | ID of the delivery method that produced this option. `delivery_method_id`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesdelivery_method_id). |
| `delivery_method_revision_id` | Optional | string or null | ID of the method revision this option was priced from. `delivery_method_revision_id`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesdelivery_method_revision_id). |
| `delivery_option_id` | Optional | string or null | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. `delivery_option_id`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesdelivery_option_id). |
| `delivery_plan` | Optional | [DeliveryPlanPreviousAttributes](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributes) or null | How the option divides the items into deliveries. |
| `description` | Optional | string or null | Buyer-visible description of the option. Omitted when the method has none. `description`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesdescription). |
| `display_position` | Optional | integer or null | Position in which this option displays among the others. Lower values display first. `display_position`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesdisplay_position). |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourcePreviousAttributes](../models/DeliveryQuoteExecutionLegResourcePreviousAttributes.md#deliveryquoteexecutionlegresourcepreviousattributes) or null | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. `execution_legs`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesexecution_legs). |
| `expires_at` | Optional | string or null | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. `expires_at`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesexpires_at). |
| `local_delivery` | Optional | [DeliveryShipmentDetailsPreviousAttributes](../models/DeliveryShipmentDetailsPreviousAttributes.md#deliveryshipmentdetailspreviousattributes) or null | Local delivery details. Set only when `type` is `local_delivery`. |
| `name` | Optional | string or null | Buyer-visible name of the option. `name`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesname). |
| `offered_windows` | Optional | Array of [DeliveryWindowResourcePreviousAttributes](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributes) or null | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. `offered_windows`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesoffered_windows). |
| `pickup` | Optional | [DeliveryPickupDetailsPreviousAttributes](../models/DeliveryPickupDetailsPreviousAttributes.md#deliverypickupdetailspreviousattributes) or null | Pickup details. Set only when `type` is `pickup`. |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementPreviousAttributes](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributes) or null | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesrecipient_requirements). |
| `recommended` | Optional | boolean or null | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. `recommended`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributesrecommended). |
| `shipment` | Optional | [DeliveryShipmentDetailsPreviousAttributes](../models/DeliveryShipmentDetailsPreviousAttributes.md#deliveryshipmentdetailspreviousattributes) or null | Shipment details. Set only when `type` is `shipment`. |
| `taxable` | Optional | boolean or null | Whether tax applies to the delivery charge. `taxable`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributestaxable). |
| `timezone` | Optional | string or null | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. `timezone`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributestimezone). |
| `type` | Optional | string or null | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributestype). |
| `window_end_at` | Optional | string or null | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_end_at`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributeswindow_end_at). |
| `window_pricing` | Optional | string or null | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. `window_pricing`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributeswindow_pricing). |
| `window_selection` | Optional | string or null | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. `window_selection`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributeswindow_selection). |
| `window_start_at` | Optional | string or null | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_start_at`: [declared alternatives](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributeswindow_start_at). |

### DeliveryOptionProjectionPreviousAttributes.amount_money

Delivery charge for this option.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### DeliveryOptionProjectionPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### DeliveryOptionProjectionPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Delivery charge for this option. 

### DeliveryOptionProjectionPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### DeliveryOptionProjectionPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### DeliveryOptionProjectionPreviousAttributes.charge_tax_category

### DeliveryOptionProjectionPreviousAttributes.charge_tax_category variant 1

anyOf variant 1: Flint charge tax category..

- Value shape: string. Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`.

### DeliveryOptionProjectionPreviousAttributes.charge_tax_category variant 2

anyOf variant 2.

- Value shape: null. Flint charge tax category. 

### DeliveryOptionProjectionPreviousAttributes.consumed_by_delivery_selection_id

### DeliveryOptionProjectionPreviousAttributes.consumed_by_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that chose this option. Omitted until a selection does..

- Value shape: string. ID of the delivery selection that chose this option. Omitted until a selection does. ID of the delivery selection that chose this option. Omitted until a selection does. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### DeliveryOptionProjectionPreviousAttributes.consumed_by_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that chose this option. Omitted until a selection does. 

### DeliveryOptionProjectionPreviousAttributes.delivery_method_id

### DeliveryOptionProjectionPreviousAttributes.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method that produced this option..

- Value shape: string. ID of the delivery method that produced this option. ID of the delivery method that produced this option. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliveryOptionProjectionPreviousAttributes.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method that produced this option. 

### DeliveryOptionProjectionPreviousAttributes.delivery_method_revision_id

### DeliveryOptionProjectionPreviousAttributes.delivery_method_revision_id variant 1

anyOf variant 1: ID of the method revision this option was priced from..

- Value shape: string. ID of the method revision this option was priced from. ID of the method revision this option was priced from. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. 

### DeliveryOptionProjectionPreviousAttributes.delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method revision this option was priced from. 

### DeliveryOptionProjectionPreviousAttributes.delivery_option_id

### DeliveryOptionProjectionPreviousAttributes.delivery_option_id variant 1

anyOf variant 1: ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected..

- Value shape: string. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. 

### DeliveryOptionProjectionPreviousAttributes.delivery_option_id variant 2

anyOf variant 2.

- Value shape: null. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. 

### DeliveryOptionProjectionPreviousAttributes.description

### DeliveryOptionProjectionPreviousAttributes.description variant 1

anyOf variant 1: Buyer-visible description of the option. Omitted when the method has none..

- Value shape: string. Buyer-visible description of the option. Omitted when the method has none. 

### DeliveryOptionProjectionPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible description of the option. Omitted when the method has none. 

### DeliveryOptionProjectionPreviousAttributes.display_position

### DeliveryOptionProjectionPreviousAttributes.display_position variant 1

anyOf variant 1: Position in which this option displays among the others. Lower values display first..

- Value shape: integer. Position in which this option displays among the others. Lower values display first. Position in which this option displays among the others. Lower values display first. Format: `int32`. 

### DeliveryOptionProjectionPreviousAttributes.display_position variant 2

anyOf variant 2.

- Value shape: null. Position in which this option displays among the others. Lower values display first. 

### DeliveryOptionProjectionPreviousAttributes.execution_legs

### DeliveryOptionProjectionPreviousAttributes.execution_legs variant 1

anyOf variant 1: Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs..

- Value shape: Array of [DeliveryQuoteExecutionLegResourcePreviousAttributes](../models/DeliveryQuoteExecutionLegResourcePreviousAttributes.md#deliveryquoteexecutionlegresourcepreviousattributes). Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. 

### DeliveryOptionProjectionPreviousAttributes.execution_legs variant 2

anyOf variant 2.

- Value shape: null. Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. 

### DeliveryOptionProjectionPreviousAttributes.expires_at

### DeliveryOptionProjectionPreviousAttributes.expires_at variant 1

anyOf variant 1: Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected..

- Value shape: string. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryOptionProjectionPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. 

### DeliveryOptionProjectionPreviousAttributes.name

### DeliveryOptionProjectionPreviousAttributes.name variant 1

anyOf variant 1: Buyer-visible name of the option..

- Value shape: string. Buyer-visible name of the option. 

### DeliveryOptionProjectionPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible name of the option. 

### DeliveryOptionProjectionPreviousAttributes.offered_windows

### DeliveryOptionProjectionPreviousAttributes.offered_windows variant 1

anyOf variant 1: Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`..

- Value shape: Array of [DeliveryWindowResourcePreviousAttributes](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributes). Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. 

### DeliveryOptionProjectionPreviousAttributes.offered_windows variant 2

anyOf variant 2.

- Value shape: null. Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. 

### DeliveryOptionProjectionPreviousAttributes.recipient_requirements

### DeliveryOptionProjectionPreviousAttributes.recipient_requirements variant 1

anyOf variant 1: Recipient fields this option asks for. A selection can leave out required fields, but payment needs them..

- Value shape: Array of [DeliveryRecipientRequirementPreviousAttributes](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributes). Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. 

### DeliveryOptionProjectionPreviousAttributes.recipient_requirements variant 2

anyOf variant 2.

- Value shape: null. Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. 

### DeliveryOptionProjectionPreviousAttributes.recommended

### DeliveryOptionProjectionPreviousAttributes.recommended variant 1

anyOf variant 1: Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`..

- Value shape: boolean. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. 

### DeliveryOptionProjectionPreviousAttributes.recommended variant 2

anyOf variant 2.

- Value shape: null. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. 

### DeliveryOptionProjectionPreviousAttributes.taxable

### DeliveryOptionProjectionPreviousAttributes.taxable variant 1

anyOf variant 1: Whether tax applies to the delivery charge..

- Value shape: boolean. Whether tax applies to the delivery charge. 

### DeliveryOptionProjectionPreviousAttributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether tax applies to the delivery charge. 

### DeliveryOptionProjectionPreviousAttributes.timezone

### DeliveryOptionProjectionPreviousAttributes.timezone variant 1

anyOf variant 1: IANA timezone for displaying window_start_at, window_end_at, and any offered windows..

- Value shape: string. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: `"America/New_York"`. 

### DeliveryOptionProjectionPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. 

### DeliveryOptionProjectionPreviousAttributes.type

### DeliveryOptionProjectionPreviousAttributes.type variant 1

anyOf variant 1: Delivery type of this option..

- Value shape: string. Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`.

### DeliveryOptionProjectionPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Delivery type of this option. 

### DeliveryOptionProjectionPreviousAttributes.window_end_at

### DeliveryOptionProjectionPreviousAttributes.window_end_at variant 1

anyOf variant 1: End of the delivery window for this option. Omitted when the option has no single window; see offered_windows..

- Value shape: string. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryOptionProjectionPreviousAttributes.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. 

### DeliveryOptionProjectionPreviousAttributes.window_pricing

### DeliveryOptionProjectionPreviousAttributes.window_pricing variant 1

anyOf variant 1: Whether the offered windows cost the same..

- Value shape: string. Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`.

### DeliveryOptionProjectionPreviousAttributes.window_pricing variant 2

anyOf variant 2.

- Value shape: null. Whether the offered windows cost the same. 

### DeliveryOptionProjectionPreviousAttributes.window_selection

### DeliveryOptionProjectionPreviousAttributes.window_selection variant 1

anyOf variant 1: Whether the buyer chooses a delivery window..

- Value shape: string. Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`.

### DeliveryOptionProjectionPreviousAttributes.window_selection variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer chooses a delivery window. 

### DeliveryOptionProjectionPreviousAttributes.window_start_at

### DeliveryOptionProjectionPreviousAttributes.window_start_at variant 1

anyOf variant 1: Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows..

- Value shape: string. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryOptionProjectionPreviousAttributes.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. 

