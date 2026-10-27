[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryPreviews

### deliveryPreviews.create

Computes delivery options with mode delivery_options or up to 25 pickup locations with mode pickup_locations. Creates no resource, holds no inventory, and does not change the current selection. Pickup locations are nearest first when a buyer location is provided. Merchant callers receive diagnostics. Checkout credentials may use only pickup_locations for their own checkout session.

`POST /v1/delivery-previews`

Signature: `create(DeliveryPreviewsCreateInput|array $input, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateDeliveryPreviewRequestInput](../models/CreateDeliveryPreviewRequestInput.md#createdeliverypreviewrequestinput) | The request body for: Create delivery preview. |

Body model: [CreateDeliveryPreviewRequestInput](../models/CreateDeliveryPreviewRequestInput.md#createdeliverypreviewrequestinput).

#### deliveryPreviews.create body oneOf variant 1

The `delivery_options` variant of `CreateDeliveryPreviewRequest`.

Body model: [CreateDeliveryOptionsPreviewRequestInput](../models/CreateDeliveryOptionsPreviewRequestInput.md#createdeliveryoptionspreviewrequestinput).

#### deliveryPreviews.create body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_method_ids` | Required | Array of string | Items: minLength: `1`. |
| `destination_address` | Optional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | An address you supply for delivery quotes, previews, and selections. |
| `inventory_routing_source` | Optional | [DeliveryPreviewRoutingSourceInput](../models/DeliveryPreviewRoutingSourceInput.md#deliverypreviewroutingsourceinput) | Chooses where a delivery options preview routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `line_items` | Required | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | minItems: `1`. maxItems: `100`. |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string | minLength: `1`. |
| `pricing_context` | Optional | Map of string | Map values: minLength: `1`. |

#### deliveryPreviews.create body oneOf variant 2

The `pickup_locations` variant of `CreateDeliveryPreviewRequest`.

Body model: [CreateDeliveryPickupLocationsPreviewRequestInput](../models/CreateDeliveryPickupLocationsPreviewRequestInput.md#createdeliverypickuplocationspreviewrequestinput).

#### deliveryPreviews.create body oneOf variant 2 fields

Field definitions: [shared fields](../models/CreateDeliveryPickupLocationsPreviewRequestInput.md#createdeliverypickuplocationspreviewrequestinput). Models: [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput), [DeliveryPickupAvailabilityMaximumDistanceRequestInput](../models/DeliveryPickupAvailabilityMaximumDistanceRequestInput.md#deliverypickupavailabilitymaximumdistancerequestinput).

#### Response

Returned payload: [DeliveryPreviewsCreateResponse200DataDeliveryOptions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptions.md#deliverypreviewscreateresponse200datadeliveryoptions)|[DeliveryPreviewsCreateResponse200DataPickupLocations](../models/DeliveryPreviewsCreateResponse200DataPickupLocations.md#deliverypreviewscreateresponse200datapickuplocations)|\stdClass.

##### Response variant 1

The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | object and Alternative shapes (see declared variants) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote. |
| `choice_groups` | Required | Array of [DeliveryPreviewChoiceGroupResource](../models/DeliveryPreviewChoiceGroupResource.md#deliverypreviewchoicegroupresource) |  |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_method_ids` | Required | Array of string |  |
| `destination_address` | Optional | [DeliveryAddressResource](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocationAddress.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocationaddress) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations. |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. |
| `line_items` | Required | Array of (object and Alternative shapes (see declared variants)) |  |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Present for merchant callers as an array, including when empty. Absent for buyer callers. |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string |  |

##### Response variant 2

The result of a pickup locations preview: each pickup location and whether it can supply the order, with input requirements and merchant diagnostics.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) |  |
| `locations` | Required | Array of [DeliveryPickupAvailabilityLocationResource](../models/DeliveryPickupAvailabilityLocationResource.md#deliverypickupavailabilitylocationresource) | Up to 25 pickup locations, nearest first when Flint can place the buyer location, otherwise in the order the pickup methods list them. maxItems: `25`. |
| `merchant_diagnostics` | Optional | Array of [DeliveryPickupAvailabilityDiagnostic](../models/DeliveryPickupAvailabilityDiagnosticInput.md#deliverypickupavailabilitydiagnosticinput) | Configured Locations the search left out, and listed Locations that cannot supply the order's tracked items. Always present with an API key or dashboard credential as an array, including when empty. |
| `mode` | Required | string | The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`. |

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->deliveryPreviews->create([
  'body' => (object) [
    'currency' => 'USD',
    'delivery_method_ids' => [],
    'line_items' => [
      (object) [
        'variant_id' => 'example',
      ],
    ],
    'mode' => 'delivery_options',
  ],
], new RequestOptions());
```

[Complete runnable example](../examples/deliveryPreviews-create.php)

