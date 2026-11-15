[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliverySelections

### deliverySelections.create

Selects one unexpired option per required choice group of delivery_quote_id. Replaces the checkout's provisional selection and stock hold, applies delivery charges, and returns the repriced order. Shipment and local delivery choices can keep a partial quote address when destination_address is omitted. Missing destination members and recipient fields appear in input_requirements and must be supplied by replacing the selection before payment. The selection acts on the quote's checkout session. A checkout credential can select only from quotes of its own checkout session; any other quote is refused as not found.

`POST /v1/delivery-selections`

Signature: `create(params: DeliverySelectionsCreateParams, options?: RequestOptions<"checkout" | "merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateDeliverySelectionRequestInput](../models/CreateDeliverySelectionRequest.md#createdeliveryselectionrequest) | The request body for: Create delivery selection. |

Body model: [CreateDeliverySelectionRequestInput](../models/CreateDeliverySelectionRequest.md#createdeliveryselectionrequest).

#### deliverySelections.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `choices` | Required | Array of [CreateDeliverySelectionChoiceRequestInput](../models/CreateDeliverySelectionChoiceRequest.md#createdeliveryselectionchoicerequest) | One chosen option for every required choice group in the quote. Use group and option IDs from this quote, not an earlier quote. |
| `delivery_quote_id` | Required | string | ID of the quote whose options to choose. The selection belongs to that quote's checkout session. minLength: `1`. |
| `destination_address` | Optional | [AddressRequestInput](../models/AddressRequest.md#addressrequest) | Destination address for shipment or local delivery. When sent, it must be a complete address. When omitted, Flint keeps the quote's address, even when partial; missing members appear in input_requirements and must be supplied before payment. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `expected_delivery_selection_id` | Optional | string or null | Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: `1`. |
| `inventory_reservation_ids` | Optional | Array of string | Requires a merchant credential with delivery-write scope. Merchant-created cart reservations to adopt atomically into the selection hold at the selected inventory items and locations. Only matching held units are released; unused units stay held, and any remaining demand uses available stock. At most 100 unique IDs. Explicit IDs, including an empty array, replace the session binding for this request. When omitted, both merchant and buyer requests use eligible session-bound holds; ineligible bound holds are silently skipped. First adopter wins when sessions share a hold. Ineligible explicit IDs are refused as not found. maxItems: `100`. Items: minLength: `1`. |
| `recipient` | Optional | [DeliverySelectionRecipientRequestInput](../models/DeliverySelectionRecipientRequest.md#deliveryselectionrecipientrequest) | Recipient details the chosen options ask for. Missing required fields are returned in input_requirements and must be supplied before payment. Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`. |

#### Response

Returned payload: [DeliverySelectionResult](../models/DeliverySelectionResult.md#deliveryselectionresult).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliverySelections.create({choices: [{delivery_choice_group_id: "dcgrp_01K1P6G4M7H2N8Q9R3S5T6V7WX", delivery_option_id: "dopt_01K1P6G4M7H2N8Q9R3S5T6V7WX"}], delivery_quote_id: "dqt_01K1P6G4M7H2N8Q9R3S5T6V7WX", expected_delivery_selection_id: null}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliverySelections-create.mjs)

### deliverySelections.get

Returns one delivery selection, current or earlier, with its economics, lifecycle events, and retention-aware private data. While the selection is selected, the tax on its delivery charges follows the order's tax. A checkout credential reads only its own session's selections and receives the buyer view; any other selection is refused as not found.

`GET /v1/delivery-selections/{delivery_selection_id}`

Signature:

```typescript
get(delivery_selection_id: InputValue<string>,
 params?: DeliverySelectionsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout" |
  "merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_selection_id` | Required | string | ID of the delivery selection to retrieve, whether current or historical. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliverySelection](../models/DeliverySelection.md#deliveryselection).

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

```typescript
const result = await client.deliverySelections.get("dsel_01KEZF7C00QC35XBXVXQSCEB2D", {}, {  });
```

[Complete runnable example](../examples/deliverySelections-get.mjs)

### deliverySelections.list

Returns a checkout session's or an order's delivery selections, current and earlier, newest first by created_at and delivery_selection_id, with economics, lifecycle events, and retention-aware private data. Send checkout_session_id or order_id. A checkout credential must send its own checkout_session_id. With a status filter, each page examines at most 500 selections and may hold fewer than page_size while next_page_token is present. Default order: created_at descending, then delivery_selection_id descending.

`GET /v1/delivery-selections`

Signature: `list(params?: DeliverySelectionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Optional | string | List this checkout session's selections. Send this or order_id. Required with a checkout credential, and must be the credential's own checkout session. pattern: `^cs_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `order_id` | Optional | string | List this order's selections. Send this or checkout_session_id. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `status` | Optional | Array of string or string | Filter by current lifecycle status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliverySelectionListResponse](../models/DeliverySelectionListResponse.md#deliveryselectionlistresponse).

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

```typescript
const result = await client.deliverySelections.list({}, {  });
```

[Complete runnable example](../examples/deliverySelections-list.mjs)

### deliverySelections.release

Clears the checkout's provisional selection: releases its stock hold, removes its delivery charges, and recalculates the order. Available while supported_actions lists release. A checkout credential can release only its own session's selection; any other is refused as not found.

`POST /v1/delivery-selections/{delivery_selection_id}/release`

Signature:

```typescript
release(delivery_selection_id: InputValue<string>,
 params?: DeliverySelectionsReleaseParams,
 options?: RequestOptions<"checkout" |
  "merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_selection_id` | Required | string | ID of the provisional selection to withdraw. Its supported_actions must include release. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliverySelectionResult](../models/DeliverySelectionResult.md#deliveryselectionresult).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliverySelections.release("dsel_01KEZF7C00QC35XBXVXQSCEB2D", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliverySelections-release.mjs)

