[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# riskRules

### riskRules.create

Creates a rule that applies from the next payment attempt. Flint validates the predicate and checks every list before activating the rule. The rule is active unless you send status: inactive. An environment can have 100 active rules, counting Flint's defaults. To check a draft without saving it, use POST /v1/risk-previews.

`POST /v1/risk-rules`

Signature: `create(params: RiskRulesCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateRiskRuleRequestInput](../models/CreateRiskRuleRequest.md#createriskrulerequest) | The request body for: Create a risk rule. |

Body model: [CreateRiskRuleRequestInput](../models/CreateRiskRuleRequest.md#createriskrulerequest).

#### riskRules.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Required | string | minLength: `1`. |
| `predicate` | Required | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Optional | string | Default: `"active"`. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [RiskRule](../models/RiskRule.md#riskrule).

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

const result = await client.riskRules.create({action: "review", description: "Synthetic SDK example", predicate: {attribute: "payment_method_type", operator: "eq", value: "card"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/riskRules-create.mjs)

### riskRules.delete

Archives a rule. It stops running at once and can't be changed or restored. Flint's default rules can't be archived; set them inactive instead.

`DELETE /v1/risk-rules/{risk_rule_id}`

Signature: `delete(risk_rule_id: InputValue<string>, params?: RiskRulesDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_rule_id` | Required | string | Flint risk rule ID. |
| `expected_version` | Optional | integer | Optional risk rule version last read by the caller. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [RiskRule](../models/RiskRule.md#riskrule).

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

const result = await client.riskRules.delete("rule_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/riskRules-delete.mjs)

### riskRules.get

Retrieves a risk rule. The issues array lists anything that stops Flint from evaluating it.

`GET /v1/risk-rules/{risk_rule_id}`

Signature: `get(risk_rule_id: InputValue<string>, params?: RiskRulesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_rule_id` | Required | string | Flint risk rule ID. |

#### Response

Returned payload: [RiskRule](../models/RiskRule.md#riskrule).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.riskRules.get("rule_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/riskRules-get.mjs)

### riskRules.getAttributes

Lists the attributes a predicate can read in this environment, with each one's value type, operators, and the stage it becomes available. An attribute with is_available: false can't be used yet. Payment intent metadata is also readable as payment_intent_metadata.{key}, which isn't listed.

`GET /v1/risk-rules/attributes`

Signature: `getAttributes(params?: RiskRulesGetAttributesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [RiskAttributeRegistry](../models/RiskAttributeRegistry.md#riskattributeregistry).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.riskRules.getAttributes({}, {  });
```

[Complete runnable example](../examples/riskRules-getAttributes.mjs)

### riskRules.list

Lists risk rules, newest first, including Flint's default rules. By default, includes active and inactive rules. Archived rules appear only when status includes archived. This isn't the order Flint evaluates them in. Default order: created_at descending, then risk_rule_id descending.

`GET /v1/risk-rules`

Signature: `list(params?: RiskRulesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [RiskRuleListResponse](../models/RiskRuleListResponse.md#riskrulelistresponse).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.riskRules.list({}, {  });
```

[Complete runnable example](../examples/riskRules-list.mjs)

### riskRules.update

Changes a rule's action, predicate, description, or status, and increases its version. Send expected_version to avoid overwriting another edit. Flint's default rules accept only status. Activating a rule validates it again.

`PATCH /v1/risk-rules/{risk_rule_id}`

Signature: `update(risk_rule_id: InputValue<string>, params: RiskRulesUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_rule_id` | Required | string | Flint risk rule ID. |
| `body` | Required | [UpdateRiskRuleRequestInput](../models/UpdateRiskRuleRequest.md#updateriskrulerequest) | The request body for: Update a risk rule. |

Body model: [UpdateRiskRuleRequestInput](../models/UpdateRiskRuleRequest.md#updateriskrulerequest).

#### riskRules.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Optional | string | minLength: `1`. |
| `expected_version` | Optional | integer | Optional risk rule version last read by the caller. Format: `int64`. minimum: `1`. |
| `predicate` | Optional | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### riskRules.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Optional | string | minLength: `1`. |
| `expected_version` | Optional | integer | Optional risk rule version last read by the caller. Format: `int64`. minimum: `1`. |
| `predicate` | Optional | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### riskRules.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Optional | string | minLength: `1`. |
| `expected_version` | Optional | integer | Optional risk rule version last read by the caller. Format: `int64`. minimum: `1`. |
| `predicate` | Required | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### riskRules.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Required | string | minLength: `1`. |
| `expected_version` | Optional | integer | Optional risk rule version last read by the caller. Format: `int64`. minimum: `1`. |
| `predicate` | Optional | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### riskRules.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Optional | string | minLength: `1`. |
| `expected_version` | Optional | integer | Optional risk rule version last read by the caller. Format: `int64`. minimum: `1`. |
| `predicate` | Optional | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [RiskRule](../models/RiskRule.md#riskrule).

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

const result = await client.riskRules.update("rule_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Review higher-risk card payments"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/riskRules-update.mjs)

