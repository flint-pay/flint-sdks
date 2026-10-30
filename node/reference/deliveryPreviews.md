[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryPreviews

### deliveryPreviews.create

Computes delivery options with mode delivery_options or up to 25 pickup locations with mode pickup_locations. Creates no resource, holds no inventory, and does not change the current selection. Pickup locations are nearest first when a buyer location is provided. Merchant callers receive diagnostics. Checkout credentials may use only pickup_locations for their own checkout session.

`POST /v1/delivery-previews`

Signature: `create(params: DeliveryPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateDeliveryPreviewRequestInput](../models/CreateDeliveryPreviewRequest.md#createdeliverypreviewrequest) | The request body for: Create delivery preview. |

Body model: [CreateDeliveryPreviewRequestInput](../models/CreateDeliveryPreviewRequest.md#createdeliverypreviewrequest).

#### deliveryPreviews.create with `mode: "delivery_options"`

The `delivery_options` variant of `CreateDeliveryPreviewRequest`.

Body model: [CreateDeliveryOptionsPreviewRequestInput](../models/CreateDeliveryOptionsPreviewRequest.md#createdeliveryoptionspreviewrequest).

#### deliveryPreviews.create with `mode: "pickup_locations"`

The `pickup_locations` variant of `CreateDeliveryPreviewRequest`.

Body model: [CreateDeliveryPickupLocationsPreviewRequestInput](../models/CreateDeliveryPickupLocationsPreviewRequest.md#createdeliverypickuplocationspreviewrequest).

#### Response

Returned payload: (([DeliveryPreview](../models/DeliveryPreview.md#deliverypreview)) | ([DeliveryPickupAvailability](../models/DeliveryPickupAvailability.md#deliverypickupavailability)) | (Record&lt;string, unknown&gt;)).

##### Response variant 1

The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationResource](../models/DeliveryBuyerLocationResource.md#deliverybuyerlocationresource) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote. |
| `choice_groups` | Required | Array of [DeliveryPreviewChoiceGroupResource](../models/DeliveryPreviewChoiceGroupResource.md#deliverypreviewchoicegroupresource) |  |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_method_ids` | Required | Array of string |  |
| `destination_address` | Optional | [Address](../models/Address.md#address) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. |
| `line_items` | Required | Array of [CreateOrderLineItem](../models/CreateOrderLineItem.md#createorderlineitem) |  |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Present for merchant callers as an array, including when empty. Absent for buyer callers. |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string |  |

##### Response variant 2

The result of a pickup locations preview: each pickup location and whether it can supply the order, with input requirements and merchant diagnostics.

Field definitions: [shared fields](../models/DeliveryPickupAvailability.md#deliverypickupavailability). Models: [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement), [DeliveryPickupAvailabilityLocationResource](../models/DeliveryPickupAvailabilityLocationResource.md#deliverypickupavailabilitylocationresource), [DeliveryPickupAvailabilityDiagnostic](../models/DeliveryPickupAvailabilityDiagnostic.md#deliverypickupavailabilitydiagnostic).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

```typescript
const result = await client.deliveryPreviews.create({currency: "USD", line_items: [{type: "variant", variant_id: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], mode: "delivery_options"}, {  });
```

[Complete runnable example](../examples/deliveryPreviews-create.mjs)

