[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# platformFees

### platformFees.get

Returns one platform fee. Reads the merchant that owns the partner app, with its own credentials and money_movement.platform_fees.read; partner app tokens can't. Live records are in your live environment. Test records are in your default sandbox at the time the payment was created. A merchant that owns no partner app gets an empty list.

`GET /v1/platform-fees/{platform_fee_id}`

Signature: `get(string|Model $platform_fee_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `platform_fee_id` | Required | string | Flint platform fee ID. |

#### Response

Returned payload: [PlatformFee](../models/PlatformFeeCanceledEventDataObject.md#platformfeecanceledeventdataobject).

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

```php
$result = $client->platformFees->get('pfee_01KEZF7C00JHAZN19B3MMW0R3A', [], new RequestOptions());
```

[Complete runnable example](../examples/platformFees-get.php)

### platformFees.list

Lists the platform fees your partner apps charged, newest first, then by platform_fee_id. Reads the merchant that owns the partner app, with its own credentials and money_movement.platform_fees.read; partner app tokens can't. Live records are in your live environment. Test records are in your default sandbox at the time the payment was created. A merchant that owns no partner app gets an empty list. Default order: created_at descending, then platform_fee_id descending.

`GET /v1/platform-fees`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `partner_app_id` | Optional | string | Exact match on the partner app. minLength: `1`. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `partner_app_install_id` | Optional | string | Exact match on the install whose token created the payment. minLength: `1`. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `merchant_id` | Optional | string | Exact match on the installed merchant charged the fee. minLength: `1`. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `payment_intent_id` | Optional | string | Exact match on the payment the fee rides on. minLength: `1`. pattern: `^pi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `status` | Optional | Array of string or string | Statuses to include. Omit it to list every status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"succeeded"`, `"canceled"`. Values: `"pending"`, `"succeeded"`, `"canceled"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |

#### Response

Returned payload: [PlatformFeeListResponse](../models/PlatformFeeListResponse.md#platformfeelistresponse).

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
$result = $client->platformFees->list([], new RequestOptions());
```

[Complete runnable example](../examples/platformFees-list.php)

