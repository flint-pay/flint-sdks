[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# riskPreviews

### riskPreviews.create

Validates a draft rule, or an existing rule by risk_rule_id, without saving anything. An invalid rule has is_valid: false and its problems in issues. The warnings array says how the change would affect evaluation. Requires risk.read. Rule content issues return 200 with is_valid false, every issue in order, analysis null, and empty warnings. Valid rules return analysis and any warnings. When risk_rule_id is omitted, action and predicate are required. Malformed requests return 400; a missing risk_rule_id resource returns 404. Proposing action or predicate changes to a system rule returns 409 ACTION_NOT_ALLOWED with reason managed_externally. List reference issues are included at the list_alias path. A new rule at the active-rule limit receives a risk_rule_limit_reached warning.

`POST /v1/risk-previews`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateRiskPreviewRequestInput](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput) | The request body for: Create a risk preview. |

Body model: [CreateRiskPreviewRequestInput](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput).

#### riskPreviews.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `mode` | Required | string | Selects an inline draft or a stored risk rule. Values: `"inline"`, `"stored_rule"`. |
| `predicate` | Optional | [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `risk_rule_id` | Optional | string | minLength: `1`. |

#### riskPreviews.create body oneOf variant 1

The `inline` variant of `CreateRiskPreviewRequest`.

Body model: [CreateRiskPreviewRequestInlineInput](../models/CreateRiskPreviewRequestInlineInput.md#createriskpreviewrequestinlineinput).

#### riskPreviews.create body oneOf variant 1 fields

Field definitions: [shared fields](../models/CreateRiskPreviewRequestInlineInput.md#createriskpreviewrequestinlineinput). Models: [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput).

#### riskPreviews.create body oneOf variant 2

The `stored_rule` variant of `CreateRiskPreviewRequest`.

Body model: [CreateRiskPreviewRequestStoredRuleInput](../models/CreateRiskPreviewRequestStoredRuleInput.md#createriskpreviewrequeststoredruleinput).

#### riskPreviews.create body oneOf variant 2 fields

Field definitions: [shared fields](../models/CreateRiskPreviewRequestStoredRuleInput.md#createriskpreviewrequeststoredruleinput). Models: [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput).

#### Response

Returned payload: [RiskPreview](../models/RiskPreview.md#riskpreview).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->riskPreviews->create([
  'mode' => 'stored_rule',
  'risk_rule_id' => 'rr_example',
], new RequestOptions());
```

[Complete runnable example](../examples/riskPreviews-create.php)

