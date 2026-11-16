[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionCommittedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery charge committed by this selection. |
| `buyer_location` | Optional | object and Alternative shapes (see declared variants) or null | Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. `buyer_location`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location). |
| `calculation_expires_at` | Optional | string or null | Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. `calculation_expires_at`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributescalculation_expires_at). |
| `checkout_session_id` | Optional | string or null | Checkout session that owns the selection. Always present with an API key or dashboard credential. `checkout_session_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributescheckout_session_id). |
| `choices` | Optional | Array of [DeliverySelectionChoiceResourcePreviousAttributes](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributes) or null | One chosen option for each required choice group. `choices`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeschoices). |
| `created_at` | Optional | string or null | Time the selection was created. Always present with an API key or dashboard credential. `created_at`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributescreated_at). |
| `delivery_quote_id` | Optional | string or null | Quote from which this selection was made. `delivery_quote_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesdelivery_quote_id). |
| `delivery_selection_id` | Optional | string or null | Stable delivery selection ID. `delivery_selection_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesdelivery_selection_id). |
| `destination_address` | Optional | Alternative shapes (see declared variants) | Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `destination_address`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesdestination_address). |
| `expires_at` | Optional | string or null | Deadline after which this provisional selection can no longer be committed. `expires_at`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesexpires_at). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. `input_requirements`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesinput_requirements). |
| `instructions` | Optional | string or null | Buyer-provided delivery instructions. Returned with an API key or dashboard credential. `instructions`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesinstructions). |
| `lifecycle_events` | Optional | Array of [DeliverySelectionLifecycleEventResourcePreviousAttributes](../models/DeliverySelectionLifecycleEventResourcePreviousAttributes.md#deliveryselectionlifecycleeventresourcepreviousattributes) or null | Ordered lifecycle events recorded for this selection. `lifecycle_events`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslifecycle_events). |
| `lifecycle_updated_at` | Optional | string or null | Time the selection lifecycle last changed. Always present with an API key or dashboard credential. `lifecycle_updated_at`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslifecycle_updated_at). |
| `limiting_deadline_reason` | Optional | string or null | The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. Values: `"selection_guarantee_expiry"`, `"calculation_expiry"`, `"selection_maximum_lifetime"`. `limiting_deadline_reason`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslimiting_deadline_reason). |
| `order_id` | Optional | string or null | Order affected by the selection. Always present with an API key or dashboard credential. `order_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesorder_id). |
| `private_data_status` | Optional | string or null | Availability state of merchant-private selection evidence. Values: `"available"`, `"redacted"`. `private_data_status`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesprivate_data_status). |
| `recipient` | Optional | Alternative shapes (see declared variants) | Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `recipient`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient). |
| `redacted_at` | Optional | string or null | Time merchant-private selection evidence was redacted. `redacted_at`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesredacted_at). |
| `status` | Optional | string or null | Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. `status`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. Items values: `"release"`. `supported_actions`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributessupported_actions). |

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location

Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | Alternative shapes (see declared variants) | The buyer location as an address. Set only when `type` is `address`. `address`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location-variant-1address). |
| `coordinate` | Conditional | Alternative shapes (see declared variants) | The buyer location as a coordinate. Set only when `type` is `coordinate`. `coordinate`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location-variant-1coordinate). |
| `type` | Conditional | (string or null) and Alternative shapes (see declared variants) | Whether the buyer location is an address or a coordinate. Values: `"address"`, `"coordinate"`. `type`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location-variant-1type), [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location-variant-2type). |

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1: `type` = `"address"`

anyOf DeliveryBuyerLocationResourcePreviousAttributes; anyOf DeliveryBuyerLocationResourceAddressPreviousAttributes.

- Optional: `address`, `coordinate`, `type`.
- Constraints for `type`: Values: `"address"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2: `type` = `"coordinate"`

anyOf DeliveryBuyerLocationResourcePreviousAttributes; anyOf DeliveryBuyerLocationResourceCoordinatePreviousAttributes.

- Optional: `address`, `coordinate`, `type`.
- Constraints for `type`: Values: `"coordinate"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 3

