[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# riskPreviews

### riskPreviews.create

Validates a rule without saving anything. Send mode inline with action and predicate to check a draft; add risk_rule_id to check them as an edit to that rule. Send mode stored_rule with risk_rule_id, and no action or predicate, to check the saved rule as it is. Requires risk.read. Rule content issues return 200 with is_valid false, every issue in order, analysis null, and empty warnings. A valid rule returns analysis and any warnings about how the change would affect evaluation. List reference issues are reported at the list_alias path. A new rule at the active-rule limit gets a risk_rule_limit_reached warning. A malformed request returns 400, and an unknown risk_rule_id returns 404. Proposing a different action or predicate for a Flint default rule returns 409 ACTION_NOT_ALLOWED with reason managed_externally.

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
| `mode` | Required | string | What to check: a rule in this request, or a saved rule. Values: `"inline"`, `"stored_rule"`. |
| `predicate` | Optional | [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `risk_rule_id` | Optional | string | minLength: `1`. |

#### riskPreviews.create with `mode: "inline"`

The `inline` variant of `CreateRiskPreviewRequest`.

Body model: [CreateRiskPreviewRequestInlineInput](../models/CreateRiskPreviewRequestInlineInput.md#createriskpreviewrequestinlineinput).

#### riskPreviews.create with `mode: "stored_rule"`

The `stored_rule` variant of `CreateRiskPreviewRequest`.

Body model: [CreateRiskPreviewRequestStoredRuleInput](../models/CreateRiskPreviewRequestStoredRuleInput.md#createriskpreviewrequeststoredruleinput).

#### Response

Returned payload: [RiskPreview](../models/RiskPreview.md#riskpreview).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->riskPreviews->create([
  'mode' => 'stored_rule',
  'risk_rule_id' => 'rule_01ARZ3NDEKTSV4RRFFQ69G5FAV',
], new RequestOptions());
```

[Complete runnable example](../examples/riskPreviews-create.php)

