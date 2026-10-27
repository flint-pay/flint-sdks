[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# riskRules

### riskRules.create

Creates a rule that applies from the next payment attempt. Flint validates the predicate and checks every list before activating the rule. The rule is active unless you send status: inactive. An environment can have 100 active rules, counting Flint's defaults. To check a draft without saving it, use POST /v1/risk-previews.

`POST /v1/risk-rules`

Signature:

```typescript
create(params: (InputValue<CreateRiskRuleRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.riskRules.create({action: "review", description: "Synthetic SDK example", predicate: {attribute: "payment_method_type", operator: "eq", value: "card"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/riskRules-create.mjs)

### riskRules.get

Retrieves a risk rule. The issues array lists anything that stops Flint from evaluating it.

`GET /v1/risk-rules/{risk_rule_id}`

Signature: `get(risk_rule_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_rule_id` | Required | string |  |

#### Response

Returned payload: [RiskRule](../models/RiskRule.md#riskrule).

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
const result = await client.riskRules.get("example", {}, {  });
```

[Complete runnable example](../examples/riskRules-get.mjs)

### riskRules.getAttributeRegistry

Lists the attributes a predicate can read in this environment, with each one's value type, operators, and the stage it becomes available. An attribute with is_available: false can't be used yet. Payment intent metadata is also readable as payment_intent_metadata.{key}, which isn't listed.

`GET /v1/risk-rules/attributes`

Signature: `getAttributeRegistry(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [RiskAttributeRegistry](../models/RiskAttributeRegistry.md#riskattributeregistry).

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

Complete body and metadata: `getAttributeRegistryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.riskRules.getAttributeRegistry({}, {  });
```

[Complete runnable example](../examples/riskRules-getAttributeRegistry.mjs)

### riskRules.list

Lists risk rules, newest first, including Flint's default rules. By default, includes active and inactive rules. Archived rules appear only when status includes archived. This isn't the order Flint evaluates them in.

`GET /v1/risk-rules`

Signature:

```typescript
list(params?: {
  "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [RiskRuleListResponse](../models/RiskRuleListResponse.md#riskrulelistresponse).

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

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.riskRules.list({}, {  });
```

[Complete runnable example](../examples/riskRules-list.mjs)

### riskRules.remove

Archives a rule. It stops running at once and can't be changed or restored. Flint's default rules can't be archived; set them inactive instead.

`DELETE /v1/risk-rules/{risk_rule_id}`

Signature:

```typescript
remove(risk_rule_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_rule_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [RiskRule](../models/RiskRule.md#riskrule).

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

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.riskRules.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/riskRules-remove.mjs)

### riskRules.update

Changes a rule's action, predicate, description, or status, and increases its version. Send expected_version to avoid overwriting another edit. Flint's default rules accept only status. Activating a rule validates it again.

`PATCH /v1/risk-rules/{risk_rule_id}`

Signature:

```typescript
update(risk_rule_id: InputValue<string>,
 params: (InputValue<UpdateRiskRuleRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_rule_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateRiskRuleRequestInput](../models/UpdateRiskRuleRequest.md#updateriskrulerequest) | The request body for: Update a risk rule. |

Body model: [UpdateRiskRuleRequestInput](../models/UpdateRiskRuleRequest.md#updateriskrulerequest).

#### riskRules.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Optional | string | minLength: `1`. |
| `expected_version` | Optional | integer string | Optional risk rule version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `predicate` | Optional | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### riskRules.update body anyOf variant 1



#### riskRules.update body anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Optional | string | minLength: `1`. |
| `expected_version` | Optional | integer string | Optional risk rule version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `predicate` | Optional | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### riskRules.update body anyOf variant 2



#### riskRules.update body anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Optional | string | minLength: `1`. |
| `expected_version` | Optional | integer string | Optional risk rule version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `predicate` | Required | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### riskRules.update body anyOf variant 3



#### riskRules.update body anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Required | string | minLength: `1`. |
| `expected_version` | Optional | integer string | Optional risk rule version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `predicate` | Optional | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### riskRules.update body anyOf variant 4



#### riskRules.update body anyOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Optional | string | minLength: `1`. |
| `expected_version` | Optional | integer string | Optional risk rule version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `predicate` | Optional | [RiskPredicateNodeInput](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [RiskRule](../models/RiskRule.md#riskrule).

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

const result = await client.riskRules.update("example", {action: "allow"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/riskRules-update.mjs)

