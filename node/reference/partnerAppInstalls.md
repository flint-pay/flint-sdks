[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# partnerAppInstalls

### partnerAppInstalls.list

Lists partner app installs on the authenticated merchant, across live and test mode. Requires a live API key.

`GET /v1/partner-app-installs`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "partner_app_id"?: InputValue<string>;
  "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

Field definitions: [shared fields](developer.md#request-fields-14).

#### Response

Returned payload: [PartnerAppInstallListResponse](../models/PartnerAppInstallListResponse.md#partnerappinstalllistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.partnerAppInstalls.list({}, {  });
```

[Complete runnable example](../examples/partnerAppInstalls-list.mjs)

### partnerAppInstalls.revoke

Disconnects a partner app from the authenticated merchant: revokes the install, its environment grants and its refresh tokens. The app is sent partner_app_install.revoked with revoked_by: merchant. Revoking a revoked install returns it unchanged. To reconnect, install the app again.

`POST /v1/partner-app-installs/{partner_app_install_id}/revoke`

Signature:

```typescript
revoke(partner_app_install_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_install_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PartnerAppInstall](../models/PartnerAppInstall.md#partnerappinstall).

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

Complete body and metadata: `revokeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerAppInstalls.revoke("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/partnerAppInstalls-revoke.mjs)

