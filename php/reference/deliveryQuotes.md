[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryQuotes

### deliveryQuotes.create

Creates an exact delivery quote for the checkout session named by checkout_session_id, without holding inventory. A checkout credential can quote only its own checkout session.

`POST /v1/delivery-quotes`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateCheckoutDeliveryQuoteRequestInput](../models/CreateCheckoutDeliveryQuoteRequestInput.md#createcheckoutdeliveryquoterequestinput) | The request body for: Create delivery quote. |

Body model: [CreateCheckoutDeliveryQuoteRequestInput](../models/CreateCheckoutDeliveryQuoteRequestInput.md#createcheckoutdeliveryquoterequestinput).

#### deliveryQuotes.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `basis_delivery_quote_id` | Optional | string | ID of an earlier delivery quote for this checkout session to price from again, such as to add caller-supplied rates. minLength: `1`. |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput) | Buyer location used to evaluate pickup and local delivery. Send it when a method needs it. The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `checkout_session_id` | Required | string | Checkout session to quote. With a checkout credential, this must be the credential's own checkout session; any other ID is refused as not found. minLength: `1`. |
| `destination_address` | Optional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | Address used to price shipment or local delivery. Partial is fine: send what the buyer has entered, at least country. A selection that sends destination_address must send a complete address; a selection that omits it keeps this partial address, and its input_requirements lists missing members that must be supplied before payment. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `expected_delivery_selection_id` | Optional | string or null | Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: `1`. |
| `inventory_assignments` | Optional | Array of [DeliveryInventoryAssignmentRequestInput](../models/DeliveryInventoryAssignmentRequestInput.md#deliveryinventoryassignmentrequestinput) | Locations your integration assigns stock from. The assignments for an inventory demand together cover its quantity, and a demand can have several. maxItems: `1000`. Items: Assigns a quantity of an inventory item at a location to a demand when creating a delivery quote. |
| `inventory_reservation_ids` | Optional | Array of string | Requires a merchant credential with delivery-write scope. Merchant-created cart reservations to credit when routing this quote, without changing their holds. Pass the same IDs when creating the delivery selection to adopt matching held units. At most 100 unique IDs. Explicit IDs, including an empty array, replace the session binding for this request. When omitted, both merchant and buyer requests use eligible session-bound holds; ineligible bound holds are silently skipped. First adopter wins when sessions share a hold. Ineligible explicit IDs are refused as not found. maxItems: `100`. Items: minLength: `1`. |
| `method_results` | Optional | Array of [CallerSuppliedDeliveryMethodResultRequestInput](../models/CallerSuppliedDeliveryMethodResultRequestInput.md#callersupplieddeliverymethodresultrequestinput) | Rates your integration supplies for methods with caller-supplied pricing. |
| `pickup_location_id` | Optional | string | ID of the Location at which to price pickup methods. minLength: `1`. |
| `tier_key` | Optional | integer | Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Format: `int64`. minimum: `0`. |

#### Response

Returned payload: [DeliveryQuote](../models/DeliveryQuote.md#deliveryquote).

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
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->deliveryQuotes->create([
  'checkout_session_id' => 'cs_01KEZF7C004JRWFW43H037MQRN',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryQuotes-create.php)

### deliveryQuotes.get

Returns a delivery quote by its ID. API keys receive the same merchant view as the quote list. A checkout credential reads only quotes of its own checkout session and receives the buyer view; any other quote is refused as not found.

`GET /v1/delivery-quotes/{delivery_quote_id}`

Signature: `get(string|Model $delivery_quote_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_quote_id` | Required | string | Delivery quote ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliveryQuote](../models/DeliveryQuote.md#deliveryquote).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->deliveryQuotes->get('dqt_01KEZF7C009EB1AVCDJBN4BBVV', [], new RequestOptions());
```

[Complete runnable example](../examples/deliveryQuotes-get.php)

### deliveryQuotes.list

Returns delivery quotes with status derived identically to individual quote reads. A checkout credential must send its own checkout_session_id and receives the buyer view. Quotes are ordered by created_at and delivery_quote_id ascending. Each page scans at most 500 rows and may contain fewer than page_size items while next_page_token is present. Default order: created_at ascending, then delivery_quote_id ascending.

`GET /v1/delivery-quotes`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Optional | string | Filter by checkout session. Required with a checkout credential, and must be the credential's own checkout session. pattern: `^cs_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `order_id` | Optional | string | Filter by order. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `status` | Optional | Array of string or string | Filter by lifecycle status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"consumed"`, `"stale"`, `"expired"`, `"revoked"`. Values: `"active"`, `"consumed"`, `"stale"`, `"expired"`, `"revoked"`. |
| `evaluation_status` | Optional | Array of string or string | Filter by evaluation status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"complete"`, `"incomplete"`, `"degraded"`. Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliveryQuoteListResponse](../models/DeliveryQuoteListResponse.md#deliveryquotelistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->deliveryQuotes->list([], new RequestOptions());
```

[Complete runnable example](../examples/deliveryQuotes-list.php)

