[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskPreviewRequestInlineInput

The `inline` variant of `CreateRiskPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | (string or null) and string | Action to preview. In stored_rule mode, omitted or null keeps the saved action. minLength: `1`. Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`, `null`. |
| `mode` | Required | string | What to check: a rule in this request, or a saved rule. Values: `"inline"`. |
| `predicate` | Required | ([RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) or null) and object | Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate. `predicate`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate). |
| `risk_rule_id` | Optional | string | ID of a saved rule. Send it to check the action and predicate as an edit to that rule. minLength: `1`. Example: `"rule_01KEZF7C00FWGAQJXXA8CRA319"`. |

### CreateRiskPreviewRequestInlineInput.predicate

Declared alternatives: [CreateRiskPreviewRequestInput variant 1.predicate](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate).

