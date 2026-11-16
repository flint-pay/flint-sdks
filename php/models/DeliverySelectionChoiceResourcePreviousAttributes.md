[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionChoiceResourcePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery price before discounts and tax. |
| `delivery_choice_group_id` | Optional | string or null | ID of the quote choice group these items belong to. `delivery_choice_group_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_choice_group_id). |
| `delivery_method_id` | Optional | string or null | ID of the delivery method providing this choice. `delivery_method_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_method_id). |
| `delivery_option_id` | Optional | string or null | ID of the option chosen from the quote. `delivery_option_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_option_id). |
| `delivery_plan` | Optional | Alternative shapes (see declared variants) | Whether this choice delivers the items together or in separate shipments. `delivery_plan`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_plan). |
| `delivery_window_id` | Optional | string or null | ID of the chosen offered window. Omitted when no offered window was chosen. `delivery_window_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_window_id). |
| `description` | Optional | string or null | Buyer-facing description captured from the chosen method. Omitted when the method had none. `description`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Always present with an API key or dashboard credential. |
| `input` | Optional | Alternative shapes (see declared variants) | Window choice and buyer instructions stored with this selection. Omitted when neither was supplied. `input`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesinput-fields-1). |
| `local_delivery` | Optional | Alternative shapes (see declared variants) | Local delivery service details, present for local_delivery choices. `local_delivery`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributeslocal_delivery). |
| `merchant_reference` | Optional | string or null | Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. `merchant_reference`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesmerchant_reference). |
| `name` | Optional | string or null | Buyer-facing name captured from the chosen method. `name`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesname). |
| `order_charge_id` | Optional | string or null or null | Always present with an API key or dashboard credential. Null when the choice has no order charge. `order_charge_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. `order_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesorder_id). |
| `pickup` | Optional | Alternative shapes (see declared variants) | Pickup Location and collection details, present for pickup choices. `pickup`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributespickup). |
| `shipment` | Optional | Alternative shapes (see declared variants) | Shipping service details, present for shipment choices. `shipment`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesshipment). |
| `stable_key` | Optional | string or null | Key identifying the same items and allowed delivery types across quotes. `stable_key`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesstable_key). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Always present with an API key or dashboard credential. |
| `timezone` | Optional | string or null | IANA timezone for displaying window_start_at and window_end_at. `timezone`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributestimezone). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery price after discounts and tax. |
| `type` | Optional | string or null | How this choice delivers the items. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributestype). |
| `window_end_at` | Optional | string or null | RFC3339 timestamp. `window_end_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `window_start_at` | Optional | string or null | RFC3339 timestamp. `window_start_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_choice_group_id

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_choice_group_id variant 1

anyOf variant 1: ID of the quote choice group these items belong to..

- Value shape: string. ID of the quote choice group these items belong to. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. ID of the quote choice group these items belong to. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_method_id

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method providing this choice..

- Value shape: string. ID of the delivery method providing this choice. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method providing this choice. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_option_id

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_option_id variant 1

anyOf variant 1: ID of the option chosen from the quote..

- Value shape: string. ID of the option chosen from the quote. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_option_id variant 2

anyOf variant 2.

- Value shape: null. ID of the option chosen from the quote. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_plan

Whether this choice delivers the items together or in separate shipments.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_plan).

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_plan variant 1

anyOf DeliveryPlanPreviousAttributes.

- Optional: `complete_by_at`, `first_arrival_at`, `planned_delivery_count`, `type`.

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_plan variant 2

anyOf variant 2.

- Undeclared: `complete_by_at`, `first_arrival_at`, `planned_delivery_count`, `type`.
- Value shape: null. Whether this choice delivers the items together or in separate shipments. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_plan variant 1.complete_by_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_plan variant 1.first_arrival_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_plan variant 1.planned_delivery_count

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1.planned_delivery_count](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_plan-variant-1planned_delivery_count).

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_plan variant 1.type

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1.type](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_plan-variant-1type).

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_window_id

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_window_id variant 1