anyOf variant 2.

- Undeclared: `address`, `coordinate`, `type`.
- Value shape: null. Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address

The buyer location as an address. Set only when `type` is `address`.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The buyer location as an address. Set only when `type` is `address`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate

The buyer location as a coordinate. Set only when `type` is `coordinate`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `latitude` | Conditional | number or null | Latitude in degrees, from -90 to 90. `latitude`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location-variant-1coordinate-variant-1latitude). |
| `longitude` | Conditional | number or null | Longitude in degrees, from -180 to 180. `longitude`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location-variant-1coordinate-variant-1longitude). |

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate variant 1

anyOf DeliveryCoordinateRequestPreviousAttributes.

- Optional: `latitude`, `longitude`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate variant 2

anyOf variant 2.

- Undeclared: `latitude`, `longitude`.
- Value shape: null. The buyer location as a coordinate. Set only when `type` is `coordinate`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate variant 1.latitude

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate variant 1.latitude variant 1

anyOf variant 1: Latitude in degrees, from -90 to 90..

- Value shape: number. Latitude in degrees, from -90 to 90. Latitude in degrees, from -90 to 90. minimum: `-90`. maximum: `90`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate variant 1.latitude variant 2

anyOf variant 2.

- Value shape: null. Latitude in degrees, from -90 to 90. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate variant 1.longitude

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate variant 1.longitude variant 1

anyOf variant 1: Longitude in degrees, from -180 to 180..

- Value shape: number. Longitude in degrees, from -180 to 180. Longitude in degrees, from -180 to 180. minimum: `-180`. maximum: `180`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate variant 1.longitude variant 2

anyOf variant 2.

- Value shape: null. Longitude in degrees, from -180 to 180. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.type

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.type variant 1

anyOf group 1 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: string. Whether the buyer location is an address or a coordinate. Values: `"address"`, `"coordinate"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Whether the buyer location is an address or a coordinate. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.type variant 3

anyOf group 2 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: string. Whether the buyer location is an address or a coordinate. Values: `"address"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.type variant 5

anyOf group 3 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: any. Whether the buyer location is an address or a coordinate. Values: `"address"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2.address

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location-variant-1address).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2.coordinate

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location-variant-1coordinate).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2.type

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2.type variant 1

anyOf group 1 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: string. Whether the buyer location is an address or a coordinate. Values: `"address"`, `"coordinate"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Whether the buyer location is an address or a coordinate. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2.type variant 3

anyOf group 2 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: string. Whether the buyer location is an address or a coordinate. Values: `"coordinate"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2.type variant 5

anyOf group 3 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: any. Whether the buyer location is an address or a coordinate. Values: `"coordinate"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.calculation_expires_at

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.calculation_expires_at variant 1

anyOf variant 1: Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential..

- Value shape: string. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: `date-time`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.calculation_expires_at variant 2

anyOf variant 2.

- Value shape: null. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.checkout_session_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.checkout_session_id variant 1

anyOf variant 1: Checkout session that owns the selection. Always present with an API key or dashboard credential..

- Value shape: string. Checkout session that owns the selection. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. Checkout session that owns the selection. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1

anyOf variant 1: One chosen option for each required choice group..

- Value shape: Array of [DeliverySelectionChoiceResourcePreviousAttributes](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributes). One chosen option for each required choice group. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 2

anyOf variant 2.

