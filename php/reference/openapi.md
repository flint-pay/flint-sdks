[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# openapi

### openapi.getSpec

Returns the Flint public OpenAPI document for tooling, schema inspection, and client generation.

`GET /v1/openapi.json`

Signature: `getSpec(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `version` | Optional | string | Supported API version in YYYY-MM-DD format, for tools and direct links that can't send Flint-Version. When both are valid, this selects the returned specification. An invalid Flint-Version header still returns an error. |

#### Response

Response body (inside Result.data): \stdClass.

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->openapi->getSpec([], new RequestOptions());
```

[Complete runnable example](../examples/openapi-getSpec.php)

