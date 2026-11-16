[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionCommittedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Delivery charge committed by this selection. |
| `buyer_location` | Optional | object and Alternative shapes (see declared variants) or null | Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. `buyer_location`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location). |
| `calculation_expires_at` | Optional | string or null | Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. `calculation_expires_at`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributescalculation_expires_at). |
| `checkout_session_id` | Optional | string or null | Checkout session that owns the selection. Always present with an API key or dashboard credential. `checkout_session_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributescheckout_session_id). |
| `choices` | Optional | Array of [DeliverySelectionChoiceResource](../models/DeliverySelectionChoiceResource.md#deliveryselectionchoiceresource) or null | One chosen option for each required choice group. `choices`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeschoices). |
| `created_at` | Optional | string or null | Time the selection was created. Always present with an API key or dashboard credential. `created_at`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributescreated_at). |
| `delivery_quote_id` | Optional | string or null | Quote from which this selection was made. `delivery_quote_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesdelivery_quote_id). |
| `delivery_selection_id` | Optional | string or null | Stable delivery selection ID. `delivery_selection_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesdelivery_selection_id). |
| `destination_address` | Optional | [Address](../models/Address.md#address) or null | Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `expires_at` | Optional | string or null | Deadline after which this provisional selection can no longer be committed. `expires_at`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesexpires_at). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) or null | Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. `input_requirements`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesinput_requirements). |
| `instructions` | Optional | string or null | Buyer-provided delivery instructions. Returned with an API key or dashboard credential. `instructions`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesinstructions). |
| `lifecycle_events` | Optional | Array of [DeliverySelectionLifecycleEventResource](../models/DeliverySelectionLifecycleEventResource.md#deliveryselectionlifecycleeventresource) or null | Ordered lifecycle events recorded for this selection. `lifecycle_events`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslifecycle_events). |
| `lifecycle_updated_at` | Optional | string or null | Time the selection lifecycle last changed. Always present with an API key or dashboard credential. `lifecycle_updated_at`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslifecycle_updated_at). |
| `limiting_deadline_reason` | Optional | string or null | The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. Values: `"selection_guarantee_expiry"`, `"calculation_expiry"`, `"selection_maximum_lifetime"`. `limiting_deadline_reason`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslimiting_deadline_reason). |
| `order_id` | Optional | string or null | Order affected by the selection. Always present with an API key or dashboard credential. `order_id`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesorder_id). |
| `private_data_status` | Optional | string or null | Availability state of merchant-private selection evidence. Values: `"available"`, `"redacted"`. `private_data_status`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesprivate_data_status). |
| `recipient` | Optional | [DeliveryRecipientResource](../models/DeliveryRecipientResource.md#deliveryrecipientresource) or null | Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `redacted_at` | Optional | string or null | Time merchant-private selection evidence was redacted. `redacted_at`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesredacted_at). |
| `status` | Optional | string or null | Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. `status`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. Items values: `"release"`. `supported_actions`: [declared alternatives](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributessupported_actions). |

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location

Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [Address](../models/Address.md#address) | The buyer location as an address. Set only when `type` is `address`. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress). |
| `coordinate` | Conditional | object | The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and longitude. `coordinate`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationcoordinate). |
| `type` | Conditional | string | Whether the buyer location is an address or a coordinate. Values: `"address"`, `"coordinate"`. |

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1: `type` = `"address"`

anyOf DeliveryBuyerLocationResource: Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential.; oneOf with type: "address": The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).
- Required: `address`, `type`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2: `type` = `"coordinate"`

anyOf DeliveryBuyerLocationResource: Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential.; oneOf with type: "coordinate": The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).
- Required: `coordinate`, `type`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 3

anyOf variant 2.

- Undeclared: `address`, `coordinate`, `type`.
- Value shape: null. Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.address

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 1.coordinate

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.coordinate](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationcoordinate).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2.address

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress).

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location variant 2.coordinate

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.coordinate](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationcoordinate).

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

- Value shape: Array of [DeliverySelectionChoiceResource](../models/DeliverySelectionChoiceResource.md#deliveryselectionchoiceresource). One chosen option for each required choice group. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 2

anyOf variant 2.

- Value shape: null. One chosen option for each required choice group. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices variant 1.[] fields 1

Field definitions: [DeliverySelectionResponse.data.choices[]](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatachoices).

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

- Value shape: Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement). Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.input_requirements variant 1.[] fields 1

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

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

- Value shape: Array of [DeliverySelectionLifecycleEventResource](../models/DeliverySelectionLifecycleEventResource.md#deliveryselectionlifecycleeventresource). Ordered lifecycle events recorded for this selection. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 2

anyOf variant 2.

- Value shape: null. Ordered lifecycle events recorded for this selection. 

### DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events variant 1.[] fields 1

Field definitions: [DeliverySelectionResponse.data.lifecycle_events[]](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatalifecycle_events).

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