anyOf variant 1: ID of the chosen offered window. Omitted when no offered window was chosen..

- Value shape: string. ID of the chosen offered window. Omitted when no offered window was chosen. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID of the chosen offered window. Omitted when no offered window was chosen. 

### DeliverySelectionChoiceResourcePreviousAttributes.description

### DeliverySelectionChoiceResourcePreviousAttributes.description variant 1

anyOf variant 1: Buyer-facing description captured from the chosen method. Omitted when the method had none..

- Value shape: string. Buyer-facing description captured from the chosen method. Omitted when the method had none. 

### DeliverySelectionChoiceResourcePreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing description captured from the chosen method. Omitted when the method had none. 

### DeliverySelectionChoiceResourcePreviousAttributes.input fields 1

Window choice and buyer instructions stored with this selection. Omitted when neither was supplied.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_window_id` | Conditional | string or null | ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise. `delivery_window_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesinput-fields-1-variant-1delivery_window_id). |
| `instructions` | Conditional | string or null | Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `instructions`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesinput-fields-1-variant-1instructions). |

### DeliverySelectionChoiceResourcePreviousAttributes.input fields 1 variant 1

anyOf DeliverySelectionInstructionsRequestPreviousAttributes.

- Optional: `delivery_window_id`, `instructions`.

### DeliverySelectionChoiceResourcePreviousAttributes.input fields 1 variant 2

anyOf variant 2.

- Undeclared: `delivery_window_id`, `instructions`.
- Value shape: null. Window choice and buyer instructions stored with this selection. Omitted when neither was supplied. 

### DeliverySelectionChoiceResourcePreviousAttributes.input fields 1 variant 1.delivery_window_id

### DeliverySelectionChoiceResourcePreviousAttributes.input fields 1 variant 1.delivery_window_id variant 1

anyOf variant 1: ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise..

- Value shape: string. ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise. ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise. minLength: `1`. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. 

### DeliverySelectionChoiceResourcePreviousAttributes.input fields 1 variant 1.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise. 

### DeliverySelectionChoiceResourcePreviousAttributes.input fields 1 variant 1.instructions

### DeliverySelectionChoiceResourcePreviousAttributes.input fields 1 variant 1.instructions variant 1

anyOf variant 1: Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. minLength: `1`. maxLength: `2000`. 

### DeliverySelectionChoiceResourcePreviousAttributes.input fields 1 variant 1.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliverySelectionChoiceResourcePreviousAttributes.local_delivery

Local delivery service details, present for local_delivery choices.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery).

### DeliverySelectionChoiceResourcePreviousAttributes.local_delivery variant 1

anyOf DeliveryLocalDeliveryDetailsPreviousAttributes.

- Optional: `instructions`, `service_level`.

### DeliverySelectionChoiceResourcePreviousAttributes.local_delivery variant 2

anyOf variant 2.

- Undeclared: `instructions`, `service_level`.
- Value shape: null. Local delivery service details, present for local_delivery choices. 

### DeliverySelectionChoiceResourcePreviousAttributes.local_delivery variant 1.instructions

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.instructions](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery-variant-1instructions).

### DeliverySelectionChoiceResourcePreviousAttributes.local_delivery variant 1.service_level

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.service_level](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery-variant-1service_level).

### DeliverySelectionChoiceResourcePreviousAttributes.merchant_reference

### DeliverySelectionChoiceResourcePreviousAttributes.merchant_reference variant 1

anyOf variant 1: Reference supplied by the merchant's rate service for this option. Omitted when none was supplied..

- Value shape: string. Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. 

### DeliverySelectionChoiceResourcePreviousAttributes.merchant_reference variant 2

anyOf variant 2.

- Value shape: null. Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. 

### DeliverySelectionChoiceResourcePreviousAttributes.name

### DeliverySelectionChoiceResourcePreviousAttributes.name variant 1

anyOf variant 1: Buyer-facing name captured from the chosen method..

