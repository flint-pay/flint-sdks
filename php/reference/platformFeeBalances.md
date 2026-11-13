[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# platformFeeBalances

### platformFeeBalances.list

Lists your partner apps' platform fee balances, one per partner app and currency, newest first. Reads the merchant that owns the partner app, with its own credentials and money_movement.platform_fees.read; partner app tokens can't. Live records are in your live environment. Test records are in your default sandbox at the time the payment was created. A merchant that owns no partner app gets an empty list. Default order: time Flint opened the balance (descending), then platform_fee_balance_id descending.

`GET /v1/platform-fee-balances`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `partner_app_id` | Optional | string | Exact match on the partner app. minLength: `1`. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

#### Response

Returned payload: [PlatformFeeBalanceListResponse](../models/PlatformFeeBalanceListResponse.md#platformfeebalancelistresponse).

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

```php
$result = $client->platformFeeBalances->list([], new RequestOptions());
```

[Complete runnable example](../examples/platformFeeBalances-list.php)