- Value shape: null. One chosen option for each required choice group. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery price before discounts and tax. |
| `delivery_choice_group_id` | Optional | string or null | ID of the quote choice group these items belong to. `delivery_choice_group_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeschoices-variant-1-fields-1delivery_choice_group_id). |
| `delivery_method_id` | Optional | string or null | ID of the delivery method providing this choice. `delivery_method_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeschoices-variant-1-fields-1delivery_method_id). |
| `delivery_option_id` | Optional | string or null | ID of the option chosen from the quote. `delivery_option_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeschoices-variant-1-fields-1delivery_option_id). |
| `delivery_plan` | Optional | Alternative shapes (see declared variants) | Whether this choice delivers the items together or in separate shipments. `delivery_plan`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_plan). |
| `delivery_window_id` | Optional | string or null | ID of the chosen offered window. Omitted when no offered window was chosen. `delivery_window_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeschoices-variant-1-fields-1delivery_window_id). |
| `description` | Optional | string or null | Buyer-facing description captured from the chosen method. Omitted when the method had none. `description`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Always present with an API key or dashboard credential. |
| `input` | Optional | Alternative shapes (see declared variants) | Window choice and buyer instructions stored with this selection. Omitted when neither was supplied. `input`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesinput-fields-1). |
| `local_delivery` | Optional | Alternative shapes (see declared variants) | Local delivery service details, present for local_delivery choices. `local_delivery`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributeslocal_delivery). |
| `merchant_reference` | Optional | string or null | Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. `merchant_reference`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesmerchant_reference). |
| `name` | Optional | string or null | Buyer-facing name captured from the chosen method. `name`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesname). |
| `order_charge_id` | Optional | string or null or null | Always present with an API key or dashboard credential. Null when the choice has no order charge. `order_charge_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeschoices-variant-1-fields-1order_charge_id). |
| `order_id` | Optional | string or null | ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. `order_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeschoices-variant-1-fields-1order_id). |
| `pickup` | Optional | Alternative shapes (see declared variants) | Pickup Location and collection details, present for pickup choices. `pickup`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributespickup). |
| `shipment` | Optional | Alternative shapes (see declared variants) | Shipping service details, present for shipment choices. `shipment`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesshipment). |
| `stable_key` | Optional | string or null | Key identifying the same items and allowed delivery types across quotes. `stable_key`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesstable_key). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Always present with an API key or dashboard credential. |
| `timezone` | Optional | string or null | IANA timezone for displaying window_start_at and window_end_at. `timezone`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeschoices-variant-1-fields-1timezone). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery price after discounts and tax. |
| `type` | Optional | string or null | How this choice delivers the items. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributestype). |
| `window_end_at` | Optional | string or null | RFC3339 timestamp. `window_end_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `window_start_at` | Optional | string or null | RFC3339 timestamp. `window_start_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_choice_group_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_choice_group_id variant 1

anyOf variant 1: ID of the quote choice group these items belong to..

- Value shape: string. ID of the quote choice group these items belong to. ID of the quote choice group these items belong to. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. ID of the quote choice group these items belong to. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_method_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method providing this choice..

- Value shape: string. ID of the delivery method providing this choice. ID of the delivery method providing this choice. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method providing this choice. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_option_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_option_id variant 1

anyOf variant 1: ID of the option chosen from the quote..

- Value shape: string. ID of the option chosen from the quote. ID of the option chosen from the quote. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_option_id variant 2

anyOf variant 2.

- Value shape: null. ID of the option chosen from the quote. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_plan

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.delivery_plan](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_plan).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_window_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_window_id variant 1

anyOf variant 1: ID of the chosen offered window. Omitted when no offered window was chosen..

- Value shape: string. ID of the chosen offered window. Omitted when no offered window was chosen. ID of the chosen offered window. Omitted when no offered window was chosen. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID of the chosen offered window. Omitted when no offered window was chosen. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.description

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.description](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdescription).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.input

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.input fields 1](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesinput-fields-1).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.local_delivery

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.local_delivery](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributeslocal_delivery).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.merchant_reference

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.merchant_reference](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesmerchant_reference).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.name

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.name](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesname).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.order_charge_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.order_charge_id variant 1

anyOf variant 1: Always present with an API key or dashboard credential. Null when the choice has no order charge..

- Value shape: (string or null). Always present with an API key or dashboard credential. Null when the choice has no order charge. Always present with an API key or dashboard credential. Null when the choice has no order charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Always present with an API key or dashboard credential. Null when the choice has no order charge. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.order_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.order_id variant 1

