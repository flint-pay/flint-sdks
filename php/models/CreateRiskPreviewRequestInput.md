[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskPreviewRequestInput

The request body for: Create a risk preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Conditional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `mode` | Required | string | What to check: a rule in this request, or a saved rule. Values: `"inline"`, `"stored_rule"`. |
| `predicate` | Conditional | [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `risk_rule_id` | Conditional | string | minLength: `1`. |

### CreateRiskPreviewRequestInput variant 1: `mode` = `"inline"`

oneOf with mode: "inline": The `inline` variant of `CreateRiskPreviewRequest`..

- Required: `action`, `predicate`.
- Optional: `risk_rule_id`.
- Constraints for `mode`: Values: `"inline"`.

### CreateRiskPreviewRequestInput variant 2: `mode` = `"stored_rule"`

oneOf with mode: "stored_rule": The `stored_rule` variant of `CreateRiskPreviewRequest`..

- Condition: not (at least one(present(`action`); present(`predicate`))).
- Required: `risk_rule_id`.
- Optional: `action`, `predicate`.
- Constraints for `mode`: Values: `"stored_rule"`.

