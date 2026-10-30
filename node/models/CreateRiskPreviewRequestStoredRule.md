[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskPreviewRequestStoredRule

The `stored_rule` variant of `CreateRiskPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Optional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `mode` | Required | string | What to check: a rule in this request, or a saved rule. Values: `"stored_rule"`. |
| `predicate` | Optional | [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `risk_rule_id` | Required | string | minLength: `1`. |

