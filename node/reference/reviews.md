[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# reviews

### reviews.approve

Approves the payment and closes the review with `closed_reason: approved`. Approving never captures: capture a manual-capture payment yourself before `authorization_expires_at`. Approving a review you already approved returns it unchanged.

`POST /v1/payment-reviews/{payment_review_id}/approve`

Signature:

```typescript
approve(payment_review_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_review_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PaymentReview](../models/PaymentReview.md#paymentreview).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `approveWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.reviews.approve("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/reviews-approve.mjs)

### reviews.decline

Declines the payment and closes the review with `closed_reason: declined`. Flint cancels an uncaptured authorization, or refunds the remaining captured amount (captured minus earlier refunds) to the original payment method with reason `fraudulent`. Returns `200` when the review is closed, or when the refund already failed and the review is `open` again with `last_resolution_failure` set. Returns `202` while the refund is processing; wait for `payment_review.closed` or `payment_review.reopened`.

`POST /v1/payment-reviews/{payment_review_id}/decline`

Signature:

```typescript
decline(payment_review_id: InputValue<string>,
 params?: (InputValue<DeclinePaymentReviewRequestInput> |
  {
  "add_to_block_lists"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_review_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [DeclinePaymentReviewRequestInput](../models/DeclinePaymentReviewRequest.md#declinepaymentreviewrequest) | The request body for: Decline a payment review. |

Body model: [DeclinePaymentReviewRequestInput](../models/DeclinePaymentReviewRequest.md#declinepaymentreviewrequest).

#### reviews.decline body fields

Field definitions: [shared fields](../models/DeclinePaymentReviewRequest.md#declinepaymentreviewrequest).

#### Response

Returned payload: [PaymentReview](../models/PaymentReview.md#paymentreview) | [PaymentReview](../models/PaymentReview.md#paymentreview).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `declineWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.reviews.decline("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/reviews-decline.mjs)

### reviews.get

Retrieves a payment review. Expand `payment_intent`, `order`, or `customer` to include them.

`GET /v1/payment-reviews/{payment_review_id}`

Signature:

```typescript
get(payment_review_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_review_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"order"`, `"payment_intent"`. |

#### Response

Returned payload: [PaymentReview](../models/PaymentReview.md#paymentreview).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.reviews.get("example", {}, {  });
```

[Complete runnable example](../examples/reviews-get.mjs)

### reviews.list

Lists payment reviews, most recently opened first. A review opens when a `review` rule matches a payment the bank approved. Every status is included unless you filter by `status`.

`GET /v1/payment-reviews`

Signature:

```typescript
list(params?: {
  "status"?: InputValue<Array<"open" | "resolving" | "closed">>;
  "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
  "payment_flow"?: InputValue<Array<"checkout" |
    "payment_link" |
    "invoice" |
    "subscription_initial" |
    "subscription_renewal" |
    "virtual_terminal" |
    "api">>;
  "payment_intent_id"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "customer_id"?: InputValue<string>;
  "opened_after"?: InputValue<string | globalThis.Date>;
  "opened_before"?: InputValue<string | globalThis.Date>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"open"`, `"resolving"`, `"closed"`. |
| `risk_level` | Optional | Array of string | minItems: `1`. Items values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. |
| `payment_flow` | Optional | Array of string | minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `opened_after` | Optional | string | Format: `date-time`. |
| `opened_before` | Optional | string | Format: `date-time`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"order"`, `"payment_intent"`. |

#### Response

Returned payload: [PaymentReviewListResponse](../models/PaymentReviewListResponse.md#paymentreviewlistresponse).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.reviews.list({}, {  });
```

[Complete runnable example](../examples/reviews-list.mjs)