anyOf variant 1: ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies..

- Value shape: string. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.pickup

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.pickup](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributespickup).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.shipment

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.shipment](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesshipment).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.stable_key

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.stable_key](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesstable_key).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.timezone

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.timezone variant 1

anyOf variant 1: IANA timezone for displaying window_start_at and window_end_at..

- Value shape: string. IANA timezone for displaying window_start_at and window_end_at. IANA timezone for displaying window_start_at and window_end_at. Example: `"America/New_York"`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone for displaying window_start_at and window_end_at. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.type

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.type](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributestype).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.window_end_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1.window_start_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.created_at

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: Time the selection was created. Always present with an API key or dashboard credential..

- Value shape: string. Time the selection was created. Always present with an API key or dashboard credential. Time the selection was created. Always present with an API key or dashboard credential. Format: `date-time`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the selection was created. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.delivery_quote_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.delivery_quote_id variant 1

anyOf variant 1: Quote from which this selection was made..

- Value shape: string. Quote from which this selection was made. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.delivery_quote_id variant 2

anyOf variant 2.

- Value shape: null. Quote from which this selection was made. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.delivery_selection_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.delivery_selection_id variant 1

anyOf variant 1: Stable delivery selection ID..

- Value shape: string. Stable delivery selection ID. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery selection ID. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.destination_address

Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.destination_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.destination_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.destination_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.destination_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.destination_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.destination_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.destination_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.destination_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.expires_at

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.expires_at variant 1

anyOf variant 1: Deadline after which this provisional selection can no longer be committed..

- Value shape: string. Deadline after which this provisional selection can no longer be committed. Deadline after which this provisional selection can no longer be committed. Format: `date-time`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Deadline after which this provisional selection can no longer be committed. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.input_requirements

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.input_requirements variant 1

anyOf variant 1: Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes). Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.input_requirements variant 1.[] fields 1

Field definitions: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.instructions

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.instructions variant 1

anyOf variant 1: Buyer-provided delivery instructions. Returned with an API key or dashboard credential..

- Value shape: string. Buyer-provided delivery instructions. Returned with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-provided delivery instructions. Returned with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1

anyOf variant 1: Ordered lifecycle events recorded for this selection..

