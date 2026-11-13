[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# webhookEndpoints

### webhookEndpoints.create

Creates a webhook endpoint. signing_methods defaults to ["jwt"]. A shared secret is issued and returned once only when hmac is included. Partner-source endpoints are global configuration. Changes to them or their events and deliveries require a live-mode credential or a Dashboard session, including test events and endpoints subscribed only to test installed-merchant events. Test credentials fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent replay.

`POST /v1/webhook-endpoints`

Signature: `create(params: WebhookEndpointsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateWebhookEndpointRequestInput](../models/CreateWebhookEndpointRequest.md#createwebhookendpointrequest) | The request body for: Create webhook endpoint. |

Body model: [CreateWebhookEndpointRequestInput](../models/CreateWebhookEndpointRequest.md#createwebhookendpointrequest).

#### webhookEndpoints.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this endpoint. Omission pins the API version this create request is served at (Flint-Version, or the merchant default when the header is absent). Null is not accepted. minLength: `1`. |
| `description` | Optional | string | Your description of this endpoint. `null` is the same as omitting the field. minLength: `1`. |
| `enabled_events` | Required | Array of string | Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver, including types added later; * must be the only entry and is not available with installed_merchants. At least one entry is required. Use only current event type names; previous and removed names are rejected. Stored subscriptions map previous names permanently and drop removed names on read. See the changelog. minItems: `1`. Items: minLength: `1`. |
| `event_sources` | Optional | Array of string | Event sources this endpoint receives. Defaults to merchant. Use partner_app for app lifecycle events and installed_merchants for events from merchants that installed the partner app. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `installed_merchant_modes` | Optional | Array of string | Modes of installed-merchant events this endpoint receives. Required when event_sources includes installed_merchants and omitted otherwise. Partner app lifecycle events are delivered regardless of these modes. minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string | Partner app that owns partner_app or installed_merchants event sources. minLength: `1`. |
| `partner_app_install_id` | Optional | string | Links this endpoint to a connected app's install. Revoking the install, or its grant for this endpoint's environment, deletes the endpoint. The install must be active and authorized for this environment. Set only at creation; it never changes. Omit for an endpoint not tied to an app. Endpoints created by a linked key are linked to the same install. At most 25 endpoints may link to one install in each environment. minLength: `1`. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethod.md#webhooksigningmethod) | Methods Flint uses to sign deliveries. Defaults to jwt. Including hmac issues a shared secret returned once. minItems: `1`. uniqueItems: `true`. Default: `["jwt"]`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Whether this endpoint receives events. Defaults to active. Values: `"active"`, `"inactive"`. |
| `url` | Required | string | Public HTTPS URL to receive webhook deliveries. minLength: `1`. |

#### Response

Returned payload: [WebhookEndpointWithSecret](../models/WebhookEndpointWithSecret.md#webhookendpointwithsecret).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookEndpoints.create({description: "Primary production endpoint", enabled_events: ["order.paid", "payment_intent.succeeded"], event_sources: ["merchant"], status: "active", url: "https://example.com/webhooks/flint"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookEndpoints-create.mjs)

### webhookEndpoints.createTestEvent

Creates and delivers a synthetic test webhook event to one active webhook endpoint. Safe to retry with the same idempotency key. Partner-source endpoints are global configuration. Changes to them or their events and deliveries require a live-mode credential or a Dashboard session, including test events and endpoints subscribed only to test installed-merchant events. Test credentials fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent replay.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/test-events`

Signature:

```typescript
createTestEvent(webhook_endpoint_id: InputValue<string>,
 params: WebhookEndpointsCreateTestEventParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | Flint webhook endpoint ID. |
| `body` | Required | [CreateWebhookTestEventRequestInput](../models/CreateWebhookTestEventRequest.md#createwebhooktesteventrequest) | The request body for: Create webhook test event. |

Body model: [CreateWebhookTestEventRequestInput](../models/CreateWebhookTestEventRequest.md#createwebhooktesteventrequest).

#### webhookEndpoints.createTestEvent body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_type` | Required | string | Current event type to send. merchant delivers merchant events; partner_app delivers partner lifecycle events; installed_merchants delivers merchant events permitted by the install read scopes. The event catalog lists event_sources for each type. Values: [291 declared values](../models/CreateWebhookTestEventRequest.md#createwebhooktesteventrequest-event_type-values). |

#### Response

Returned payload: [WebhookDeliveryAction](../models/WebhookDeliveryAction.md#webhookdeliveryaction).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookEndpoints.createTestEvent("whep_01KEZF7C006FXYTAJRZCGCBJTN", {event_type: "payment_intent.succeeded"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookEndpoints-createTestEvent.mjs)

### webhookEndpoints.delete

Permanently deletes the webhook endpoint and returns it with status deleted. Its pending deliveries are suppressed. The endpoint cannot be retrieved afterward, and its past deliveries keep its webhook_endpoint_id. Partner-source endpoints are global configuration. Changes to them or their events and deliveries require a live-mode credential or a Dashboard session, including test events and endpoints subscribed only to test installed-merchant events. Test credentials fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent replay.

`DELETE /v1/webhook-endpoints/{webhook_endpoint_id}`

Signature: `delete(webhook_endpoint_id: InputValue<string>, params?: WebhookEndpointsDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | Flint webhook endpoint ID. |
| `expected_version` | Optional | integer | Optional configuration version last read by the caller. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |

#### Response

Returned payload: [WebhookEndpoint](../models/WebhookEndpoint.md#webhookendpoint).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookEndpoints.delete("whep_01KEZF7C006FXYTAJRZCGCBJTN", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookEndpoints-delete.mjs)

### webhookEndpoints.get

Returns a single webhook endpoint by ID. The signing secret is omitted after creation. Global partner-source records are invisible in sandbox mode; a direct reference returns 404 RESOURCE_NOT_FOUND.

`GET /v1/webhook-endpoints/{webhook_endpoint_id}`

Signature:

```typescript
get(webhook_endpoint_id: InputValue<string>,
 params?: WebhookEndpointsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | Flint webhook endpoint ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [WebhookEndpoint](../models/WebhookEndpoint.md#webhookendpoint).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.webhookEndpoints.get("whep_01KEZF7C006FXYTAJRZCGCBJTN", {}, {  });
```

[Complete runnable example](../examples/webhookEndpoints-get.mjs)

### webhookEndpoints.list

Returns a page of webhook endpoints for the authenticated merchant. Sandbox reads omit global partner-source records. Filters selecting only partner_app or installed_merchants return an empty collection. Direct resource reads of partner-source records return 404 RESOURCE_NOT_FOUND in sandbox mode; exact-ID list filters return an empty collection when no visible records match. Default order: created_at descending, then webhook_endpoint_id descending.

`GET /v1/webhook-endpoints`

Signature: `list(params?: WebhookEndpointsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_by` | Optional | string | Filter by the exact ID of the API key, user, partner app, or workload identity that created the endpoint. Unknown IDs return an empty list. pattern: `^(key\|usr\|papp\|wid)_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out deleted rows; name deleted to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"deleted"`. Values: `"active"`, `"inactive"`, `"deleted"`. |
| `event_sources` | Optional | Array of string or string | Filter by webhook endpoint event sources. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. Values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `partner_app_id` | Optional | string | Filter by partner app ID for partner-source webhook endpoints. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `partner_app_install_id` | Optional | string | Exact-match filter on partner_app_install_id. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [WebhookEndpointListResponse](../models/WebhookEndpointListResponse.md#webhookendpointlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.webhookEndpoints.list({}, {  });
```

[Complete runnable example](../examples/webhookEndpoints-list.mjs)

### webhookEndpoints.rotateSecret

Rotates an existing shared secret. An endpoint without hmac returns ACTION_NOT_ALLOWED with reason secret_not_issued; PATCH signing_methods to include hmac to issue the first secret. The secret is returned once. The replaced secret keeps signing deliveries until previous_secret_expires_at: 24 hours by default, or expire_previous_secret_at, up to 7 days. Send a time at or before now to stop the replaced secret immediately, for example when it leaked. Rotating again during an overlap ends the older secret at once. Partner-source endpoints are global configuration. Changes to them or their events and deliveries require a live-mode credential or a Dashboard session, including test events and endpoints subscribed only to test installed-merchant events. Test credentials fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent replay.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/rotate-secret`

Signature: `rotateSecret(webhook_endpoint_id: InputValue<string>, params?: WebhookEndpointsRotateSecretParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | Flint webhook endpoint ID. |
| `body` | Optional | [RotateWebhookSecretRequestInput](../models/RotateWebhookSecretRequestInput.md#rotatewebhooksecretrequestinput) | The request body for: Rotate webhook secret. |

Body model: [RotateWebhookSecretRequestInput](../models/RotateWebhookSecretRequestInput.md#rotatewebhooksecretrequestinput).

#### webhookEndpoints.rotateSecret body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `expire_previous_secret_at` | Optional | string | When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before now to stop it immediately. Must be no later than 7 days from now. Null is not accepted. Format: `date-time`. minLength: `1`. |

#### Response

Returned payload: [WebhookEndpointWithSecret](../models/WebhookEndpointWithSecret.md#webhookendpointwithsecret).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookEndpoints.rotateSecret("whep_01KEZF7C006FXYTAJRZCGCBJTN", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookEndpoints-rotateSecret.mjs)

### webhookEndpoints.signDelivery

Sandbox only. Returns the exact delivery body and headers for an authorized sandbox endpoint without dispatching it. Requires webhooks.write and permission to read the event's resource. JWT signing must be enabled. Each call reauthorizes and creates a fresh five-minute bearer frame; receivers deduplicate webhook-id. Limited to one request per 200 ms and 10,000 per UTC day per endpoint, plus external-provider-action API quotas. The 200 ms throttle returns 429 with Retry-After; daily exhaustion returns 409 LIMIT_REACHED with limit and resets_at and no Retry-After. Signing fails closed if the shared quota store is unavailable. Responses are not cached or retained for idempotency. Previously issued JWTs remain usable until expiry after endpoint changes.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/sign-delivery`

Signature:

```typescript
signDelivery(webhook_endpoint_id: InputValue<string>,
 params: WebhookEndpointsSignDeliveryParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | The caller's own merchant event-delivery endpoint in the selected sandbox. |
| `body` | Required | [SignWebhookEndpointDeliveryRequestInput](../models/SignWebhookEndpointDeliveryRequest.md#signwebhookendpointdeliveryrequest) | The request body for: Sign a sandbox webhook delivery. |

Body model: [SignWebhookEndpointDeliveryRequestInput](../models/SignWebhookEndpointDeliveryRequest.md#signwebhookendpointdeliveryrequest).

#### webhookEndpoints.signDelivery body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_event_id` | Required | string | Retained merchant event in the endpoint's sandbox. The endpoint must subscribe to its event type. minLength: `1`. |

#### Response

Returned payload: [SignedWebhookEndpointDelivery](../models/SignedWebhookEndpointDelivery.md#signedwebhookendpointdelivery).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.webhookEndpoints.signDelivery("whep_01KEZF7C006FXYTAJRZCGCBJTN", {webhook_event_id: "whev_01KEZF7C00BW7XQJ98PQ8EHA81"}, {  });
```

[Complete runnable example](../examples/webhookEndpoints-signDelivery.mjs)

### webhookEndpoints.update

Updates a webhook endpoint's URL, description, status, subscribed events, event sources, signing methods, or pinned API version. Only the fields you send change. Sending `enabled_events`, `event_sources`, `installed_merchant_modes`, or `signing_methods` replaces that whole list and requires `expected_version`; a stale version fails with `VERSION_CONFLICT`. Adding `hmac` when no secret exists issues the first secret and returns it once. Removing `hmac` deletes all shared secrets. Partner-source endpoints are global configuration. Changes to them or their events and deliveries require a live-mode credential or a Dashboard session, including test events and endpoints subscribed only to test installed-merchant events. Test credentials fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent replay.

`PATCH /v1/webhook-endpoints/{webhook_endpoint_id}`

Signature: `update(webhook_endpoint_id: InputValue<string>, params: WebhookEndpointsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | Flint webhook endpoint ID. |
| `body` | Required | [UpdateWebhookEndpointRequestInput](../models/UpdateWebhookEndpointRequest.md#updatewebhookendpointrequest) | The request body for: Update webhook endpoint. minProperties: `1`. |

Body model: [UpdateWebhookEndpointRequestInput](../models/UpdateWebhookEndpointRequest.md#updatewebhookendpointrequest).

#### webhookEndpoints.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this endpoint. Omit to leave unchanged. Null is not accepted. Switching between a pin and default clears the rollback offer. minLength: `1`. |
| `description` | Optional | string or null | Endpoint description. Omit to leave unchanged; null clears it. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `enabled_events` | Optional | Array of string | Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver, including types added later; * must be the only entry and is not available with installed_merchants. At least one entry is required. Use only current event type names; previous and removed names are rejected. Stored subscriptions map previous names permanently and drop removed names on read. See the changelog. minItems: `1`. Items: minLength: `1`. |
| `event_sources` | Optional | Array of string | Event sources this endpoint receives. Defaults to merchant. Use partner_app for app lifecycle events and installed_merchants for events from merchants that installed the partner app. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when enabled_events, event_sources, installed_merchant_modes, or signing_methods is present, including an empty array. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `installed_merchant_modes` | Optional | Array of string | Modes of installed-merchant events this endpoint receives. Required when event_sources includes installed_merchants and omitted otherwise. Partner app lifecycle events are delivered regardless of these modes. minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string | Partner app that owns partner_app or installed_merchants event sources. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethod.md#webhooksigningmethod) | Replaces the signing methods. Removing hmac deletes all shared secrets. Adding hmac when no secret exists issues the first secret and returns it once in this response. Omit to leave unchanged. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Whether this endpoint receives events. Setting inactive suppresses pending deliveries. Omit to leave unchanged. Values: `"active"`, `"inactive"`. |
| `url` | Optional | string | Public HTTPS URL to receive webhook deliveries. Omit to leave unchanged. minLength: `1`. |

#### Response

Returned payload: [WebhookEndpointWithSecret](../models/WebhookEndpointWithSecret.md#webhookendpointwithsecret).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookEndpoints.update("whep_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Example endpoint"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookEndpoints-update.mjs)

