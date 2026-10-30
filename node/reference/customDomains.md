[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customDomains

### customDomains.create

Configures a checkout or customer account hostname in this environment. Remove an existing hostname of the same type before creating its replacement. If the create response is lost and a retry returns 500 IDEMPOTENCY_RECOVERY_REQUIRED, keep the original Idempotency-Key. List domains with GET /v1/custom-domains?type=customer_account and GET /v1/custom-domains?type=customer_account&status=archived, using type=checkout for both requests if that was the original type. Follow pagination and inspect current and archived domains for the requested hostname; use a matching domain's custom_domain_id to retrieve its current state. Do not switch keys or wait for key retention to expire to create again. Contact support with the request_id if the outcome is still unclear.

`POST /v1/custom-domains`

Signature: `create(params: CustomDomainsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCustomDomainRequestInput](../models/CreateCustomDomainRequest.md#createcustomdomainrequest) | The request body for: Create a custom domain. |

Body model: [CreateCustomDomainRequestInput](../models/CreateCustomDomainRequest.md#createcustomdomainrequest).

#### customDomains.create body fields

Field definitions: [shared fields](../models/CreateCustomDomainRequest.md#createcustomdomainrequest).

#### Response

Returned payload: [CustomDomain](../models/CustomDomain.md#customdomain).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
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

const result = await client.customDomains.create({type: "checkout", hostname: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customDomains-create.mjs)

### customDomains.delete

Archives the hostname and starts its redirect retention window. Repeating the request returns the archived domain unchanged.

`DELETE /v1/custom-domains/{custom_domain_id}`

Signature: `delete(custom_domain_id: InputValue<string>, params?: CustomDomainsDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_domain_id` | Required | string | Flint custom domain ID. |

#### Response

Returned payload: [CustomDomain](../models/CustomDomain.md#customdomain).

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

const result = await client.customDomains.delete("cdom_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customDomains-delete.mjs)

### customDomains.get

Returns a custom domain, including archived domains.

`GET /v1/custom-domains/{custom_domain_id}`

Signature: `get(custom_domain_id: InputValue<string>, params?: CustomDomainsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_domain_id` | Required | string | Flint custom domain ID. |

#### Response

Returned payload: [CustomDomain](../models/CustomDomain.md#customdomain).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.customDomains.get("cdom_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/customDomains-get.mjs)

### customDomains.list

Returns domains ordered by created_at descending, then custom_domain_id descending. Default order: created_at descending, then custom_domain_id descending.

`GET /v1/custom-domains`

Signature: `list(params?: CustomDomainsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `type` | Optional | Array of string or string | Return domains of these types. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"checkout"`, `"customer_account"`. Values: `"checkout"`, `"customer_account"`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"provisioning"`, `"active"`, `"attention_required"`, `"inactive"`, `"archived"`. Values: `"provisioning"`, `"active"`, `"attention_required"`, `"inactive"`, `"archived"`. |

#### Response

Returned payload: [CustomDomainListResponse](../models/CustomDomainListResponse.md#customdomainlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
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
const result = await client.customDomains.list({}, {  });
```

[Complete runnable example](../examples/customDomains-list.mjs)

### customDomains.validate

Starts provider and DNS checks for this domain. Send no body or an empty JSON object. Checks are limited to once every 60 seconds per domain; rate limited responses include Retry-After.

`POST /v1/custom-domains/{custom_domain_id}/validate`

Signature: `validate(custom_domain_id: InputValue<string>, params?: CustomDomainsValidateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_domain_id` | Required | string | Flint custom domain ID. |

#### Response

Returned payload: [CustomDomain](../models/CustomDomain.md#customdomain).

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

const result = await client.customDomains.validate("cdom_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customDomains-validate.mjs)

