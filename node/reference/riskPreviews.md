[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# riskPreviews

### riskPreviews.create

Validates a rule without saving anything. Send mode inline with action and predicate to check a draft; add risk_rule_id to check them as an edit to that rule. Send mode stored_rule with risk_rule_id, to check the saved rule, optionally overriding action or predicate. An omitted or null override keeps the saved value. Requires risk.read. Rule content issues produce a preview with `is_valid: false`, every issue in order, `analysis` null, and empty `warnings`. A valid rule returns analysis and any warnings about how the change would affect evaluation. List reference issues are reported at the list_alias path. A new rule at the active-rule limit gets a risk_rule_limit_reached warning. A malformed request fails with `INVALID_REQUEST`, and an unknown `risk_rule_id` fails with `RESOURCE_NOT_FOUND`. Proposing a different action or predicate for a Flint default rule fails with `ACTION_NOT_ALLOWED` and reason `managed_externally`.

`POST /v1/risk-previews`

Signature: `create(params: RiskPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateRiskPreviewRequestInput](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest) | The request body for: Create a risk preview. |

Body model: [CreateRiskPreviewRequestInput](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest).

#### riskPreviews.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string or null | Action to preview. In stored_rule mode, omitted or null keeps the saved action. Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`, `null`. |
| `mode` | Required | string | What to check: a rule in this request, or a saved rule. Values: `"inline"`, `"stored_rule"`. |
| `predicate` | Optional | [RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequest.md#riskpredicatenoderequest) or null | Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate. |
| `risk_rule_id` | Optional | string | ID of the saved rule to check. minLength: `1`. |

#### riskPreviews.create with `mode: "inline"`

The `inline` variant of `CreateRiskPreviewRequest`.

Body model: [CreateRiskPreviewRequestInlineInput](../models/CreateRiskPreviewRequestInline.md#createriskpreviewrequestinline).

#### riskPreviews.create with `mode: "stored_rule"`

The `stored_rule` variant of `CreateRiskPreviewRequest`.

Body model: [CreateRiskPreviewRequestStoredRuleInput](../models/CreateRiskPreviewRequestStoredRule.md#createriskpreviewrequeststoredrule).

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

```typescript
const result = await client.riskPreviews.create({mode: "stored_rule", risk_rule_id: "rule_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, {  });
```

[Complete runnable example](../examples/riskPreviews-create.mjs)

