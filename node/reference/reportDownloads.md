[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# reportDownloads

### reportDownloads.get

Authorizes the stable Flint download URL and redirects to a short-lived private file URL.

`GET /v1/report-downloads/{report_download_id}`

Signature: `get(report_download_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `report_download_id` | Required | string |  |

#### Response

Response body (inside Result.data): { location?: string }.

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.reportDownloads.get("example", {}, {  });
```

[Complete runnable example](../examples/reportDownloads-get.mjs)

