[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EffectiveDeliverySelectionResponse

A response containing `EffectiveDeliverySelectionResource` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [EffectiveDeliverySelectionResource](../models/EffectiveDeliverySelectionResource.md#effectivedeliveryselectionresource) | Resource, collection, or operation result returned by this request. The delivery selection currently in effect for a checkout, with its `source` (none, provisional, or committed) and whether it can still be changed. `data`: [field definitions](../models/EffectiveDeliverySelectionResponse.md#effectivedeliveryselectionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### EffectiveDeliverySelectionResponse.data

Resource, collection, or operation result returned by this request. The delivery selection currently in effect for a checkout, with its `source` (none, provisional, or committed) and whether it can still be changed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_selection` | Required | [DeliverySelection](../models/DeliverySelection.md#deliveryselection) or null | `delivery_selection`: [declared alternatives](../models/EffectiveDeliverySelectionResponse.md#effectivedeliveryselectionresponsedatadelivery_selection). |
| `mutable` | Required | boolean |  |
| `originating_checkout_session_id` | Optional | string | Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `source` | Required | string | Values: `"none"`, `"provisional"`, `"committed"`. |

### EffectiveDeliverySelectionResponse.data.delivery_selection

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_location` | Conditional | object and Alternative shapes (see declared variants) | Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/EffectiveDeliverySelectionResponse.md#effectivedeliveryselectionresponsedatadelivery_selection-variant-1buyer_location). |
| `calculation_expires_at` | Conditional | string | Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `checkout_session_id` | Conditional | string | Checkout session that owns the selection. Always present with an API key or dashboard credential. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `choices` | Conditional | Array of [DeliverySelectionChoiceResource](../models/DeliverySelectionChoiceResource.md#deliveryselectionchoiceresource) | One chosen option for each required choice group. `choices[]`: [field definitions](../models/EffectiveDeliverySelectionResponse.md#effectivedeliveryselectionresponsedatadelivery_selection-variant-1choices). |
| `created_at` | Conditional | string | Time the selection was created. Always present with an API key or dashboard credential. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_quote_id` | Conditional | string | Quote from which this selection was made. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |
| `delivery_quote_version` | Conditional | integer | Quote version from which this selection was created. Always present with an API key or dashboard credential. Format: `uint64`. minimum: `0`. |
| `delivery_selection_id` | Conditional | string | Stable delivery selection ID. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `destination_address` | Conditional | [Address](../models/Address.md#address) | Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/EffectiveDeliverySelectionResponse.md#effectivedeliveryselectionresponsedatadelivery_selection-variant-1destination_address). |
| `eligibility_context_version` | Conditional | integer | Checkout eligibility context version evaluated by this selection. Always present with an API key or dashboard credential. Format: `uint64`. minimum: `0`. |
| `expires_at` | Conditional | string | Deadline after which this provisional selection can no longer be committed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `input_requirements` | Conditional | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs this selection still needs before payment: each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `instructions` | Conditional | string | Buyer-provided delivery instructions. Returned with an API key or dashboard credential. |
| `lifecycle_events` | Conditional | Array of [DeliverySelectionLifecycleEventResource](../models/DeliverySelectionLifecycleEventResource.md#deliveryselectionlifecycleeventresource) | Ordered lifecycle events recorded for this selection. `lifecycle_events[]`: [field definitions](../models/EffectiveDeliverySelectionResponse.md#effectivedeliveryselectionresponsedatadelivery_selection-variant-1lifecycle_events). |
| `lifecycle_updated_at` | Conditional | string | Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `limiting_deadline_reason` | Conditional | string | Constraint that determined the selection expiry. Always present with an API key or dashboard credential. Values: [6 declared values](#effectivedeliveryselectionresponsedatadelivery_selection-limiting_deadline_reason-values). |
| `order_id` | Conditional | string | Order affected by the selection. Always present with an API key or dashboard credential. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `private_data_status` | Conditional | string | Availability state of merchant-private selection evidence. Values: `"available"`, `"redacted"`. |
| `recipient` | Conditional | [DeliveryRecipientResource](../models/DeliveryRecipientResource.md#deliveryrecipientresource) | Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `redacted_at` | Conditional | string | Time merchant-private selection evidence was redacted. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Conditional | string | Current selection lifecycle status. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |

#### EffectiveDeliverySelectionResponse.data.delivery_selection limiting_deadline_reason values

- `"selection_guarantee_expiry"`
- `"calculation_expiry"`
- `"selection_maximum_lifetime"`
- `"inventory_reservation_expiry"`
- `"tax_validity_expiry"`
- `"checkout_session_expiry"`

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1

anyOf DeliverySelection: The delivery choice selected for a checkout or order..

- Required: `amount_money`, `choices`, `delivery_quote_id`, `delivery_selection_id`, `expires_at`, `input_requirements`, `status`.
- Optional: `buyer_location`, `calculation_expires_at`, `checkout_session_id`, `created_at`, `delivery_quote_version`, `destination_address`, `eligibility_context_version`, `instructions`, `lifecycle_events`, `lifecycle_updated_at`, `limiting_deadline_reason`, `order_id`, `private_data_status`, `recipient`, `redacted_at`.

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `buyer_location`, `calculation_expires_at`, `checkout_session_id`, `choices`, `created_at`, `delivery_quote_id`, `delivery_quote_version`, `delivery_selection_id`, `destination_address`, `eligibility_context_version`, `expires_at`, `input_requirements`, `instructions`, `lifecycle_events`, `lifecycle_updated_at`, `limiting_deadline_reason`, `order_id`, `private_data_status`, `recipient`, `redacted_at`, `status`.
- Value shape: null.  

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.buyer_location

Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote.

Field definitions: [shared fields](DeliveryQuoteResponse.md#deliveryquoteresponsedatabuyer_location).

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.buyer_location variant 1: `type` = `"address"`

oneOf with type: "address": The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.buyer_location variant 2: `type` = `"coordinate"`

oneOf with type: "coordinate": The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.buyer_location.address

Field definitions: [OrderResponse.data.delivery_destination.address](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress).

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.buyer_location.coordinate

Field definitions: [DeliveryQuoteResponse.data.buyer_location.coordinate](../models/DeliveryQuoteResponse.md#deliveryquoteresponsedatabuyer_locationcoordinate).

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.choices[]

A delivery option chosen for one choice group in a delivery selection, with its method, amounts, type-specific details, timezone, and any chosen delivery window.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_choice_group_id` | Required | string | Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_method_id` | Required | string | Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_option_id` | Required | string | Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `delivery_plan` | Required | [DeliveryPlan](../models/DeliveryPlan.md#deliveryplan) | Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. `delivery_plan`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptiondelivery_plan). |
| `delivery_window_id` | Optional | string | Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. |
| `description` | Optional | string |  |
| `discount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `input` | Optional | [DeliverySelectionInstructionsRequest](../models/DeliverySelectionInstructionsRequest.md#deliveryselectioninstructionsrequest) | Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`. `input`: [field definitions](../models/EffectiveDeliverySelectionResponse.md#effectivedeliveryselectionresponsedatadelivery_selection-variant-1choicesinput). |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetails](../models/DeliveryLocalDeliveryDetails.md#deliverylocaldeliverydetails) | Details of a local delivery option: instructions and service level. |
| `merchant_reference` | Optional | string |  |
| `name` | Required | string |  |
| `order_charge_id` | Optional | string or null | Always present with an API key or dashboard credential. Null when the choice has no order charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `pickup` | Optional | [DeliveryPickupDetails](../models/DeliveryPickupDetails.md#deliverypickupdetails) | Pickup details of a delivery option: the pickup mode and the pickup location. |
| `shipment` | Optional | [DeliveryShipmentDetails](../models/DeliveryShipmentDetails.md#deliveryshipmentdetails) | Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `stable_key` | Required | string |  |
| `tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at and window_end_at. Example: `"America/New_York"`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.choices[].delivery_plan

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.delivery_plan](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptiondelivery_plan).

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.choices[].input

Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`.

Field definitions: [shared fields](DeliverySelectionInstructionsRequestInput.md#deliveryselectioninstructionsrequestinput).

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.destination_address

Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### EffectiveDeliverySelectionResponse.data.delivery_selection variant 1.lifecycle_events[]

A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_selection_id` | Required | string | Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `delivery_selection_lifecycle_event_id` | Required | string | Example: `"dsle_01KEZF7C00FR4QPRPMM4T248FD"`. |
| `reason` | Required | string | Values: [17 declared values](DeliverySelectionLifecycleEventResourceInput.md#deliveryselectionlifecycleeventresourceinput-reason-values). |
| `status` | Required | string | Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |

### EffectiveDeliverySelectionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

