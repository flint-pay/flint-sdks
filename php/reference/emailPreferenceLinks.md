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

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

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

Field definitions: [shared fields](#request-fields). Models: [EmailPreferenceLinkRequestInput](../models/EmailPreferenceLinkRequestInput.md#emailpreferencelinkrequestinput).

#### Response

Returned payload: [EmailPreferenceLink](../models/EmailPreferenceLinkInput.md#emailpreferencelinkinput).

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

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

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

