[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# files

### files.complete

After PUT succeeds, complete the file to process its image. Returns the ready file; completing a ready file again returns it. Send no request body or {}. Completing before the bytes arrive returns FILE_NOT_UPLOADED and leaves the file awaiting_upload. Attach the returned file_id as images[].file_id before expires_at, 24 hours after processing. Completion requires the purpose's write scope, with the same merchant-wide branding and environment boundaries as createFile. Partner installs can upload commerce images but cannot upload merchant_logo or merchant_icon: those purposes return INSUFFICIENT_SCOPE with scope_requirement because merchants.profile.write is not grantable to installs. Idempotency is scoped to merchant, credential, environment, route, and file_id. A replay returns the original result; it does not extend upload or attachment deadlines. After a lost completion response, repeat this route with the same key and file_id.

`POST /v1/files/{file_id}/complete`

Signature:

```typescript
complete(file_id: InputValue<string>,
 params?: (InputValue<{
}> | {
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `file_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [File](../models/File.md#file).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `completeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.files.complete("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/files-complete.mjs)

### files.create

Upload a local image to Flint. Create a file, PUT the bytes to upload.url with upload.method and every upload.headers value, then POST /v1/files/{file_id}/complete. The URL works for 15 minutes. Purpose requires its own write scope: product and product_variant use commerce.products.write; bundle uses commerce.bundles.write; payment_link uses checkouts.payment_links.write; subscription_plan uses commerce.subscription_plans.write; merchant_logo and merchant_icon use merchants.profile.write. Logo and icon files are merchant-wide; all other purposes belong to the authenticated environment. Partner installs can upload commerce images but cannot upload merchant_logo or merchant_icon: those purposes return INSUFFICIENT_SCOPE with scope_requirement because merchants.profile.write is not grantable to installs. Idempotency is scoped to merchant, credential, environment, and route. A replay returns the original upload target without extending its expiry. After a lost response, retry with the same Idempotency-Key or create another file. Each upload URL expires 15 minutes after creation.

`POST /v1/files`

Signature:

```typescript
create(params: (InputValue<CreateFileRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateFileRequestInput](../models/CreateFileRequest.md#createfilerequest) | The request body for: Create a file. |

Body model: [CreateFileRequestInput](../models/CreateFileRequest.md#createfilerequest).

#### files.create body fields

Field definitions: [shared fields](../models/CreateFileRequest.md#createfilerequest).

#### Response

Returned payload: [File](../models/File.md#file).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.files.create({purpose: "product", content_type: "image/jpeg", size_bytes: "1"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/files-create.mjs)

### files.get

Returns a file's current status without upload credentials. Purpose requires its own read scope: product and product_variant use commerce.products.read; bundle uses commerce.bundles.read; payment_link uses checkouts.payment_links.read; subscription_plan uses commerce.subscription_plans.read; merchant_logo and merchant_icon use merchants.profile.read. The matching write scope also grants read access. Dashboard sessions require the purpose's manage capability. Logo and icon files are merchant-wide; other files belong to the authenticated environment. Partner installs can read commerce files but cannot read merchant_logo or merchant_icon. Expired deadlines are reflected immediately. Only ready files include url, width, and height. The response uses Cache-Control: no-store.

`GET /v1/files/{file_id}`

Signature: `get(file_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `file_id` | Required | string |  |

#### Response

Returned payload: [File](../models/File.md#file).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.files.get("example", {}, {  });
```

[Complete runnable example](../examples/files-get.mjs)

