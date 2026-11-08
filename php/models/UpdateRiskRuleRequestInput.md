[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateRiskRuleRequestInput

The request body for: Update a risk rule.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Conditional | string | What Flint does with a payment the rule matches. Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Conditional | string | Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading and trailing whitespace is trimmed. minLength: `1`. maxLength: `512`. |
| `expected_version` | Optional | integer | Optional risk rule version last read by the caller. Format: `int64`. minimum: `1`. |
| `predicate` | Conditional | [RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) | The condition a payment must meet for the rule to match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Conditional | string | Whether the rule runs. Values: `"active"`, `"inactive"`. |

### UpdateRiskRuleRequestInput variant 1

anyOf variant 1.

- Required: `action`.
- Optional: `description`, `predicate`, `status`.

### UpdateRiskRuleRequestInput variant 2

anyOf variant 2.

- Required: `predicate`.
- Optional: `action`, `description`, `status`.

### UpdateRiskRuleRequestInput variant 3

anyOf variant 3.

- Required: `description`.
- Optional: `action`, `predicate`, `status`.

### UpdateRiskRuleRequestInput variant 4

anyOf variant 4.

- Required: `status`.
- Optional: `action`, `description`, `predicate`.

