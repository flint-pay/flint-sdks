[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentSplits

### paymentSplits.get

Read splits you collected or received, with your own credentials and money_movement.payment_splits.read. Install tokens can't read splits. Test splits are in the collecting merchant's sandbox and the seller's test grant's sandbox. Consumers include marketplace payment pages and seller reconciliation.

`GET /v1/payment-splits/{payment_split_id}`

Signature: `get(payment_split_id: InputValue<string>, params?: PaymentSplitsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_split_id` | Required | string | Flint payment split ID. |

#### Response

Returned payload: [PaymentSplit](../models/PaymentSplit.md#paymentsplit).

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
const result = await client.paymentSplits.get("psplit_01KEZF7C00Y5HA4Z8D4KRA07K8", {}, {  });
```

[Complete runnable example](../examples/paymentSplits-get.mjs)

### paymentSplits.list

Lists splits where you are either party, newest first, then by payment_split_id descending. Read splits you collected or received, with your own credentials and money_movement.payment_splits.read. Install tokens can't read splits. Test splits are in the collecting merchant's sandbox and the seller's test grant's sandbox. Consumers include marketplace payment pages and seller reconciliation. Default order: created_at descending, then payment_split_id descending.

`GET /v1/payment-splits`

Signature: `list(params?: PaymentSplitsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `payment_intent_id` | Optional | string | Exact match on the payment intent. pattern: `^pi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `collecting_merchant_id` | Optional | string | Exact match on the collecting merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `seller_merchant_id` | Optional | string | Exact match on the seller. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `partner_app_id` | Optional | string | Exact match on the partner app. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `partner_app_install_id` | Optional | string | Exact match on the install. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `external_reference_id` | Optional | string | Exact, case-sensitive match on the collecting merchant's external identifier. minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string or string | Statuses to include. Omit to include all statuses. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`, `"canceled"`. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |

#### Response

Returned payload: [PaymentSplitListResponse](../models/PaymentSplitListResponse.md#paymentsplitlistresponse).

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
const result = await client.paymentSplits.list({}, {  });
```

[Complete runnable example](../examples/paymentSplits-list.mjs)

