[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionOffers

### subscriptionOffers.create

Create subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`POST /v1/subscription-offers`

Signature:

```typescript
create(params: (InputValue<CreateSubscriptionOfferRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptionOffers.create({name: "example", billing_interval_options: [{billing_interval: "daily", billing_interval_count: 1}]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptionOffers-create.mjs)

### subscriptionOffers.get

Get subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`GET /v1/subscription-offers/{subscription_offer_id}`

Signature: `get(subscription_offer_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string |  |

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.subscriptionOffers.get("example", {}, {  });
```

[Complete runnable example](../examples/subscriptionOffers-get.mjs)

### subscriptionOffers.list

List subscription offers. Offer changes affect new signups only. Existing subscriptions keep their terms. Default order: created_at descending, then subscription_offer_id descending.

`GET /v1/subscription-offers`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
  "product_id"?: InputValue<string>;
  "variant_id"?: InputValue<string>;
  "query"?: InputValue<string>;
  "external_reference_id"?: InputValue<string>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
  "sort_direction"?: InputValue<"asc" | "desc">
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `product_id` | Optional | string |  |
| `variant_id` | Optional | string |  |
| `query` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"name"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### Response

Returned payload: [SubscriptionOfferListResponse](../models/SubscriptionOfferListResponse.md#subscriptionofferlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.subscriptionOffers.list({}, {  });
```

[Complete runnable example](../examples/subscriptionOffers-list.mjs)

### subscriptionOffers.remove

Archive subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`DELETE /v1/subscription-offers/{subscription_offer_id}`

Signature:

```typescript
remove(subscription_offer_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptionOffers.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptionOffers-remove.mjs)

### subscriptionOffers.update

Update subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`PATCH /v1/subscription-offers/{subscription_offer_id}`

Signature:

```typescript
update(subscription_offer_id: InputValue<string>,
 params: (InputValue<UpdateSubscriptionOfferRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateSubscriptionOfferRequestInput](../models/UpdateSubscriptionOfferRequest.md#updatesubscriptionofferrequest) | The request body for: Update subscription offer. minProperties: `1`. |

Body model: [UpdateSubscriptionOfferRequestInput](../models/UpdateSubscriptionOfferRequest.md#updatesubscriptionofferrequest).

#### subscriptionOffers.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | minItems: `1`. maxItems: `12`. uniqueItems: `true`. |
| `expected_version` | Optional | integer string | The version read before editing. A mismatch returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
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
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptionOffers.update("example", {billing_interval_options: [{billing_interval: "daily", billing_interval_count: 1}]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptionOffers-update.mjs)

