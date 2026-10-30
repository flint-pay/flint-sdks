[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchant

### merchant.get

Returns the authenticated merchant.

`GET /v1/merchant`

Signature: `get(params?: MerchantGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expand` | Optional | Array of string or string | Supported expansions: organization. Expansion requires merchants.profile.read plus accounts.organizations.read. Limits: at most 10 unique expand paths per request. Pass expand=organization. Items values: `"organization"`. Values: `"organization"`. |

#### Response

Returned payload: [Merchant](../models/Merchant.md#merchant).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.merchant.get({}, {  });
```

[Complete runnable example](../examples/merchant-get.mjs)

### merchant.update

Applies a sparse update to the authenticated merchant's profile, shared across live and all sandboxes. Every mutable field requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required and one detail per supplied shared field, including nulls and metadata changes. Nothing is saved on refusal.

`PATCH /v1/merchant`

Signature: `update(params: MerchantUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [UpdateMerchantRequestInput](../models/UpdateMerchantRequest.md#updatemerchantrequest) | The request body for: Update merchant. |

Body model: [UpdateMerchantRequestInput](../models/UpdateMerchantRequest.md#updatemerchantrequest).

#### merchant.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressRequestInput](../models/AddressRequest.md#addressrequest) | This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `api_version` | Optional | string | Set the merchant default to any supported API version using a live-mode credential or a Dashboard session. Omit to leave it unchanged. Null is not accepted. The default is shared across live and test environments; requests with Flint-Version use that header instead. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: `1`. |
| `business_name` | Optional | string | Business name buyers see. Limited to 120 characters (Unicode code points) before trimming surrounding whitespace. The trimmed name must not be empty. The name cannot be cleared. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: `1`. maxLength: `120`. |
| `email` | Optional | string or null | Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: `1`. |
| `expected_version` | Optional | integer | Merchant profile version last read. A different current version returns 409 VERSION_CONFLICT. Send this value when saving a logo or icon to detect concurrent profile edits. Format: `int64`. minimum: `1`. |
| `icon` | Optional | [ImageRequestInput](../models/ImageRequest.md#imagerequest) or null | A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. |
| `logo` | Optional | [ImageRequestInput](../models/ImageRequest.md#imagerequest) or null | This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. |
| `phone` | Optional | string or null | Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: `1`. |
| `reporting_timezone` | Optional | string | This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: `1`. |
| `support_email` | Optional | string or null | Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: `1`. |
| `support_phone` | Optional | string or null | Support phone in E.164 format, for example +12125551234. Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: `1`. maxLength: `16`. pattern: `^\+[1-9][0-9]{6,14}$`. |
| `support_url` | Optional | string or null | Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: `1`. |
| `website_url` | Optional | string or null | Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: `1`. |

#### Response

Returned payload: [Merchant](../models/Merchant.md#merchant).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchant.update({business_name: "Example Shop"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchant-update.mjs)

