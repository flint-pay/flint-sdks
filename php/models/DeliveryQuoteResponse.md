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
| `basis_delivery_quote_id` | Optional | string | The earlier delivery quote this quote was priced from. Omitted when it was not priced from one. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |
| `basis_delivery_selection_id` | Optional | string | The delivery selection this quote was priced from. Omitted when it was not priced from one. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `buyer_location` | Optional | object and Alternative shapes (see declared variants) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliveryQuoteResponse.md#deliveryquoteresponsedatabuyer_location). |
| `buyer_reasons` | Required | Array of string | Buyer-safe reasons candidate methods did not produce an option. These may be present even when another method is available. Merchant configuration details are never included. Items values: [6 declared values](#deliveryquoteresponsedata-buyer_reasons--values). |
| `checkout_session_id` | Optional | string | Always present with an API key or dashboard credential. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `choice_groups` | Required | Array of [DeliveryQuoteChoiceGroupResource](../models/DeliveryQuoteChoiceGroupResource.md#deliveryquotechoicegroupresource) | Groups of order items that each choose their own delivery option. `choice_groups[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groups). |
| `created_at` | Required | string | When Flint created this quote. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_quote_id` | Required | string | Unique identifier for this delivery quote, prefixed `dqt_`. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |
| `delivery_revocation_id` | Required | string or null | The delivery revocation that revoked this quote. `null` when no revocation applies. Example: `"drev_01KEZF7C007Q141XJ28YAAC87B"`. |
| `destination_address` | Optional | [Address](../models/Address.md#address) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/OrderResponse.md#orderresponsedatataxlocationaddress). |
| `evaluated_at` | Required | string | Time Flint priced this quote. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `evaluation_status` | Required | string | How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | Authoritative expiry for this quote: 24 hours when every method uses fixed, tiered, or rate_table pricing, and at most 15 minutes otherwise. A cart with tracked inventory shortens it to the 5 minutes its stock check stays valid. Read this value from every response. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `inventory_reservation_ids` | Optional | Array of string | The cart reservation IDs the merchant supplied for routing credit. Omitted from checkout-credential responses; reservation quantities and details are never included. Items: Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Always present with an API key or dashboard credential. `merchant_diagnostics[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics). |
| `methods` | Optional | Array of [DeliveryQuoteMethodResource](../models/DeliveryQuoteMethodResource.md#deliveryquotemethodresource) | Delivery methods evaluated for this quote. `methods[]`: [field definitions](../models/DeliveryQuoteResponse.md#deliveryquoteresponsedatamethods). |
| `order_id` | Optional | string | Always present with an API key or dashboard credential. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `pending_caller_rate_requests` | Optional | Array of [DeliveryPendingCallerRateRequest](../models/DeliveryPendingCallerRateRequest.md#deliverypendingcallerraterequest) | Delivery methods that wait for your integration to supply a rate. Supply them with `method_results` in a new quote. `pending_caller_rate_requests[]`: [field definitions](../models/DeliveryQuoteResponse.md#deliveryquoteresponsedatapending_caller_rate_requests). |
| `revocation_reason` | Optional | string | Why the quote was revoked: the reason on the delivery revocation that fenced a dependency this quote used. Present when status is revoked. Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `revoked_at` | Optional | string | Time the quote was revoked. Omitted until a delivery revocation revokes it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `selection_required` | Required | boolean | Whether the buyer must choose a delivery option before paying. |
| `stale_reason` | Optional | string | Why this quote can no longer be used. Request a new quote. Omitted unless `status` is `stale`. Values: `"checkout_changed"`, `"selection_changed"`, `"eligibility_changed"`, `"inventory_changed"`, `"authority_changed"`, `"superseded_by_priced_quote"`. |
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

Field definitions: [shared fields](DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_location).

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

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress).

### DeliveryQuoteResponse.data.buyer_location.coordinate

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.coordinate](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationcoordinate).

### DeliveryQuoteResponse.data.choice_groups[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groups).

### DeliveryQuoteResponse.data.destination_address

Field definitions: [OrderResponse.data.tax.location.address](../models/OrderResponse.md#orderresponsedatataxlocationaddress).

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

