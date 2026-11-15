[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryPreviews

### deliveryPreviews.create

Computes delivery options with mode delivery_options or up to 25 pickup locations with mode pickup_locations. Creates no resource, holds no inventory, and does not change the current selection. Pickup locations are nearest first when a buyer location is provided. Merchant callers receive diagnostics. Checkout credentials may use only pickup_locations for their own checkout session.

`POST /v1/delivery-previews`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateDeliveryPreviewRequestInput](../models/CreateDeliveryPreviewRequestInput.md#createdeliverypreviewrequestinput) | The request body for: Create delivery preview. |

Body model: [CreateDeliveryPreviewRequestInput](../models/CreateDeliveryPreviewRequestInput.md#createdeliverypreviewrequestinput).

#### deliveryPreviews.create with `mode: "delivery_options"`

The `delivery_options` variant of `CreateDeliveryPreviewRequest`.

Body model: [CreateDeliveryOptionsPreviewRequestInput](../models/CreateDeliveryOptionsPreviewRequestInput.md#createdeliveryoptionspreviewrequestinput).

#### deliveryPreviews.create with `mode: "pickup_locations"`

The `pickup_locations` variant of `CreateDeliveryPreviewRequest`.

Body model: [CreateDeliveryPickupLocationsPreviewRequestInput](../models/CreateDeliveryPickupLocationsPreviewRequestInput.md#createdeliverypickuplocationspreviewrequestinput).

#### Response

Returned payload: [DeliveryPreviewResponseDataDeliveryOptions](../models/DeliveryPreviewResponseDataDeliveryOptions.md#deliverypreviewresponsedatadeliveryoptions)|[DeliveryPreviewResponseDataPickupLocations](../models/DeliveryPreviewResponseDataPickupLocations.md#deliverypreviewresponsedatapickuplocations)|Model.

##### Response variant 1

The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | object and Alternative shapes (see declared variants) | Buyer location used to evaluate delivery availability and pickup proximity. Omitted when the request sent none. The normalized buyer address or coordinate used for this quote. |
| `choice_groups` | Required | Array of [DeliveryPreviewChoiceGroupResource](../models/DeliveryPreviewChoiceGroupResource.md#deliverypreviewchoicegroupresource) | Groups of order items that each choose their own delivery option. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_method_ids` | Required | Array of string | Delivery methods the preview evaluated. |
| `destination_address` | Optional | [Address](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItemSuggestedAddress.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableaddressadvisoriesitemsuggestedaddress) | Destination address used to evaluate shipment and local delivery options. Omitted when the request sent none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `evaluated_at` | Required | string | Time Flint computed this preview. Format: `date-time`. |
| `evaluation_status` | Required | string | How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | Request a new preview after this time, because prices and availability may have changed. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. |
| `line_items` | Required | Array of (object and Alternative shapes (see declared variants)) | Items the preview evaluated. |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Present for merchant callers as an array, including when empty. Absent for buyer callers. |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string | ID of the Location at which pickup methods were priced. Omitted when the request sent none. |

##### Response variant 2

The result of a pickup locations preview: each pickup location and whether it can supply the order, with input requirements and merchant diagnostics.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | Time Flint evaluated pickup availability. Format: `date-time`. |
| `evaluation_status` | Required | string | How completely Flint evaluated the pickup Locations. Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the pickup methods need before Flint can evaluate them. |
| `locations` | Required | Array of [DeliveryPickupAvailabilityLocationResource](../models/DeliveryPickupAvailabilityLocationResource.md#deliverypickupavailabilitylocationresource) | Up to 25 pickup locations, nearest first when Flint can place the buyer location, otherwise in the order the pickup methods list them. maxItems: `25`. |
| `merchant_diagnostics` | Optional | Array of [DeliveryPickupAvailabilityDiagnostic](../models/DeliveryPickupAvailabilityDiagnostic.md#deliverypickupavailabilitydiagnostic) | Configured Locations the search left out, and listed Locations that cannot supply the order's tracked items. Always present with an API key or dashboard credential as an array, including when empty. |
| `mode` | Required | string | The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`. |

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 502 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->deliveryPreviews->create([
  'currency' => 'USD',
  'line_items' => [
    (object) [
      'type' => 'variant',
      'variant_id' => 'var_01KEZF7C004GSH2KT8CNYVMHGX',
    ],
  ],
  'mode' => 'delivery_options',
], new RequestOptions());
```

[Complete runnable example](../examples/deliveryPreviews-create.php)