- Value shape: string. Buyer-facing name captured from the chosen method. 

### DeliverySelectionChoiceResourcePreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing name captured from the chosen method. 

### DeliverySelectionChoiceResourcePreviousAttributes.order_charge_id

### DeliverySelectionChoiceResourcePreviousAttributes.order_charge_id variant 1

anyOf variant 1: Always present with an API key or dashboard credential. Null when the choice has no order charge..

- Value shape: (string or null). Always present with an API key or dashboard credential. Null when the choice has no order charge. 

### DeliverySelectionChoiceResourcePreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Always present with an API key or dashboard credential. Null when the choice has no order charge. 

### DeliverySelectionChoiceResourcePreviousAttributes.order_id

### DeliverySelectionChoiceResourcePreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies..

- Value shape: string. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. 

### DeliverySelectionChoiceResourcePreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. 

### DeliverySelectionChoiceResourcePreviousAttributes.pickup

Pickup Location and collection details, present for pickup choices.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup).

### DeliverySelectionChoiceResourcePreviousAttributes.pickup variant 1

anyOf DeliveryPickupDetailsPreviousAttributes.

- Optional: `location`, `pickup_mode`.

### DeliverySelectionChoiceResourcePreviousAttributes.pickup variant 2

anyOf variant 2.

- Undeclared: `location`, `pickup_mode`.
- Value shape: null. Pickup Location and collection details, present for pickup choices. 

### DeliverySelectionChoiceResourcePreviousAttributes.pickup variant 1.location

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup-variant-1location).

### DeliverySelectionChoiceResourcePreviousAttributes.pickup variant 1.pickup_mode

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.pickup_mode](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup-variant-1pickup_mode).

### DeliverySelectionChoiceResourcePreviousAttributes.shipment

Shipping service details, present for shipment choices.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery).

### DeliverySelectionChoiceResourcePreviousAttributes.shipment variant 1

anyOf DeliveryShipmentDetailsPreviousAttributes.

- Optional: `instructions`, `service_level`.

### DeliverySelectionChoiceResourcePreviousAttributes.shipment variant 2

anyOf variant 2.

- Undeclared: `instructions`, `service_level`.
- Value shape: null. Shipping service details, present for shipment choices. 

### DeliverySelectionChoiceResourcePreviousAttributes.shipment variant 1.instructions

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.instructions](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery-variant-1instructions).

### DeliverySelectionChoiceResourcePreviousAttributes.shipment variant 1.service_level

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.service_level](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery-variant-1service_level).

### DeliverySelectionChoiceResourcePreviousAttributes.stable_key

### DeliverySelectionChoiceResourcePreviousAttributes.stable_key variant 1

anyOf variant 1: Key identifying the same items and allowed delivery types across quotes..

- Value shape: string. Key identifying the same items and allowed delivery types across quotes. 

### DeliverySelectionChoiceResourcePreviousAttributes.stable_key variant 2

anyOf variant 2.

- Value shape: null. Key identifying the same items and allowed delivery types across quotes. 

### DeliverySelectionChoiceResourcePreviousAttributes.timezone

### DeliverySelectionChoiceResourcePreviousAttributes.timezone variant 1

anyOf variant 1: IANA timezone for displaying window_start_at and window_end_at..

- Value shape: string. IANA timezone for displaying window_start_at and window_end_at. 

### DeliverySelectionChoiceResourcePreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone for displaying window_start_at and window_end_at. 

### DeliverySelectionChoiceResourcePreviousAttributes.type

### DeliverySelectionChoiceResourcePreviousAttributes.type variant 1

anyOf variant 1: How this choice delivers the items..

- Value shape: string. How this choice delivers the items. Values: `"shipment"`, `"pickup"`, `"local_delivery"`.

### DeliverySelectionChoiceResourcePreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How this choice delivers the items. 

### DeliverySelectionChoiceResourcePreviousAttributes.window_end_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### DeliverySelectionChoiceResourcePreviousAttributes.window_start_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

