[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteResponse

A response containing `DeliveryQuote` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryQuote](../models/DeliveryQuote.md#deliveryquote) | Resource, collection, or operation result returned by this request. An estimate of available delivery options and their prices. `data`: [field definitions](../models/DeliveryQuoteResponse.md#deliveryquoteresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryQuoteResponse.data

Resource, collection, or operation result returned by this request. An estimate of available delivery options and their prices.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `basis_delivery_quote_id` | Optional | string | Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |
| `basis_delivery_selection_id` | Optional | string | Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `buyer_location` | Optional | object and Alternative shapes (see declared variants) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliveryQuoteResponse.md#deliveryquoteresponsedatabuyer_location). |
| `buyer_reasons` | Required | Array of string | Buyer-safe reasons no delivery option was available. Merchant configuration details are never included. Items values: [6 declared values](#deliveryquoteresponsedata-buyer_reasons--values). |
| `checkout_session_id` | Optional | string | Always present with an API key or dashboard credential. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `choice_groups` | Required | Array of [DeliveryQuoteChoiceGroupResource](../models/DeliveryQuoteChoiceGroupResource.md#deliveryquotechoicegroupresource) | `choice_groups[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groups). |
| `created_at` | Required | string | When Flint created this quote. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_quote_id` | Required | string | Unique identifier for this delivery quote, prefixed `dqt_`. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |
| `delivery_quote_version` | Optional | integer | Version of the order's delivery details evaluated by this quote. Always present with an API key or dashboard credential. Format: `uint64`. minimum: `0`. |
| `delivery_revocation_id` | Required | string or null | The delivery revocation that revoked this quote, or null when no revocation applies. Example: `"drev_01KEZF7C007Q141XJ28YAAC87B"`. |
| `destination_address` | Optional | [Address](../models/Address.md#address) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/DeliveryQuoteResponse.md#deliveryquoteresponsedatadestination_address). |
| `eligibility_context_version` | Optional | integer | Version of the checkout eligibility context evaluated by this quote. Always present with an API key or dashboard credential. Format: `uint64`. minimum: `0`. |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | Authoritative expiry for this quote: 24 hours when every method uses fixed, tiered, or rate_table pricing, and at most 15 minutes otherwise. A cart with tracked inventory shortens it to the 5 minutes its stock check stays valid. Read this value from every response. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Always present with an API key or dashboard credential. `merchant_diagnostics[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics). |
| `methods` | Optional | Array of [DeliveryQuoteMethodResource](../models/DeliveryQuoteMethodResource.md#deliveryquotemethodresource) | `methods[]`: [field definitions](../models/DeliveryQuoteResponse.md#deliveryquoteresponsedatamethods). |
| `order_id` | Optional | string | Always present with an API key or dashboard credential. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `pending_caller_rate_requests` | Optional | Array of [DeliveryPendingCallerRateRequest](../models/DeliveryPendingCallerRateRequest.md#deliverypendingcallerraterequest) | `pending_caller_rate_requests[]`: [field definitions](../models/DeliveryQuoteResponse.md#deliveryquoteresponsedatapending_caller_rate_requests). |
| `revocation_reason` | Optional | string | Why the quote was revoked: the reason on the delivery revocation that fenced a dependency this quote used. Present when status is revoked. Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `selection_required` | Required | boolean |  |
| `stale_reason` | Optional | string | Values: `"checkout_changed"`, `"selection_changed"`, `"eligibility_changed"`, `"inventory_changed"`, `"authority_changed"`, `"superseded_by_priced_quote"`. |
| `status` | Required | string | Whether the quote can be selected now, derived from the current checkout or renewal order on every read. Values: `"active"`, `"consumed"`, `"stale"`, `"expired"`, `"revoked"`. |
| `superseded_by_delivery_quote_id` | Optional | string | The priced delivery quote that replaced this quote. Its basis_delivery_quote_id names this quote. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |

#### DeliveryQuoteResponse.data buyer_reasons [] values

- `"address_required"`
- `"address_incomplete"`
- `"outside_delivery_area"`
- `"no_pickup_location_nearby"`
- `"unavailable_for_these_items"`
- `"temporarily_unavailable"`

### DeliveryQuoteResponse.data.buyer_location

Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress). |
| `coordinate` | Conditional | object | A latitude and longitude. `coordinate`: [field definitions](../models/DeliveryQuoteResponse.md#deliveryquoteresponsedatabuyer_locationcoordinate). |
| `type` | Required | string | Values: `"address"`, `"coordinate"`. |

### DeliveryQuoteResponse.data.buyer_location variant 1: `type` = `"address"`

oneOf with type: "address": The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliveryQuoteResponse.data.buyer_location variant 2: `type` = `"coordinate"`

oneOf with type: "coordinate": The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### DeliveryQuoteResponse.data.buyer_location.address

Field definitions: [OrderResponse.data.delivery_destination.address](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress).

### DeliveryQuoteResponse.data.buyer_location.coordinate

A latitude and longitude.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `latitude` | Required | number | minimum: `-90`. maximum: `90`. |
| `longitude` | Required | number | minimum: `-180`. maximum: `180`. |

### DeliveryQuoteResponse.data.choice_groups[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groups).

### DeliveryQuoteResponse.data.destination_address

Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### DeliveryQuoteResponse.data.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### DeliveryQuoteResponse.data.merchant_diagnostics[]

Field definitions: [CheckoutSessionResponse.data.delivery.merchant_diagnostics[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics).

### DeliveryQuoteResponse.data.methods[]

A delivery method offered in a delivery quote, with its name, type, display position, and revision.

Field definitions: [shared fields](DeliveryQuoteMethodResourceInput.md#deliveryquotemethodresourceinput).

### DeliveryQuoteResponse.data.pending_caller_rate_requests[]

A delivery method and choice group still waiting for a caller-supplied rate on a delivery quote.

Field definitions: [shared fields](DeliveryPendingCallerRateRequestInput.md#deliverypendingcallerraterequestinput).

### DeliveryQuoteResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

