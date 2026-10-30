[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentReviews

### paymentReviews.approve

Approves the payment and closes the review with `closed_reason: approved`. Approving never captures: capture a manual-capture payment yourself before `authorization_expires_at`. Approving a review you already approved returns it unchanged.

`POST /v1/payment-reviews/{payment_review_id}/approve`

Signature: `approve(payment_review_id: InputValue<string>, params?: PaymentReviewsApproveParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_review_id` | Required | string | Flint payment review ID. |

#### Response

Returned payload: [PaymentReview](../models/PaymentReview.md#paymentreview).

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

const result = await client.paymentReviews.approve("rev_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentReviews-approve.mjs)

### paymentReviews.decline

Declines the payment and closes the review with `closed_reason: declined`. Flint cancels an uncaptured authorization, or refunds the remaining captured amount (captured minus earlier refunds) to the original payment method with reason `fraudulent`. Returns `200` when the review is closed, or when the refund already failed and the review is `open` again with `last_resolution_failure` set. Returns `202` while the refund is processing; wait for `payment_review.closed` or `payment_review.reopened`.

`POST /v1/payment-reviews/{payment_review_id}/decline`

Signature: `decline(payment_review_id: InputValue<string>, params?: PaymentReviewsDeclineParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_review_id` | Required | string | Flint payment review ID. |
| `body` | Optional | [DeclinePaymentReviewRequestInput](../models/DeclinePaymentReviewRequest.md#declinepaymentreviewrequest) | The request body for: Decline a payment review. |

Body model: [DeclinePaymentReviewRequestInput](../models/DeclinePaymentReviewRequest.md#declinepaymentreviewrequest).

#### paymentReviews.decline body fields

Field definitions: [shared fields](../models/DeclinePaymentReviewRequest.md#declinepaymentreviewrequest).

#### Response

Returned payload: [PaymentReview](../models/PaymentReview.md#paymentreview) | [PaymentReview](../models/PaymentReview.md#paymentreview).

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

const result = await client.paymentReviews.decline("rev_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentReviews-decline.mjs)

### paymentReviews.get

Retrieves a payment review. Expand `payment_intent`, `order`, or `customer` to include them.

`GET /v1/payment-reviews/{payment_review_id}`

Signature: `get(payment_review_id: InputValue<string>, params?: PaymentReviewsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_review_id` | Required | string | Flint payment review ID. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, order, payment_intent. Expansion requires risk.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. Items values: `"customer"`, `"order"`, `"payment_intent"`. Values: `"customer"`, `"order"`, `"payment_intent"`. |

#### Response

Returned payload: [PaymentReview](../models/PaymentReview.md#paymentreview).

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
const result = await client.paymentReviews.get("rev_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/paymentReviews-get.mjs)

### paymentReviews.list

Lists payment reviews, most recently opened first. A review opens when a `review` rule matches a payment the bank approved. Every status is included unless you filter by `status`. Default order: opened_at descending, then payment_review_id descending.

`GET /v1/payment-reviews`

Signature: `list(params?: PaymentReviewsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Filter by review status. Repeat or comma-separate values. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"open"`, `"resolving"`, `"closed"`. Values: `"open"`, `"resolving"`, `"closed"`. |
| `risk_level` | Optional | Array of string or string | Filter by immutable review risk level. Repeat or comma-separate values. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. |
| `payment_flow` | Optional | Array of string or string | Filter by immutable payment flow. Repeat or comma-separate values. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Optional | string | Filter by Flint payment intent ID. |
| `order_id` | Optional | string | Filter by Flint order ID. |
| `customer_id` | Optional | string | Filter by Flint customer ID. |
| `opened_after` | Optional | string | Inclusive lower bound on opened_at. Format: `date-time`. |
| `opened_before` | Optional | string | Exclusive upper bound on opened_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, order, payment_intent. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. Items values: `"customer"`, `"order"`, `"payment_intent"`. Values: `"customer"`, `"order"`, `"payment_intent"`. |

#### Response

Returned payload: [PaymentReviewListResponse](../models/PaymentReviewListResponse.md#paymentreviewlistresponse).

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

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.paymentReviews.list({}, {  });
```

[Complete runnable example](../examples/paymentReviews-list.mjs)

