[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# platformFeePayouts

### platformFeePayouts.get

Returns one platform fee payout. Reads the merchant that owns the partner app, with its own credentials and money_movement.platform_fees.read; partner app tokens can't. Live records are in your live environment. Test records are in your default sandbox at the time the payment was created. A merchant that owns no partner app gets an empty list.

`GET /v1/platform-fee-payouts/{platform_fee_payout_id}`

Signature:

```typescript
get(platform_fee_payout_id: InputValue<string>,
 params?: PlatformFeePayoutsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `platform_fee_payout_id` | Required | string | Flint platform fee payout ID. |

#### Response

Returned payload: [PlatformFeePayout](../models/PlatformFeePayout.md#platformfeepayout).

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
const result = await client.platformFeePayouts.get("pfpo_01KEZF7C00H58B147FK286D4A4", {}, {  });
```

[Complete runnable example](../examples/platformFeePayouts-get.mjs)

### platformFeePayouts.list

Lists payouts from your partner apps' fee balances to your merchant balance, newest first, then by platform_fee_payout_id. Reads the merchant that owns the partner app, with its own credentials and money_movement.platform_fees.read; partner app tokens can't. Live records are in your live environment. Test records are in your default sandbox at the time the payment was created. A merchant that owns no partner app gets an empty list. Default order: created_at descending, then platform_fee_payout_id descending.

`GET /v1/platform-fee-payouts`

Signature: `list(params?: PlatformFeePayoutsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `partner_app_id` | Optional | string | Exact match on the partner app. minLength: `1`. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `status` | Optional | Array of string or string | Statuses to include. Omit it to list every status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"succeeded"`, `"failed"`. Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |

#### Response

Returned payload: [PlatformFeePayoutListResponse](../models/PlatformFeePayoutListResponse.md#platformfeepayoutlistresponse).

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
const result = await client.platformFeePayouts.list({}, {  });
```

[Complete runnable example](../examples/platformFeePayouts-list.mjs)

