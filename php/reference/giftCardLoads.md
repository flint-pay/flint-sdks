[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardLoads

### giftCardLoads.get

Retrieves original value, consideration, funding provenance and remaining attributable value for one load.

`GET /v1/gift-card-loads/{gift_card_load_id}`

Signature: `get(string|Model $gift_card_load_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_load_id` | Required | string | Flint resource ID. |

#### Response

Returned payload: [GiftCardLoad](../models/GiftCardLoad.md#giftcardload).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->giftCardLoads->get('gcl_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/giftCardLoads-get.php)

### giftCardLoads.list

Lists funding lots in descending ID order. Consideration may be null for imported balances whose original purchase price is unknown. The idempotency_key filter recovers a load after a lost command response. Default order: gift_card_load_id descending; this key uniquely orders the results.

`GET /v1/gift-card-loads`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `funding_source_type` | Optional | Array of string or string | Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [8 declared values](#giftcardloadslist-input-funding_source_type--values). Values: [8 declared values](#giftcardloadslist-input-funding_source_type-values). |
| `gift_card_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `order_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `source_external_reference_id` | Optional | string | Exact, case-sensitive reference for the payment or import record that funded this value. minLength: `1`. maxLength: `255`. |

#### giftCardLoads.list input funding_source_type [] values

- `"adjustment"`
- `"external_payment"`
- `"flint_manual_payment"`
- `"flint_payment"`
- `"gift_card_purchase_refund_recovery"`
- `"gift_card_refund"`
- `"import"`
- `"store_credit"`

#### giftCardLoads.list input funding_source_type values

- `"adjustment"`
- `"external_payment"`
- `"flint_manual_payment"`
- `"flint_payment"`
- `"gift_card_purchase_refund_recovery"`
- `"gift_card_refund"`
- `"import"`
- `"store_credit"`

#### Response

Returned payload: [GiftCardLoadListResponse](../models/GiftCardLoadListResponse.md#giftcardloadlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
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

```php
$result = $client->giftCardLoads->list([], new RequestOptions());
```

[Complete runnable example](../examples/giftCardLoads-list.php)

