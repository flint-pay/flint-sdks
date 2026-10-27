[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customDomains

### customDomains.create

Configures a checkout or customer account hostname in this environment. Remove an existing hostname of the same type before creating its replacement. If the create response is lost and a retry returns 500 IDEMPOTENCY_RECOVERY_REQUIRED, keep the original Idempotency-Key. List domains with GET /v1/custom-domains?type=customer_account and GET /v1/custom-domains?type=customer_account&status=archived, using type=checkout for both requests if that was the original type. Follow pagination and inspect current and archived domains for the requested hostname; use a matching domain's custom_domain_id to retrieve its current state. Do not switch keys or wait for key retention to expire to create again. Contact support with the request_id if the outcome is still unclear.

`POST /v1/custom-domains`

Signature:

```typescript
create(params: (InputValue<CreateCustomDomainRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomDomainRequestInput](../models/CreateCustomDomainRequest.md#createcustomdomainrequest) | The request body for: Create a custom domain. |

Body model: [CreateCustomDomainRequestInput](../models/CreateCustomDomainRequest.md#createcustomdomainrequest).

#### customDomains.create body fields

Field definitions: [shared fields](../models/CreateCustomDomainRequest.md#createcustomdomainrequest).

#### Response

Returned payload: [CustomDomain](../models/CustomDomain.md#customdomain).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customDomains.create({type: "checkout", hostname: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customDomains-create.mjs)

### customDomains.get

Returns a custom domain, including archived domains.

`GET /v1/custom-domains/{custom_domain_id}`

Signature: `get(custom_domain_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_domain_id` | Required | string |  |

#### Response

Returned payload: [CustomDomain](../models/CustomDomain.md#customdomain).

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

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.customDomains.get("example", {}, {  });
```

[Complete runnable example](../examples/customDomains-get.mjs)

### customDomains.list

Returns domains ordered by created_at descending, then custom_domain_id descending.

`GET /v1/custom-domains`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "type"?: InputValue<Array<"checkout" | "customer_account">>;
  "status"?: InputValue<Array<"provisioning" |
    "active" |
    "attention_required" |
    "inactive" |
    "archived">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `type` | Optional | Array of string | minItems: `1`. Items values: `"checkout"`, `"customer_account"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"provisioning"`, `"active"`, `"attention_required"`, `"inactive"`, `"archived"`. |

#### Response

Returned payload: [CustomDomainListResponse](../models/CustomDomainListResponse.md#customdomainlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.customDomains.list({}, {  });
```

[Complete runnable example](../examples/customDomains-list.mjs)

### customDomains.remove

Archives the hostname and starts its redirect retention window. Repeating the request returns the archived domain unchanged.

`DELETE /v1/custom-domains/{custom_domain_id}`

Signature: `remove(custom_domain_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_domain_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [CustomDomain](../models/CustomDomain.md#customdomain).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customDomains.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customDomains-remove.mjs)

