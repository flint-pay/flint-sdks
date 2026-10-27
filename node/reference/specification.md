[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# specification

### specification.get

Returns the Flint public OpenAPI document for tooling, schema inspection, and client generation.

`GET /v1/openapi.json`

Signature: `get(params?: { "version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<never>>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `version` | Optional | string |  |

#### Response

Response body (inside Result.data): {  [key: string]: unknown; }.

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.specification.get({}, {  });
```

[Complete runnable example](../examples/specification-get.mjs)

