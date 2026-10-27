[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchants

### merchants.get

Returns the authenticated merchant.

`GET /v1/merchant`

Signature:

```typescript
get(params?: {
  "expand"?: InputValue<Array<"organization">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expand` | Optional | Array of string | Items values: `"organization"`. |

#### Response

Returned payload: [Merchant](../models/Merchant.md#merchant).

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

Authentication modes: `merchant`, `merchantKey`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.merchants.get({}, {  });
```

[Complete runnable example](../examples/merchants-get.mjs)

### merchants.update

Applies a sparse update to the authenticated merchant's public business profile fields. The api_version field changes the merchant's live default and requires a live-mode API key or the live dashboard environment.

`PATCH /v1/merchant`

Signature:

```typescript
update(params: (InputValue<UpdateMerchantRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateMerchantRequestInput](../models/UpdateMerchantRequest.md#updatemerchantrequest) | The request body for: Update merchant. |

Body model: [UpdateMerchantRequestInput](../models/UpdateMerchantRequest.md#updatemerchantrequest).

#### merchants.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressRequestInput](../models/AddressRequest.md#addressrequest) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `api_version` | Optional | string | Set the merchant default to any supported API version using a live-mode API key or the live dashboard environment. Omit to leave it unchanged. Null is not accepted. The default is shared across live and test environments; requests with Flint-Version use that header instead. minLength: `1`. |
| `business_name` | Optional | string | Business name buyers see. Limited to 120 characters (Unicode code points) before trimming surrounding whitespace. The trimmed name must not be empty. The name cannot be cleared, and only live credentials can set it. minLength: `1`. maxLength: `120`. |
| `email` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer string | Merchant profile version last read. A different current version returns 409 VERSION_CONFLICT. Send this value when saving a logo or icon to detect concurrent profile edits. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `icon` | Optional | [ImageRequestInput](../models/ImageRequest.md#imagerequest) or null | A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. |
| `logo` | Optional | [ImageRequestInput](../models/ImageRequest.md#imagerequest) or null |  |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `organization_id` | Optional | string | minLength: `1`. |
| `phone` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `reporting_timezone` | Optional | string | minLength: `1`. |
| `support_email` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `support_phone` | Optional | string or null | Support phone in E.164 format, for example +12125551234. Send null to clear it. minLength: `1`. maxLength: `16`. pattern: `^\+[1-9][0-9]{6,14}$`. |
| `support_url` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `website_url` | Optional | string or null | Send null to clear it. minLength: `1`. |

#### Response

Returned payload: [Merchant](../models/Merchant.md#merchant).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchants.update({}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchants-update.mjs)

