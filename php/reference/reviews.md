[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# reviews

### reviews.approve

Approves the payment and closes the review with `closed_reason: approved`. Approving never captures: capture a manual-capture payment yourself before `authorization_expires_at`. Approving a review you already approved returns it unchanged.

`POST /v1/payment-reviews/{payment_review_id}/approve`

Signature: `approve(string|Model $payment_review_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `approveWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->reviews->approve('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/reviews-approve.php)

### reviews.decline

Declines the payment and closes the review with `closed_reason: declined`. Flint cancels an uncaptured authorization, or refunds the remaining captured amount (captured minus earlier refunds) to the original payment method with reason `fraudulent`. Returns `200` when the review is closed, or when the refund already failed and the review is `open` again with `last_resolution_failure` set. Returns `202` while the refund is processing; wait for `payment_review.closed` or `payment_review.reopened`.

`POST /v1/payment-reviews/{payment_review_id}/decline`

Signature: `decline(string|Model $payment_review_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_review_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [DeclinePaymentReviewRequestInput](../models/DeclinePaymentReviewRequestInput.md#declinepaymentreviewrequestinput) | The request body for: Decline a payment review. |

Body model: [DeclinePaymentReviewRequestInput](../models/DeclinePaymentReviewRequestInput.md#declinepaymentreviewrequestinput).

#### reviews.decline body fields

Field definitions: [shared fields](../models/DeclinePaymentReviewRequestInput.md#declinepaymentreviewrequestinput).

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
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `declineWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->reviews->decline('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/reviews-decline.php)

### reviews.get

Retrieves a payment review. Expand `payment_intent`, `order`, or `customer` to include them.

`GET /v1/payment-reviews/{payment_review_id}`

Signature: `get(string|Model $payment_review_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->reviews->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/reviews-get.php)

### reviews.list

Lists payment reviews, most recently opened first. A review opens when a `review` rule matches a payment the bank approved. Every status is included unless you filter by `status`.

`GET /v1/payment-reviews`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

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

Returned payload: [ReviewsListResponse200](../models/ReviewsListResponse200.md#reviewslistresponse200).

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

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->reviews->list([], new RequestOptions());
```

[Complete runnable example](../examples/reviews-list.php)

