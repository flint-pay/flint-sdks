[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# emailPreferenceLinks

### emailPreferenceLinks.lookup

Reads an emailed preference token without signing the buyer in. The merchant key must match the token's merchant and environment. Tokens belong in the request body and must stay on your backend.

`POST /v1/email-preference-links/lookup`

Signature: `lookup(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [EmailPreferenceLinkRequestInput](../models/EmailPreferenceLinkRequestInput.md#emailpreferencelinkrequestinput) | The request body for: Look up an email preference link; Unsubscribe an email preference link. |

#### Response

Returned payload: [EmailPreferenceLink](../models/EmailPreferenceLinkInput.md#emailpreferencelinkinput).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `lookupWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->emailPreferenceLinks->lookup([
  'token' => 'example',
], new RequestOptions());
```

[Complete runnable example](../examples/emailPreferenceLinks-lookup.php)

### emailPreferenceLinks.unsubscribe

Disables the email preference represented by an emailed token without signing the buyer in. Repeating the request keeps it disabled. The merchant key must match the token's merchant and environment.

`POST /v1/email-preference-links/unsubscribe`

Signature: `unsubscribe(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [EmailPreferenceLinkRequestInput](../models/EmailPreferenceLinkRequestInput.md#emailpreferencelinkrequestinput) | The request body for: Look up an email preference link; Unsubscribe an email preference link. |

#### Response

Returned payload: [EmailPreferenceLink](../models/EmailPreferenceLinkInput.md#emailpreferencelinkinput).

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

Complete body and metadata: `unsubscribeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->emailPreferenceLinks->unsubscribe([
  'token' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/emailPreferenceLinks-unsubscribe.php)

