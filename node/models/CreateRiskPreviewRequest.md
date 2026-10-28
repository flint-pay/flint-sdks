[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskPreviewRequest

The request body for: Create a risk preview.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Conditional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `mode` | Required | string | Selects an inline draft or a stored risk rule. Values: `"inline"`, `"stored_rule"`. |
| `predicate` | Conditional | [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `risk_rule_id` | Conditional | string | minLength: `1`. |

### CreateRiskPreviewRequest variant 1: `mode` = `"inline"`

oneOf variant 1: The `inline` variant of `CreateRiskPreviewRequest`..

- Required: `action`, `predicate`.
- Optional: `risk_rule_id`.
- Constraints for `mode`: Values: `"inline"`.

### CreateRiskPreviewRequest variant 2: `mode` = `"stored_rule"`

oneOf variant 2: The `stored_rule` variant of `CreateRiskPreviewRequest`..

- Condition: not (at least one(present(`action`); present(`predicate`))).
- Required: `risk_rule_id`.
- Optional: `action`, `predicate`.
- Constraints for `mode`: Values: `"stored_rule"`.

