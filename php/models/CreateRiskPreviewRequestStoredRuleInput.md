[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskPreviewRequestStoredRuleInput

The `stored_rule` variant of `CreateRiskPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string or null | Action to preview. In stored_rule mode, omitted or null keeps the saved action. Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`, `null`. |
| `mode` | Required | string | What to check: a rule in this request, or a saved rule. Values: `"stored_rule"`. |
| `predicate` | Optional | [RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) or null | Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate. |
| `risk_rule_id` | Required | string | ID of the saved rule to check. minLength: `1`. Example: `"rule_01KEZF7C00FWGAQJXXA8CRA319"`. |