- Value shape: Array of [DeliverySelectionLifecycleEventResourcePreviousAttributes](../models/DeliverySelectionLifecycleEventResourcePreviousAttributes.md#deliveryselectionlifecycleeventresourcepreviousattributes). Ordered lifecycle events recorded for this selection. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 2

anyOf variant 2.

- Value shape: null. Ordered lifecycle events recorded for this selection. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `delivery_selection_id` | Optional | string or null | ID of the selection whose status changed. `delivery_selection_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslifecycle_events-variant-1-fields-1delivery_selection_id). |
| `delivery_selection_lifecycle_event_id` | Optional | string or null | ID of this recorded selection status change. `delivery_selection_lifecycle_event_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslifecycle_events-variant-1-fields-1delivery_selection_lifecycle_event_id). |
| `reason` | Optional | string or null | What caused this selection status change. Values: [17 declared values](DeliverySelectionLifecycleEventResourceInput.md#deliveryselectionlifecycleeventresourceinput-reason-values). `reason`: [declared alternatives](../models/DeliverySelectionLifecycleEventResourcePreviousAttributes.md#deliveryselectionlifecycleeventresourcepreviousattributesreason). |
| `status` | Optional | string or null | Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. `status`: [declared alternatives](../models/DeliverySelectionLifecycleEventResourcePreviousAttributes.md#deliveryselectionlifecycleeventresourcepreviousattributesstatus). |

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1.delivery_selection_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1.delivery_selection_id variant 1

anyOf variant 1: ID of the selection whose status changed..

- Value shape: string. ID of the selection whose status changed. ID of the selection whose status changed. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the selection whose status changed. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1.delivery_selection_lifecycle_event_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1.delivery_selection_lifecycle_event_id variant 1

anyOf variant 1: ID of this recorded selection status change..

- Value shape: string. ID of this recorded selection status change. ID of this recorded selection status change. Example: `"dsle_01KEZF7C00FR4QPRPMM4T248FD"`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1.delivery_selection_lifecycle_event_id variant 2

anyOf variant 2.

- Value shape: null. ID of this recorded selection status change. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1.reason

Declared alternatives: [DeliverySelectionLifecycleEventResourcePreviousAttributes.reason](../models/DeliverySelectionLifecycleEventResourcePreviousAttributes.md#deliveryselectionlifecycleeventresourcepreviousattributesreason).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1.status

Declared alternatives: [DeliverySelectionLifecycleEventResourcePreviousAttributes.status](../models/DeliverySelectionLifecycleEventResourcePreviousAttributes.md#deliveryselectionlifecycleeventresourcepreviousattributesstatus).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_updated_at

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_updated_at variant 1

anyOf variant 1: Time the selection lifecycle last changed. Always present with an API key or dashboard credential..

- Value shape: string. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: `date-time`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.limiting_deadline_reason

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.limiting_deadline_reason variant 1

anyOf variant 1: The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential.
- `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too.
- `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first.
- `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created..

- Value shape: string. The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. Values: `"selection_guarantee_expiry"`, `"calculation_expiry"`, `"selection_maximum_lifetime"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.limiting_deadline_reason variant 2

anyOf variant 2.

- Value shape: null. The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.order_id

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: Order affected by the selection. Always present with an API key or dashboard credential..

- Value shape: string. Order affected by the selection. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order affected by the selection. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.private_data_status

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.private_data_status variant 1

anyOf variant 1: Availability state of merchant-private selection evidence..

- Value shape: string. Availability state of merchant-private selection evidence. Values: `"available"`, `"redacted"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.private_data_status variant 2

anyOf variant 2.

- Value shape: null. Availability state of merchant-private selection evidence. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient

Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Conditional | string or null | Email address for contacting the recipient about delivery. `email`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient-variant-1email). |
| `name` | Conditional | string or null | Name of the person receiving or collecting the items. `name`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient-variant-1name). |
| `phone` | Conditional | string or null | Phone number for contacting the recipient about delivery. `phone`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient-variant-1phone). |

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1

anyOf DeliveryRecipientResourcePreviousAttributes.

- Optional: `email`, `name`, `phone`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 2

anyOf variant 2.

- Undeclared: `email`, `name`, `phone`.
- Value shape: null. Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.email

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.email variant 1

anyOf variant 1: Email address for contacting the recipient about delivery..

- Value shape: string. Email address for contacting the recipient about delivery. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.email variant 2

anyOf variant 2.

- Value shape: null. Email address for contacting the recipient about delivery. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.name

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.name variant 1

anyOf variant 1: Name of the person receiving or collecting the items..

- Value shape: string. Name of the person receiving or collecting the items. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person receiving or collecting the items. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.phone

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.phone variant 1

anyOf variant 1: Phone number for contacting the recipient about delivery..

- Value shape: string. Phone number for contacting the recipient about delivery. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.phone variant 2

anyOf variant 2.

- Value shape: null. Phone number for contacting the recipient about delivery. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.redacted_at

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.redacted_at variant 1

anyOf variant 1: Time merchant-private selection evidence was redacted..

- Value shape: string. Time merchant-private selection evidence was redacted. Time merchant-private selection evidence was redacted. Format: `date-time`. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.redacted_at variant 2

anyOf variant 2.

- Value shape: null. Time merchant-private selection evidence was redacted. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.status

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Current selection lifecycle status.
- `selected`: These choices are provisional and can be replaced before payment.
- `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes.
- `committed`: Payment fixed these choices on the order.
- `superseded`: A newer selection replaced these choices.
- `expired`: The selection is no longer usable because its deadline passed.
- `released`: These choices were withdrawn. Create a new selection before paying for delivery..

- Value shape: string. Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.supported_actions

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions..

- Value shape: Array of string. Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. Items values: `"release"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. 

