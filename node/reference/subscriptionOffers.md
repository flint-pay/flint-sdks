[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionOffers

### subscriptionOffers.create

Create subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`POST /v1/subscription-offers`

Signature: `create(params: SubscriptionOffersCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateSubscriptionOfferRequestInput](../models/CreateSubscriptionOfferRequest.md#createsubscriptionofferrequest) | The request body for: Create subscription offer. |

Body model: [CreateSubscriptionOfferRequestInput](../models/CreateSubscriptionOfferRequest.md#createsubscriptionofferrequest).

#### subscriptionOffers.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | minItems: `1`. maxItems: `12`. uniqueItems: `true`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `product_ids` | Optional | Array of string | Catalog targets for new signups. At least one product or variant is required. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. |
| `promotion_id` | Optional | string or null | An active promotion with forever recurrence. On PATCH, null removes the discount for new signups; omission keeps it. minLength: `1`. |
| `status` | Optional | string | Use active or inactive. Archive the offer with DELETE. Values: `"active"`, `"inactive"`. |
| `subscription_delivery_method_ids` | Optional | Array of string | Delivery methods offered at signup. An empty array uses the store's checkout defaults. Existing subscriptions keep their selected method. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `variant_ids` | Optional | Array of string | Catalog targets for new signups. At least one product or variant is required. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. |

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

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

const result = await client.subscriptionOffers.create({name: "example", billing_interval_options: [{billing_interval: "daily", billing_interval_count: 1}]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptionOffers-create.mjs)

### subscriptionOffers.delete

Archive subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`DELETE /v1/subscription-offers/{subscription_offer_id}`

Signature: `delete(subscription_offer_id: InputValue<string>, params?: SubscriptionOffersDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string | Subscription offer ID. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Refuses the deletion if the offer has changed. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

const result = await client.subscriptionOffers.delete("soffer_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptionOffers-delete.mjs)

### subscriptionOffers.get

Get subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`GET /v1/subscription-offers/{subscription_offer_id}`

Signature:

```typescript
get(subscription_offer_id: InputValue<string>,
 params?: SubscriptionOffersGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string | Subscription offer ID. |

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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
const result = await client.subscriptionOffers.get("soffer_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/subscriptionOffers-get.mjs)

### subscriptionOffers.list

List subscription offers. Offer changes affect new signups only. Existing subscriptions keep their terms. Default order: created_at descending, then subscription_offer_id descending.

`GET /v1/subscription-offers`

Signature: `list(params?: SubscriptionOffersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `product_id` | Optional | string | Filter by Flint product ID. |
| `variant_id` | Optional | string | Filter by Flint variant ID. |
| `query` | Optional | string | Case-insensitive search over name, subscription_offer_id, and external_reference_id. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by subscription_offer_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"name"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### Response

Returned payload: [SubscriptionOfferListResponse](../models/SubscriptionOfferListResponse.md#subscriptionofferlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
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
const result = await client.subscriptionOffers.list({}, {  });
```

[Complete runnable example](../examples/subscriptionOffers-list.mjs)

### subscriptionOffers.update

Update subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`PATCH /v1/subscription-offers/{subscription_offer_id}`

Signature: `update(subscription_offer_id: InputValue<string>, params: SubscriptionOffersUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string | Subscription offer ID. |
| `body` | Required | [UpdateSubscriptionOfferRequestInput](../models/UpdateSubscriptionOfferRequest.md#updatesubscriptionofferrequest) | The request body for: Update subscription offer. minProperties: `1`. |

Body model: [UpdateSubscriptionOfferRequestInput](../models/UpdateSubscriptionOfferRequest.md#updatesubscriptionofferrequest).

#### subscriptionOffers.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | minItems: `1`. maxItems: `12`. uniqueItems: `true`. |
| `expected_version` | Optional | integer | The version read before editing. A mismatch returns VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omission leaves this field unchanged. Null clears it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `product_ids` | Optional | Array of string | Catalog targets for new signups. At least one product or variant is required. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. |
| `promotion_id` | Optional | string or null | An active promotion with forever recurrence. On PATCH, null removes the discount for new signups; omission keeps it. minLength: `1`. |
| `status` | Optional | string | Use active or inactive. Archive the offer with DELETE. Values: `"active"`, `"inactive"`. |
| `subscription_delivery_method_ids` | Optional | Array of string | Delivery methods offered at signup. An empty array uses the store's checkout defaults. Existing subscriptions keep their selected method. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `variant_ids` | Optional | Array of string | Catalog targets for new signups. At least one product or variant is required. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. |

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

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

const result = await client.subscriptionOffers.update("soffer_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Monthly subscription"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptionOffers-update.mjs)

