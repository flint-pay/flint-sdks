[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# partnerAppInstalls

### partnerAppInstalls.list

Lists partner app installs on the authenticated merchant, across live and test mode. Requires a live API key. Default order: partner_app_install_id ascending; this key uniquely orders the results.

`GET /v1/partner-app-installs`

Signature: `list(params?: PartnerAppInstallsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `partner_app_id` | Optional | string | Filter by app ID. |
| `status` | Optional | Array of string or string | Filter by install status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending_exchange"`, `"active"`, `"revoked"`. Values: `"pending_exchange"`, `"active"`, `"revoked"`. |

#### Response

Returned payload: [PartnerAppInstallListResponse](../models/PartnerAppInstallListResponse.md#partnerappinstalllistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
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

```typescript
const result = await client.partnerAppInstalls.list({}, {  });
```

[Complete runnable example](../examples/partnerAppInstalls-list.mjs)

### partnerAppInstalls.revoke

Disconnects a partner app from the authenticated merchant: revokes the install, its environment grants and its refresh tokens. The app is sent partner_app_install.revoked with revoked_by: merchant. Revoking a revoked install returns it unchanged. To reconnect, install the app again.

`POST /v1/partner-app-installs/{partner_app_install_id}/revoke`

Signature: `revoke(partner_app_install_id: InputValue<string>, params?: PartnerAppInstallsRevokeParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_install_id` | Required | string | Flint partner app install ID. |

#### Response

Returned payload: [PartnerAppInstall](../models/PartnerAppInstall.md#partnerappinstall).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerAppInstalls.revoke("pinst_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/partnerAppInstalls-revoke.mjs)

